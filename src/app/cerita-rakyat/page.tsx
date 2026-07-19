"use client";

import { motion, Variants } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import StoriesHero from "@/components/stories/stories-hero";
import StoryCard, { Story } from "@/components/stories/story-card";

const STORIES: Story[] = [
    {
        id: "towjatuwa-buaya-sakti",
        title: "Towjatuwa dan Buaya Sakti",
        excerpt: "Kisah seorang pemuda pemberani dari tepi Danau Sentani yang bersahabat dengan seekor buaya sakti penguasa danau, mengajarkan makna kesetiaan dan perjanjian leluhur.",
        image: "/img/stories/1.png",
        readTime: "8 menit",
        origin: "Sentani",
        href: "/cerita-rakyat/towjatuwa-buaya-sakti",
        accentColor: "#6EE7B7",
    },
    {
        id: "legenda-batu-keramat",
        title: "Legenda Batu Keramat",
        excerpt: "Di balik batu-batu besar yang tersebar di pegunungan Papua, tersimpan legenda tentang roh leluhur yang menjaga keseimbangan alam dan kehidupan suku-suku di sekitarnya.",
        image: "/img/stories/2.png",
        readTime: "6 menit",
        origin: "Lembah Baliem",
        href: "/cerita-rakyat/legenda-batu-keramat",
        accentColor: "#CFC154",
    },
    {
        id: "asal-mula-burung-cendrawasih",
        title: "Asal Mula Burung Cendrawasih",
        excerpt: "Mengapa burung surga Papua memiliki bulu yang demikian memukau? Sebuah mitos tentang seorang putri dewa yang turun ke bumi dan berubah menjadi burung paling cantik di dunia.",
        image: "/img/stories/3.png",
        readTime: "10 menit",
        origin: "Raja Ampat",
        href: "/cerita-rakyat/asal-mula-burung-cendrawasih",
        accentColor: "#F59E0B",
    },
    {
        id: "biwar-sang-penakluk-naga",
        title: "Biwar Sang Penakluk Naga",
        excerpt: "Epik keberanian Biwar, pahlawan muda dari pesisir selatan Papua, yang menantang naga laut raksasa demi menyelamatkan ibunya dan mengembalikan kedamaian bagi desanya.",
        image: "/img/stories/4.png",
        readTime: "12 menit",
        origin: "Papua Selatan",
        href: "/cerita-rakyat/biwar-sang-penakluk-naga",
        accentColor: "#60A5FA",
    },
    {
        id: "legenda-cabo-pui-dan-batu-ajaib",
        title: "Legenda Cabo Pui dan Batu Ajaib",
        excerpt: "Seorang dukun tua bernama Cabo Pui menemukan batu yang memiliki kekuatan magis. Batu itu mampu menyembuhkan penyakit, namun juga membawa bencana bila disalahgunakan.",
        image: "/img/stories/5.png",
        readTime: "7 menit",
        origin: "Paniai",
        href: "/cerita-rakyat/legenda-cabo-pui-dan-batu-ajaib",
        accentColor: "#A78BFA",
    },
    {
        id: "empat-raja",
        title: "Empat Raja",
        excerpt: "Dongeng tentang empat raja yang memerintah empat penjuru tanah Papua — masing-masing menguasai lautan, gunung, hutan, dan langit — dan bagaimana persatuan mereka membentuk tanah ini.",
        image: "/img/stories/6.png",
        readTime: "9 menit",
        origin: "Raja Ampat",
        href: "/cerita-rakyat/empat-raja",
        accentColor: "#F87171",
    },
];

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

export default function CeritaRakyatPage() {
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
                        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6"
                    >
                        {STORIES.map((story) => (
                            <StoryCard key={story.id} story={story} />
                        ))}
                    </motion.div>
                </section>

                <Footer className="bg-papua-dark" />
            </main>
        </SmoothScroll>
    );
}
