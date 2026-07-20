"use client";

import { useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    MONTH_NAMES,
    WEEK_LABELS,
    dateKey,
    getEventByDate,
} from "@/data/kalender-events";

interface CalendarProps {
    year: number;
    month: number; // 0-indexed
    selected: string | null;
    onSelect: (key: string) => void;
    onPrev: () => void;
    onNext: () => void;
    hoverSpring: unknown;
}

export default function Calendar({
    year,
    month,
    selected,
    onSelect,
    onPrev,
    onNext,
}: CalendarProps) {
    const gridRef = useRef<HTMLDivElement>(null);

    // Cursor reveal — update CSS variables on the hovered cell using rAF.
    const rafRef = useRef<number | null>(null);
    const pendingRef = useRef<{ el: HTMLElement; x: number; y: number } | null>(null);

    const flush = useCallback(() => {
        rafRef.current = null;
        const pending = pendingRef.current;
        if (!pending) return;
        pending.el.style.setProperty("--mouse-x", `${pending.x}px`);
        pending.el.style.setProperty("--mouse-y", `${pending.y}px`);
        pendingRef.current = null;
    }, []);

    const handleMove = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            const el = e.currentTarget;
            const rect = el.getBoundingClientRect();
            pendingRef.current = {
                el,
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
            if (rafRef.current == null) {
                rafRef.current = requestAnimationFrame(flush);
            }
        },
        [flush]
    );

    const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-7">
                <div className="flex flex-col">
                    <span className="font-heading text-white text-3xl md:text-4xl font-bold leading-none">
                        {MONTH_NAMES[month]}
                    </span>
                    <span className="text-papua-yellow/80 font-sans text-sm font-semibold tracking-[0.2em] mt-1.5">
                        {year}
                    </span>
                </div>
                <div className="flex items-center gap-2.5">
                    <button
                        onClick={onPrev}
                        aria-label="Bulan sebelumnya"
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-papua-yellow hover:border-papua-yellow/60 hover:bg-white/[0.03] transition-all duration-300 cursor-pointer"
                    >
                        <ChevronLeft className="w-4.5 h-4.5" strokeWidth={2.2} />
                    </button>
                    <button
                        onClick={onNext}
                        aria-label="Bulan berikutnya"
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-papua-yellow hover:border-papua-yellow/60 hover:bg-white/[0.03] transition-all duration-300 cursor-pointer"
                    >
                        <ChevronRight className="w-4.5 h-4.5" strokeWidth={2.2} />
                    </button>
                </div>
            </div>

            {/* Week labels */}
            <div className="grid grid-cols-7 gap-1.5 mb-2" aria-hidden>
                {WEEK_LABELS.map((label, i) => (
                    <div
                        key={`wk-${i}`}
                        className="h-10 flex items-center justify-center text-white/40 font-sans text-xs font-semibold tracking-[0.15em]"
                    >
                        {label}
                    </div>
                ))}
            </div>

            {/* Day grid */}
            <div
                ref={gridRef}
                className="grid grid-cols-7 gap-1.5 flex-1 content-start"
            >
                {cells.map((day, i) => {
                    if (day === null) {
                        return <div key={`empty-${i}`} className="aspect-square" aria-hidden />;
                    }
                    const key = dateKey(year, month, day);
                    const isSelected = selected === key;
                    const event = getEventByDate(key);
                    const hasEvent = Boolean(event);

                    return (
                        <button
                            key={key}
                            onClick={() => onSelect(key)}
                            onMouseMove={handleMove}
                            className={`calendar-cell group relative aspect-square w-full rounded-[10px] flex items-center justify-center font-sans text-sm font-medium cursor-pointer outline-hidden border will-change-transform transform-gpu transition-[transform,background-color,border-color,box-shadow] duration-250 ease-out ${
                                isSelected
                                    ? "border-transparent text-papua-dark bg-papua-yellow"
                                    : "border-white/[0.06] text-white/75 hover:text-white"
                            }`}
                            style={
                                {
                                    "--mouse-x": "-200px",
                                    "--mouse-y": "-200px",
                                } as React.CSSProperties
                            }
                            aria-label={`${day} ${MONTH_NAMES[month]} ${year}${hasEvent ? `, ${event?.title}` : ""}`}
                        >
                            {/* Reveal glow layer */}
                            <span
                                className="pointer-events-none absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background:
                                        "radial-gradient(160px circle at var(--mouse-x) var(--mouse-y), rgba(207,193,84,0.16), transparent 70%)",
                                }}
                            />
                            {/* Hover surface */}
                            <span
                                className={`pointer-events-none absolute inset-0 rounded-[10px] transition-[background-color,box-shadow,border-color] duration-250 ease-out ${
                                    isSelected ? "" : "group-hover:bg-[rgba(207,193,84,0.08)] group-hover:border-[rgba(207,193,84,0.75)] group-hover:shadow-[0_0_12px_rgba(207,193,84,0.25),inset_0_0_8px_rgba(207,193,84,0.15)]"
                                }`}
                            />
                            {/* Event dot */}
                            {hasEvent && !isSelected && (
                                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-papua-yellow/90" />
                            )}
                            <span
                                className={`relative z-10 select-none ${
                                    isSelected
                                        ? "group-hover:translate-y-[-2px]"
                                        : "group-hover:-translate-y-0.5"
                                } transition-transform duration-250 ease-out`}
                            >
                                {day}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}