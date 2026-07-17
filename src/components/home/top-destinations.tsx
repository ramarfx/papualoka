"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DESTINATIONS, type Destination } from "@/data/destinations";

gsap.registerPlugin(ScrollTrigger);


const TOTAL = DESTINATIONS.length;


function VerticalIndicator({
    activeIndex,
    onSelect,
}: {
    activeIndex: number;
    onSelect: (i: number) => void;
}) {
    return (
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-4">
            {/* Line behind dots */}
            <div className="absolute top-2 bottom-2 left-1/2 -translate-x-1/2 w-px bg-white/15" />

            {DESTINATIONS.map((_, i) => (
                <button
                    key={i}
                    onClick={() => onSelect(i)}
                    aria-label={`Destinasi ${i + 1}`}
                    className="relative z-10 flex items-center justify-center w-7 h-7 cursor-pointer"
                >
                    <div
                        className={`rounded-full flex items-center justify-center transition-all duration-500
                            ${activeIndex === i
                                ? "w-6 h-6 border-2 border-white bg-[#0F0F0F]/80"
                                : "w-2 h-2 bg-white/30 hover:bg-white/60"
                            }`}
                    >
                        {activeIndex === i && (
                            <span className="text-[9px] font-bold text-white font-sans">
                                {i + 1}
                            </span>
                        )}
                    </div>
                </button>
            ))}
        </div>
    );
}

/** Single image card */
function DestinationCard({ src, isPrimary }: { src: string; isPrimary: boolean }) {
    return (
        <div
            className={`destination-card relative shrink-0 rounded-xl overflow-hidden shadow-2xl
                ${isPrimary
                    ? "w-[170px] h-[280px] md:w-[210px] md:h-[340px]"
                    : "w-[120px] h-[210px] md:w-[150px] md:h-[270px] opacity-60"
                }`}
        >
            <Image
                src={src}
                alt="Destination preview"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 170px, 210px"
            />
        </div>
    );
}

/** Content panel for one destination (used for animation targets) */
function DestinationSlide({
    destination,
    isActive,
}: {
    destination: Destination;
    isActive: boolean;
}) {
    return (
        <div
            className={`absolute inset-0 flex items-center transition-none
                ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
            data-destination-slide
        >
            {/* Background */}
            <div
                className="absolute inset-0 z-0 transition-opacity duration-700 ease-in-out bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${destination.bgImage})`,
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "scale(1)" : "scale(1.05)",
                    transition: "opacity 0.7s ease-in-out, transform 1.2s ease-out",
                }}
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-papua-dark/20 z-1" />
            <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-papua-dark/80 to-transparent z-1" />
            <div className="absolute -bottom-20 w-full z-50">
                <Image
                    src={"/img/cloud.png"}
                    width={1140}
                    height={283}
                    alt="Cloud"
                    className="w-full"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 w-full h-full flex items-center px-20 md:px-36 lg:px-44">
                <div className="w-full flex items-center justify-between gap-8">
                    {/* Left: Text */}
                    <div
                        className="flex-1 min-w-0 flex flex-col gap-5 max-w-md transition-all duration-500 ease-out"
                        style={{
                            opacity: isActive ? 1 : 0,
                            transform: isActive ? "translateY(0)" : "translateY(40px)",
                            transitionDelay: isActive ? "0.15s" : "0s",
                        }}
                    >
                        {/* Badge */}
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm w-max px-4 py-2 rounded-full">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#D3B745]" />
                            <span className="font-sans text-xs text-white font-semibold tracking-wide">
                                Top Destinasi
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="font-heading text-white text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1]">
                            {destination.name}
                        </h2>

                        {/* Description */}
                        <p className="font-sans text-white/70 text-sm md:text-[15px] leading-relaxed">
                            {destination.description}
                        </p>

                        {/* CTA */}
                        <button className="flex items-center gap-2 border border-white/40 hover:border-white text-white hover:bg-white/10 transition-all w-max px-6 py-3 rounded-full font-sans text-xs font-bold tracking-[0.15em] uppercase group">
                            <span>Explore</span>
                            <ChevronRight
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                strokeWidth={3}
                            />
                        </button>
                    </div>

                    {/* Right: Cards */}
                    <div
                        className="flex-shrink-0 hidden md:flex items-center gap-3 md:gap-4 transition-all duration-600 ease-out"
                        style={{
                            opacity: isActive ? 1 : 0,
                            transform: isActive ? "translateX(0)" : "translateX(80px)",
                            transitionDelay: isActive ? "0.25s" : "0s",
                        }}
                    >
                        {destination.cards.map((src, i) => (
                            <DestinationCard key={src} src={src} isPrimary={i === 0} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Main Component ─────────────────────────────────────────────────

export default function TopDestinations() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);

    // GSAP ScrollTrigger — pin the section and update activeIndex based on scroll progress
    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: `+=${window.innerHeight * (TOTAL - 1)}`,
                pin: pinRef.current,
                pinSpacing: true,
                scrub: 0.5,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const newIndex = Math.min(
                        Math.floor(progress * TOTAL),
                        TOTAL - 1
                    );
                    setActiveIndex(newIndex);
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Allow clicking indicator dots to scroll to that destination
    const goTo = (index: number) => {
        const trigger = ScrollTrigger.getAll().find(
            (t) => t.trigger === sectionRef.current
        );
        if (!trigger) return;

        const progress = index / TOTAL;
        const scrollTo = trigger.start + (trigger.end - trigger.start) * progress;
        gsap.to(window, {
            scrollTo: { y: scrollTo },
            duration: 0.8,
            ease: "power3.inOut",
        });
    };

    return (
        <div ref={sectionRef} id="top-destinasi">
            <div
                ref={pinRef}
                className="relative w-full h-screen overflow-hidden"
            >
                {/* All destination slides stacked */}
                {DESTINATIONS.map((dest, i) => (
                    <DestinationSlide
                        key={dest.id}
                        destination={dest}
                        isActive={activeIndex === i}
                    />
                ))}

                {/* Vertical Indicator (always on top) */}
                <VerticalIndicator activeIndex={activeIndex} onSelect={goTo} />
            </div>
        </div>
    );
}
