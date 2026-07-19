"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TRIBES = [
    {
        id: "1",
        category: "SENI UKIR | KEHIDUPAN TRADISIONAL",
        title: "Suku Asmat,<br/>dan Warisan Ukirannya",
        description: "Suku Asmat dikenal melalui kehidupan tradisionalnya yang masih sangat dekat dengan alam. Mereka hidup dari berburu dan berkebun, sementara sagu menjadi makanan pokok yang diwariskan dari generasi ke generasi.",
        image: "/img/adat/1.png"
    },
    {
        id: "2",
        category: "TRADISI ADAT | IKI PALEK",
        title: "Iki Palek,<br/>Tradisi Papua Pegunungan",
        description: "Upacara potong jari, jari yang hilang menjadi simbol betapa hancurnya perasaan seseorang setelah ditinggal pergi oleh orang tercinta. Lewat tradisi ini, masyarakat juga berharap bisa menolak bala agar keluarga mereka terhindar dari petaka yang sama.",
        image: "/img/adat/2.png"
    },
    {
        id: "3",
        category: "SENJATA TRADISIONAL | BUSUR PANAH",
        title: "Busur (Suwa)<br/>dan Panah (Wim)",
        description: "Busur dan panah merupakan salah satu senjata tradisional yang digunakan oleh masyarakat Papua dalam berburu dan berperang. Busur terbuat dari kayu dan tali, sedangkan panah terbuat dari kayu dan bulu.",
        image: "/img/adat/3.png"
    },
    {
        id: "4",
        category: "PAKAIAN ADAT | KOTEKA",
        title: "Pakaian Koteka,<br/>dengan Keunikannya",
        description: "busana adat ikonik berupa selubung pelindung bagi kaum pria dari berbagai suku asli di pedalaman Papua. Jauh dari kesan modern, pakaian tradisional yang unik ini dibuat secara alami dari buah labu air (Lagenaria siceraria) yang dikeringkan, dibersihkan bagian dalamnya.",
        image: "/img/adat/4.png"
    },
    {
        id: "5",
        category: "TARIAN TRADISIONAL | TARI SUANGGI",
        title: "Tari Suanggi,<br/>Ritual Pengusiran Roh",
        description: "Tari Suanggi adalah tarian tradisional bernuansa magis asal Papua yang berfungsi sebagai ritual pengusiran roh jahat. Tarian ini biasanya ditarikan ketika ada warga yang meninggal akibat ilmu hitam atau karena arwah masih memiliki janji yang belum terpenuhi.",
        image: "/img/adat/5.png"
    },
    {
        id: "6",
        category: "HUNIAN TRADISIONAL | RUMAH POHON",
        title: "Rumah Pohon,<br/>Khas Suku Korowai",
        description: "Rumah pohon adalah hunian tradisional masyarakat suku Korowai di pedalaman Papua. Dibangun tinggi di antara pohon-pohon besar, rumah ini berfungsi sebagai tempat tinggal sekaligus benteng pertahanan dari ancaman luar, termasuk satwa liar dan suku lain.",
        image: "/img/adat/6.png"
    }
];

import { FadeUpSentences } from "@/components/ui/fade-up-sentences";

const ABOUT_TEXT = "“Di ujung timur Nusantara, Papua berdiri sebagai rumah bagi berbagai suku yang hidup berdampingan dengan alam. Dari pesisir hingga pegunungan, setiap daerah menyimpan cerita, tradisi, dan kearifan lokal yang membentuk identitas masyarakatnya. Keragaman bahasa, budaya, dan cara hidup yang terus dijaga dari generasi ke generasi menjadikan Tanah Cenderawasih bukan sekadar wilayah geografis, melainkan simbol kekayaan Indonesia yang patut dikenali, dihargai, dan dilestarikan.”";

