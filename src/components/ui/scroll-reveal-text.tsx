"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    type MotionValue,
} from "framer-motion";

interface ScrollRevealTextProps {
    children: string;
    className?: string;
    /** Kept for API compatibility — ignored. */
    delay?: number;
}

/**
 * Scroll-driven word-by-word reveal.
 *
 * Setiap kata memiliki rentang progress-nya sendiri sehingga warna
 * berubah bertahap mengikuti posisi scroll, bukan waktu.
 */
export function ScrollRevealText({
    children,
    className = "",
}: ScrollRevealTextProps) {
    const ref = useRef<HTMLParagraphElement>(null);
    const words = children.split(" ");

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 85%", "end 20%"],
    });

    return (
        <motion.p ref={ref} className={className}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                    <Word
                        key={`${word}-${i}`}
                        progress={scrollYProgress}
                        range={[start, end]}
                    >
                        {word}
                    </Word>
                );
            })}
        </motion.p>
    );
}

function Word({
    progress,
    range,
    children,
}: {
    progress: MotionValue<number>;
    range: [number, number];
    children: string;
}) {
    const color = useTransform(
        progress,
        range,
        ["rgba(255,255,255,0.28)", "#FFFFFF"]
    );
    const textShadow = useTransform(
        progress,
        range,
        ["0 0 0px rgba(255,255,255,0)", "0 0 10px rgba(255,255,255,0.08)"]
    );

    return (
        <motion.span
            style={{ color, textShadow }}
            className="inline-block mr-[0.25em] will-change-[color,text-shadow]"
        >
            {children}
        </motion.span>
    );
}