"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.2,
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

const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.6 },
    },
};

export default function StoriesHero() {
    return (
        <section className="relative w-full min-h-[88vh] flex flex-col items-center justify-center overflow-hidden ">
            {/* Background mosaic collage from story images */}
            <div className="absolute inset-0 z-0 w-full min-h-screen">

                <div className="relative overflow-hidden">
                    <Image
                        src={"/img/stories/hero.png"}
                        alt=""
                        width={1440}
                        height={826}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Dark overlay layers */}
            <div className="absolute inset-0 z-0 bg-linear-to-b from-black/20 via-black/40 to-black" />



            {/* Main text */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 text-center px-6"
            >
                <div className="overflow-hidden mb-2">
                    <motion.h1
                        variants={wordVariants}
                        className="font-heading text-white text-[clamp(4rem,14vw,10rem)] font-bold leading-none tracking-tight block"
                    >
                        Cerita
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.h1
                        variants={wordVariants}
                        className="font-heading text-white text-[clamp(4rem,14vw,10rem)] font-bold leading-none tracking-tight block"
                    >
                        Rakyat
                    </motion.h1>
                </div>

                <motion.p
                    variants={subtitleVariants}
                    className="mt-8 md:mt-10 text-white/70 font-sans text-sm md:text-base leading-relaxed max-w-xl mx-auto"
                >
                    Kisah-kisah yang telah diwariskan turun-temurun, menjadi cermin nilai, kearifan, dan jiwa masyarakat Papua sejak dahulu kala.
                </motion.p>
            </motion.div>

            {/* Bottom fade into page body */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-papua-dark to-transparent pointer-events-none z-10" />
        </section>
    );
}
