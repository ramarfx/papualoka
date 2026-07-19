"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import StoryDetailHero from "@/components/stories/story-detail-hero";
import StoryCard from "@/components/stories/story-card";
import { getStoryBySlug, STORIES, type StoryBlock } from "@/lib/stories";

// ─── Animation variants ─────────────────────────────────────────────────────

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] },
    },
};

const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

// ─── Block renderer ──────────────────────────────────────────────────────────

function renderBlock(block: StoryBlock, idx: number) {
    switch (block.type) {
        case "paragraph":
            return (
                <motion.p
                    key={idx}
                    variants={fadeUp}
                    className="text-white/75 font-sans text-base md:text-[17px] leading-[1.9] mb-6"
                >
                    {block.text}
                </motion.p>
            );

        case "dialogue":
            return (
                <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="my-6 pl-5 border-l-2 border-white/20"
                >
                    <p className="text-white/40 font-sans text-[11px] tracking-widest uppercase font-semibold mb-1">
                        {block.speaker}
                    </p>
                    <p className="text-white/85 font-sans text-base md:text-[17px] leading-[1.85] italic">
                        &ldquo;{block.text}&rdquo;
                    </p>
                </motion.div>
            );

        case "heading":
            return (
                <motion.h2
                    key={idx}
                    variants={fadeUp}
                    className="font-heading text-white text-2xl md:text-3xl font-bold mt-14 mb-5 tracking-tight"
                >
                    {block.text}
                </motion.h2>
            );

        case "divider":
            return (
                <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="my-10 flex items-center gap-4"
                >
                    <div className="h-px flex-1 bg-white/10" />
                    <div className="flex gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-white/25" />
                        <span className="w-1 h-1 rounded-full bg-white/25" />
                        <span className="w-1 h-1 rounded-full bg-white/25" />
                    </div>
                    <div className="h-px flex-1 bg-white/10" />
                </motion.div>
            );

        default:
            return null;
    }
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function StoryDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const story = getStoryBySlug(slug);

    if (!story) notFound();

    const relatedStories = STORIES.filter((s) => s.slug !== slug).slice(0, 3);

    return (
        <SmoothScroll>
            <main className="bg-papua-dark min-h-screen">
                <Navbar />

                {/* ── Hero ── */}
                <StoryDetailHero
                    title={story.title}
                    excerpt={story.excerpt}
                    image={story.image}
                    readTime={story.readTime}
                    origin={story.origin}
                    accentColor={story.accentColor}
                />

                {/* ── Story Content ── */}
                <article id="story-content" className="relative bg-papua-dark">

                    {/* Opening blockquote */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                        className="max-w-2xl mx-auto px-5 sm:px-8 pt-16 md:pt-24 pb-10"
                    >
                        <blockquote className="relative text-center px-6">
                            <span className="absolute -top-4 -left-0 text-5xl text-white/10 font-heading leading-none select-none">
                                &ldquo;
                            </span>
                            <p className="text-white/80 font-sans text-base md:text-lg leading-[1.9] italic text-center">
                                {story.content.openingQuote}
                            </p>
                            <span className="absolute -bottom-6 -right-0 text-5xl text-white/10 font-heading leading-none select-none">
                                &rdquo;
                            </span>
                        </blockquote>
                    </motion.div>

                    {/* Thin divider */}
                    <div className="max-w-2xl mx-auto px-5 sm:px-8 my-6">
                        <div className="h-px bg-white/8" />
                    </div>

                    {/* Story paragraphs */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.05 }}
                        className="max-w-2xl mx-auto px-5 sm:px-8 pt-6 pb-16 md:pb-24"
                    >
                        {story.content.paragraphs.map((block, idx) =>
                            renderBlock(block, idx)
                        )}
                    </motion.div>

                    {/* ── Video / Media section ── */}
                    {story.content.youtubeId && (
                        <section className="bg-black/40 py-16 md:py-24">
                            <div className="max-w-3xl mx-auto px-5 sm:px-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-center mb-10 md:mb-12"
                                >
                                    <p className="text-white/40 font-sans text-xs tracking-[0.3em] uppercase font-semibold mb-3">
                                        Saksikan Kisahnya
                                    </p>
                                    <h2 className="font-heading text-white text-2xl md:text-3xl font-bold mb-4">
                                        {story.content.videoTitle}
                                    </h2>
                                    {story.content.videoDescription && (
                                        <p className="text-white/55 font-sans text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                                            {story.content.videoDescription}
                                        </p>
                                    )}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                                    className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/[0.06]"
                                >
                                    <iframe
                                        src={`https://www.youtube.com/embed/${story.content.youtubeId}?rel=0&modestbranding=1`}
                                        title={story.content.videoTitle}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    />
                                </motion.div>
                            </div>
                        </section>
                    )}

                    {/* ── Related stories ── */}
                    <section className="py-16 md:py-24 px-5 sm:px-8 max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6 }}
                            className="mb-10 md:mb-12"
                        >
                            <p className="text-white/40 font-sans text-xs tracking-[0.3em] uppercase font-semibold mb-3">
                                Cerita Lainnya
                            </p>
                            <h2 className="font-heading text-white text-2xl md:text-3xl font-bold">
                                Jelajahi{" "}
                                <span className="text-papua-yellow">Kisah Lainnya</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6"
                        >
                            {relatedStories.map((s) => (
                                <StoryCard key={s.id} story={s} />
                            ))}
                        </motion.div>
                    </section>
                </article>

                <Footer className="bg-black" />
            </main>
        </SmoothScroll>
    );
}
