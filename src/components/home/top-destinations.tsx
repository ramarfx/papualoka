"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DESTINATIONS } from "@/data/destinations";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TOTAL = DESTINATIONS.length;

// Carousel card images — 5 unique cards in rotation + 2 wrapping for seamless carousel
const CAROUSEL_CARDS = [
    "/img/destination/rajaampat-card.png",
    "/img/destination/sentani-card.png",
    "/img/destination/baliem-card.png",
    "/img/destination/jayawijaya-card.png",
    "/img/destination/paniai-card.png",
    "/img/destination/rajaampat-card.png",
    "/img/destination/sentani-card.png",
];

// ── Vertical indicator dots ──────────────────────────────────────────
function VerticalIndicator({
    activeIndex,
    onSelect,
}: {
    activeIndex: number;
    onSelect: (i: number) => void;
}) {
    return (
        <div className="absolute left-6 md:left-12 top-0  z-30 flex flex-col items-center gap-2">
            <div className=" w-0.5 h-16 bg-white/60" />
            {DESTINATIONS.map((_, i) => (
                <div key={i} className="relative flex flex-col justify-center items-center gap-2">
                    <button
                        key={i}
                        onClick={() => onSelect(i)}
                        aria-label={`Destinasi ${i + 1}`}
                        className="relative z-10 flex items-center justify-center w-7 h-7 cursor-pointer"
                    >
                        <div
                            className={`rounded-full flex items-center justify-center transition-all duration-500
                            ${activeIndex === i
                                    ? "w-7.5 h-7.5 bg-white/60"
                                    : "w-2 h-2 bg-white/30 hover:bg-white/60"
                                }`}
                        >
                            {activeIndex === i && (
                                <span className="text-lg font-semibold text-white font-sans">
                                    {i + 1}
                                </span>
                            )}
                        </div>
                    </button>

                    <div className=" w-0.5 h-15 bg-white/60" />
                </div>
            ))}
        </div>
    );
}

export default function TopDestinations() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardTrackRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!sectionRef.current || !cardTrackRef.current) return;

            const bgs = gsap.utils.toArray<HTMLElement>(".dest-bg", sectionRef.current);
            const texts = gsap.utils.toArray<HTMLElement>(".dest-text", sectionRef.current);
            const allCards = gsap.utils.toArray<HTMLElement>(".carousel-card", cardTrackRef.current);

            // Set initial states — hide all texts except first, set card scales
            texts.forEach((t, i) => {
                gsap.set(t, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 25 });
            });
            allCards.forEach((c, i) => {
                gsap.set(c, { scale: i === 0 ? 1.15 : 0.9, opacity: i === 0 ? 1 : 0.5 });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
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
                const label = `s${i}`;
                tl.addLabel(label);

                // 1. Fade out current text
                tl.to(texts[i], { opacity: 0, y: -20, duration: 0.4, ease: "none" }, label);

                // 2. Crossfade backgrounds
                tl.to(bgs[i], { opacity: 0, duration: 0.5, ease: "none" }, label);
                tl.to(bgs[i + 1], { opacity: 1, duration: 0.5, ease: "none" }, label);

                // 3. Slide card track left by one card position
                tl.to(cardTrackRef.current, {
                    x: `${-(i + 1) * 176}`,  // 160px card + 16px gap
                    duration: 0.5,
                    ease: "none",
                }, label);

                // 4. Shrink current active card, grow next
                tl.to(allCards[i], { scale: 0.9, opacity: 0.5, duration: 0.5, ease: "none" }, label);
                tl.to(allCards[i + 1], { scale: 1.15, opacity: 1, duration: 0.5, ease: "none" }, label);

                // 5. Fade in next text
                tl.to(texts[i + 1], { opacity: 1, y: 0, duration: 0.4, ease: "none" }, `${label}+=0.15`);

                // Breathing room
                if (i < TOTAL - 2) tl.to({}, { duration: 0.1 });
            }
        },
        { scope: sectionRef }
    );

    const goTo = useCallback((index: number) => {
        const trigger = ScrollTrigger.getAll().find(
            (t) => t.trigger === sectionRef.current
        );
        if (!trigger) return;
        const progress = index / TOTAL;
        const scrollTo = trigger.start + (trigger.end - trigger.start) * progress;
        gsap.to(window, { scrollTo: { y: scrollTo }, duration: 0.8, ease: "power3.inOut" });
    }, []);

    return (
        <section className="relative" ref={sectionRef} id="top-destinasi">
            <div className="relative w-full h-screen overflow-hidden">
                {/* ── Background layers (stacked) ── */}
                {DESTINATIONS.map((dest, i) => (
                    <div
                        key={dest.id}
                        className="dest-bg absolute inset-0 z-0"
                        style={{ opacity: i === 0 ? 1 : 0 }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
                            style={{ backgroundImage: `url(${dest.bgImage})` }}
                        />
                        <div className="absolute inset-0 bg-papua-dark/20" />
                        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-papua-dark to-transparent" />
                    </div>
                ))}

                {/* ── Content ── */}
                <div className="relative z-10 w-full h-full flex items-center px-20 md:px-36 lg:px-44">
                    <div className="w-full flex items-center justify-between gap-8">
                        {/* Left: Text layers (stacked, fade in/out) */}
                        <div className="flex-1 min-w-0 max-w-md relative">
                            {DESTINATIONS.map((dest, i) => (
                                <div
                                    key={dest.id}
                                    className={`dest-text flex flex-col gap-5 ${i === 0 ? "relative" : "absolute inset-0"}`}
                                >
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm w-max px-4 py-2 rounded-full">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#D3B745]" />
                                        <span className="font-sans text-xs text-white font-semibold tracking-wide">
                                            Top Destinasi
                                        </span>
                                    </div>
                                    <h2 className="font-heading text-white text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1]">
                                        {dest.name}
                                    </h2>
                                    <p className="font-sans text-white/70 text-sm md:text-[15px] leading-relaxed">
                                        {dest.description}
                                    </p>
                                    <button className="flex items-center gap-2 border border-white/40 hover:border-white text-white hover:bg-white/10 transition-all w-max px-6 py-3 rounded-full font-sans text-xs font-bold tracking-[0.15em] uppercase group">
                                        <span>Explore</span>
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Right: Card carousel */}
                        <div className="flex-shrink-0 hidden md:block overflow-hidden" style={{ width: 540 }}>
                            <div
                                ref={cardTrackRef}
                                className="flex items-center gap-4 will-change-transform"
                            >
                                {CAROUSEL_CARDS.map((src, i) => (
                                    <div
                                        key={`card-${i}`}
                                        className="carousel-card relative shrink-0 rounded-xl overflow-hidden shadow-2xl"
                                        style={{ width: 160, height: 280, transformOrigin: "center center" }}
                                    >
                                        <Image src={src} alt="Destination" fill className="object-cover" sizes="160px" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Vertical Indicator ── */}
                <VerticalIndicator activeIndex={activeIndex} onSelect={goTo} />
            </div>
            <div>
                {/* ── Cloud overlay ── */}
                <div className="absolute -bottom-0.5 w-full z-50 pointer-events-none">
                    <Image src="/img/cloud.png" width={1140} height={283} alt="Cloud" className="w-full" />
                </div>
            </div>
        </section>
    );
}
