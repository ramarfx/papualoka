"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { RagamItem } from "./types";

interface ProvinceRagamProps {
    provinceName: string;
    description: string;
    items: RagamItem[];
}

export default function ProvinceRagam({ provinceName, description, items }: ProvinceRagamProps) {
    const [ragamSwiper, setRagamSwiper] = useState<SwiperType | null>(null);

    return (
        <section className="w-full bg-papua-dark py-24 pb-44 relative z-10">
            <div className="inset-0 absolute bg-linear-to-t from-white via-3% md:via-10% via-transparent to-transparent"></div>
            <div className="max-w-360 mx-auto px-6 mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-heading font-bold mb-6"
                >
                    <span className="text-papua-yellow">Ragam</span> <span className="text-white">{provinceName}</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white/70 font-sans max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
                >
                    {description}
                </motion.p>
            </div>

            <div className="relative w-full max-w-360 mx-auto px-4 md:px-12 flex items-center justify-center">
                <button
                    onClick={() => ragamSwiper?.slidePrev()}
                    className="hidden md:flex absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-black items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:bg-white/90 cursor-pointer"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                    onClick={() => ragamSwiper?.slideNext()}
                    className="hidden md:flex absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-black items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:bg-white/90 cursor-pointer"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>

                <Swiper
                    modules={[Autoplay, Navigation, EffectCoverflow]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    onSwiper={setRagamSwiper}
                    className="w-full max-w-5xl py-24"
                >
                    {items.map((item) => (
                        <SwiperSlide key={item.id}>
                            {({ isActive }) => (
                                <div className={`relative w-full aspect-3/4 py-12 rounded-3xl overflow-hidden transition-all duration-500 ${isActive ? 'scale-90 opacity-100 shadow-2xl' : 'scale-80 blur-[2px]'}`}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                                    <div className="absolute bottom-8 left-0 w-full text-center px-6">
                                        <h4 className="text-white font-sans text-sm font-bold tracking-widest uppercase mb-1">
                                            {item.title}
                                        </h4>
                                        {item.subtitle && (
                                            <>
                                                <div className="w-8 h-px bg-white/50 mx-auto my-2" />
                                                <p className="text-white/60 font-sans text-[10px] tracking-[0.2em] uppercase">
                                                    {item.subtitle}
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Cloud Transition */}
            <div className="absolute bottom-0 md:-bottom-6 left-0 w-full h-64 md:h-64 z-20 pointer-events-none flex items-end">
                <Image src="/img/cloud.png" alt="Cloud transition" width={1440} height={283} className="object-cover w-full h-auto" />
            </div>
        </section>
    );
}
