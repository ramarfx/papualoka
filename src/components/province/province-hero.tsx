"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
};

const wordVariants: Variants = {
    hidden: { opacity: 0, y: 60, skewY: 5 },
    visible: {
        opacity: 1,
        y: 0,
        skewY: 0,
        transition: { type: "spring", stiffness: 280, damping: 22 },
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

interface ProvinceHeroProps {
    titleLines: string[];
    description: string;
    bgImage: string;
}

export default function ProvinceHero({ titleLines, description, bgImage }: ProvinceHeroProps) {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const hasLoaded = sessionStorage.getItem("hasLoadedBefore");
        const delay = hasLoaded ? 1500 : 3500;
        const timer = setTimeout(() => setStartAnimation(true), delay);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[88vh] flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 w-full min-h-screen">
                <div className="relative overflow-hidden w-full h-full">
                    <Image
                        src={bgImage}
                        alt={titleLines.join(" ")}
                        fill
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
            </div>

            <div className="absolute inset-0 z-0 bg-linear-to-b from-black/20 via-black/40 to-papua-dark" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={startAnimation ? "visible" : "hidden"}
                className="relative z-10 text-center px-6"
            >
                {titleLines.map((line, idx) => (
                    <div key={idx} className="overflow-hidden mb-2">
                        <motion.h1
                            variants={wordVariants}
                            className="font-heading text-white text-[clamp(3.5rem,12vw,8rem)] font-bold leading-none tracking-tight block"
                        >
                            {line}
                        </motion.h1>
                    </div>
                ))}

                <motion.p
                    variants={subtitleVariants}
                    className="mt-6 md:mt-8 text-white/70 font-sans text-sm md:text-base leading-relaxed max-w-xl mx-auto"
                >
                    {description}
                </motion.p>
            </motion.div>
        </section>
    );
}
