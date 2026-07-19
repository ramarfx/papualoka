"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, MapPin, ArrowUp } from "lucide-react";

// Import Swiper styles
import "swiper/css";

export interface ExploreItem {
    id: string;
    title: string;
    description: string;
    image: string;
    destinationName: string;
    location: string;
    href: string;
}

interface DestinationExploreProps {
    items: ExploreItem[];
}

export default function DestinationExplore({ items }: DestinationExploreProps) {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        if (swiper) swiper.slidePrev();
    };

    const handleNext = () => {
        if (swiper) swiper.slideNext();
    };

    return (
        <section className="w-full bg-[#111111] py-24 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

                {/* Carousel Container */}
                <div className="relative w-full max-w-5xl items-center flex justify-center">

                    {/* Navigation Arrow Left - Desktop */}
                    <button
                        onClick={handlePrev}
                        aria-label="Previous Slide"
                        className="hidden md:flex absolute -left-16 lg:-left-20 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 hover:border-white/50 bg-transparent text-white items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Navigation Arrow Right - Desktop */}
                    <button
                        onClick={handleNext}
                        aria-label="Next Slide"
                        className="hidden md:flex absolute -right-16 lg:-right-20 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-black items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg hover:bg-white/90"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Swiper Slider */}
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        onSwiper={setSwiper}
                        onSlideChange={(s) => setActiveIndex(s.realIndex)}
                        className="w-full rounded-[32px] md:rounded-[40px] shadow-2xl"
                    >
                        {items.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex flex-col md:flex-row w-full min-h-[460px] md:h-[420px] rounded-[32px] md:rounded-[40px] overflow-hidden relative">

                                    {/* Desktop Background Image & Overlay */}
                                    <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
                                        <Image
                                            src={item.image}
                                            alt={item.destinationName}
                                            fill
                                            sizes="100vw"
                                            className="object-cover"
                                            priority={false}
                                        />

                                        {/* Seamless Blend Gradient (Left to Right) */}
                                        <div className="absolute inset-0 bg-linear-to-r from-white  via-white/50 to-transparent z-10 pointer-events-none" />

                                        {/* Bottom Right Dark Overlay (to make white location text stand out) */}
                                        <div className="absolute bottom-0 right-0 w-[40%] h-[50%] z-10 pointer-events-none rounded-br-[40px]" />
                                    </div>

                                    {/* Left Text Block */}
                                    <div className="w-full md:w-[45%] bg-white md:bg-transparent p-8 md:p-12 flex flex-col justify-center items-start text-black z-20 relative min-h-[220px] md:min-h-0">
                                        <span className="text-[10px] md:text-xs uppercase font-sans font-bold tracking-[0.2em] text-black/40 mb-2 md:mb-3 block">
                                            EXPLORE PAPUA
                                        </span>

                                        <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4 leading-tight">
                                            {item.title}
                                        </h3>

                                        <p className="font-sans text-xs md:text-sm text-black/60 mb-6 md:mb-8 leading-relaxed max-w-sm">
                                            {item.description}
                                        </p>

                                        <Link
                                            href={item.href}
                                            className="bg-black hover:bg-papua-green text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full py-3 px-6 md:px-8 transition-colors duration-300 block shadow-md"
                                        >
                                            Jelajahi Destinasi Lainnya
                                        </Link>
                                    </div>

                                    {/* Right Image Block / Location Overlay */}
                                    <div className="w-full md:w-[55%] h-[240px] md:h-full relative overflow-hidden md:overflow-visible z-15 flex items-end justify-end p-8 md:p-12">

                                        {/* Mobile Background Image (Only visible on mobile) */}
                                        <div className="absolute inset-0 w-full h-full z-0 md:hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.destinationName}
                                                fill
                                                sizes="100vw"
                                                className="object-cover"
                                                priority={false}
                                            />
                                            {/* Bottom Dark Overlay for Mobile */}
                                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                                        </div>

                                        {/* Location Text */}
                                        <div className="text-right z-20 text-white pointer-events-none select-none">
                                            <h4 className="font-heading text-lg md:text-2xl font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                                                {item.destinationName}
                                            </h4>
                                            <p className="font-sans text-xs md:text-sm text-white/80 flex items-center justify-end gap-1 mt-1 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                                                <MapPin className="w-3.5 h-3.5 text-papua-yellow" />
                                                <span>{item.location}</span>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Custom Pagination Indicators */}
                <div className="flex items-center gap-2.5 mt-8 z-20">
                    {items.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => swiper && swiper.slideToLoop(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx
                                ? "bg-white scale-110"
                                : "bg-white/30 hover:bg-white/50"
                                }`}
                        />
                    ))}
                </div>

                {/* Kembali Jelajah Footer Button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex flex-col items-center gap-3 text-white/40 hover:text-white transition-colors group mt-16 cursor-pointer select-none"
                >
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-white/50">
                        <ArrowUp className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] md:text-xs font-sans font-bold tracking-[0.2em] uppercase transition-colors">
                        Kembali Jelajah
                    </span>
                </button>

            </div>
        </section>
    );
}
