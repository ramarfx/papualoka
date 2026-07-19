"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import React from "react";

export interface PreservationItem {
    id: string | number;
    text: string;
    icon: React.ReactNode;
}

interface DestinationPreservationProps {
    bgImage: string;
    title: string;
    description?: string;
    items: PreservationItem[];
}

export default function DestinationPreservation({
    bgImage,
    title,
    description,
    items,
}: DestinationPreservationProps) {
    
    // Parent stagger variants
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    // Card animation variants
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // easeOutExpo
            },
        },
    };

    return (
        <section className="relative w-full py-24 md:py-32 overflow-hidden min-h-[600px] flex items-center justify-center z-10">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <Image
                    src={bgImage}
                    alt={title}
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    priority={false}
                />
                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-black/60 backdrop-brightness-[0.85]" />
            </div>

            {/* Content Area */}
            <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
                
                {/* Header */}
                <div className="text-center mb-16 md:mb-20 flex flex-col items-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-papua-yellow font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-6"
                    >
                        {title}
                    </motion.h2>

                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="text-white/80 font-sans text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-center"
                        >
                            {description}
                        </motion.p>
                    )}
                </div>

                {/* Grid of Glassmorphic Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center"
                >
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="group relative w-full max-w-[280px] bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center gap-6 min-h-[300px] transition-all duration-500 hover:bg-white/10 cursor-pointer shadow-2xl"
                        >
                            {/* Icon Container */}
                            <div className="text-white w-14 h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                                {item.icon}
                            </div>

                            {/* Description Text */}
                            <p className="text-white/90 text-sm md:text-base font-sans font-medium leading-relaxed text-center">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
