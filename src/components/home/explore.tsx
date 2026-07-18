"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const CATEGORIES = [
    {
        id: "suku",
        title: "Suku",
        subtitle: "Kenali suku-suku asli Papua",
        image: "/img/explore/1.png", // Dark Green
    },
    {
        id: "tradisi",
        title: "Tradisi",
        subtitle: "Warisan budaya yang tetap lestari",
        image: "/img/explore/2.png", // Brown
    },
    {
        id: "makanan",
        title: "Makanan Khas",
        subtitle: "Cita rasa dari Tanah Papua",
        image: "/img/explore/3.png", // Blueish
    },
    {
        id: "cerita",
        title: "Cerita Rakyat",
        subtitle: "Legenda turun-temurun",
        image: "/img/explore/4.png", // Reddish
    },
];

export default function Explore() {
    return (
        <section className="w-full min-h-screen bg-[url('/img/explore-bg.png')] bg-cover bg-center bg-no-repeat relative py-24 flex flex-col items-center">
            {/* Header Content */}
            <motion.div 
                className="flex flex-col items-center justify-center text-center px-6 max-w-3xl mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
            >
                <h5 className="text-papua-yellow font-semibold text-lg md:text-xl font-sans tracking-[0.2em] uppercase mb-4">
                    JELAJAHI PAPUA
                </h5>
                <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
                    <span className="text-papua-yellow">Jelajahi Berdasarkan </span>
                    <span className="text-papua-green">Kategori</span>
                </h1>
                <p className="text-gray-500 text-sm md:text-base font-sans leading-relaxed">
                    Temukan keberagaman Papua melalui suku, tradisi, kuliner khas, dan cerita rakyat yang diwariskan dari generasi ke generasi.
                </p>
            </motion.div>

            {/* Cards Accordion */}
            <motion.div 
                className="w-full max-w-7xl px-6 md:px-8 flex flex-col md:flex-row gap-4 h-[480px] md:h-[600px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                }}
            >
                {CATEGORIES.map((cat) => (
                    <motion.div
                        key={cat.id}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        className="group relative rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex-1 hover:flex-2 h-full cursor-pointer shadow-xl"
                    >
                        <Image src={cat.image} alt={cat.title} width={200} height={200} className="absolute inset-0 bg-cover bg-top bg-no-repeat transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover object-center" />
                        
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80" />
                        
                        {/* Non-hovered state (Vertical Title) */}
                        <div className="hidden md:block absolute bottom-10 left-6 md:left-8 transition-all duration-500 ease-out opacity-100 group-hover:opacity-0 group-hover:-translate-x-4">
                            <div className="flex flex-col items-center gap-1" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                                <h3 className="text-white font-bold text-2xl md:text-3xl whitespace-nowrap font-heading tracking-wide">
                                    {cat.title}
                                </h3>
                                <p className="text-white/70 text-xs md:text-sm whitespace-nowrap font-sans">
                                    {cat.subtitle}
                                </p>
                            </div>
                        </div>
                        
                        {/* Hovered state (Horizontal Content) */}
                        <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-4 transition-all duration-500 ease-out opacity-100 translate-y-0 md:opacity-0 md:translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                            <div className="flex flex-col gap-1 md:gap-2">
                                <h3 className="text-white font-bold text-xl md:text-3xl lg:text-4xl font-heading tracking-wide">
                                    {cat.title}
                                </h3>
                                <p className="text-white/80 text-xs md:text-sm font-sans hidden md:block">
                                    {cat.subtitle}
                                </p>
                            </div>
                            
                            {/* Explore Button */}
                            <button className="shrink-0 flex items-center justify-center gap-2 border border-white/50 hover:border-white rounded-full px-4 py-2 md:px-6 md:py-3 text-white text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors hover:bg-white/10 w-max">
                                <span>Explore</span>
                                <ChevronRight className="w-4 h-4 md:w-4 md:h-4" strokeWidth={2.5} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}