"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { ChevronUp, ChevronDown } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP, ScrollToPlugin);
}

const TRIBES = [
    {
        id: "asmat",
        category: "SENI UKIR | KEHIDUPAN TRADISIONAL",
        title: "Suku Asmat,<br/>dan Warisan Ukirannya",
        description: "Suku Asmat dikenal melalui kehidupan tradisionalnya yang masih sangat dekat dengan alam. Mereka hidup dari berburu dan berkebun, sementara sagu menjadi makanan pokok yang diwariskan dari generasi ke generasi.",
        image: "/img/about/1.png"
    },
    {
        id: "dani",
        category: "TRADISI ADAT | LEMBAH BALIEM",
        title: "Suku Dani,<br/>Penjaga Budaya Papua",
        description: "Suku Dani terkenal dengan kehidupan agraris dan tradisi leluhur yang masih dipertahankan hingga kini. Salah satu adat yang paling dikenal adalah ritual pemotongan jari sebagai simbol duka mendalam.",
        image: "/img/about/2.png"
    },
    {
        id: "amungme",
        category: "TANAH LELUHUR | PETANI NOMADEN",
        title: "Suku Amungme,<br/>dan Kesakralan Alam",
        description: "Bagi masyarakat Amungme, pegunungan dan tanah leluhur memiliki nilai yang sangat sakral. Mereka menjalani kehidupan sebagai petani berpindah, pemburu, dan peramu yang bergantung pada alam.",
        image: "/img/about/3.png"
    },
    {
        id: "lani",
        category: "BAHASA MONI | IDENTITAS BUDAYA",
        title: "Suku Lani,<br/>dengan Keunikannya",
        description: "Suku Lani, yang juga dikenal sebagai Suku Loma, memiliki identitas budaya yang khas. Keunikan mereka terlihat dari penggunaan Bahasa Moni dan Bahasa Amung dalam kehidupan sehari-hari.",
        image: "/img/about/4.png"
    },
    {
        id: "muyu",
        category: "SUNGAI MUYU | STRUKTUR ADAT",
        title: "Suku Muyu,<br/>dan Kehidupan Sungai",
        description: "Masyarakat Suku Muyu hidup dengan berburu, menangkap ikan, dan mengolah sagu. Kehidupan mereka dipimpin oleh tokoh adat yang memiliki peran penting dalam masyarakat.",
        image: "/img/about/5.png"
    }
];

