"use client";

import { motion } from "framer-motion";
import StoryCard from "@/components/stories/story-card";
import { STORIES } from "@/lib/stories";

interface ProvinceStoriesProps {
    provinceName: string;
    description: string;
}

export default function ProvinceStories({ provinceName, description }: ProvinceStoriesProps) {
    return (
        <section className="w-full bg-papua-dark py-24 md:py-32 relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-papua-yellow font-sans text-xs tracking-widest uppercase font-semibold mb-3"
                    >
                        Koleksi Cerita dari {provinceName}
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.1 }}
                        className="font-heading text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                    >
                        Pilih Cerita yang Ingin Kamu Jelajahi
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.2 }}
                        className="text-white/50 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {STORIES.map((story) => (
                        <StoryCard key={story.id} story={story} />
                    ))}
                </div>
            </div>
        </section>
    );
}
