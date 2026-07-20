"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MakananItem } from "./types";

interface ProvinceMakananKhasProps {
    provinceName: string;
    description: string;
    items: MakananItem[];
}

export default function ProvinceMakananKhas({ provinceName, description, items }: ProvinceMakananKhasProps) {
    const [activeMakanan, setActiveMakanan] = useState<string | number>(items[0]?.id);

    return (
        <section className="max-w-7xl mx-auto px-6 relative z-20">
            <div className="text-center mb-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-heading font-bold mb-3"
                >
                    <span className="text-papua-yellow">Makanan Khas</span> <span className="text-papua-green">{provinceName}</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="text-black/60 font-sans text-xs md:text-sm leading-relaxed max-w-2xl mx-auto"
                >
                    {description}
                </motion.p>
            </div>

            {/* Interactive Expanding Cards */}
            <div className="grid grid-cols-2 md:flex md:flex-row h-auto md:h-[480px] gap-4 w-full">
                {items.map((item) => {
                    const isActive = activeMakanan === item.id;
                    return (
                        <motion.div
                            key={item.id}
                            onHoverStart={() => setActiveMakanan(item.id)}
                            onClick={() => setActiveMakanan(item.id)}
                            animate={{
                                flex: isActive ? 3 : 1,
                            }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                            className={`relative h-[220px] sm:h-[260px] md:h-full rounded-3xl overflow-hidden cursor-pointer group shadow-md md:shadow-none ${isActive ? 'md:shadow-2xl' : 'md:shadow-md'} col-span-1`}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 md:via-black/50" />

                            {/* Content container */}
                            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                                {/* Full content: always visible on mobile, conditionally visible on desktop */}
                                <div className={`flex flex-col ${isActive ? 'md:flex' : 'md:hidden'}`}>
                                    <h3 className="text-white font-heading text-xs sm:text-base md:text-lg font-bold mb-1 md:mb-2 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/80 font-sans text-[8px] sm:text-xs md:text-xs leading-relaxed line-clamp-none md:line-clamp-6">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Inactive title: hidden on mobile, conditionally visible on desktop */}
                                <div className={`hidden ${!isActive ? 'md:block' : 'md:hidden'} md:absolute md:bottom-8 md:left-8 md:-rotate-90 md:origin-left`}>
                                    <h3 className="text-white font-heading text-sm md:text-base font-bold whitespace-nowrap">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
