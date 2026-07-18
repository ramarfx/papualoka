export type Destination = {
    id: string;
    name: string;
    slug: string;
    description: string;
    bgImage: string;
    cards: string[];
};

export const DESTINATIONS: Destination[] = [
    {
        id: "raja-ampat",
        name: "Raja Ampat",
        slug: "raja-ampat",
        description:
            "Dikenal sebagai surga bahari Indonesia, Raja Ampat menawarkan gugusan pulau karst, air laut yang jernih, dan keanekaragaman hayati bawah laut yang memukau. Keindahannya menjadikan destinasi ini sebagai salah satu ikon wisata Papua.",
        bgImage: "/img/destination/rajaampat-bg.png",
        cards: [
            "/img/destination/rajaampat-card.png",
            "/img/destination/sentani-card.png",
            "/img/destination/baliem-card.png",
        ],
    },
    {
        id: "danau-sentani",
        name: "Danau Sentani",
        slug: "danau-sentani",
        description:
            "Terletak di kaki Pegunungan Cyclops, Danau Sentani menyuguhkan panorama alam yang tenang dengan puluhan pulau kecil di sekitarnya. Kawasan ini juga terkenal akan kekayaan budaya masyarakat setempat.",
        bgImage: "/img/destination/sentani-bg.png",
        cards: [
            "/img/destination/sentani-card.png",
            "/img/destination/baliem-card.png",
            "/img/destination/jayawijaya-card.png",
        ],
    },
    {
        id: "lembah-baliem",
        name: "Lembah Baliem",
        slug: "lembah-baliem",
        description:
            "Di tengah Pegunungan Papua, Lembah Baliem menghadirkan hamparan alam yang hijau serta tradisi masyarakat adat yang masih terjaga. Destinasi ini menjadi jendela untuk mengenal kehidupan khas Papua.",
        bgImage: "/img/destination/baliem-bg.png",
        cards: [
            "/img/destination/baliem-card.png",
            "/img/destination/jayawijaya-card.png",
            "/img/destination/paniai-card.png",
        ],
    },
    {
        id: "puncak-jayawijaya",
        name: "Puncak Jayawijaya",
        slug: "puncak-jayawijaya",
        description:
            "Berdiri megah sebagai puncak tertinggi Indonesia dan salah satu dari Seven Summits dunia, Jayawijaya menyimpan es abadi yang langka di kawasan tropis. Sebuah tantangan dan keajaiban alam yang tiada duanya.",
        bgImage: "/img/destination/jayawijaya-bg.png",
        cards: [
            "/img/destination/jayawijaya-card.png",
            "/img/destination/paniai-card.png",
            "/img/destination/rajaampat-card.png",
        ],
    },
    {
        id: "danau-paniai",
        name: "Danau Paniai",
        slug: "danau-paniai",
        description:
            "Tersembunyi di dataran tinggi Papua, Danau Paniai adalah permata biru yang dikelilingi pegunungan hijau. Airnya yang jernih dan suasana yang tenang menjadikannya salah satu danau terindah di Indonesia.",
        bgImage: "/img/destination/paniai-bg.png",
        cards: [
            "/img/destination/paniai-card.png",
            "/img/destination/rajaampat-card.png",
            "/img/destination/sentani-card.png",
        ],
    },
];
