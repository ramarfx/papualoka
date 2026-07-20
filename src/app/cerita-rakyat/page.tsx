"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import StoriesHero from "@/components/stories/stories-hero";
import StoryCard from "@/components/stories/story-card";
import { STORIES } from "@/lib/stories";

const eyebrowVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const headlineVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.15 },
    },
};

const descVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
    },
};

const gridContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const INITIAL_VISIBLE_COUNT = 6;

export default function CeritaRakyatPage() {
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

    const visibleStories = STORIES.slice(0, visibleCount);
    const hasMore = visibleCount < STORIES.length;

    useEffect(() => {
        // Trigger Lenis and window resize to update scroll limits when items load
        const timer = setTimeout(() => {
            window.dispatchEvent(new Event("resize"));
        }, 100);
        return () => clearTimeout(timer);
    }, [visibleCount]);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    return (
        <SmoothScroll>
            <main className="bg-papua-dark min-h-screen">
                <Navbar />
                <StoriesHero />

                {/* ——— Collection Section ——— */}
                <section className="py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-12 md:mb-16">
                        <motion.p
                            variants={eyebrowVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                            className="text-papua-yellow font-sans text-xs tracking-[0.3em] uppercase font-semibold mb-4"
                        >
                            Koleksi Cerita
                        </motion.p>

                        <motion.h2
                            variants={headlineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                            className="font-heading text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5"
                        >
                            Pilih Cerita yang Ingin{" "}
                            <br className="hidden sm:block" />
                            Kamu{" "}
                            <span className="text-papua-yellow">Jelajahi</span>
                        </motion.h2>

                        <motion.p
                            variants={descVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                            className="text-white/50 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                        >
                            Setiap cerita membawa kamu lebih dekat dengan jiwa dan kearifan lokal masyarakat Papua yang kaya dan beragam.
                        </motion.p>
                    </div>

                    {/* Story Grid */}
                    <motion.div
                        variants={gridContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6"
                    >
                        {visibleStories.map((story) => (
                            <StoryCard key={story.id} story={story} />
                        ))}
                    </motion.div>

                    {/* Load More Button */}
                    {hasMore && (
                        <div className="mt-12 md:mt-16 text-center">
                            <motion.button
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                onClick={handleLoadMore}
                                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-papua-yellow/10 hover:bg-papua-yellow/20 text-papua-yellow font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase border border-papua-yellow/30 hover:border-papua-yellow/60 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group shadow-sm shadow-black/30"
                            >
                                <span>Muat Lebih Banyak</span>
                                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                            </motion.button>
                        </div>
                    )}
                </section>

                <Footer className="bg-papua-dark" />
            </main>
        </SmoothScroll>
    );
}

