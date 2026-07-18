"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import InfiniteCarousel, { CarouselImage } from "./infinite-carousel";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

interface DestinationHeroProps {
    title: string;
    description: string;
    bgImage: string;
    carouselImages: CarouselImage[];
}

export default function DestinationHero({ title, description, bgImage, carouselImages }: DestinationHeroProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { type: "spring", stiffness: 300, damping: 24 } 
        }
    };

    return (
        <section ref={ref} className="relative w-full h-[85vh] flex flex-col justify-center bg-papua-dark">
            {/* Background Image with Parallax */}
            <motion.div 
                style={{ y: bgY }}
                className="absolute inset-0 z-0 opacity-70"
            >
                <Image 
                    src={bgImage} 
                    alt={title} 
                    fill 
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
            </motion.div>

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/90 z-0"></div>

            {/* Main Content (Center) */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col items-center justify-center px-6 max-w-4xl mx-auto text-center"
            >
                <motion.h1 
                    variants={itemVariants}
                    className="text-white font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wide drop-shadow-xl"
                >
                    {title}
                </motion.h1>
                <motion.p 
                    variants={itemVariants}
                    className="text-white/90 font-sans text-base md:text-lg lg:text-xl leading-relaxed font-medium drop-shadow-md max-w-3xl mb-10"
                >
                    {description}
                </motion.p>
                
                <motion.button 
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center cursor-pointer gap-3 border border-white rounded-full px-6 py-3 text-white font-sans text-sm md:text-base font-semibold hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm bg-black/20 group"
                >
                    Baca Selengkapnya
                    <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </motion.button>
            </motion.div>

            {/* Carousel positioned precisely on the boundary */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="absolute bottom-0 left-0 right-0 z-50 w-full translate-y-1/2"
            >
                <InfiniteCarousel images={carouselImages} />
            </motion.div>
        </section>
    );
}
