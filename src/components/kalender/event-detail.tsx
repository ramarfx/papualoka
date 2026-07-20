"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { KalenderEvent } from "@/data/kalender-events";

interface EventDetailProps {
    event: KalenderEvent | null;
    hovered: boolean;
}

export default function EventDetail({ event, hovered }: EventDetailProps) {
    return (
        <div
            className="relative rounded-[18px] p-7 overflow-hidden transform-gpu will-change-transform transition-[transform,background-color,border-color,box-shadow] duration-350 ease-[cubic-bezier(.22,1,.36,1)]"
            style={{
                background: hovered
                    ? "rgba(255,255,255,0.045)"
                    : "rgba(255,255,255,0.03)",
                border: `1px solid ${hovered ? "#CFC154" : "rgba(255,255,255,0.08)"}`,
                boxShadow: hovered ? "0 0 20px rgba(207,193,84,0.18)" : "none",
                transform: hovered ? "translateY(-3px)" : "translateY(0px)",
            }}
        >
            <AnimatePresence mode="wait">
                {event ? (
                    <motion.div
                        key={event.date}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col gap-5"
                    >
                        {/* Image */}
                        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black/30">
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 42vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                            <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md text-[10px] font-sans font-bold tracking-[0.15em] uppercase text-papua-yellow">
                                {event.category}
                            </span>
                        </div>

                        {/* Text */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-white/55 font-sans text-xs tracking-wide">
                                <span className="w-1.5 h-1.5 rounded-full bg-papua-yellow" />
                                {event.location}
                            </div>
                            <h3 className="font-heading text-white text-xl md:text-2xl font-bold leading-snug">
                                {event.title}
                            </h3>
                            <p className="text-white/65 font-sans text-sm leading-relaxed">
                                {event.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-1">
                                {event.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-white/70 font-sans text-[11px] font-semibold tracking-wide"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center justify-center text-center gap-3 py-10"
                    >
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-papua-yellow/70">
                            <span className="text-lg">📅</span>
                        </div>
                        <p className="text-white/50 font-sans text-sm leading-relaxed max-w-[280px]">
                            Pilih tanggal pada kalender untuk melihat detail acara budaya yang berlangsung.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}