"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Calendar from "@/components/kalender/calendar";
import EventDetail from "@/components/kalender/event-detail";
import GalleryCard from "@/components/kalender/gallery-card";
import { getEventByDate, KALENDER_EVENTS } from "@/data/kalender-events";

const EASE = [0.22, 1, 0.36, 1] as const;

const CONTAINER_VARIANTS = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
};

const HEADING_VARIANTS = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: EASE },
    },
};

const CALENDAR_VARIANTS = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: EASE },
    },
};

const RIGHT_COLUMN_VARIANTS = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.12 },
    },
};

const SLIDE_LEFT_VARIANTS = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: EASE },
    },
};

export default function KalenderBudaya() {
    const [startAnimation, setStartAnimation] = useState(false);
    const [year, setYear] = useState(2026);
    const [month, setMonth] = useState(8); // September (0-indexed)
    const [selected, setSelected] = useState<string | null>("2026-09-17");
    const [filterOpen, setFilterOpen] = useState(false);

    // Hover tracking for the three shared containers
    const [hover, setHover] = useState({
        calendar: false,
        event: false,
        gallery: false,
    });

    // Trigger animations only after the loader finishes — keep the page still
    // until the loader is gone so motion never fires during loading.
    useEffect(() => {
        const hasLoaded = sessionStorage.getItem("hasLoadedBefore");
        const delay = hasLoaded ? 1500 : 3500;
        const t = setTimeout(() => setStartAnimation(true), delay);
        return () => clearTimeout(t);
    }, []);

    const selectedEvent = useMemo(() => {
        if (!selected) return null;
        return getEventByDate(selected) ?? null;
    }, [selected]);

    const handleSelect = (key: string) => setSelected(key);

    const handlePrev = () => {
        let m = month - 1;
        let y = year;
        if (m < 0) {
            m = 11;
            y -= 1;
        }
        setMonth(m);
        setYear(y);
    };

    const handleNext = () => {
        let m = month + 1;
        let y = year;
        if (m > 11) {
            m = 0;
            y += 1;
        }
        setMonth(m);
        setYear(y);
    };

    const scrollToFirstEvent = () => {
        setSelected(KALENDER_EVENTS[0].date);
        setFilterOpen(false);
    };

    return (
        <section
            id="kalender-budaya"
            className="relative"
            style={{ backgroundColor: "#1F1F1F" }}
        >
            {/* Subtle ambient glow */}
            <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                    background:
                        "radial-gradient(60% 50% at 50% 0%, rgba(207,193,84,0.06), transparent 70%)",
                }}
            />

            <motion.div
                className="relative mx-auto w-full max-w-[1200px] px-6"
                style={{ paddingTop: 100, paddingBottom: 120 }}
                variants={CONTAINER_VARIANTS}
                initial="hidden"
                animate={startAnimation ? "visible" : "hidden"}
            >
                {/* Heading */}
                <motion.div
                    variants={HEADING_VARIANTS}
                    className="flex flex-col items-center text-center mb-10"
                >
                    <span className="text-papua-yellow font-sans text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase mb-4">
                        KALENDER BUDAYA
                    </span>
                    <h1 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5">
                        Jelajahi Acara
                    </h1>
                    <p className="text-white/65 font-sans text-sm md:text-base leading-relaxed max-w-[640px]">
                        Temukan rangkaian acara, festival, dan ritual adat yang
                        berlangsung di seluruh tanah Papua sepanjang tahun — pilih
                        tanggal untuk menyelami lebih dalam.
                    </p>
                </motion.div>

                {/* Filter Button */}
                <motion.div
                    variants={HEADING_VARIANTS}
                    className="flex justify-center mb-12"
                >
                    <button
                        onClick={() => setFilterOpen((v) => !v)}
                        className="group relative flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 font-sans text-sm font-medium text-white/80 hover:text-white transition-[background-color,border-color,color] duration-300 cursor-pointer"
                        style={{
                            backgroundColor: filterOpen
                                ? "rgba(255,255,255,0.08)"
                                : "rgba(255,255,255,0.03)",
                        }}
                        onMouseEnter={(e) => {
                            if (!filterOpen)
                                (e.currentTarget as HTMLElement).style.backgroundColor =
                                    "rgba(255,255,255,0.08)";
                        }}
                        onMouseLeave={(e) => {
                            if (!filterOpen)
                                (e.currentTarget as HTMLElement).style.backgroundColor =
                                    "rgba(255,255,255,0.03)";
                        }}
                    >
                        <span className="text-papua-yellow/90 text-base leading-none">
                            ⓘ
                        </span>
                        <span>Pilihlah tanggal</span>
                    </button>

                    {filterOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: EASE }}
                            className="absolute left-1/2 -translate-x-1/2 mt-2 w-full max-w-[320px] rounded-2xl border border-white/10 bg-[#171717]/95 backdrop-blur-xl p-2 z-30"
                            style={{ top: "100%" }}
                        >
                            {KALENDER_EVENTS.map((e) => (
                                <button
                                    key={e.date}
                                    onClick={() => {
                                        setSelected(e.date);
                                        setFilterOpen(false);
                                    }}
                                    className="flex w-full items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-white/[0.05] transition-colors cursor-pointer"
                                >
                                    <span className="font-sans text-xs font-bold text-papua-yellow w-10 shrink-0">
                                        {e.date.slice(-2)}
                                    </span>
                                    <span className="font-sans text-sm text-white/80">
                                        {e.title}
                                    </span>
                                </button>
                            ))}
                            <button
                                onClick={scrollToFirstEvent}
                                className="flex w-full items-center justify-center gap-2 mt-1 px-3 py-2.5 rounded-xl text-papua-yellow/80 hover:bg-white/[0.05] transition-colors text-xs font-semibold tracking-wide cursor-pointer"
                            >
                                Lihat tanggal pertama
                            </button>
                        </motion.div>
                    )}
                </motion.div>

                {/* Main grid: Calendar (58%) + Right column (42%) */}
                <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-5 lg:gap-6 items-start">
                    {/* Calendar */}
                    <motion.div
                        variants={CALENDAR_VARIANTS}
                        onMouseEnter={() => setHover((h) => ({ ...h, calendar: true }))}
                        onMouseLeave={() => setHover((h) => ({ ...h, calendar: false }))}
                        className="rounded-[18px] p-7 overflow-hidden transform-gpu will-change-transform transition-[transform,background-color,border-color,box-shadow] duration-350 ease-[cubic-bezier(.22,1,.36,1)] lg:min-h-[560px]"
                        style={{
                            background: hover.calendar
                                ? "rgba(255,255,255,0.045)"
                                : "rgba(255,255,255,0.03)",
                            border: `1px solid ${
                                hover.calendar ? "#CFC154" : "rgba(255,255,255,0.08)"
                            }`,
                            boxShadow: hover.calendar
                                ? "0 0 24px rgba(207,193,84,0.15)"
                                : "none",
                            transform: hover.calendar
                                ? "translateY(-4px)"
                                : "translateY(0px)",
                        }}
                    >
                        <Calendar
                            year={year}
                            month={month}
                            selected={selected}
                            onSelect={handleSelect}
                            onPrev={handlePrev}
                            onNext={handleNext}
                            hoverSpring={null}
                        />
                    </motion.div>

                    {/* Right column: Event Detail + Gallery (staggered slide-left) */}
                    <motion.div
                        variants={RIGHT_COLUMN_VARIANTS}
                        className="flex flex-col gap-5 lg:gap-6"
                    >
                        <motion.div
                            variants={SLIDE_LEFT_VARIANTS}
                            onMouseEnter={() =>
                                setHover((h) => ({ ...h, event: true }))
                            }
                            onMouseLeave={() =>
                                setHover((h) => ({ ...h, event: false }))
                            }
                        >
                            <EventDetail event={selectedEvent} hovered={hover.event} />
                        </motion.div>

                        <motion.div
                            variants={SLIDE_LEFT_VARIANTS}
                            onMouseEnter={() =>
                                setHover((h) => ({ ...h, gallery: true }))
                            }
                            onMouseLeave={() =>
                                setHover((h) => ({ ...h, gallery: false }))
                            }
                        >
                            <GalleryCard hovered={hover.gallery} />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}