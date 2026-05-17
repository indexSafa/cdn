import requests
import gzip
import xml.etree.ElementTree as ET
import json

# 1. Pobieramy Twoją listę kanałów
print("Pobieranie channels.json...")
try:
    # USUNIĘTO corsproxy.io - Python nie potrzebuje omijania CORS
    url = "https://tv.szafqu.us/channels.json"
    req = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
    req.raise_for_status() # Sprawdza, czy zapytanie się powiodło (kod 200)
    channels_data = req.json()
    
    my_channels = []
    # Bezpieczne parsowanie: sprawdzamy, z jaką strukturą JSON mamy do czynienia
    if isinstance(channels_data, list):
        for ch in channels_data:
            if isinstance(ch, dict) and 'name' in ch:
                my_channels.append(ch['name'].lower().strip())
            elif isinstance(ch, str): # Gdyby plik był po prostu listą nazw
                my_channels.append(ch.lower().strip())
    elif isinstance(channels_data, dict):
        print("Uwaga: JSON zwrócił słownik. Przeszukuję zawartość...")
        if 'channels' in channels_data and isinstance(channels_data['channels'], list):
            for ch in channels_data['channels']:
                if isinstance(ch, dict) and 'name' in ch:
                    my_channels.append(ch['name'].lower().strip())

    if not my_channels:
        print("Ostrzeżenie: Nie udało się wczytać żadnych kanałów z pliku channels.json!")

except Exception as e:
    print(f"Błąd pobierania lub przetwarzania channels.json: {e}")
    my_channels = []

# 2. Pobieramy plik EPG z epg.ovh (wersja .gz)
epg_url = "https://epg.ovh/pl.gz"
print(f"Pobieranie bazy EPG z {epg_url}...")
response = requests.get(epg_url, headers={'User-Agent': 'Mozilla/5.0'})
xml_data = gzip.decompress(response.content)

print("Parsowanie danych XML...")
root = ET.fromstring(xml_data)

# 3. Dopasowujemy ID kanałów
alias_map = {
    "canal+ sport 1": "canal+ sport"
}

# Usunięto zduplikowany blok kodu - iterujemy po kanałach tylko raz
channel_map = {}
for channel in root.findall('channel'):
    ch_id = channel.get('id')
    for display_name in channel.findall('display-name'):
        if display_name.text:
            name_xml = display_name.text.strip().lower()
            
            for my_name in my_channels:
                # Sprawdzenie bezpośrednie LUB sprawdzenie przez alias
                if name_xml == my_name or name_xml == alias_map.get(my_name):
                    channel_map[ch_id] = my_name
                    break

# 4. Funkcja do konwersji dziwnego czasu XMLTV
def parse_xmltv_time(t):
    if not t or len(t) < 14: return None
    Y, M, D = t[0:4], t[4:6], t[6:8]
    h, m, s = t[8:10], t[10:12], t[12:14]
    tz = ""
    if len(t) >= 19:
        tz_sign, tz_h, tz_m = t[15:16], t[16:18], t[18:20]
        tz = f"{tz_sign}{tz_h}:{tz_m}"
    else:
        tz = "Z"
    return f"{Y}-{M}-{D}T{h}:{m}:{s}{tz}"

# 5. Wyciągamy tylko programy dla interesujących nas kanałów
epg_dict = {name: [] for name in channel_map.values()}

for prog in root.findall('programme'):
    ch_id = prog.get('channel')
    if ch_id in channel_map:
        our_name = channel_map[ch_id]
        
        title_elem = prog.find('title')
        title = title_elem.text if title_elem is not None else "Brak tytułu"
        
        category_elem = prog.find('category')
        category = category_elem.text if category_elem is not None else "Inne"
        
        start_time = parse_xmltv_time(prog.get('start'))
        end_time = parse_xmltv_time(prog.get('stop'))
        
        if start_time and end_time:
            epg_dict[our_name].append({
                "title": title,
                "category": category,
                "start": start_time,
                "end": end_time
            })

# 6. Zapisujemy odchudzony, gotowy plik na dysku
output_file = "epg_data.json"
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(epg_dict, f, ensure_ascii=False)
    
print(f"Sukces! EPG zostało odchudzone i zapisane w pliku {output_file}.")
