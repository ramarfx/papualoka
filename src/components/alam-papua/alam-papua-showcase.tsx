"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trees } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ALAM_SECTIONS, ALAM_TOTAL } from "@/data/alam-papua-data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ── Vertical Indicator (consistent with top-destinations) ────────────
function VerticalIndicator({
    activeIndex,
    onSelect,
}: {
    activeIndex: number;
    onSelect: (i: number) => void;
}) {
    return (
        <div className="absolute right-3 sm:right-6 md:right-10 lg:right-14 bottom-2 md:bottom-0 z-30 flex flex-col items-end">
            <div className="w-0.5 h-10 md:h-20 bg-white/60 mr-1" />
            {ALAM_SECTIONS.map((sec, i) => (
                <div key={sec.id} className="flex flex-col justify-center items-end">
                    <button
                        onClick={() => onSelect(i)}
                        aria-label={`Section ${i + 1}: ${sec.label}`}
                        className="group relative z-10 flex items-center gap-1.5 md:gap-2 cursor-pointer py-0.5 md:py-0"
                    >
                        {/* Label */}
                        <span
                            className={`text-[10px] md:text-[11px] font-sans font-semibold tracking-wide transition-all duration-500 ${activeIndex === i
                                ? "text-white opacity-100"
                                : "text-white/40 opacity-70 group-hover:opacity-100"
                                }`}
                        >
                            <span className="hidden sm:inline">{sec.label} </span>{String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Dot container for perfect alignment */}
                        <div className="w-3 h-3 flex justify-end items-center">
                            {/* Dot */}
                            <div
                                className={`rounded-full transition-all duration-500 ${activeIndex === i
                                    ? "size-2.5 md:size-3 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                    : "size-2 md:size-2.5 bg-white/40 group-hover:bg-white/70"
                                    }`}
                            />
                        </div>
                    </button>
                    {i + 1 < ALAM_SECTIONS.length ? (
                        <div className="w-0.5 h-8 md:h-16 mr-1 border-white/60 border-0.5 border border-dashed" />
                    ) : (
                        <div className="w-0.5 h-10 md:h-20 mr-1 border border-white/60 border-0.5" />
                    )}
                </div>
            ))}
        </div>
    );
}

