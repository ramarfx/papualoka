export interface KalenderEvent {
  date: string; // ISO format: YYYY-MM-DD
  title: string;
  category: string;
  tags: string[];
  location: string;
  description: string;
  image: string;
  sourceLabel: string;
  source: string;
}

export const MONTH_NAMES = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

// Minggu dimulai pada Minggu (Sunday) untuk mencocokkan urutan label M S S R K J S
export const WEEK_LABELS = ["M", "S", "S", "R", "K", "J", "S"];

export function dateKey(year: number, month: number, day: number): string {
  const m = String(month + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

export function getEventByDate(date: string): KalenderEvent | undefined {
  return KALENDER_EVENTS.find((e) => e.date === date);
}

export const KALENDER_EVENTS: KalenderEvent[] = [
  {
    date: "2026-02-05",
    title: "Hari Pekabaran Injil (HUT PI) di Tanah Papua",
    category: "Hari Besar",
    tags: ["HUT PI"],
    location: "Tanah Papua",
    description:
      "Hari Pekabaran Injil (HUT PI) di Tanah Papua diperingati setiap tanggal 5 Februari.",
    image: "/img/kalender/pekabaran.png",
    sourceLabel: "Instagram",
    source:
      "https://www.instagram.com/p/DUWoiWNie_c/?utm_source=ig_web_button_share_sheet",
  },
  {
    date: "2026-04-24",
    title: "Festival Sagu Papua",
    category: "Festival",
    tags: ["Sagu"],
    location: "Papua",
    description:
      "Festival Sagu Papua diselenggarakan pada tanggal 24–26 April 2026.",
    image: "/img/kalender/sagu.png",
    sourceLabel: "Instagram",
    source:
      "https://www.instagram.com/p/DXNxk_AlkpQ/?utm_source=ig_web_button_share_sheet",
  },
  {
    date: "2026-07-01",
    title: "Festival Biak Munara Wampasi (FBMW)",
    category: "Festival",
    tags: ["FBMW"],
    location: "Biak",
    description:
      "Festival Biak Munara Wampasi (FBMW) diselenggarakan pada tanggal 1–7 Juli 2026.",
    image: "/img/kalender/biawak.png",
    sourceLabel: "BAPPEDA Kabupaten Biak",
    source: "https://bappeda.biakkab.go.id/agendas/17",
  },
  {
    date: "2026-08-07",
    title: "Festival Budaya Lembah Baliem (FBLB)",
    category: "Festival Budaya",
    tags: ["FBLB"],
    location: "Lembah Baliem",
    description:
      "Festival Budaya Lembah Baliem (FBLB) diselenggarakan pada tanggal 7–10 Agustus 2026.",
    image: "/img/destination/baliem-bg.png",
    sourceLabel: "Pemerintah Kabupaten Jayawijaya",
    source: "https://share.google/rRPXqfn2oOrESFPPQ",
  },
  {
    date: "2026-09-01",
    title: "Festival Danau Sentani (FDS)",
    category: "Festival",
    tags: ["FDS"],
    location: "Danau Sentani",
    description:
      "Festival Danau Sentani (FDS) diselenggarakan pada tanggal 1–5 September 2026.",
    image: "/img/destination/sentani-bg.png",
    sourceLabel: "Kompas.com",
    source: "https://share.google/EGHv2OT4KwzDS5XZz",
  },
  {
    date: "2026-10-07",
    title: "Festival Asmat Pokman (FAP)",
    category: "Festival",
    tags: ["FAP"],
    location: "Asmat",
    description:
      "Festival Asmat Pokman (FAP) diselenggarakan pada tanggal 7–11 Oktober 2026.",
    image: "/img/event/fap.png",
    sourceLabel: "Instagram",
    source: "https://share.google/BnTlskqfS868EIWQP",
  },
];
