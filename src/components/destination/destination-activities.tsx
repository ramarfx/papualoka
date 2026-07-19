"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export interface ActivityItem {
    id: string | number;
    title: string;
    description: string;
    image: string;
}

interface DestinationActivitiesProps {
    eyebrow?: string;
    title: string;
    description?: string;
    activities: ActivityItem[];
}

export default function DestinationActivities({
    eyebrow = "JELAJAHI",
    title,
    description,
    activities,
}: DestinationActivitiesProps) {
    // Parent stagger variants
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    // Card entry variants
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // easeOutExpo
            },
        },
    };

    return (
        <section className="w-full bg-papua-dark py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
                    {eyebrow && (
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-white font-heading text-base md:text-4xl font-medium uppercase mb-3 block"
                        >
                            {eyebrow}
                        </motion.span>
                    )}

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-papua-yellow font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-6 text-center"
                    >
                        {title}
                    </motion.h2>

                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-white/60 font-sans text-sm md:text-base leading-relaxed max-w-2xl mx-auto text-center"
                        >
                            {description}
                        </motion.p>
                    )}
                </div>

                {/* Grid Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center"
                >
                    {activities.map((activity) => (
                        <motion.div
                            key={activity.id}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="group relative w-full max-w-[380px] overflow-hidden border border-white duration-500 shadow-2xl cursor-pointer"
                        >
                            {/* Background Image */}
                            <Image
                                src={activity.image}
                                alt={activity.title}
                                width={316}
                                height={495}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out scale-105"
                                priority={false}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black" />

                            {/* Content Wrapper */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center z-10">

                                {/* Activity Title */}
                                <h3 className="text-white font-heading text-xl md:text-2xl font-bold tracking-wider mb-2 transition-colors duration-300 group-hover:text-papua-yellow">
                                    {activity.title}
                                </h3>

                                {/* Activity Description */}
                                <p className="text-white/70 font-sans text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 leading-relaxed max-w-[240px]">
                                    {activity.description}
                                </p>

                                {/* Bottom Accent Line */}
                                <div className="w-12 h-[1px] bg-white/40 transition-all duration-300 group-hover:w-20 group-hover:bg-papua-yellow" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
