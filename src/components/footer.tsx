"use client";

import { motion, Variants } from "framer-motion";
import { Caveat } from "next/font/google";
import Link from "next/link";

const caveat = Caveat({ subsets: ["latin"], weight: "400" });

const textVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -45, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        transition: {
            type: "spring",
            damping: 14,
            stiffness: 150,
        },
    },
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
};

const linkVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { type: "spring", stiffness: 100 }
    }
};

const linkContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.5,
        }
    }
};

const AnimatedText = ({ text, className = "" }: { text: string; className?: string }) => (
    <span className={`inline-block ${className}`}>
        {text.split("").map((char, index) => (
            <motion.span
                key={`${char}-${index}`}
                variants={textVariants}
                className="inline-block"
                style={{ whiteSpace: char === " " ? "pre" : "normal" }}
            >
                {char}
            </motion.span>
        ))}
    </span>
);

export default function Footer() {
    return (
        <footer className="bg-black py-20 md:py-32 overflow-hidden">
            <div className="mx-auto w-full max-w-7xl px-6 flex flex-col lg:flex-row justify-between gap-20 lg:gap-8">
                
                {/* Left: Animated Text */}
                <motion.div 
                    className="flex-1"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="font-heading text-white text-4xl sm:text-5xl lg:text-[64px] font-bold uppercase leading-[1.1] tracking-wide flex flex-col items-start">
                        <span className="flex items-center gap-4 flex-wrap">
                            <AnimatedText text="MENGENAL" /> 
                            <motion.span 
                                variants={textVariants} 
                                className={`${caveat.className} text-white font-normal capitalize text-5xl sm:text-6xl lg:text-[76px] -mt-3 lg:-mt-5 transform origin-left tracking-normal`}
                            >
                                Papua
                            </motion.span>
                        </span>
                        <AnimatedText text="LEBIH" className="mt-2" />
                        <AnimatedText text="DEKAT" className="mt-2" />
                    </h2>
                </motion.div>

                {/* Right Area Container */}
                <div className="flex flex-col sm:flex-row justify-between lg:justify-end gap-16 lg:gap-32 w-full lg:w-auto mt-8 lg:mt-0">
                    
                    {/* Middle: Links */}
                    <motion.div 
                        className="flex flex-col gap-5 w-auto"
                        variants={linkContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { num: "01", label: "BERANDA", href: "#" },
                            { num: "02", label: "JELAJAH", href: "#" },
                            { num: "03", label: "BUDAYA", href: "#" },
                            { num: "04", label: "TENTANG", href: "#" },
                            { num: "05", label: "GALERI", href: "#galeri" },
                        ].map((item) => (
                            <motion.div key={item.label} variants={linkVariants}>
                                <Link href={item.href} className="group flex items-center gap-4 text-white hover:text-papua-yellow transition-colors">
                                    <span className="text-white/30 group-hover:text-papua-yellow/50 text-[11px] font-sans font-medium tracking-widest transition-colors">{item.num}</span>
                                    <span className="text-xs font-sans font-bold tracking-[0.15em] uppercase transition-all duration-300">{item.label}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right: Contact */}
                    <motion.div 
                        className="flex flex-col items-start gap-4 w-auto min-w-[200px]"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <a href="mailto:papualoka@gmail.com" className="text-white hover:text-papua-yellow text-sm font-sans font-medium tracking-wide transition-colors">papualoka@gmail.com</a>
                        <p className="text-white text-sm font-sans font-medium tracking-wide">+62 812 3456 7890</p>
                        
                        <div className="w-full max-w-[240px] h-px bg-white/20 my-4" />
                        
                        <p className="text-white text-sm font-sans font-medium tracking-wide">papualoka.id</p>
                    </motion.div>
                </div>
                
            </div>
        </footer>
    )
}
