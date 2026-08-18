const BASE = "https://index.szafqu.us/szafqu/csi/";
const THUMB = "https://cdn.szafqu.us/csi/";

/**
 * Struktura odcinka:
 *   id, episode, title, description, thumbnail  — obowiązkowe
 *   urlmp4   — plik MP4 (hosting główny / index)
 *   urlism   — Microsoft Smooth Streaming (.ism/Manifest)
 *   key      — klucz ClearKey DRM w formacie "KID_HEX:KEY_HEX"
 *
 * Odcinki posortowane od najnowszego do najstarszego.
 */
const EPISODES = [
  {
    "id": 24,
    "episode": "E24",
    "title": "EURO TRIP PART 2/2 - Włochy",
    "description": "Witamy w materiale numer 1 na 2 - w którym to wybierzemy się na Road Trip do Austrii. Legendarna przełęcz Gloßglockner i event we współpracy z rodziną Porsche - na który poczuliśmy się wręcz zaproszeni… Ale nie był niczym interesującym. Początek przygody która zakończy się we Włoszech, dużo pięknych widoków i towarzystwo samych prosiaków… no z drobnym wyjątkiem.",
    "thumbnail": "https://cdn.szafqu.us/csi/14920852_1786735203963.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E24%20EURO%20TRIP%20PART%202_2%20-%20Wlochy%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/f3100af7-513d-4e5f-a2c1-9335775dc1a6/LIBCODER_SMOOTH_1080_WYO/0611c496-c077-46a7-a679-8faec21aab68/Manifest.ism",
    "key": "e21626650a0c439995287e0e2f15d737:f867f559377d9df6a0e20776ac235cfa"
  },
  {
    "id": 23,
    "episode": "E23",
    "title": "GT1 MANTA / GT3RS x2 - Euro Trip, Austria PART 1/2",
    "description": "Witamy w materiale numer 1 na 2 - w którym to wybierzemy się na Road Trip do Austrii. Legendarna przełęcz Gloßglockner i event we współpracy z rodziną Porsche - na który poczuliśmy się wręcz zaproszeni… Ale nie był niczym interesującym. Początek przygody która zakończy się we Włoszech, dużo pięknych widoków i towarzystwo samych prosiaków… no z drobnym wyjątkiem.",
    "thumbnail": "https://cdn.szafqu.us/csi/14920770_1785490681557.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E23%20GT1%20MANTA%20_%20GT3RS%20x2%20-%20Euro%20Trip%2C%20Austria%20PART%201_2.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/f6faef80-c4c6-45a4-9f73-93729f2a4282/LIBCODER_SMOOTH_1080_WYO/4cc3b2c4-75c6-4614-a10f-5367368df4d0/Manifest.ism",
    "key": "56b26f9d07bf41c7a78634ab43fd9f91:fcd2018a97938fcc533b232f8eae31ab"
  },
  {
    "id": 22,
    "episode": "E22",
    "title": "Porsche 911 MANTA GT1 - Cały Projekt",
    "description": "W tym materiale na warsztat i w przenośni weźmiemy PROSCHE 911 GT3 i zrobimy z niego GT1! Cały proces to dwa lata w jednym materiale. Tysiące godzin pracy, setki elementów, ogrom rozwiązanych problemów a na koniec efekt który z innej epoki… Całość zwieńczymy prezentacja w ENERGYLANDII która zaprosiła na swoje urodziny! Samochody w towarzystwie Coasterów, dźwigi, trochę driftu i ogrom komedii- jak to na urodzinach! Zapraszamy więc na materiał ściśle w tematyce Porsche.",
    "thumbnail": "https://cdn.szafqu.us/csi/14920746_1784283946992.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E22%20Porsche%20911%20MANTA%20GT1%20-%20caly%20projekt%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/00520057-16eb-46c0-a71a-b247a161e4ea/LIBCODER_SMOOTH_1080_WYO/9ba4da51-47a8-41aa-a2c7-5a8c16c61248/Manifest.ism",
    "key": "2941fed597af4f97b9c4ac4aa1ebfb3e:21d6c76b9e9a60d05dfdc0eb361058e0"
  },
  {
    "id": 21,
    "episode": "E21",
    "title": "VIPER ACR vs ROUTE 66! PART 2/2 - O kosmitach, kasynach i innych przygodach…",
    "description": "Druga część amerykańskiego Road Tripa prowadzącego przez historyczną drogę 66! W tym materiale dalsza część przygody z finałem w strefie 51- gdzie dojdzie do konfrontacji z obym ( ale jednak znajomym :joy:). Po drodze wyjątkowe i jedyne w swoim rodzaju LAS VEGAS- gdzie damy popis tego jak NIE grać w kasynie. Zapraszamy!",
    "thumbnail": "https://cdn.szafqu.us/csi/14920642_1783109265624.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E21%20VIPER%20ACR%20vs%20ROUTE%2066!%20PART%202_2%20-%20O%20kosmitach%2C%20kasynach%20i%20innych%20przygodach%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/1abbe197-60cb-4ee3-9e6c-ee2d056ec4b9/LIBCODER_SMOOTH_1080_WYO/45132a4f-8f27-4c2f-98c9-a94ea9417d49/Manifest.ism",
    "key": "18dc151df4c445afaa39d6526e9da71c:13868a44b7d72088351d7285dbe1cb9c"
  },
  {
    "id": 20,
    "episode": "E20",
    "title": "DODGE VIPER ACR vs ROUTE 66! PART 1/2",
    "description": "Do tego materiału musieliśmy poczynić zakupy. Bezkompromisowe, muskularne, limitowane, legendarne (?) Naszym głównym bohaterem będzie Dodge Viper z ostatniego roku produkcji, w wersji ACR! 8.4 litra, napęd na tył i manualna skrzynia- czy ktoś kiedyś słyszał o bardziej bezkompromisowym zawodniku? W tym materiale zaczniemy naszą przygodę z słynną DROGĄ 66… a celem naszej wyprawy będzie weryfikacja AKT O UFO! 🛸",
    "thumbnail": "https://cdn.szafqu.us/csi/14920622_1781892206618.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E20%20DODGE%20VIPER%20ACR%20vs%20ROUTE%2066!%20PART%201_2%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/3ba482af-d909-40e2-99bb-39c1c9df188b/LIBCODER_SMOOTH_1080_WYO/a82a2f02-a25e-4cf8-a400-b0c61cffc833/Manifest.ism",
    "key": "8dbb183ca1924060ad1943e6ca553665:e09a04613ff8a2516a7aee7d9112baf8"
  },
  {
    "id": 19,
    "episode": "E19",
    "title": "HOT RODY za 3mln w USA? Najciekawsze auta tej kategorii! | BMW M4 Adro 800+ single turbo",
    "description": "Kłaniam się serdecznie! Dziś na warsztat bierzemy dwa całkowicie od siebie różne tematy. Zaczynamy z HOT RODAMI- oraz rozmowy z gościem który na ten temat wie wszystko. Wywiady z nim były przeprowadzane na wielu platformach, nawet przed TOP GEAR- 28 lat tworzenia gier komputerowych, dziś przekłada na najbardziej nietypowe, funkcjonalne pojazdy na świecie. Kultura HOT ROD w USA zostanie więc prześwietlona. Druga część filmu to tematyka SINGLE TURBO w nowych BMW. Nasza M4 Adro 1/10 wyglądała już jakby miała 1000 koni, ale pod maską wciąż był seryjny piec. W drugiej części prócz zgrupowania ADRO- zamontujemy pojedynczą, dość dużą turbinę i powalczymy aby moc ZMNIEJSZYĆ - A NIE ZWIĘKSZYĆ :) Zapraszamy!",
    "thumbnail": "https://cdn.szafqu.us/csi/14920563_1780664234728.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E19%20HOT%20RODY%20za%203mln%20w%20USA_%20Najciekawsze%20auta%20tej%20kategorii!%20_%20BMW%20M4%20Adro%20800%2B%20single%20turbo%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/0ac8d574-48b7-4ab8-b58d-1aac0f26a584/LIBCODER_SMOOTH_1080_WYO/2329356f-9fcb-497f-aa07-2cc536d5ebea/Manifest.ism",
    "key": "ac7d3b688cda4eccb6722609b88af819:fe04d981e32983c3c4b1c1a86d603975"
  },
  {
    "id": 18,
    "episode": "E18",
    "title": "QUAD ROTOR TURBO - FINAŁ BUDOWY!",
    "description": "Mecz był ciężki… nazwać go wręcz można przeprawą. Bramki z zaskoczenia, nieczyste zagrania, podrygi prowadzące do zwycięstwa ale i gorzki smak straconej bramki… Ten materiał to ostatnie starcie z projektem Mazdy RX7 z silnikiem Quad rotor Big Turbo. Cały film to połączenie rozrywki z technikaliami związanymi ze skomplikowanym procesem strojenia takiego silnika. Sugerujemy zapiąć pasy i ostrożnie podchodzić do poziomu głośności oglądania filmu… czegoś takiego jeszcze nie słyszeliśmy w naszej karierze.",
    "thumbnail": "https://cdn.szafqu.us/csi/14920484_1779454540767.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E18%20QUAD%20ROTOR%20TURBO%20-%20FINAL%20BUDOWY!%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/bc9fc73a-c51b-41ce-91d9-30325d6371b6/LIBCODER_SMOOTH_1080_WYO/c5484b49-1c07-4242-b79e-82706cda6c50/Manifest.ism",
    "key": "af1065465c994276ba4fb12b535bf014:11470ec86e1b467e19d555cb1178e32e"
  },
  {
    "id": 17,
    "episode": "E17",
    "title": "NÜRBURGRING - Pierwsze starcie | GT3rs MR na Nordshlife",
    "description": "Ostatnie lata to zdecydowanie drift. Idzie coraz lepiej, pewność jak i prędkość rośnie. Tutaj jednak co innego, wyścigi płaskie i to nie byle gdzie i w nie byle jakim sprzęcie! 911 GT3RS MR i moje pierwsze wrażenia z jedynego takiego miejsca na świecie! Ten film to nie tylko historia toru, oraz mojej jazdy. To w dużej mierze również poradnik jak tam wjechać, co tam robić i na jakich zasadach! Lecimy :)",
    "thumbnail": "https://cdn.szafqu.us/csi/14920358_1777033903614.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E17%20NURBURGRING%20-%20Pierwsze%20starcie%20_%20GT3rs%20MR%20na%20Nordshlife%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/1aa12c50-779f-4a6d-a0a0-eeb870d46426/LIBCODER_SMOOTH_1080_WYO/be635835-cbc6-4261-b517-95aad77b89e7/Manifest.ism",
    "key": "48cbbe56b81742fb8dafcfd091e2c694:ac577fccf02f9c1547b3dd4906ca2a9b"
  },
  {
    "id": 16,
    "episode": "E16",
    "title": "Witamy: 911 GT3RS w pakiecie MR! Polska, Włochy, Niemcy - w jednym filmie!",
    "description": "Zaczęliśmy od przygarnięcia pod skrzydło GT3rs. Takiego seryjnego, fajne auto, nawet bardzo. Zdecydowaliśmy że jest trochę drobiazgów większych i mniejszych które można by poprawić… Zmiana jego koloru, koloru felg czy zacisków to drobiazg… Ale zabraliśmy się za custom wnętrza i co najważniejsze za pakiet MANTHEY RACING! Pojechaliśmy w tym celu do Niemiec, bo tam znajduje się siedziba firmy. To również nasze pierwsze zderzenie z GT3 i to w najlepszym wydaniu! Cały materiał zawiera również segment poświęcony wyjazdowi całej ekipy SEVEN na trening driftu we Włoszech! Świetny klimat, Włoska muzyka i japońskie samochody!",
    "thumbnail": "https://cdn.szafqu.us/csi/14920340_1775830606020.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E16%20Witamy%20911%20GT3RS%20w%20pakiecie%20MR!%20Polska%2C%20Wlochy%2C%20Niemcy%20-%20w%20jednym%20filmie!%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/f729becf-c48c-450a-92a6-ac7f5fb731af/LIBCODER_SMOOTH_1080_WYO/5c8af582-a326-403f-870d-f15813ce48a4/Manifest.ism",
    "key": "30d440e484a9491ebdbf854a9f9cea16:15179abdb1945aae7270b4bcdc96e1e4"
  },
  {
    "id": 15,
    "episode": "E15",
    "title": "SUPRA TARGA V2 TARGA! Druga na świecie supra bez dachu!",
    "description": "Materiał z założeniem zdecydowanie bardziej technicznym. W związku z tym, że przedstawiliśmy wam już dziesiątki projektów, postanowiliśmy zbudować film nieco inaczej. Główno dowodzący, przede wszystkim z początku jest narrator a nie „wypowiedź do kamery”. Cały film przeprowadzi was od konceptu, przed wykonanie, aż do samego końca kiedy druga Supra w wersji bez dachu- wyjedzie na ulicę!",
    "thumbnail": "https://cdn.szafqu.us/csi/14920200_1774621393802.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E15%20SUPRA%20TARGA%20V2%20TARGA!%20Druga%20na%20swiecie%20supra%20bez%20dachu!%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/3b923591-e156-466c-9ba4-d787ef9c1961/LIBCODER_SMOOTH_1080_WYO/cc8639c6-0c5f-494d-9a24-916e12119c30/Manifest.ism",
    "key": "2c18451ac8494306a8ed26f60a34b013:400c805deaa5d1f194cdfef20f4abb40"
  },
  {
    "id": 14,
    "episode": "E14",
    "title": "Miliarderzy w St Moritz vs grupa nieodpowiedzialnych chłopa z Polski :)",
    "description": "St Moritz, blichtr, prywatne odrzutowce, miliarderzy i powszechna rewia mody… Wszystko w socialach fajne- ale czy na żywo jest podobnie? Sprawdźmy ;) Wynik testu będzie taki *(spoiler)* że zamkniemy stok narciarski w Norwegii, aby naprawdę dobrze się bawić! Lamborghini, Mona Lisa S15, go karty lodowe i szereg innych ciekawych rzeczy. Zapraszamy!",
    "thumbnail": "https://cdn.szafqu.us/csi/14920145_1773449220444.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E14%20Miliarderzy%20w%20St%20Moritz%20vs%20grupa%20nieodpowiedzialnych%20chlopa%20z%20Polski%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/7547d207-7354-4c06-9c53-01f7e5895a9f/LIBCODER_SMOOTH_1080_WYO/bbd6f120-af92-431e-a65a-c7fd7d18f23f/Manifest.ism",
    "key": "080ed4ff500744c3beb50c474e183d35:8d752155fdc2eea70ef307894a1ed889"
  },
  {
    "id": 13,
    "episode": "E13",
    "title": "Materiał specjalny: Szwedzkie zimowe przygody. V8 vs Prąd",
    "description": "Na samym końcu lądu w mitycznej krainie zwanej „Lofoty” żyje Rybak polskiego pochodzenia. Naszym zadaniem będzie przywieźć mu dość nietypowe dary pochodzące z naszego Kraju. Cała przygoda odbywać się będzie w elektrycznym Porsche Tycan Turbo S oraz ogromnym, niepraktycznym 6 kołowym Jeepie z silnikiem V8. Co poradzi sobie lepiej? Jakie przygody czekają nas po drodze? Dlaczego z Polski przywieźliśmy również czołg? Tego wszystkiego dowiecie się w tym materiale!",
    "thumbnail": "https://cdn.szafqu.us/csi/14920138_1772200877391.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E13%20Material%20specjalny%20%20Szwedzkie%20zimowe%20przygody%20V8%20vs%20Prad%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/1b0463c7-f1eb-40ad-8665-98b278b1005f/LIBCODER_SMOOTH_1080_WYO/7bcde650-5423-4574-a283-8802ad4a41c2/Manifest.ism",
    "key": "96e5db83b4e64427b83a64186e651b16:329df57b6b5cba7b869507f5f8b6b9c5"
  },
  {
    "id": 12,
    "episode": "E12",
    "title": "AFRYKA / ALGIERIA po pustyni - PART 2/2",
    "description": "Druga część przygód związanych z naszą podróżą nowymi Maverickami po Algierii! W tym filmie prócz ogromu przygód pobocznych, znajdziemy się w miejscu, które jest gwoździem programu - były rejon zamieszkania TUAREGÓW czyli rdzennej ludności Afryki. Krajobraz przypominający Marsa, wydmy sięgające 50 metrów wysokości i nietypowe formacje skalne - to nasz plac zabaw dla tego materiału!",
    "thumbnail": "https://cdn.szafqu.us/csi/14920002_1770987194992.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E12%20AFRYKA%20-%20ALGIERIA%20po%20pustyni%20-%20PART%202-2%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/2c9d6b67-77d1-4a55-9c43-fcbc7fc3148c/LIBCODER_SMOOTH_1080_WYO/7e7f3b6f-fc03-42f8-ae61-92ef8d887458/Manifest.ism",
    "key": "0e0931f59dd6473eb1a8bc93b10908ae:4c590cfb93f957c29bbb736386a306e2"
  },
  {
    "id": 11,
    "episode": "E11",
    "title": "Nowymi Maverickami po Afryce! Algieria PART 1/2",
    "description": "Maroko dla wielu było ulubioną serią filmu podczas naszej realizacji materiałów na YT. Wracamy do was z jeszcze krokiem dalej, bo nie Maroko a zdecydowanie bardziej dzika Algieria. Teren do tej pory nigdy nie zdobyty przez polską ekipę Maverickami. 1500 km do pokonania przez Pustynię, szutry, kaniony i wyschnięte koryta rzek. Grupa kumpli przeżywająca przygodę za przygodą podczas odkrywania nowych rejonów Afryki!",
    "thumbnail": "https://cdn.szafqu.us/csi/14919996_1769854682238.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E11%20Nowymi%20Maverickami%20po%20Afryce!%20Algieria%20PART%201-2%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/f3bed55d-4527-433b-8eba-c1182008b35d/LIBCODER_SMOOTH_1080_WYO/912091a3-4596-4042-bf9c-f50081d4fe0c/Manifest.ism",
    "key": "13c2e2464fe14445b0a9103a4d5838ea:96febe9735e238c1bb35bfd49bca130e"
  },
  {
    "id": 10,
    "episode": "E10",
    "title": "SEMA 2025 i 10 tonowy, opancerzony czołg który tam kupiliśmy…",
    "description": "Materiał, który początkowo miał być względnie spokojną relacją z największych targów motoryzacyjnych na świecie (SEMA 25). Okazało się jednak, że spontaniczny zakup 10-tonowego, w pełni opancerzonego pojazdu do zastosowań militarnych wywrócił materiał do góry nogami. To ostatni materiał z tej konkretnie serii naszej wyprawy do USA. Warto wspomnieć, że wydarzenia, które szły w parze z testem czołgu zakończyły się grzywną oraz naprawami za ponad $50000. Zapraszamy na seans.",
    "thumbnail": "https://cdn.szafqu.us/csi/14919780_1767963425233.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E10%20SEMA%202025%20i%2010%20tonowy%2C%20opancerzony%20czolg%20ktory%20tam%20kupilismy...%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/ceccd550-09e1-44e8-83f9-5c211a8d786e/LIBCODER_SMOOTH_1080_WYO/6e4f4f5c-b717-43f2-bfea-4368d02cc2c7/Manifest.ism",
    "key": "c44d54926cf34fcb9d4c6e913bd134a8:757dd9536aaf7e38ad97e7ff106cb228"
  },
  {
    "id": 9,
    "episode": "E09",
    "title": "Q&A 2025 - 10 pytań, 10 odpowiedzi.",
    "description": "Pierwsze 5 to rozgrzewka. Kolejne 5 już z mocniejszej kategorii. Ten film to forma zamknięcia 2025 roku i pytań, które pojawiają się w nim najczęściej. Szczęśliwego 2026!",
    "thumbnail": "https://cdn.szafqu.us/csi/14919716_1767092294653.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E09%20Q%26A%202025%20-%2010%20pytan%2C%2010%20odpowiedzi.%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/28e116db-69e4-4e6f-89de-620d5ce52cef/LIBCODER_SMOOTH_1080_WYO/2c95d65a-2e48-46df-b4d0-5ad02aeb6004/Manifest.ism",
    "key": "35dd05404a954902898a536b908d80b3:cb1bf2b6b81b6c0129cad59a4203134d"
  },
  {
    "id": 8,
    "episode": "E08",
    "title": "Poznajcie Naszą siedzibę platformy! Cała Budowa w jednym materiale! (TOUR + INNE HISTORIE)",
    "description": "3 lata budowy siedziby i 3 lata nagrań w ciszy- bez publikacji. Budynek który od początku powstawał z założeniem tworzenia w nim filmów i samochodów! Masa informacji technicznych, materiałów archiwalnych czy historii związanych z całą inwestycją. Oczywiście na siedzeniu i gadaniu się NIE skończy. Materiał przeplata historie budynku i pomysłu z „akcją obrazująca zastosowanie” (HE HE).",
    "thumbnail": "https://cdn.szafqu.us/csi/14919679_1766761479323.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E08%20Poznajcie%20Nasza%20siedzibe%20platformy!%20Cala%20Budowa%20w%20jednym%20materiale!%20(TOUR%20%2B%20INNE%20HISTORIE)%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/55b04991-1ba6-4d02-b063-02d143ba941e/LIBCODER_SMOOTH_1080_WYO/3b05165a-e78e-444d-b42b-611270b47988/Manifest.ism",
    "key": "b35c52739b1b4355a4f06375e8ed8427:dfa65a906c264ec86bb102d338ff5885"
  },
  {
    "id": 7,
    "episode": "E07",
    "title": "W RUMUNII JEŹDZILIŚMY Z KOZĄ W TWIN TURBO, A W USA SKOŃCZYŁEM W ARESZCIE (to NIE jest fikcyjny tytuł)",
    "description": "Materiał składa się z dwóch części. Zdjęcia do pierwszej realizowaliśmy w Rumunii, w Węgrzech oraz Słowacji. Druga natomiast to 4 stany USA… W obu elementem spójnym jest Huracan Twin turbo i palenie dużej ilości opon… Tylko w jednej skończyło się kozą na pasażera a w drugiej aresztem z zarzutami dotyczącymi „wyścigów ulicznych”.",
    "thumbnail": "https://cdn.szafqu.us/csi/14919587_1766522586515.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E07%20W%20RUMUNII%20JEZDZILISMY%20Z%20KOZA%20W%20TWIN%20TURBO%2C%20A%20W%20USA%20SKONCZYLEM%20W%20ARESZCIE%20(to%20NIE%20jest%20fikcyjny%20tytul)%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/2c7576d2-7508-47ad-b41d-bfdb9f13c006/LIBCODER_SMOOTH_1080_WYO/c8d29e09-e640-402a-82a9-4e76faabdf73/Manifest.ism",
    "key": "4a2bf85d7b304b178e4c8e48b6dfe87c:ced14c841fd78f8f8376813067e00618"
  },
  {
    "id": 6,
    "episode": "E06",
    "title": "W ŻYCIU NIE NAGRAŁEM ANI NIE WIDZIAŁEM TAKIEGO MATERIAŁU… LAS VEGAS BEZ JAKIEJKOLWIEK CENZURY… Militaria i inne tego typu",
    "description": "Opis do tego materiału gdyby miał zawierać to co tu zobaczycie to brzmiałby jak zlepek historii kogoś z niesamowicie bujną wyobraźnią … albo z jakimiś problemami z banią :). Nie wiem jak to opisać ale wierzcie mi, że w życiu czegoś takiego nie widziałem. Kiedy podczas kręcenia tego materiału (który to zaczyna się dość niewinnie) myślałem, że nic mnie nie zaskoczy- okazywało się, że to dopiero rozgrzewka. Kowboje, Śmigłowce, czołgi, mini-Guny, miotacze ognia i wybuchające samochody… (nie wymieniłem nawet połowy)",
    "thumbnail": "https://cdn.szafqu.us/csi/14919553_1766490146198.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E06%20W%20ZYCIU%20NIE%20NAGRALEM%20ANI%20NIE%20WIDZIALEM%20TAKIEGO%20MATERIALU...%20LAS%20VEGAS%20BEZ%20JAKIEJKOLWIEK%20CENZURY...%20Militaria%20i%20inne%20tego%20typu%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/498d5ba9-62ce-4c93-b4a9-b2d24277d8d5/LIBCODER_SMOOTH_1080_WYO/da5db16e-8905-4459-ab9b-6a131475b937/Manifest.ism",
    "key": "035b14192cdc42a89e9e5aac12c0a1a6:00fc523dcff17c9756f5bfb9a46b1227"
  },
  {
    "id": 5,
    "episode": "E05",
    "title": "NUKE na legendarne DRIFT MANSION - Czyli dom z torem zamiast ogrodu! Chicago kasacja McLarena i spadający śmigłowiec na plaży (w jednym filmie)",
    "description": "Cały świat obiegły zdjęcia domu który zamiast trawnika ma wylaną nitkę do driftu! Postanowiliśmy więc go odwiedzić i sprawdzić czy ma to sens czy to przereklamowana miejscówka z instagrama. Pełno awarii i przygód ale test zakończony pomyślnie- jaki więc werdykt? Sam oceń. W tym samym filmie pojedziemy jeszcze na nietypowy zlot gdzie śmigłowce spotykają się za samochodami… Dokładnie ten sam z którego nagranie obiegło cały internet- ponieważ doszło do wypadku i helikopter spadł na ziemię. Mało- w tym samym filmie na zimie spadnie również właściciel McLarena 720s który to postanowił podczas nocnej jazdy zakończyć jego żywot na betonowej barierze…",
    "thumbnail": "https://cdn.szafqu.us/csi/14918879_1765981841891.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E05%20NUKE%20na%20legendarne%20DRIFT%20MANSION%20-%20Czyli%20dom%20z%20torem%20zamiast%20ogrodu!%20Chicago%20kasacja%20McLarena%20i%20spadajacy%20smiglowiec%20na%20plazy%20(w%20jednym%20filmie)%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/6348ddc7-31a6-406e-942d-d881b91cbc88/LIBCODER_SMOOTH_1080_WYO/39afeaab-6aca-44e3-8cd9-ae3b74aa2991/Manifest.ism",
    "key": "e3c87ebaada543fc91085d27d4a5813a:639a73334a996ab56b396b4c1412ed88"
  },
  {
    "id": 4,
    "episode": "E04",
    "title": "Poznajcie nasz dom w USA… I garaż który w środku od dawna trzyma THE NUKE'a! LA TRIP z samochodami z F&F!",
    "description": "Materiał oprowadzający was po naszej bazie i centrum dowodzenia w USA! Poznacie każdy zakątek ale przede wszystkim GARAŻ który od dłuższego czasu kryje radioaktywny samochód… Oczywiście film nie obejdzie się bez solidnej dawki motoryzacji i nostalgii. Zbieramy kumpli i w pięknym składzie większości samochodów z pierwszych części Szybkich i Wściekłych jedziemy na rundkę po LOS ANGELES! Jeśli tego byłoby mało NUKE zalicza kolejne nietypowe miejsca do driftu!",
    "thumbnail": "https://cdn.szafqu.us/csi/14918819_1765979693486.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E04%20Poznajcie%20nasz%20dom%20w%20USA...%20I%20garaz%20ktory%20w%20srodku%20od%20dawna%20trzyma%20THE%20NUKE'a!%20LA%20TRIP%20z%20samochodami%20z%20F%26F!%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/d8951e2d-06ab-4f7d-aa69-2bcd4574c933/LIBCODER_SMOOTH_1080_WYO/531259d0-62e3-4cf1-ab53-df133ac280f3/Manifest.ism",
    "key": "bf2845e79ce84896a2d0d5b355be3bca:6e23c5e4730ff038e946a5583525cf41"
  },
  {
    "id": 3,
    "episode": "E03",
    "title": "Kupiłem Lamborghini Huracan Twin Turbo i zasadniczo od razu je zepsułem… *Później naprawiłem i pojechałem na DRAG RACE w USA.",
    "description": "Materiał przeprowadzający po niezbyt mądrym zakupie kolejnego już HURACANA w wersji twin Turbo… Tym razem jednak w wyjątkowo nierozsądnej wersji TYLNONAPĘDOWEJ! 1700 koni mocy na tył, awarie, holowanie, drobne zmiany wizualne i duże zmiany w tym jak sprzęt pracuje… Finał w Chicago gdzie zabieramy TT na tor do DRAGU i organizujemy własny event wyścigów na 1/4 mili!",
    "thumbnail": "https://cdn.szafqu.us/csi/14918786_1765977481232.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E03%20Kupilem%20Lamborghini%20Huracan%20Twin%20Turbo%20i%20zasadniczo%20od%20razu%20je%20zepsulem...%20Pozniej%20naprawilem%20i%20pojechalem%20na%20DRAG%20RACE%20w%20USA.%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/a0818273-0cb9-44ea-bfe4-c96db1a85e6f/LIBCODER_SMOOTH_1080_WYO/8f2d8d72-2798-41f3-8881-8b48b57ab95c/Manifest.ism",
    "key": "1b10e271233947309a4dbf9586e5e6e9:f006bb6961d29638e8afb95625cf6476"
  },
  {
    "id": 2,
    "episode": "E02",
    "title": "O TYM JAK PO ARESZCIE WYJECHALIŚMY DO USA... Nowa stara Toyota Supra i pierwsze kroki w USA (rozgrzewka)",
    "description": "Materiał zdecydowanie wprowadzający was w świat naszego wyjazdu do USA i budowania tam struktury do nagrywania dużej ilości materiałów zza oceanu! Ile musieliśmy zapłacić za możliwość odbioru paszportu! Co mamy wam do przedstawienia w Stanach? Co planujemy i kiedy to się wydarzy? Przedstawię wam nową starą Suprę, która czekała na mnie w Californii od ponad 12 miesięcy…",
    "thumbnail": "https://cdn.szafqu.us/csi/14918575_1765972792231.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E02%20O%20TYM%20JAK%20PO%20ARESZCIE%20WYJECHALISMY%20DO%20USA...%20Nowa%20stara%20Toyota%20Supra%20i%20pierwsze%20kroki%20w%20USA%20(rozgrzewka)%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/090a010f-40db-4882-8739-18f7d5939ada/LIBCODER_SMOOTH_1080_WYO/dd979972-9271-4283-9909-43dc38bf9b8e/Manifest.ism",
    "key": "3349572ff76b45f7bb401002a77ee98d:d969cef915dc373c3389e4f041b5eb84"
  },
  {
    "id": 1,
    "episode": "E01",
    "title": "POLSKA VS KLĄTWA RX7! (QUAD ROTOR!) po 4 latach - 3 mazdy RX7 w jednym materiale!",
    "description": "Dokładnie 4 lata temu w ten sam weekend Grudnia, przed samymi świętami wrzuciłem dla Państwa materiał informujący o starcie projektu MAZDA RX7! Od tego czasu zakończyliśmy dziesiątki innych, na różnych kontynentach i w wyraźnie wyższym stopniu zaawansowania- a tego nadal nie przedstawiliśmy… Jedno z najbardziej MEMICZNYCH pytań ostatnich lat to KIEDY RX7? • Odpowiedź brzmi DZISIAJ! - A mało tego nie ono samo. Wstawienie składania tego jednego przeciętnego projektu po takim czasie byłoby nie na miejscu jeśli platformę bierzmy na poważnie! Ten film przeniesie was w świat składania 3 sztuk na raz! MIAMI, CHICAGO, CALIFORNIA, INDIANA i POLSKA! - te wszystkie miejsca w dzisiejszym filmie… Wspólny mianownik? • Mała Mazda. W jednej z nich QUAD ROTOR TURBO- Czyli absolutny FINAL BOSS z tej kategorii!",
    "thumbnail": "https://cdn.szafqu.us/csi/14917222_1765969236404.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/E01%20POLSKA%20VS%20KLATWA%20RX7!%20(QUAD%20ROTOR!)%20po%204%20latach%20-%203%20mazdy%20RX7%20w%20jednym%20materiale!%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    "urlism": "https://r.dcs.redcdn.pl/dash/o2/wyo/csi/vod/38265f4a-e9ec-4bec-aad8-c169d88a43a8/LIBCODER_SMOOTH_1080_WYO/2d566d77-d0c8-49f2-b578-f287ab5e966b/Manifest.ism",
    "key": "4aaf775075bd40a9969d9ee247363dc2:a45d6700d26072ded56b8ac3e3c0f7e4"
  },
  {
    "id": 0,
    "episode": "E00",
    "title": "Budda. Dzieciak '98 (2024)",
    "description": "Emocjonująca i wypełniona motoryzacją przejażdżka przez życiowe trudności, osiągnięcia i działalność jednego z najpopularniejszych polskich influencerów: Kamila Labuddy znanego w Internecie jako 'BUDDA'. To film o tym, jak skutecznie tworzyć w internecie, jak zarabiać w social mediach oraz jakie kwoty kryją się w tej branży.",
    "thumbnail": "https://cdn.szafqu.us/csi/Budda.Dzieciak.98.png",
    "urlmp4": "https://index.szafqu.us/szafqu/csi/Budda.Dzieciak.98.2024.1080p.AMZN.WEB-DL.AAC.H.264-SZAFQU.mp4",
    "urlism": "https://a157vod-dash-pv-ta-amazon.akamaized.net/ww_dub/2f07/09b0/3023/4ca6-99c1-4c9eb9d1405b/fd5d623b-27a7-4ac0-bf71-844eec26eeb9_corrected.mpd",
    "key": "388edc193bd042ec962bf7c10caf356e:26d083291cb836a5c9771617a15f1ff8,0e0daba38122424caaf7a7430d4c84c8:6db60a3286e5050c3a54020627fcdf25"
  }
];