// ── Main Showcase ────────────────────────────────────────────────────
export default function AlamPapuaShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!sectionRef.current) return;

            const container = sectionRef.current;
            const bgs = gsap.utils.toArray<HTMLElement>(".alam-bg", container);
            const titleGroups = gsap.utils.toArray<HTMLElement>(".alam-title-group", container);
            const descs = gsap.utils.toArray<HTMLElement>(".alam-desc", container);
            const facts = gsap.utils.toArray<HTMLElement>(".alam-fact", container);
            const images = gsap.utils.toArray<HTMLElement>(".alam-img", container);
            const bgOverlay = container.querySelector(".alam-bg-color") as HTMLElement;

            // Initial states
            bgs.forEach((bg, i) => {
                gsap.set(bg, { opacity: i === 0 ? 1 : 0 });
            });
            titleGroups.forEach((group, i) => {
                const lines = group.querySelectorAll<HTMLElement>(".alam-title-line");
                lines.forEach((line) => {
                    gsap.set(line, {
                        yPercent: i === 0 ? 0 : 110,
                        opacity: i === 0 ? 1 : 0,
                    });
                });
            });
            descs.forEach((d, i) => {
                gsap.set(d, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 30 });
            });
            facts.forEach((f, i) => {
                gsap.set(f, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 30 });
            });
            images.forEach((img, i) => {
                gsap.set(img, { opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 1.05 });
            });

            // Color interpolation values: from papua-green (#1A4321) → papua-dark (#0F0F0F)
            const greenR = 0x1A, greenG = 0x43, greenB = 0x21;
            const darkR = 0x0F, darkG = 0x0F, darkB = 0x0F;

            // Build main timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: `+=${window.innerHeight * (ALAM_TOTAL - 1) * 1.2}`,
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    snap: {
                        snapTo: 1 / (ALAM_TOTAL - 1),
                        duration: { min: 0.2, max: 0.5 },
                        ease: "power1.inOut",
                    },
                    onUpdate: (self) => {
                        const idx = Math.min(
                            Math.floor(self.progress * ALAM_TOTAL),
                            ALAM_TOTAL - 1
                        );
                        setActiveIndex(idx);

                        // Interpolate background color
                        if (bgOverlay) {
                            const p = self.progress;
                            const r = Math.round(greenR + (darkR - greenR) * p);
                            const g = Math.round(greenG + (darkG - greenG) * p);
                            const b = Math.round(greenB + (darkB - greenB) * p);
                            bgOverlay.style.backgroundColor = `rgb(${r},${g},${b})`;
                        }
                    },
                },
            });

            for (let i = 0; i < ALAM_TOTAL - 1; i++) {
                const label = `s${i}`;
                tl.addLabel(label);

                // Get title lines for current and next
                const currentLines = titleGroups[i].querySelectorAll<HTMLElement>(".alam-title-line");
                const nextLines = titleGroups[i + 1].querySelectorAll<HTMLElement>(".alam-title-line");

                // 1. Slide current title lines UP (clipped by overflow-hidden)
                currentLines.forEach((line, lineIdx) => {
                    tl.to(
                        line,
                        {
                            yPercent: -110,
                            opacity: 0,
                            duration: 0.4,
                            ease: "none",
                        },
                        `${label}+=${lineIdx * 0.05}`
                    );
                });

                // 2. Fade out current description + fact
                tl.to(descs[i], { opacity: 0, y: -15, duration: 0.3, ease: "none" }, label);
                tl.to(facts[i], { opacity: 0, y: -15, duration: 0.3, ease: "none" }, label);

                // 3. Crossfade images
                tl.to(images[i], { opacity: 0, duration: 0.5, ease: "none" }, label);
                tl.to(images[i + 1], { opacity: 1, scale: 1, duration: 0.5, ease: "none" }, label);

                // 4. Crossfade background overlays
                tl.to(bgs[i], { opacity: 0, duration: 0.5, ease: "none" }, label);
                tl.to(bgs[i + 1], { opacity: 1, duration: 0.5, ease: "none" }, label);

                // 5. Slide NEXT title lines UP into view (from below, clipped)
                nextLines.forEach((line, lineIdx) => {
                    tl.to(
                        line,
                        {
                            yPercent: 0,
                            opacity: 1,
                            duration: 0.4,
                            ease: "none",
                        },
                        `${label}+=0.15+=${lineIdx * 0.05}`
                    );
                });

                // 6. Fade in next description + fact
                tl.to(
                    descs[i + 1],
                    { opacity: 1, y: 0, duration: 0.35, ease: "none" },
                    `${label}+=0.2`
                );
                tl.to(
                    facts[i + 1],
                    { opacity: 1, y: 0, duration: 0.35, ease: "none" },
                    `${label}+=0.25`
                );

                // Breathing room between transitions
                if (i < ALAM_TOTAL - 2) tl.to({}, { duration: 0.15 });
            }

            // 7. At the end of the showcase, fade out background image overlay opacity to 0
            const endLabel = "s_end";
            tl.addLabel(endLabel);
            tl.to(bgs[ALAM_TOTAL - 1], { opacity: 0, duration: 0.4, ease: "none" }, endLabel);
        },
        { scope: sectionRef }
    );

    const goTo = useCallback((index: number) => {
        const trigger = ScrollTrigger.getAll().find(
            (t) => t.trigger === sectionRef.current
        );
        if (!trigger) return;
        const progress = index / ALAM_TOTAL;
        const scrollTo = trigger.start + (trigger.end - trigger.start) * progress;
        gsap.to(window, {
            scrollTo: { y: scrollTo },
            duration: 0.8,
            ease: "power3.inOut",
        });
    }, []);

    return (
        <section ref={sectionRef} className="relative" id="alam-papua">
            <div className="relative w-full h-screen overflow-hidden">
                {/* ── Background color layer (transitions green → dark) ── */}
                <div
                    className="alam-bg-color absolute inset-0 z-0 bg-papua-dark"
                    style={{ backgroundColor: "#1A4321" }}
                />

                {/* ── Subtle background image layers ── */}
                {ALAM_SECTIONS.map((sec, i) => (
                    <div
                        key={`bg-${sec.id}`}
                        className="alam-bg absolute inset-0 z-1"
                        style={{ opacity: i === 0 ? 1 : 0 }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
                            style={{ backgroundImage: `url(${sec.image})` }}
                        />
                    </div>
                ))}

                {/* ── Gradient overlays ── */}
                <div className="absolute inset-0 z-2 pointer-events-none">
                    <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-black/30 to-transparent" />
                </div>



                {/* ── Main Content Grid ── */}
                <div className="relative z-10 w-full h-full flex items-start md:items-end px-4 sm:px-8 md:px-0 pt-32 md:pt-0 pb-6 md:pb-0">
                    <div className="w-full flex flex-col md:flex-row items-center md:items-center gap-4 sm:gap-6 md:gap-10 lg:gap-16 max-w-6xl px-4 sm:px-8 md:px-0 pr-10 sm:pr-14 md:pr-0">
                        {/* Left: Image stack */}
                        <div className="relative w-full max-w-full sm:max-h-[250px] md:max-h-none md:max-w-none md:w-[38%] lg:w-[30vw] shrink-0">
                            <div className="relative w-full aspect-4/3 h-[250px] md:h-auto md:aspect-3/4 rounded-xl md:rounded-none md:rounded-tr-lg overflow-hidden">
                                {ALAM_SECTIONS.map((sec, i) => (
                                    <div
                                        key={`img-${sec.id}`}
                                        className="alam-img absolute inset-0 flex items-center justify-center"
                                        style={{ opacity: i === 0 ? 1 : 0 }}
                                    >
                                        <Image
                                            src={sec.image}
                                            alt={sec.title.join(" ")}
                                            width={474}
                                            height={593}
                                            className="object-cover w-full md:w-auto h-full"
                                            priority={i === 0}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Text content */}
                        <div className="flex-1 min-w-0 w-full md:w-auto relative">
                            {/* Titles (stacked, each set positioned absolute except first) */}
                            <div className="relative mb-3 md:mb-6 min-h-[48px] sm:min-h-[56px] md:min-h-0">
                                {ALAM_SECTIONS.map((sec, i) => (
                                    <div
                                        key={`title-${sec.id}`}
                                        className={`alam-title-group flex flex-col gap-0 ${i === 0 ? "relative" : "absolute inset-0"
                                            }`}
                                    >
                                        {sec.title.map((line, lineIdx) => (
                                            <div
                                                key={lineIdx}
                                                className="overflow-hidden"
                                            >
                                                <div className="alam-title-line">
                                                    <h2 className="font-heading text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-[1.1] tracking-tight">
                                                        {line}
                                                    </h2>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            {/* Descriptions (stacked) */}
                            <div className="relative md:mb-8 sm:min-h-[60px] md:min-h-[80px]">
                                {ALAM_SECTIONS.map((sec, i) => (
                                    <p
                                        key={`desc-${sec.id}`}
                                        className={`alam-desc font-sans text-white/70 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-md ${i === 0 ? "relative" : "absolute top-0 left-0 right-0"
                                            }`}
                                    >
                                        {sec.description}
                                    </p>
                                ))}
                            </div>

                            {/* Fact cards (stacked) */}
                            <div className="relative mt-2 min-h-[72px] sm:min-h-[80px] md:min-h-[90px]">
                                {ALAM_SECTIONS.map((sec, i) => (
                                    <div
                                        key={`fact-${sec.id}`}
                                        className={`alam-fact flex items-stretch gap-0 p-2 bg-white/5 backdrop-blur-xs rounded-lg overflow-hidden border border-white/10 max-w-md ${i === 0 ? "relative" : "absolute top-0 left-0 right-0"
                                            }`}
                                    >
                                        {/* Fact text */}
                                        <div className="flex-1 flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 ">
                                            <Trees className="text-white size-10" />

                                            <p className="text-white/80 font-sans text-[10px] sm:text-xs leading-relaxed">
                                                {sec.factText}
                                            </p>
                                        </div>

                                        {/* Fact image */}
                                        <div className="relative w-20 sm:w-24 md:w-28 shrink-0">
                                            <Image
                                                src={sec.factImage}
                                                alt="Fact"
                                                fill
                                                className="object-cover object-center rounded-lg"
                                                sizes="112px"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Vertical Indicator ── */}
                <VerticalIndicator activeIndex={activeIndex} onSelect={goTo} />
            </div>
        </section>
    );
}


