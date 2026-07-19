"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { BookOpen, Clock, ChevronRight } from "lucide-react";

export interface Story {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    readTime: string;
    origin: string;
    href: string;
    accentColor?: string;
}

interface StoryCardProps {
    story: Story;
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 24,
        },
    },
};

const imageVariants: Variants = {
    rest: { scale: 1 },
    hover: {
        scale: 1.07,
        transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
};

const arrowVariants: Variants = {
    rest: { x: 0, opacity: 0.5 },
    hover: {
        x: 4,
        opacity: 1,
        transition: { type: "spring", stiffness: 400, damping: 20 },
    },
};

export default function StoryCard({ story }: StoryCardProps) {
    const accent = story.accentColor ?? "#CFC154";

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover="hover"
            animate="rest"
        >
            <Link href={story.href} className="block group">
                <div className="rounded-2xl overflow-hidden transition-shadow duration-300">
                    {/* Image Container */}
                    <div className="relative w-full aspect-4/3 overflow-hidden">
                        <motion.div className="absolute inset-0" variants={imageVariants}>
                            <Image
                                src={story.image}
                                alt={story.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            />
                        </motion.div>

                        {/* Gradient overlay on image bottom */}
                        <div className="absolute inset-0 bg-linear-to-t from-papua-dark  to-transparent opacity-60 pointer-events-none" />

                        {/* Hover overlay shimmer */}
                        <motion.div
                            className="absolute inset-0 bg-linear-to-b from-transparent to-papua-dark pointer-events-none"
                        />

                        {/* Card Body */}
                        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 pb-5">
                            <h3 className="font-heading text-white text-base md:text-lg font-bold leading-snug mb-2 line-clamp-2">
                                {story.title}
                            </h3>
                            <p className="text-white/50 font-sans text-xs leading-relaxed line-clamp-2 mb-4">
                                {story.excerpt}
                            </p>

                            {/* Footer row */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-white/30">
                                    <span className="flex items-center gap-1 text-[11px] font-sans">
                                        <Clock className="w-3 h-3" />
                                        {story.readTime}
                                    </span>
                                    <span className="flex items-center gap-1 text-[11px] font-sans">
                                        <BookOpen className="w-3 h-3" />
                                        Baca
                                    </span>
                                </div>

                                <motion.div
                                    variants={arrowVariants}
                                    className="flex items-center gap-0.5 text-[11px] font-sans font-semibold"
                                    style={{ color: accent }}
                                >
                                    Selengkapnya
                                    <ChevronRight className="w-3 h-3" />
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>
            </Link>
        </motion.div>
    );
}
