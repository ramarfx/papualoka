"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Clock, MapPin } from "lucide-react";
import { useRef } from "react";

interface StoryDetailHeroProps {
    title: string;
    excerpt: string;
    image: string;
    readTime: string;
    origin: string;
    accentColor?: string;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.25,
        },
    },
};

const wordVariants: Variants = {
    hidden: { opacity: 0, y: 60, skewY: 5 },
    visible: {
        opacity: 1,
        y: 0,
        skewY: 0,
        transition: {
            type: "spring",
            stiffness: 280,
            damping: 22,
        },
    },
};

const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] },
    },
};

export default function StoryDetailHero({
    title,
    excerpt,
    image,
    readTime,
    origin,
    accentColor = "#CFC154",
}: StoryDetailHeroProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    // Split title into words for stagger animation
    const titleWords = title.split(" ");

    return (
        <section
            ref={ref}
            className="relative w-full min-h-[90vh] pt-24 sm:pt-28 md:pt-32 pb-16 flex flex-col justify-between items-center overflow-hidden"
        >
            {/* Parallax Background Image with subtle blur & scale to hide pixelation */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover scale-105 blur-xs opacity-85"
                    priority
                    sizes="100vw"
                />
            </motion.div>

            {/* Smooth Papua Green to Papua Dark Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-linear-to-b from-papua-green/75 via-papua-green/30 to-papua-dark" />
            <div className="absolute inset-0 z-0 bg-linear-to-b from-black/30 via-transparent to-papua-dark pointer-events-none" />

            {/* Back Navigation */}
            <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full max-w-7xl px-5 sm:px-8 md:px-12 z-20 flex justify-start mb-4 md:mb-6"
            >
                <Link
                    href="/cerita-rakyat"
                    className="group flex items-center gap-2 text-papua-yellow transition-colors duration-300 text-sm font-sans font-bold border-2 border-papua-yellow rounded-full px-5 py-2"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                    <span>Koleksi Cerita</span>
                </Link>
            </motion.div>

            {/* Main Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 text-center px-5 sm:px-8 md:px-12 max-w-4xl mx-auto my-auto"
            >

                {/* Title — word-by-word stagger, same as stories-hero */}
                <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-5 mb-6">
                    {titleWords.map((word, i) => (
                        <div key={i} className="overflow-hidden">
                            <motion.span
                                variants={wordVariants}
                                className="font-heading text-white text-[clamp(2.2rem,7vw,5.5rem)] font-bold leading-none tracking-tight block"
                            >
                                {word}
                            </motion.span>
                        </div>
                    ))}
                </div>

                {/* Excerpt */}
                <motion.p
                    variants={fadeUpVariants}
                    className="text-white/75 font-sans text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8"
                >
                    {excerpt}
                </motion.p>

                {/* Scroll CTA */}
                <motion.div
                    variants={fadeUpVariants}
                    className="flex justify-center"
                >
                    <button
                        onClick={() =>
                            document
                                .getElementById("story-content")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="flex items-center gap-3 border border-white/40 rounded-full px-6 py-3 text-white/80 font-sans text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-xs bg-black/10 group cursor-pointer"
                    >
                        Baca Selengkapnya
                        <svg
                            className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                </motion.div>
            </motion.div>

            {/* Bottom fade — same as stories-hero */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-papua-dark to-transparent pointer-events-none z-10" />
        </section>
    );
}