export default function About() {
    const [activeIndex, setActiveIndex] = useState(0);
    const TOTAL = TRIBES.length;

    // Auto-play interval
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % TOTAL);
        }, 5000); // Ganti slide setiap 5 detik

        return () => clearInterval(timer);
    }, [TOTAL]);

    const goTo = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section className="bg-papua-green relative transition-colors duration-500 overflow-hidden pb-32">
            {/* Top Paragraph */}
            <div className="px-6 mx-auto w-full max-w-7xl pt-24 pb-12 relative z-20">
                <FadeUpSentences
                    className="text-[#4D7C55] text-xl md:text-4xl font-medium italic font-sans text-justify"
                >
                    {ABOUT_TEXT}
                </FadeUpSentences>
            </div>

            {/* Standard Auto-Playing Carousel Section */}
            <div className="relative w-full flex flex-col justify-center z-10">
                {/* Dots background */}
                <Image src="/img/papua-dots.png" alt="Background" width={1014} height={896} className="opacity-20 absolute right-0 bottom-0 pointer-events-none mix-blend-overlay -z-10" />

                <div className="px-6 mx-auto w-full max-w-7xl relative z-10">
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-10">
                        Beragamnya <span className="text-papua-yellow">Negeri Papua</span>
                    </h1>

                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-6 relative w-full h-[550px] md:h-[400px]">
                        {/* Image Track */}
                        <div className="relative w-full md:w-[45%] h-[250px] md:h-full rounded-2xl overflow-hidden shadow-2xl shrink-0 bg-black/20">
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                >
                                    <Image src={TRIBES[activeIndex].image} alt="Tribe" fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Text Track */}
                        <div className="relative w-full md:flex-1 h-[250px] md:h-full flex flex-col justify-start md:justify-center pr-0 md:pr-12 pt-4 md:pt-0">
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="absolute inset-x-0 top-4 md:top-auto flex flex-col pointer-events-none w-full"
                                >
                                    <p className="text-[#a0b0a3] text-xs font-bold tracking-[0.15em] uppercase mb-2 md:mb-3 font-sans">
                                        {TRIBES[activeIndex].category}
                                    </p>
                                    <h2 className="text-white text-2xl md:text-3xl lg:text-[42px] leading-[1.2] font-bold font-sans mb-3 md:mb-4" dangerouslySetInnerHTML={{ __html: TRIBES[activeIndex].title }} />
                                    <p className="text-[#c4d0c6] text-xs md:text-sm lg:text-base leading-relaxed font-sans w-full md:max-w-10/12">
                                        {TRIBES[activeIndex].description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Indicator */}
                        <div className="absolute bottom-0 right-1/2 translate-x-1/2 md:translate-x-0 md:bottom-auto md:right-0 md:top-1/2 md:-translate-y-1/2 flex flex-row md:flex-col items-center gap-4 z-20 pointer-events-auto">
                            <button
                                onClick={() => goTo(activeIndex === 0 ? TOTAL - 1 : activeIndex - 1)}
                                className="hidden md:flex w-10 h-10 rounded-full border items-center justify-center transition-colors border-white/50 text-white hover:border-papua-yellow hover:text-papua-yellow cursor-pointer"
                            >
                                <ChevronUp size={20} />
                            </button>

                            <div className="flex flex-row md:flex-col items-center gap-2 px-2 md:px-0 py-0 md:py-2">
                                {TRIBES.map((_, i) => (
                                    <button
                                        key={`dot-${i}`}
                                        onClick={() => goTo(i)}
                                        className="px-1 md:px-0 py-0 md:py-1 group cursor-pointer"
                                        aria-label={`Go to slide ${i + 1}`}
                                    >
                                        <div className={`transition-all duration-300 rounded-full group-hover:bg-white group-hover:opacity-100 ${i === activeIndex ? 'w-6 h-[3px] md:w-[3px] md:h-6 bg-white' : 'w-2 h-[3px] md:w-[3px] md:h-2 bg-white/30'}`} />
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => goTo((activeIndex + 1) % TOTAL)}
                                className="hidden md:flex w-10 h-10 rounded-full border items-center justify-center transition-colors border-white/50 text-white hover:border-papua-yellow hover:text-papua-yellow cursor-pointer"
                            >
                                <ChevronDown size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}