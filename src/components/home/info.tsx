"use client";

import { useState, useCallback } from "react";
import { AlertCircle, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveMap from "./map";
import Link from "next/link";

// ──────────────────────────────────────────────────────────────────
// Province-specific content: title, description, and 3 timeline stats
// ──────────────────────────────────────────────────────────────────
const DEFAULT_CONTENT = {
    title: "PAPUA",
    desc: "Papua dikenal sebagai wilayah paling timur Indonesia dengan kekayaan alam dan budaya yang luar biasa. Beragam suku, bahasa, dan tradisi hidup berdampingan di Tanah Cenderawasih.",
    stats: [
        { title: "300K KM²", desc: "Wilayah luas dengan bentang alam yang beragam." },
        { title: "6 Provinsi", desc: "6 provinsi dari pesisir hingga pegunungan." },
        { title: "250+ Suku", desc: "Rumah ratusan suku yang menjaga tradisi dan budaya turun-temurun." },
    ],
};

const PROVINCE_CONTENT: Record<
    string,
    { title: string; path: string; desc: string; stats: { title: string; desc: string }[] }
> = {
    papuabaratdaya: {
        title: "PAPUA BARAT DAYA",
        path: "/province/papua-barat-daya",
        desc: "Papua Barat Daya adalah provinsi termuda Papua, berpusat di Sorong — pintu gerbang menuju keajaiban bahari Raja Ampat yang diakui sebagai pusat keanekaragaman hayati laut dunia.",
        stats: [
            { title: "40.362 KM²", desc: "Hamparan laut dan daratan dengan keanekaragaman hayati yang luar biasa." },
            { title: "Ibu Kota Sorong", desc: "Pusat perdagangan strategis dan gerbang utama Raja Ampat." },
            { title: "30+ Suku", desc: "Komunitas pesisir dengan tradisi maritim dan budaya bahari yang kaya." },
        ],
    },
    papuabarat: {
        title: "PAPUA BARAT",
        path: "/province/papua-barat",
        desc: "Papua Barat menyimpan hamparan hutan hujan tropis lebat, teluk cenderawasih yang memukau, serta Manokwari sebagai kota misi tertua di Papua yang sarat sejarah.",
        stats: [
            { title: "97.024 KM²", desc: "Hutan hujan tropis yang masih terjaga dan teluk biru yang membentang luas." },
            { title: "Ibu Kota Manokwari", desc: "Kota tertua di Papua dengan warisan sejarah misionaris yang kuat." },
            { title: "40+ Suku", desc: "Komunitas adat yang menjaga budaya dan kearifan lokal leluhur." },
        ],
    },
    papuatengah: {
        title: "PAPUA TENGAH",
        path: "/province/papua-tengah",
        desc: "Papua Tengah membentang dari pegunungan tengah hingga dataran rendah yang subur. Nabire menjadi titik akses utama menuju keajaiban Danau Paniai dan puncak-puncak megah Papua.",
        stats: [
            { title: "119.749 KM²", desc: "Dari puncak pegunungan bersalju hingga dataran rendah yang subur." },
            { title: "Ibu Kota Nabire", desc: "Pintu masuk menuju Danau Paniai dan kawasan pegunungan tengah." },
            { title: "50+ Suku", desc: "Suku-suku asli pegunungan tengah dengan upacara adat yang unik." },
        ],
    },
    papuapegunungan: {
        title: "PAPUA PEGUNUNGAN",
        path: "/province/papua-pegunungan",
        desc: "Papua Pegunungan adalah atap Indonesia — rumah Puncak Jaya setinggi 4.884 mdpl, lembah Baliem yang megah, dan suku Dani yang menjaga tradisi ribuan tahun tanpa henti.",
        stats: [
            { title: "55.553 KM²", desc: "Deretan pegunungan tertinggi di Indonesia dengan salju abadi." },
            { title: "Puncak Jaya 4.884m", desc: "Titik tertinggi Indonesia, satu-satunya puncak bersalju di Asia Tenggara." },
            { title: "60+ Suku", desc: "Suku Dani, Lani, dan Mee yang menjaga tradisi lembah Baliem sejak ribuan tahun." },
        ],
    },
    papuaselatan: {
        title: "PAPUA SELATAN",
        path: "/province/papua-selatan",
        desc: "Papua Selatan adalah tanah savana luas dan rawa-rawa khas Merauke — kota paling timur Indonesia. Wilayah ini kaya budaya suku Marind dan berbatasan langsung dengan Papua Nugini.",
        stats: [
            { title: "118.844 KM²", desc: "Dataran rendah, rawa-rawa luas, dan savana menuju Laut Arafura." },
            { title: "Ibu Kota Merauke", desc: "Kota paling timur dan selatan Indonesia, berbatasan dengan Papua Nugini." },
            { title: "20+ Suku", desc: "Suku Marind dan komunitas adat dataran selatan dengan tradisi agraris." },
        ],
    },
    papua: {
        title: "PAPUA",
        path: "/province/papua",
        desc: "Provinsi Papua adalah jantung dari Tanah Cenderawasih — rumah bagi Jayapura sebagai pusat pemerintahan, hutan tropis yang lebat, dan ragam etnis yang hidup harmonis di pesisir serta pedalaman.",
        stats: [
            { title: "88.648 KM²", desc: "Hutan tropis lebat dan garis pantai panjang menuju Samudera Pasifik." },
            { title: "Ibu Kota Jayapura", desc: "Pusat pemerintahan, ekonomi, dan budaya di jantung Papua." },
            { title: "70+ Suku", desc: "Ragam etnis dan bahasa yang hidup harmonis di pesisir dan pedalaman." },
        ],
    },
};

export default function Info() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    // Selected province takes priority over hovered
    const activeId = selectedId ?? hoveredId;
    const content = activeId ? PROVINCE_CONTENT[activeId] ?? DEFAULT_CONTENT : DEFAULT_CONTENT;

    const handleHoverProvince = useCallback((id: string | null) => {
        setHoveredId(id);
    }, []);

    return (
        <section className="relative w-full min-h-screen bg-papua-dark flex flex-col justify-center py-24 px-8 md:px-24 overflow-hidden">
            {/* Top Left Cursor Hint */}
            <motion.div
                className="absolute top-12 left-0 md:top-24 md:left-24 z-20 w-fit mx-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-3 bg-papua-dark/60 border border-white/5 px-2 py-3 rounded-lg text-white/90">
                    <AlertCircle
                        className="w-5 h-5 text-papua-green"
                        strokeWidth={2}
                    />
                    <span className="font-sans text-sm tracking-wide font-medium">
                        Ketuk atau arahkan kursor ke wilayah pulau untuk
                        interaksi peta
                    </span>
                </div>
            </motion.div>

            {/* Main Content Layout */}
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 gap-16 lg:gap-8 mt-24 lg:mt-0">
                {/* Left Content (Text & CTA) */}
                <motion.div
                    className="w-full lg:w-1/3 flex flex-col justify-end lg:pt-32 order-2 lg:order-1"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={content.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="text-[#D3B745] text-3xl font-bold font-sans tracking-wide uppercase"
                            >
                                {content.title}
                            </motion.h2>
                        </AnimatePresence>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.p
                            key={content.desc}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
                            className="text-white/60 font-sans text-sm md:text-base leading-relaxed mb-10 max-w-xs"
                        >
                            {content.desc}
                        </motion.p>
                    </AnimatePresence>

                    {content.title !== DEFAULT_CONTENT.title && (
                        <Link href={'path' in content ? content.path : "/province"} className="flex items-center gap-2 text-white font-sans text-xs md:text-sm tracking-widest font-bold uppercase hover:text-[#D3B745] transition-colors group w-max">
                            <span>Pelajari Selanjutnya</span>
                            <ChevronRight
                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                strokeWidth={3}
                            />
                        </Link>
                    )}
                </motion.div>

                {/* Center Map */}
                <motion.div
                    className="w-full lg:w-[45%] flex justify-center relative order-1 lg:order-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        bounce: 0.3,
                    }}
                >
                    {/* Green Glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] bg-[#38A13B]/10 blur-[90px] rounded-[100%] z-0 pointer-events-none"></div>

                    {/* Interactive SVG map — selectedId + hoveredId lifted up so panels react */}
                    <InteractiveMap
                        selectedId={selectedId}
                        setSelectedId={setSelectedId}
                        onHoverProvince={handleHoverProvince}
                    />
                </motion.div>

                {/* Right Timeline */}
                <motion.div
                    className="w-full lg:w-1/3 flex justify-start lg:justify-end order-3"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="flex flex-col gap-12 relative lg:pt-16 min-w-[280px]">
                        {/* Vertical connection line */}
                        <div className="absolute left-[9px] top-6 bottom-6 w-[2px] bg-[#D3B745]/30"></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId ?? "default"}
                                initial={{ opacity: 0, x: 16 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -16 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="flex flex-col gap-12"
                            >
                                {content.stats.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex gap-8 relative z-10 group"
                                    >
                                        {/* Timeline Node */}
                                        <div className="mt-1 relative shrink-0">
                                            <div className="w-[20px] h-[20px] rounded-full border-2 border-[#D3B745] bg-[#111111] flex items-center justify-center p-[3px] transition-transform group-hover:scale-110">
                                                <div className="w-full h-full rounded-full bg-[#D3B745]"></div>
                                            </div>
                                        </div>

                                        {/* Timeline Content */}
                                        <div className="flex flex-col gap-2 min-h-[56px] justify-center">
                                            <h3 className="text-[#D3B745] font-sans text-lg md:text-xl font-bold leading-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-white/60 font-sans text-xs md:text-sm leading-relaxed max-w-[220px]">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}