export default function About() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);
    const TOTAL = TRIBES.length;

    useGSAP(
        () => {
            if (!sectionRef.current || !pinRef.current) return;

            const texts = gsap.utils.toArray<HTMLElement>(".tribe-text", pinRef.current);
            const images = gsap.utils.toArray<HTMLElement>(".tribe-image", pinRef.current);

            // Initial state
            texts.forEach((t, i) => {
                gsap.set(t, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 20 });
            });
            images.forEach((img, i) => {
                gsap.set(img, { opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 1.05 });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: pinRef.current,
                    start: "top top",
                    end: `+=${window.innerHeight * (TOTAL - 1)}`,
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        const idx = Math.min(Math.floor(self.progress * TOTAL), TOTAL - 1);
                        setActiveIndex(idx);
                    },
                },
            });


            for (let i = 0; i < TOTAL - 1; i++) {
                const label = `t${i}`;
                tl.addLabel(label);

                // Fade out current
                tl.to(texts[i], { opacity: 0, y: -20, duration: 0.4, ease: "none" }, label);
                tl.to(images[i], { opacity: 0, scale: 1.05, duration: 0.5, ease: "none" }, label);

                // Fade in next
                tl.to(texts[i + 1], { opacity: 1, y: 0, duration: 0.4, ease: "none" }, `${label}+=0.15`);
                tl.to(images[i + 1], { opacity: 1, scale: 1, duration: 0.5, ease: "none" }, `${label}+=0.15`);

                // Breathing room
                if (i < TOTAL - 2) tl.to({}, { duration: 0.15 });
            }
        },
        { scope: sectionRef }
    );

    const goTo = useCallback((index: number) => {
        const trigger = ScrollTrigger.getAll().find(
            (t) => t.trigger === pinRef.current
        );
        if (!trigger) return;
        const progress = index / (TOTAL - 1);
        const scrollTo = trigger.start + (trigger.end - trigger.start) * progress;
        gsap.to(window, { scrollTo: { y: scrollTo, autoKill: false }, duration: 0.8, ease: "power3.inOut" });
    }, [TOTAL]);

    return (
        <section ref={sectionRef} className="bg-papua-green relative transition-colors duration-500 overflow-hidden">
            {/* Top Paragraph */}
            <div className="px-6 mx-auto w-full max-w-7xl pt-24 pb-12 relative z-10">
                <p className="text-[#4D7C55] text-3xl md:text-4xl font-medium italic font-sans leading-relaxed text-justify">
                    “Di ujung timur Nusantara, <span className="text-white">Papua</span> berdiri sebagai rumah bagi berbagai suku yang hidup berdampingan dengan alam. <span className="text-white">Dari pesisir</span> hingga pegunungan, setiap daerah menyimpan cerita, tradisi, dan kearifan lokal yang membentuk identitas masyarakatnya. <span className="text-white">Keragaman</span> bahasa, budaya, dan cara hidup yang terus dijaga dari generasi ke generasi menjadikan <span className="text-white">Tanah Cenderawasih</span> bukan sekadar wilayah geografis, melainkan simbol kekayaan Indonesia yang patut dikenali, dihargai, dan dilestarikan.”
                </p>
            </div>

            {/* Pinned Carousel Section */}
            <div ref={pinRef} className="relative w-full h-screen flex flex-col justify-center overflow-hidden z-10">
                {/* Dots background - moved inside pinRef so it stays pinned */}
                <Image src="/img/papua-dots.png" alt="Background" width={1014} height={896} className="opacity-80 absolute right-0 bottom-0 pointer-events-none mix-blend-overlay z-0" />

                <div className="px-6 mx-auto w-full max-w-7xl relative z-10">
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-10">
                        Beragamnya <span className="text-papua-yellow">Negeri Papua</span>
                    </h1>

                    <div className="flex flex-col md:flex-row items-center gap-6 relative w-full h-[320px] md:h-[400px]">
                        {/* Image Track */}
                        <div className="relative w-full md:w-[45%] h-full rounded-2xl overflow-hidden shadow-2xl shrink-0">
                            {TRIBES.map((tribe, i) => (
                                <div key={`img-${i}`} className="tribe-image absolute inset-0">
                                    <Image src={tribe.image} alt="Tribe" fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
                                </div>
                            ))}
                        </div>

                        {/* Text Track */}
                        <div className="relative flex-1 h-full flex flex-col justify-center items-center pr-12 md:pr-12">
                            {TRIBES.map((tribe, i) => (
                                <div key={`text-${i}`} className="tribe-text absolute inset-x-0  flex flex-col pointer-events-none w-full">
                                    <p className="text-[#a0b0a3] text-xs font-bold tracking-[0.15em] uppercase mb-3 font-sans">
                                        {tribe.category}
                                    </p>
                                    <h2 className="text-white text-3xl lg:text-[42px] leading-[1.2] font-bold font-sans mb-4" dangerouslySetInnerHTML={{ __html: tribe.title }} />
                                    <p className="text-[#c4d0c6] text-sm md:text-base leading-relaxed font-sans max-w-10/12">
                                        {tribe.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Indicator (Right edge) */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20 pointer-events-auto">
                            <button onClick={() => goTo(Math.max(0, activeIndex - 1))} className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${activeIndex === 0 ? 'border-white/20 text-white/20 cursor-default' : 'border-white/50 text-white hover:border-papua-yellow hover:text-papua-yellow cursor-pointer'}`}>
                                <ChevronUp size={20} />
                            </button>

                            <div className="flex flex-col items-center gap-2 py-2">
                                {TRIBES.map((_, i) => (
                                    <button 
                                        key={`dot-${i}`} 
                                        onClick={() => goTo(i)}
                                        className="py-1 group"
                                        aria-label={`Go to slide ${i + 1}`}
                                    >
                                        <div className={`w-[3px] transition-all duration-300 rounded-full group-hover:bg-white group-hover:opacity-100 ${i === activeIndex ? 'h-6 bg-white' : 'h-2 bg-white/30'}`} />
                                    </button>
                                ))}
                            </div>

                            <button onClick={() => goTo(Math.min(TOTAL - 1, activeIndex + 1))} className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${activeIndex === TOTAL - 1 ? 'border-white/20 text-white/20 cursor-default' : 'border-white/50 text-white hover:border-papua-yellow hover:text-papua-yellow cursor-pointer'}`}>
                                <ChevronDown size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}