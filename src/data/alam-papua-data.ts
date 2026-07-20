export interface AlamPapuaSection {
    id: string;
    title: string[];          // array of lines for the heading (each line gets its own overflow-hidden wrapper)
    description: string;
    factText: string;
    image: string;            // large left image
    factImage: string;        // small image inside the fact card
    label: string;            // sidebar indicator label
}

export const ALAM_SECTIONS: AlamPapuaSection[] = [
    {
        id: "cenderawasih",
        title: ["Cenderawasih,", "Fauna dari Timur"],
        description:
            "Papua adalah rumah bagi hampir seluruh spesies burung cenderawasih di dunia, sekitar 40 jenis dan hampir semuanya endemik. Hutan hujannya juga menaungi ratusan spesies mamalia unik seperti kanguru pohon dan kuskus.",
        factText:
            "Tarian kawin cenderawasih jantan disebut sebagai yang paling indah di dunia hewan.",
        image: "/img/alam-papua/1.png",
        factImage: "/img/alam-papua/1.png",
        label: "Fauna",
    },
    {
        id: "hutan",
        title: ["Paru-paru Dunia", "di Timur Indonesia"],
        description:
            "Hutan Papua membentang hingga puluhan juta hektare dan menyumbang lebih dari separuh keanekaragaman hayati Indonesia. Kayu merbau, kayu keras bernilai tinggi, kini hampir hanya tersisa di sini.",
        factText:
            "Sekitar 75-80% daratan Papua masih tertutup hutan lebat dan alami.",
        image: "/img/alam-papua/2.png",
        factImage: "/img/alam-papua/2.png",
        label: "Hutan",
    },
    {
        id: "laut",
        title: ["Kekayaan Laut", "Pasifik Papua"],
        description:
            "Perairan utara Papua kaya tuna, cakalang, dan tenggiri, sementara Laut Arafura di selatan menghasilkan udang dan kakap berkualitas ekspor.",
        factText:
            "Papua menyumbang sekitar 4% produksi tuna-cakalang-tongkol nasional, bernilai triliunan rupiah per tahun.",
        image: "/img/alam-papua/3.png",
        factImage: "/img/alam-papua/3.png",
        label: "Laut",
    },
    {
        id: "tambang",
        title: ["Emas & Tembaga", "Harta Tanah Papua"],
        description:
            "Tambang Grasberg di Mimika menyimpan salah satu cadangan emas dan tembaga terbesar dunia. Papua memegang sekitar 28% cadangan emas nasional.",
        factText:
            "Grasberg adalah salah satu tambang emas dan tembaga terbesar di dunia.",
        image: "/img/alam-papua/4.png",
        factImage: "/img/alam-papua/4.png",
        label: "Tambang",
    },
    {
        id: "pegunungan",
        title: ["Keindahan Alam", "Tanah Papua"],
        description:
            "Dari puncak Jayawijaya yang diselimuti salju abadi hingga lembah Baliem yang subur, Papua menyimpan bentang alam yang tak tertandingi di Indonesia.",
        factText:
            "Puncak Jaya (4.884 m) adalah titik tertinggi di Indonesia dan satu-satunya gletser tropis di Asia Tenggara.",
        image: "/img/alam-papua/5.png",
        factImage: "/img/alam-papua/5.png",
        label: "Alam",
    },
];

export const ALAM_TOTAL = ALAM_SECTIONS.length;
