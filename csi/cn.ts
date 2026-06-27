import { useState } from "react";

interface Episode {
  id: number;
  episode: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  thumbnail: string;
}

const BASE = "https://dsitv:hostingbyszafqu@index.szafqu.us/szafqu/csi/";
const THUMB = "https://dsitv:hostingbyszafqu@index.szafqu.us/szafqu/csi/thumbnail/";

const episodes: Episode[] = [
  {
    id: 1,
    episode: "E01",
    title: "POLSKA VS KLĄTWA RX7! (QUAD ROTOR!)",
    description:
      "Po 4 latach – 3 Mazdy RX7 w jednym materiale! Legendarny silnik Quad Rotor w polskich warunkach. Walka z klątwą rotorowego silnika trwa.",
    tags: ["Mazda RX7", "Quad Rotor", "Polska", "Klasyki"],
    url: BASE + "E01%20POLSKA%20VS%20KLATWA%20RX7!%20(QUAD%20ROTOR!)%20po%204%20latach%20-%203%20mazdy%20RX7%20w%20jednym%20materiale!%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14917222_1765969236404.png",
  },
  {
    id: 2,
    episode: "E02",
    title: "O TYM JAK PO ARESZCIE WYJECHALIŚMY DO USA...",
    description:
      "Nowa stara Toyota Supra i pierwsze kroki w USA jako rozgrzewka. Historia wyjazdu do Stanów po niespodziewanym areszcie.",
    tags: ["Toyota Supra", "USA", "Wyjazd"],
    url: BASE + "E02%20O%20TYM%20JAK%20PO%20ARESZCIE%20WYJECHALISMY%20DO%20USA...%20Nowa%20stara%20Toyota%20Supra%20i%20pierwsze%20kroki%20w%20USA%20(rozgrzewka)%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14918575_1765972792231.png",
  },
  {
    id: 3,
    episode: "E03",
    title: "Kupiłem Lamborghini Huracán Twin Turbo i od razu je zepsułem...",
    description:
      "Zakup Lamborghini Huracán Twin Turbo, natychmiastowa usterka, naprawa i finałowy Drag Race w USA. Emocji nie brakuje!",
    tags: ["Lamborghini", "Huracan", "Twin Turbo", "Drag Race", "USA"],
    url: BASE + "E03%20Kupilem%20Lamborghini%20Huracan%20Twin%20Turbo%20i%20zasadniczo%20od%20razu%20je%20zepsulem...%20Pozniej%20naprawilem%20i%20pojechalem%20na%20DRAG%20RACE%20w%20USA.%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14918786_1765977481232.png",
  },
  {
    id: 4,
    episode: "E04",
    title: "Poznajcie nasz dom w USA... I garaż z THE NUKE'iem!",
    description:
      "Tour po naszym domu w USA i garażu kryjącym THE NUKE'a od lat. Wycieczka po Los Angeles z samochodami z Fast & Furious!",
    tags: ["Dom w USA", "LA Trip", "Fast & Furious", "The Nuke"],
    url: BASE + "E04%20Poznajcie%20nasz%20dom%20w%20USA...%20I%20garaz%20ktory%20w%20srodku%20od%20dawna%20trzyma%20THE%20NUKE'a!%20LA%20TRIP%20z%20samochodami%20z%20F%26F!%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14918819_1765979693486.png",
  },
  {
    id: 5,
    episode: "E05",
    title: "NUKE na legendarne DRIFT MANSION!",
    description:
      "Dom z torem zamiast ogrodu! Chicago, kasacja McLarena i spadający śmigłowiec na plaży – wszystko w jednym filmie. Absolutny szał.",
    tags: ["Drift Mansion", "McLaren", "Chicago", "Nuke", "Drift"],
    url: BASE + "E05%20NUKE%20na%20legendarne%20DRIFT%20MANSION%20-%20Czyli%20dom%20z%20torem%20zamiast%20ogrodu!%20Chicago%20kasacja%20McLarena%20i%20spadajacy%20smiglowiec%20na%20plazy%20(w%20jednym%20filmie)%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14918879_1765981841891.png",
  },
  {
    id: 6,
    episode: "E06",
    title: "W ŻYCIU NIE NAGRAŁEM TAKIEGO MATERIAŁU... LAS VEGAS BEZ CENZURY",
    description:
      "Las Vegas bez jakiejkolwiek cenzury. Militaria, eksplozje i inne cuda – materiał, którego nie widziałeś nigdzie indziej.",
    tags: ["Las Vegas", "Militaria", "Bez cenzury"],
    url: BASE + "E06%20W%20ZYCIU%20NIE%20NAGRALEM%20ANI%20NIE%20WIDZIALEM%20TAKIEGO%20MATERIALU...%20LAS%20VEGAS%20BEZ%20JAKIEJKOLWIEK%20CENZURY...%20Militaria%20i%20inne%20tego%20typu%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14919553_1766490146198.png",
  },
  {
    id: 7,
    episode: "E07",
    title: "W RUMUNII JEŹDZILIŚMY Z KOZĄ W TWIN TURBO, A W USA SKOŃCZYŁEM W ARESZCIE",
    description:
      "To NIE jest fikcyjny tytuł. Rumunia z kozą w twin turbo, Stany zakończone aresztem. Nasze życie to jeden wielki film.",
    tags: ["Rumunia", "USA", "Areszt", "Twin Turbo"],
    url: BASE + "E07%20W%20RUMUNII%20JEZDZILISMY%20Z%20KOZA%20W%20TWIN%20TURBO%2C%20A%20W%20USA%20SKONCZYLEM%20W%20ARESZCIE%20(to%20NIE%20jest%20fikcyjny%20tytul)%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14919587_1766522586515.png",
  },
  {
    id: 8,
    episode: "E08",
    title: "Poznajcie Naszą siedzibę platformy! Cała Budowa w jednym materiale!",
    description:
      "Tour po naszej siedzibie od A do Z – cała budowa, historia i plany na przyszłość. Plus inne nieoczekiwane historie.",
    tags: ["Siedziba", "Budowa", "Tour"],
    url: BASE + "E08%20Poznajcie%20Nasza%20siedzibe%20platformy!%20Cala%20Budowa%20w%20jednym%20materiale!%20(TOUR%20%2B%20INNE%20HISTORIE)%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14919679_1766761479323.png",
  },
  {
    id: 9,
    episode: "E09",
    title: "Q&A 2025 – 10 pytań, 10 odpowiedzi",
    description:
      "Odpowiadamy na Wasze pytania! 10 pytań, 10 szczerych odpowiedzi. Co nas czeka w 2025 roku? Co z samochodami?",
    tags: ["Q&A", "2025", "FAQ"],
    url: BASE + "E09%20Q%26A%202025%20-%2010%20pytan%2C%2010%20odpowiedzi.%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14919716_1767092294653.png",
  },
  {
    id: 10,
    episode: "E10",
    title: "SEMA 2025 i 10-tonowy opancerzony czołg, który tam kupiliśmy...",
    description:
      "SEMA Show 2025 i szalony zakup – 10-tonowy opancerzony czołg prosto z wystawy. Bo dlaczego nie?",
    tags: ["SEMA", "Czołg", "USA", "2025"],
    url: BASE + "E10%20SEMA%202025%20i%2010%20tonowy%2C%20opancerzony%20czolg%20ktory%20tam%20kupilismy...%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14919780_1767963425233.png",
  },
  {
    id: 11,
    episode: "E11",
    title: "Nowymi Maverickami po Afryce! Algieria PART 1/2",
    description:
      "Pierwsze kroki po Afryce – Algieria na Fordach Maverick. Pustynia, piach, przygoda i mnóstwo stresu. Część 1 z 2.",
    tags: ["Algieria", "Afryka", "Ford Maverick", "Off-road"],
    url: BASE + "E11%20Nowymi%20Maverickami%20po%20Afryce!%20Algieria%20PART%201-2%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14919996_1769854682238.png",
  },
  {
    id: 12,
    episode: "E12",
    title: "AFRYKA – ALGIERIA po pustyni PART 2/2",
    description:
      "Kontynuacja afrykańskiej przygody – głębiej w Algerię, bardziej po pustyni. Finałowy odcinek z Afryki pełen emocji.",
    tags: ["Algieria", "Afryka", "Pustynia", "Off-road"],
    url: BASE + "E12%20AFRYKA%20-%20ALGIERIA%20po%20pustyni%20-%20PART%202-2%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14920002_1770987194992.png",
  },
  {
    id: 13,
    episode: "E13",
    title: "Materiał specjalny – Szwedzkie zimowe przygody V8 vs Prąd",
    description:
      "Szwecja zimą – V8 kontra samochód elektryczny na lodzie i śniegu. Który wygra? Materiał specjalny pełen niespodzianek.",
    tags: ["Szwecja", "Zima", "V8", "Elektryczny", "Specjalny"],
    url: BASE + "E13%20Material%20specjalny%20%20Szwedzkie%20zimowe%20przygody%20V8%20vs%20Prad%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14920138_1772200877391.png",
  },
  {
    id: 14,
    episode: "E14",
    title: "Miliarderzy w St. Moritz vs grupa nieodpowiedzialnych chłopa z Polski",
    description:
      "St. Moritz – zimowa stolica bogaczy. My kontra miliarderzy. Kto wygrywa? Odpowiedź was zaskoczy.",
    tags: ["St. Moritz", "Szwajcaria", "Zima", "Supercar"],
    url: BASE + "E14%20Miliarderzy%20w%20St%20Moritz%20vs%20grupa%20nieodpowiedzialnych%20chlopa%20z%20Polski%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14920145_1773449220444.png",
  },
  {
    id: 15,
    episode: "E15",
    title: "SUPRA TARGA V2 – Druga na świecie Supra bez dachu!",
    description:
      "Supra Targa w wersji V2 – jedyna w swoim rodzaju. Druga na świecie Toyota Supra bez dachu, przygotowana przez nas od podstaw.",
    tags: ["Toyota Supra", "Targa", "Custom", "Build"],
    url: BASE + "E15%20SUPRA%20TARGA%20V2%20TARGA!%20Druga%20na%20swiecie%20supra%20bez%20dachu!%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14920200_1774621393802.png",
  },
  {
    id: 16,
    episode: "E16",
    title: "Witamy 911 GT3RS w pakiecie MR! Polska, Włochy, Niemcy w jednym filmie!",
    description:
      "Porsche 911 GT3RS w pakiecie Manthey Racing dołącza do ekipy! Objazd przez Polskę, Włochy i Niemcy – epicki road trip.",
    tags: ["Porsche", "GT3RS", "Manthey Racing", "Road Trip", "Europa"],
    url: BASE + "E16%20Witamy%20911%20GT3RS%20w%20pakiecie%20MR!%20Polska%2C%20Wlochy%2C%20Niemcy%20-%20w%20jednym%20filmie!%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14920340_1775830606020.png",
  },
  {
    id: 17,
    episode: "E17",
    title: "NÜRBURGRING – Pierwsze starcie GT3RS MR na Nordschleife",
    description:
      "Pierwsze okrążenie Porsche 911 GT3RS Manthey Racing na Nordschleife. Nürburgring w pełnej chwale – adrenalina gwarantowana.",
    tags: ["Nürburgring", "Nordschleife", "Porsche", "GT3RS", "Track Day"],
    url: BASE + "E17%20NURBURGRING%20-%20Pierwsze%20starcie%20_%20GT3rs%20MR%20na%20Nordshlife%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14920358_1777033903614.png",
  },
  {
    id: 18,
    episode: "E18",
    title: "QUAD ROTOR TURBO – FINAŁ BUDOWY!",
    description:
      "Legendarny silnik Quad Rotor Turbo – budowa dobiegła końca! Finałowy odcinek długotrwałego projektu. Silnik żyje.",
    tags: ["Quad Rotor", "Turbo", "Build", "Rotary"],
    url: BASE + "E18%20QUAD%20ROTOR%20TURBO%20-%20FINAL%20BUDOWY!%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14920484_1779454540767.png",
  },
  {
    id: 19,
    episode: "E19",
    title: "HOT RODY za 3 mln w USA! BMW M4 Adro 800+ single turbo",
    description:
      "Najciekawsze Hot Rody w USA za 3 miliony – przegląd najlepszych. Plus BMW M4 Adro z 800+ KM na single turbo. Niesamowite maszyny.",
    tags: ["Hot Rod", "BMW M4", "Single Turbo", "USA", "800KM"],
    url: BASE + "E19%20HOT%20RODY%20za%203mln%20w%20USA_%20Najciekawsze%20auta%20tej%20kategorii!%20_%20BMW%20M4%20Adro%20800%2B%20single%20turbo%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14920563_1780664234728.png",
  },
  {
    id: 20,
    episode: "E20",
    title: "DODGE VIPER ACR vs ROUTE 66! PART 1/2",
    description:
      "Dodge Viper ACR na słynnej Route 66. Część 1 z 2 – legendarny muscle car na legendarnej drodze Ameryki. Krew, pot i benzyna.",
    tags: ["Dodge Viper", "ACR", "Route 66", "USA", "Muscle Car"],
    url: BASE + "E20%20DODGE%20VIPER%20ACR%20vs%20ROUTE%2066!%20PART%201_2%201080p.CSI.WEB-DL.AAC.H264-SZAFQU.mp4",
    thumbnail: THUMB + "14920622_1781892206618.png",
  },
];

