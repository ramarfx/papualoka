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
        <div className="relative h-screen w-full overflow-hidden bg-black animate-fade-in">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/img/bg-loader.png')] bg-cover bg-center bg-no-repeat z-0"></div>
            
            {/* Beige Slanted Container */}
            <div 
                className="absolute bottom-0 w-full min-h-[40vh] z-10 flex flex-col justify-end pb-12 md:pb-24 px-8 md:px-24"
            >
                <div className="flex justify-between items-end w-full max-w-7xl mx-auto pt-24">
                    {/* Left side text */}
                    <div className="flex flex-col max-w-xl animate-slide-up opacity-0 [animation-delay:100ms]">
                        <h2 className="text-[#a67c52] text-2xl md:text-4xl font-bold font-sans mb-4">Memasuki Papua ...</h2>
                        <p className="text-[#1a110a] font-sans font-semibold text-base md:text-lg leading-relaxed">
                            Di sini, alam berbicara lebih keras dari kata-kata. Sebentar lagi, kamu akan mendengarnya.
                        </p>
                    </div>

                    {/* Right side loader */}
                    <div className="flex flex-col items-center animate-slide-up opacity-0 [animation-delay:150ms]">
                        <div className="relative w-16 h-16 animate-spin">
                            <Image src="/img/loader.svg" alt="Loading Spinner" fill className="object-contain" priority />
                        </div>
                        <p className="mt-4 text-[#1a110a] font-sans font-bold text-lg md:text-xl w-24 text-left">
                            Loading{dots}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}