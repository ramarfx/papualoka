export interface KalenderEvent {
    date: string; // ISO date e.g. "2026-09-05"
    title: string;
    category: string;
    tags: string[];
    location: string;
    description: string;
    image: string;
}

export interface GalleryItem {
    id: number;
    src: string;
    location: string;
    description: string;
}

export const MONTH_NAMES = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

// Week starts on Minggu (Sunday) to match the label order M S S R K J S
export const WEEK_LABELS = ["M", "S", "S", "R", "K", "J", "S"];

export const KALENDER_EVENTS: KalenderEvent[] = [
    {
        date: "2026-09-05",
        title: "Festival Lembah Baliem",
        category: "Festival Budaya",
        tags: ["Tradisi", "Tari", "Suku"],
        location: "Wamena, Papua Pegunungan",
        description:
            "Perayaan tahunan suku-suku di Lembah Baliem yang menampilkan tarian adat, simulasi perang, ramai pasar tradisional, serta kekayaan kuliner khas pegunungan Papua.",
        image: "/img/destination/baliem-bg.png",
    },
    {
        date: "2026-09-11",
        title: "Pekan Raya Danau Sentani",
        category: "Festival Danau",
        tags: ["Air", "Seni", "Kuliner"],
        location: "Danau Sentani, Jayapura",
        description:
            "Festival yang mempertontonkan perlombaan perahu naga, tarian di atas air, dan pameran kerajinan tangan khas masyarakat pesisir Danau Sentani.",
        image: "/img/destination/sentani-bg.png",
    },
    {
        date: "2026-09-17",
        title: "Festival Raja Ampat",
        category: "Festival Bahari",
        tags: ["Laut", "Konservasi", "Pantai"],
        location: "Raja Ampat, Papua Barat Daya",
        description:
            "Perayaan bahari yang menampilkan arung tak berbalut, tarian tradisional, dan rangkaian kegiatan pelestarian terumbu karang di salah satu surga bahari dunia.",
        image: "/img/destination/rajaampat-bg.png",
    },
    {
        date: "2026-09-23",
        title: "Upacara Iki Palek",
        category: "Ritual Adat",
        tags: ["Ritual", "Pegunungan", "Leluhur"],
        location: "Wamena, Papua Pegunungan",
        description:
            "Ritual adat masyarakat Papua Pegunungan sebagai wujud penghormatan dan duka cita atas kepergian orang tercinta, dilestarikan secara turun-temurun.",
        image: "/img/adat/2.png",
    },
    {
        date: "2026-09-28",
        title: "Pesta Sagu Kamoro",
        category: "Tradisi Pesisir",
        tags: ["Kuliner", "Sagu", "Suku"],
        location: "Mimika, Papua Tengah",
        description:
            "Tradisi panen sagu suku Kamoro yang dirayakan bersama penafsiran musik, tarian, dan olahan kuliner sagu khas masyarakat pesisir Mimika.",
        image: "/img/adat/1.png",
    },
];

export const GALLERY_ITEMS: GalleryItem[] = [
    {
        id: 1,
        src: "/img/destination/rajaampat-card.png",
        location: "Raja Ampat",
        description: "Gugusan karst di atas laut biru — surga tersembunyi di ujung barat Papua.",
    },
    {
        id: 2,
        src: "/img/destination/lembah-baliem/1.png",
        location: "Lembah Baliem",
        description: "Lembah hijau yang menjadi rumah bagi suku-suku pegunungan Papua.",
    },
    {
        id: 3,
        src: "/img/destination/sentani-card.png",
        location: "Danau Sentani",
        description: "Danau terluas di Papua dengan ribuan rumah terapung dan kerajinan kayu.",
    },
    {
        id: 4,
        src: "/img/adat/6.png",
        location: "Rumah Pohon Korowai",
        description: "Hunian tradisional setinggi puluhan meter di tengah hutan pedalaman.",
    },
];

export function getEventByDate(date: string): KalenderEvent | undefined {
    return KALENDER_EVENTS.find((e) => e.date === date);
}

export function dateKey(year: number, month: number, day: number): string {
    const m = String(month + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    return `${year}-${m}-${d}`;
}