const tagColors: Record<string, string> = {
  "USA": "bg-green-900/60 text-green-300",
  "Polska": "bg-emerald-900/60 text-emerald-300",
  "Afryka": "bg-lime-900/60 text-lime-300",
  "Drift": "bg-teal-900/60 text-teal-300",
  "Track Day": "bg-green-800/60 text-green-200",
  "Nürburgring": "bg-green-900/60 text-green-300",
  "Porsche": "bg-emerald-900/60 text-emerald-300",
  "Lamborghini": "bg-lime-900/60 text-lime-300",
  "Build": "bg-zinc-700/60 text-zinc-300",
};

function getTagColor(tag: string) {
  return tagColors[tag] || "bg-green-950/60 text-green-400";
}

const BANNER = "https://dsitv:hostingbyszafqu@index.szafqu.us/szafqu/csi/thumbnail/BanerBackground.png";

export default function App() {
  const [activeEp, setActiveEp] = useState<Episode | null>(null);
  const [search, setSearch] = useState("");

  const filtered = episodes.filter(
    (ep) =>
      ep.title.toLowerCase().includes(search.toLowerCase()) ||
      ep.episode.toLowerCase().includes(search.toLowerCase()) ||
      ep.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* HERO BANNER */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: 340 }}>
        {/* Banner image */}
        <img
          src={BANNER}
          alt="CSI Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ minHeight: 340 }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-zinc-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16" style={{ minHeight: 340 }}>
          {/* Logo / title */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-14 h-14 rounded-2xl bg-green-500/20 border border-green-500/40 flex items-center justify-center backdrop-blur-sm">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.277A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
              </svg>
            </div>
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent drop-shadow-lg">
                CSI
              </h1>
              <p className="text-green-300/80 text-sm font-semibold tracking-[0.2em] uppercase">
                Car Story International
              </p>
            </div>
          </div>

          <p className="text-zinc-300 text-sm md:text-base max-w-xl mt-2 mb-6 leading-relaxed">
            Samochody, przygody i szaleństwa bez granic – od RX7 Quad Rotor po czołg z SEMA.
            <br className="hidden md:block" /> Wszystkie odcinki w jednym miejscu.
          </p>

          {/* Search */}
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Szukaj odcinka, auta, miejsca..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900/80 border border-green-700/60 rounded-xl px-5 py-3 pr-12 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition text-sm backdrop-blur-sm shadow-lg"
            />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
            </svg>
          </div>

          {/* Stats */}
          <div className="mt-5 flex gap-5 justify-center text-sm">
            <span className="flex items-center gap-1.5 text-green-400/80">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              {episodes.length} odcinków
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">🎞️ Full HD 1080p</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">🚀 Stream online</span>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {search && (
          <p className="text-zinc-400 mb-6 text-sm">
            Wyniki dla:{" "}
            <span className="text-green-400 font-semibold">"{search}"</span> —{" "}
            {filtered.length} odcinków
          </p>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-xl">Brak wyników dla "{search}"</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((ep) => (
            <EpisodeCard key={ep.id} ep={ep} onClick={() => setActiveEp(ep)} />
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/60 mt-10 py-8 text-center">
        <p className="text-green-500/60 font-bold tracking-widest text-xs uppercase mb-1">
          Car Story International
        </p>
        <p className="text-zinc-600 text-xs">
          © 2025 CSI. Strona przeznaczona wyłącznie do użytku prywatnego.
        </p>
      </footer>

      {/* MODAL */}
      {activeEp && (
        <VideoModal ep={activeEp} onClose={() => setActiveEp(null)} />
      )}
    </div>
  );
}

function EpisodeCard({ ep, onClick }: { ep: Episode; onClick: () => void }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="group cursor-pointer rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-green-500/50 transition-all duration-300 overflow-hidden flex flex-col shadow-lg hover:shadow-green-900/30 hover:shadow-xl hover:-translate-y-1"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video bg-zinc-800 overflow-hidden">
        {!imgError ? (
          <img
            src={ep.thumbnail}
            alt={ep.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
            <svg className="w-12 h-12 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.277A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
          </div>
        )}

        {/* Episode badge */}
        <div className="absolute top-2.5 left-2.5 bg-green-500 text-white text-xs font-black px-2.5 py-1 rounded-lg tracking-wider shadow-lg shadow-green-900/50">
          {ep.episode}
        </div>

        {/* HD badge */}
        <div className="absolute bottom-2.5 right-2.5 bg-zinc-900/85 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded border border-green-800/50 backdrop-blur-sm">
          1080p
        </div>

        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
            <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-xl shadow-green-500/50 border-2 border-white/20">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <h2 className="text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-green-400 transition-colors duration-200">
          {ep.title}
        </h2>
        <p className="text-xs text-zinc-500 line-clamp-2 flex-1 leading-relaxed">
          {ep.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-1">
          {ep.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border border-transparent ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function VideoModal({ ep, onClose }: { ep: Episode; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-700/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-zinc-800/90 hover:bg-red-600 flex items-center justify-center transition-colors text-zinc-400 hover:text-white border border-zinc-700 shadow-lg"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video player */}
        <div className="w-full aspect-video bg-black">
          <video
            src={ep.url}
            controls
            autoPlay
            className="w-full h-full"
          >
            Twoja przeglądarka nie obsługuje tagu video.
          </video>
        </div>

        {/* Episode info */}
        <div className="p-5 md:p-6 border-t border-zinc-800/60">
          <div className="flex items-start gap-3">
            <span className="shrink-0 bg-green-500 text-white text-xs font-black px-3 py-1.5 rounded-lg tracking-wider shadow shadow-green-900/50">
              {ep.episode}
            </span>
            <div className="flex-1 min-w-0">
              <h2 className="text-base md:text-lg font-bold text-white leading-snug mb-2">
                {ep.title}
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">{ep.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {ep.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
