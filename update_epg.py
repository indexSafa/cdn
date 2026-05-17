import requests
import gzip
import xml.etree.ElementTree as ET
import json

# 1. Pobieramy Twoją listę kanałów, aby wiedzieć, dla jakich stacji szukać programu
print("Pobieranie channels.json...")
try:
    req = requests.get("https://corsproxy.io/?url=https://tv.szafqu.us/channels.json", headers={'User-Agent': 'Mozilla/5.0'})
    channels_data = req.json()
    my_channels = [ch['name'].lower().strip() for ch in channels_data]
except Exception as e:
    print(f"Błąd pobierania channels.json: {e}")
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
    "canal+ sport 1": "canal+ sport"  # Wpisz dokładnie nazwę, która jest w XML (często epg.ovh używa "canal+ sport")
}

channel_map = {}
for channel in root.findall('channel'):
    ch_id = channel.get('id')
    for display_name in channel.findall('display-name'):
        name_xml = display_name.text.strip().lower()
        
        for my_name in my_channels:
            # Sprawdzenie bezpośrednie LUB sprawdzenie przez alias
            if name_xml == my_name or name_xml == alias_map.get(my_name):
                channel_map[ch_id] = my_name
                break

channel_map = {}
for channel in root.findall('channel'):
    ch_id = channel.get('id')
    for display_name in channel.findall('display-name'):
        name_xml = display_name.text.strip().lower()
        
        # Logika: sprawdzamy czy nazwa jest w naszych kanałach
        # LUB czy jest w naszym alias_map
        for my_name in my_channels:
            # Sprawdzenie bezpośrednie
            if name_xml == my_name:
                channel_map[ch_id] = my_name
            # Sprawdzenie przez alias
            elif alias_map.get(my_name) == name_xml:
                channel_map[ch_id] = my_name

# 4. Funkcja do konwersji dziwnego czasu XMLTV na standardowy format dla JavaScript
def parse_xmltv_time(t):
    # Wejście: 20240510123000 +0200
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
