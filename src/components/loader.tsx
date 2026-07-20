"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Custom Hook for typing dots animation to keep the component clean
function useTypingDots(intervalMs: number = 500, maxDots: number = 3) {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => prev.length >= maxDots ? "" : prev + ".");
        }, intervalMs);
        return () => clearInterval(interval);
    }, [intervalMs, maxDots]);

    return dots;
}

export default function Loader() {
    const dots = useTypingDots();

    return (
        <div className="fixed inset-0 h-screen w-full overflow-hidden bg-black animate-fade-in z-99999 touch-none select-none">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/img/bg-loader.png')] bg-cover bg-position-[75%_center] md:bg-center bg-no-repeat z-0"></div>
            
            {/* Beige Slanted Container */}
            <div 
                className="absolute bottom-0 w-full min-h-[35vh] sm:min-h-[40vh] z-10 flex flex-col justify-end pb-8 sm:pb-12 md:pb-24 px-5 sm:px-12 md:px-24"
            >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full max-w-7xl mx-auto gap-6 sm:gap-4 pt-12 md:pt-24">
                    {/* Left side text */}
                    <div className="flex flex-col max-w-xl animate-slide-up opacity-0 [animation-delay:100ms]">
                        <h2 className="text-[#a67c52] text-xl sm:text-2xl md:text-4xl font-bold font-sans mb-2 sm:mb-4">Memasuki Papua ...</h2>
                        <p className="text-[#1a110a] font-sans font-semibold text-xs sm:text-base md:text-lg leading-relaxed">
                            Di sini, alam berbicara lebih keras dari kata-kata. Sebentar lagi, kamu akan mendengarnya.
                        </p>
                    </div>

                    {/* Right side loader */}
                    <div className="flex flex-row sm:flex-col items-center gap-3 sm:gap-0 animate-slide-up opacity-0 [animation-delay:150ms] self-end sm:self-auto shrink-0">
                        <div className="relative w-10 h-10 sm:w-16 sm:h-16 animate-spin shrink-0">
                            <Image src="/img/loader.svg" alt="Loading Spinner" fill className="object-contain" priority />
                        </div>
                        <p className="sm:mt-4 text-[#1a110a] font-sans font-bold text-base sm:text-lg md:text-xl min-w-20 text-left sm:text-center">
                            Loading{dots}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}