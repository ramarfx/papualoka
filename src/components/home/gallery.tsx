"use client";

import Image from "next/image";
import { useState } from "react";
import { Download, Compass } from "lucide-react";
import { motion } from "framer-motion";

/* ─── Gallery Data ─── */
type GalleryCategory = "BUDAYA" | "TRADISI" | "SUKU" | "WISATA";

interface GalleryItem {
    id: number;
    src: string;
    location: string;
    category: GalleryCategory;
    /** Masonry size hint: "tall" doubles the row span */
    size: "normal" | "tall";
}

const GALLERY_ITEMS: GalleryItem[] = [
    { id: 1,  src: "/img/raja-ampat.png",            location: "Raja Ampat",      category: "WISATA",  size: "tall" },
    { id: 2,  src: "/img/destination/rajaampat-card.png", location: "Raja Ampat",  category: "WISATA",  size: "normal" },
    { id: 3,  src: "/img/destination/sentani-card.png",   location: "Danau Sentani", category: "WISATA",  size: "normal" },
    { id: 4,  src: "/img/destination/baliem-card.png",    location: "Lembah Baliem", category: "BUDAYA",  size: "tall" },
    { id: 5,  src: "/img/about/1.png",               location: "Suku Asmat",      category: "SUKU",    size: "normal" },
    { id: 6,  src: "/img/about/2.png",               location: "Suku Dani",       category: "SUKU",    size: "normal" },
    { id: 7,  src: "/img/destination/paniai-card.png",    location: "Danau Paniai",  category: "WISATA",  size: "normal" },
    { id: 8,  src: "/img/about/3.png",               location: "Suku Amungme",    category: "TRADISI", size: "tall" },
    { id: 9,  src: "/img/lorentz.png",               location: "Taman Lorentz",   category: "WISATA",  size: "normal" },
    { id: 10, src: "/img/about/4.png",               location: "Suku Lani",       category: "SUKU",    size: "normal" },
    { id: 11, src: "/img/about/5.png",               location: "Suku Muyu",       category: "SUKU",    size: "normal" },
    { id: 12, src: "/img/baliem-valley.png",          location: "Lembah Baliem",   category: "BUDAYA",  size: "normal" },
    { id: 13, src: "/img/danau-sentani.png",          location: "Danau Sentani",   category: "WISATA",  size: "normal" },
    { id: 14, src: "/img/destination/jayawijaya-card.png", location: "Jayawijaya", category: "TRADISI", size: "normal" },
];

const FILTER_TABS: GalleryCategory[] = ["BUDAYA", "TRADISI", "SUKU", "WISATA"];

/* ─── Component ─── */
export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState<GalleryCategory | null>(null);

    const filtered = activeFilter
        ? GALLERY_ITEMS.filter((item) => item.category === activeFilter)
        : GALLERY_ITEMS;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section
            id="galeri"
            className="relative py-24 md:py-32"
            style={{
                background: "linear-gradient(180deg, #1C1C1C 0%, #000000 100%)",
            }}
        >
            <div className="mx-auto w-full max-w-7xl px-6">
                {/* ── Title ── */}
                <motion.h1 
                    className="font-heading text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.12em] uppercase leading-[1.15] mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    Galeri<br />
                    Keberagaman,<br />
                    Keindahan
                </motion.h1>

                {/* ── Toolbar: label + filters ── */}
                <motion.div 
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Left label */}
                    <div className="flex items-center gap-4">
                        <span className="text-white/50 text-[11px] font-sans font-semibold tracking-[0.2em] uppercase">
                            Anugerah Tuhan
                        </span>
                        <div className="w-12 h-px bg-white/30" />
                    </div>

                    {/* Right filter tabs */}
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setActiveFilter(null)}
                            className={`px-4 py-2 rounded-sm text-[11px] font-sans font-bold tracking-[0.12em] uppercase transition-colors ${
                                activeFilter === null
                                    ? "bg-white text-black"
                                    : "bg-transparent text-white/60 hover:text-white"
                            }`}
                        >
                            Semua
                        </button>
                        {FILTER_TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveFilter(tab)}
                                className={`px-4 py-2 rounded-sm text-[11px] font-sans font-bold tracking-[0.12em] uppercase transition-colors ${
                                    activeFilter === tab
                                        ? "bg-white text-black"
                                        : "bg-transparent text-white/60 hover:text-white"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* ── Masonry Grid ── */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-3 [column-fill:balance]">
                    {filtered.map((item, i) => (
                        <motion.div
                            key={item.id}
                            className="break-inside-avoid mb-3 group relative rounded-lg overflow-hidden cursor-pointer"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, margin: "50px" }}
                            transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                            layout
                        >
                            {/* Image */}
                            <div
                                className={`relative w-full ${
                                    item.size === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                                }`}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.location}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                                {/* Category badge (visible on first of its kind or on hover) */}
                                <span className="absolute top-3 left-3 text-white/90 text-[10px] font-sans font-bold tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {item.category}
                                </span>
                            </div>

                            {/* Bottom info bar */}
                            <div className="flex items-center justify-between px-3 py-2.5 bg-[#111]">
                                <span className="text-white text-[11px] font-sans font-semibold tracking-wide uppercase">
                                    {item.location}
                                </span>
                                <Download
                                    size={14}
                                    className="text-white/40 group-hover:text-white transition-colors shrink-0"
                                    strokeWidth={2}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Bottom CTA ── */}
                <div className="flex flex-col items-center mt-16 md:mt-20">
                    <button
                        onClick={scrollToTop}
                        className="flex flex-col items-center gap-2 text-white/40 hover:text-white transition-colors group"
                    >
                        <Compass
                            size={24}
                            className="group-hover:rotate-45 transition-transform duration-500"
                            strokeWidth={1.5}
                        />
                        <span className="text-[11px] font-sans tracking-[0.15em] uppercase">
                            Kembali Jelajah
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
