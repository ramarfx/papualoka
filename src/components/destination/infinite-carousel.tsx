"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export type CarouselImage = {
    src: string;
    className?: string; // To allow varying aspect ratios and sizes
};

interface InfiniteCarouselProps {
    images: CarouselImage[];
    speed?: "slow" | "normal" | "fast";
}

export default function InfiniteCarousel({ images, speed = "normal" }: InfiniteCarouselProps) {
    const autoplayDelay = 
        speed === "slow" ? 4000 : 
        speed === "fast" ? 0 : 
        2500;

    // We can simulate a continuous marquee effect by using delay: 0 and linear timing
    // Or just a standard smooth slider if delay > 0.

    return (
        <div className="relative w-full py-10">
            {/* Adding custom class for continuous linear transition if using delay:0 for marquee effect */}
            <style jsx global>{`
                .swiper-continuous .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}</style>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                loop={true}
                centeredSlides={true}
                speed={800} // continuous scroll speed vs normal transition
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                className={`w-full overflow-visible ${speed === "fast" ? 'swiper-continuous' : ''}`}
            >
                {/* Duplicate array heavily to ensure enough slides exist on large screens for proper loop calculation */}
                {[...images, ...images, ...images].map((img, idx) => (
                    <SwiperSlide 
                        key={idx} 
                        style={{ width: 'auto' }} 
                        className="flex items-center justify-center py-8 transition-all duration-500 [&.swiper-slide-active>div]:scale-[1.2] [&.swiper-slide-active>div]:z-20 [&.swiper-slide-active>div]:shadow-2xl [&.swiper-slide-active>div]:border-papua-yellow/50"
                    >
                        <div 
                            className={`relative rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer shadow-lg border border-white/10 ${img.className || "h-48 w-72 md:w-80"}`}
                        >
                            <Image 
                                src={img.src} 
                                alt={`Destination Carousel ${idx}`} 
                                fill 
                                className="object-cover pointer-events-none"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
