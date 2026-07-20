"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialLoader() {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Ensure this only runs on the client to prevent hydration mismatches
        setIsMounted(true);
        
        // Optional: Check session storage so it only runs once per session
        const hasLoaded = sessionStorage.getItem("hasLoadedBefore");
        if (hasLoaded) {
            setIsLoading(false);
            return;
        }

        let currentProgress = 0;
        const duration = 2500; // 2.5 seconds total loading time
        const intervalTime = 30;
        const increment = 100 / (duration / intervalTime);

        const interval = setInterval(() => {
            currentProgress += increment;
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    setIsLoading(false);
                    sessionStorage.setItem("hasLoadedBefore", "true");
                }, 400); // short delay at 100% before fading out
            }
            setProgress(Math.round(currentProgress));
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    if (!isMounted) return null;

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="initial-loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-papua-dark overflow-hidden"
                >
                    {/* Background Texture */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/img/loader-bg.png"
                            alt="Background Texture"
                            fill
                            className="object-cover opacity-30 mix-blend-overlay"
                            priority
                        />
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 flex flex-col items-center w-full max-w-7xl px-4 sm:px-8">
                        {/* Top Text */}
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-white font-sans text-sm sm:text-base md:text-xl font-bold tracking-[0.15em] mb-8 sm:mb-12 uppercase text-center"
                        >
                            MENJELAJAH NEGERIKU "PAPUA"
                        </motion.h2>

                        {/* Middle Section (Logo + Progress Bars) */}
                        <div className="w-full flex items-center justify-between relative h-24 sm:h-32 md:h-40">
                            
                            {/* Left Progress */}
                            <div className="flex-1 flex items-center gap-4 sm:gap-6 lg:gap-8 justify-start">
                                <span className="text-white font-sans font-bold text-sm sm:text-base w-10 text-left">
                                    {progress}%
                                </span>
                                <div className="h-[2px] bg-white/20 w-full rounded-full overflow-hidden flex justify-start">
                                    <motion.div 
                                        className="h-full bg-papua-yellow"
                                        initial={{ width: "0%" }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ ease: "linear", duration: 0.1 }}
                                    />
                                </div>
                            </div>

                            {/* Center Logo */}
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
                                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                                className="px-6 sm:px-10 lg:px-16 shrink-0 z-10"
                            >
                                <Image
                                    src="/img/logo-loader.png"
                                    alt="PapuaLoka Logo"
                                    width={140}
                                    height={140}
                                    className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain"
                                    priority
                                />
                            </motion.div>

                            {/* Right Progress */}
                            <div className="flex-1 flex items-center gap-4 sm:gap-6 lg:gap-8 justify-end">
                                <div className="h-[2px] bg-white/20 w-full rounded-full overflow-hidden flex justify-end">
                                    <motion.div 
                                        className="h-full bg-papua-yellow"
                                        initial={{ width: "0%" }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ ease: "linear", duration: 0.1 }}
                                    />
                                </div>
                                <span className="text-white font-sans font-bold text-sm sm:text-base w-10 text-right">
                                    {progress}%
                                </span>
                            </div>
                        </div>

                        {/* Bottom Text */}
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-white font-sans text-sm sm:text-base md:text-xl font-bold tracking-[0.1em] mt-8 sm:mb-12 text-center"
                        >
                            Loading
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
