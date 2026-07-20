"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Pause } from "lucide-react";

interface ImageComparisonProps {
    image1: string;
    image2?: string;
    alt: string;
}

export default function ImageComparison({ image1, image2, alt }: ImageComparisonProps) {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        setSliderPos((x / rect.width) * 100);
    };

    useEffect(() => {
        if (!isDragging) return;
        
        const handleGlobalMouseMove = (e: MouseEvent) => handleMove(e.clientX);
        const handleGlobalMouseUp = () => setIsDragging(false);
        const handleGlobalTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
        const handleGlobalTouchEnd = () => setIsDragging(false);

        window.addEventListener("mousemove", handleGlobalMouseMove);
        window.addEventListener("mouseup", handleGlobalMouseUp);
        window.addEventListener("touchmove", handleGlobalTouchMove, { passive: false });
        window.addEventListener("touchend", handleGlobalTouchEnd);

        return () => {
            window.removeEventListener("mousemove", handleGlobalMouseMove);
            window.removeEventListener("mouseup", handleGlobalMouseUp);
            window.removeEventListener("touchmove", handleGlobalTouchMove);
            window.removeEventListener("touchend", handleGlobalTouchEnd);
        };
    }, [isDragging]);

    if (!image2) {
        return (
            <Image 
                src={image1} 
                alt={alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
            />
        );
    }

    return (
        <div 
            ref={containerRef}
            className="relative w-full h-full overflow-hidden select-none cursor-ew-resize group/slider"
            onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
            onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
        >
            <div className="absolute inset-0">
                <Image src={image2} alt={alt} fill className="object-cover pointer-events-none transition-transform duration-700 group-hover:scale-110" />
            </div>
            
            <div 
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
                <Image src={image1} alt={alt} fill className="object-cover pointer-events-none transition-transform duration-700 group-hover:scale-110" />
            </div>

            <div 
                className="absolute top-0 bottom-0 bg-papua-yellow w-1 flex items-center justify-center"
                style={{ left: `calc(${sliderPos}% - 0.125rem)` }}
            >
                <div className="w-8 h-8 px-1 rounded-full bg-papua-yellow text-papua-dark flex items-center justify-center shadow-lg transform transition-transform group-hover/slider:scale-110 active:scale-95">
                    <Pause className="w-3 h-4 fill-current" />
                </div>
            </div>
        </div>
    );
}
