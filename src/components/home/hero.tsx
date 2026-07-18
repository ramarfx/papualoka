"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[url('/img/home-bg.png')] bg-cover bg-center bg-no-repeat z-0 scale-105"></div>

            {/* Gradient Overlay for better readability */}
            <div className="absolute inset-0 bg-linear-to-b from-papua-dark/40 via-papua-dark/10 to-papua-dark z-10"></div>

            {/* Center Content */}
            <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className="font-heading text-center flex flex-col gap-3">
                    <span className="text-[#a67c52] text-2xl md:text-4xl lg:text-6xl font-bold tracking-wider">
                        Tanah di Ujung Timur
                    </span>
                    <span className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Sepotong Surga yang Jatuh ke Alam Dunia
                    </span>
                </h1>
            </motion.div>

            {/* Bottom Section */}
            <motion.div 
                className="absolute bottom-8 md:bottom-12 w-full px-6 md:px-16 flex flex-col gap-8 md:gap-12 z-30 pointer-events-none"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >

                {/* Action Buttons Row */}
                <div className="flex justify-between items-end w-full">
                    {/* Left Button */}
                    <button className="pointer-events-auto flex items-center gap-4 text-white hover:text-emerald-400 transition-colors group">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 flex items-center justify-center group-hover:border-emerald-400 transition-colors">
                            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 transform group-hover:-translate-x-1 transition-transform" />
                        </div>
                        <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">Kalender Acara</span>
                    </button>

                    {/* Center Animated Scroll Icon */}
                    <button className="pointer-events-auto flex flex-col items-center gap-3 group translate-y-4 md:translate-y-8 cursor-pointer">
                        <div className="w-6 h-10 md:w-7 md:h-12 border-2 border-white/50 rounded-full flex justify-center p-1 group-hover:border-emerald-400 transition-colors">
                            {/* Animated Arrow/Dot */}
                            <ArrowDown className="w-3 h-3 md:w-4 md:h-4 text-white group-hover:text-emerald-400 animate-bounce transition-colors mt-1" strokeWidth={3} />
                        </div>
                        <span className="font-sans text-[10px] md:text-xs text-white/80 group-hover:text-white transition-colors tracking-wide">Mulai Jelajah</span>
                    </button>

                    {/* Right Button */}
                    <button className="pointer-events-auto flex items-center gap-4 text-white hover:text-emerald-400 transition-colors group">
                        <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">Alam Papua</span>
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 flex items-center justify-center group-hover:border-emerald-400 transition-colors">
                            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </button>
                </div>

                {/* Language Dropdown */}
                <div className="flex items-center pointer-events-auto">
                    <button className="flex items-center gap-2 text-white font-sans text-xs md:text-sm font-semibold hover:text-emerald-400 transition-colors duration-200">
                        <span>Indonesia</span>
                        <ChevronDown className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </button>
                </div>
            </motion.div>
        </section>
    );
}   