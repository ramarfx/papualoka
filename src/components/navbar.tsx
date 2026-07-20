"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion, Variants } from "framer-motion";

const barVariants : Variants = {
    playing: (custom: { min: number; max: number; duration: number }) => ({
        height: [custom.min, custom.max, custom.min],
        transition: {
            duration: custom.duration,
            repeat: Infinity,
            repeatType: "mirror" as const,
            ease: "easeInOut",
        },
    }),
    paused: (custom: { min: number }) => ({
        height: custom.min,
        transition: { duration: 0.6, ease: "easeOut" },
    }),
};

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            const promise = audio.play();
            if (promise !== undefined) {
                promise.catch(() => {
                    const handleFirstInteraction = () => {
                        if (audio.paused) {
                            audio.play().then(() => setIsPlaying(true)).catch(() => {});
                        }
                    };
                    window.addEventListener("click", handleFirstInteraction, { once: true });
                    window.addEventListener("keydown", handleFirstInteraction, { once: true });
                });
            }
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    const toggleAudio = () => {
        setIsPlaying((prev) => !prev);
    };

    return (
        <>
            <audio ref={audioRef} src="/audio/backsound-new.mpeg" loop preload="auto" />
            <nav className={`fixed top-0 left-0 right-0 z-99 flex items-center justify-between px-6 md:px-16 py-4 md:py-6 transition-all maw-300 duration-500 ${isScrolled ? "backdrop-blur-md border-b border-white/5 py-3 md:py-4 shadow-lg" : "bg-transparent"}`}>
                {/* Left: MENU and Hamburger Icon */}
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="focus:outline-none flex items-center gap-3 p-2 rounded-full hover:bg-white/10 transition-colors duration-300 group cursor-pointer"
                    aria-label="Buka Menu"
                >
                    <span className="hidden md:block text-white font-sans text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">Menu</span>
                    <div className="flex flex-col gap-[5px] items-start w-6">
                        <div className="w-full h-[2px] bg-white rounded-full transition-all duration-300 group-hover:bg-papua-yellow"></div>
                        <div className="w-[80%] h-[2px] bg-white rounded-full transition-all duration-300 group-hover:bg-papua-yellow"></div>
                        <div className="w-[50%] h-[2px] bg-white rounded-full transition-all duration-300 group-hover:bg-papua-yellow"></div>
                    </div>
                </button>

                {/* Center: Logo */}
                <Link href="/" className="absolute left-1/2 -translate-x-1/2 cursor-pointer flex items-center">
                    <Image
                        src="/img/logo.png"
                        alt="PapuaLoka"
                        width={180}
                        height={44}
                        className="h-7 sm:h-9 md:h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                {/* Right: Audio Visualizer Toggle Button */}
                <button
                    onClick={toggleAudio}
                    className="focus:outline-none flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors duration-300 group cursor-pointer"
                    aria-label={isPlaying ? "Matikan Backsound Musik" : "Putar Backsound Musik"}
                    title={isPlaying ? "Matikan Musik" : "Putar Musik"}
                >
                    <div className="flex items-end gap-[3.5px] h-6 w-6 justify-center">
                        <motion.div
                            custom={{ min: 6, max: 18, duration: 2.2 }}
                            animate={isPlaying ? "playing" : "paused"}
                            variants={barVariants}
                            className="w-[3px] bg-white/90 rounded-full transition-colors group-hover:bg-papua-yellow"
                        />
                        <motion.div
                            custom={{ min: 10, max: 24, duration: 2.8 }}
                            animate={isPlaying ? "playing" : "paused"}
                            variants={barVariants}
                            className="w-[3px] bg-white/90 rounded-full transition-colors group-hover:bg-papua-yellow"
                        />
                        <motion.div
                            custom={{ min: 7, max: 16, duration: 1.9 }}
                            animate={isPlaying ? "playing" : "paused"}
                            variants={barVariants}
                            className="w-[3px] bg-white/90 rounded-full transition-colors group-hover:bg-papua-yellow"
                        />
                        <motion.div
                            custom={{ min: 9, max: 21, duration: 2.5 }}
                            animate={isPlaying ? "playing" : "paused"}
                            variants={barVariants}
                            className="w-[3px] bg-white/90 rounded-full transition-colors group-hover:bg-papua-yellow"
                        />
                    </div>
                </button>
            </nav>

            {/* Sidebar Drawer */}
            <div className={`fixed inset-0 z-999 transition-all duration-500 ${sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                {/* Backdrop */}
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500"
                />
                {/* Drawer Body */}
                <div className={`absolute top-0 left-0 bottom-0 w-full sm:w-[380px] bg-[#0c0c0c] border-r border-white/5 p-8 md:p-8 flex flex-col shadow-2xl transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    
                    {/* Background Texture inside sidebar */}
                    <Image src="/img/papua-island.png" alt="" fill className="object-cover opacity-[0.03] pointer-events-none mix-blend-screen" />

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-16">
                            <Image src="/img/logo.png" alt="PapuaLoka" width={130} height={32} className="h-7 w-auto object-contain" />
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="text-white/60 hover:text-papua-yellow p-3 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                            >
                                <X className="w-7 h-7" />
                            </button>
                        </div>

                        {/* Menu Links */}
                        <div className="flex flex-col gap-8 flex-1 justify-center mt-[-10vh]">
                            {[
                                { label: "Beranda", href: "/home" },
                                { label: "Destinasi Pilihan", href: "/home#destinasi-pilihan" },
                                { label: "Warisan Budaya", href: "/home#warisan-budaya" },
                                { label: "Alam Papua", href: "/alam-papua" },
                                { label: "Cerita Rakyat", href: "/cerita-rakyat" }
                            ].map((item, idx) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className="text-left text-lg md:text-xl text-white/40 hover:text-white transition-all duration-500 font-heading tracking-wide group cursor-pointer w-max"
                                >
                                    <span className="inline-block relative">
                                        {item.label}
                                        <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-papua-yellow transition-all duration-500 group-hover:w-full ease-[cubic-bezier(0.25,1,0.5,1)]"></span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}