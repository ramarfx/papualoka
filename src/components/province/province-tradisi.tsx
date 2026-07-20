"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TradisiItem } from "./types";
import ImageComparison from "./image-comparison";

interface ProvinceTradisiProps {
    provinceName: string;
    description: string;
    items: TradisiItem[];
}

export default function ProvinceTradisi({ provinceName, description, items }: ProvinceTradisiProps) {
    return (
        <section className="max-w-7xl mx-auto px-6 mb-32 z-20 relative">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-4"
                    >
                        <span className="text-papua-yellow">Tradisi</span> <span className="text-papua-green">{provinceName}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        className="text-black/60 font-sans text-sm md:text-base leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/5 transition-colors cursor-pointer">
                        <ChevronLeft className="w-5 h-5 text-black/60" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-papua-green text-white flex items-center justify-center hover:bg-papua-green-light transition-colors shadow-lg cursor-pointer">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 }}
                        className="rounded-3xl overflow-hidden bg-papua-green flex flex-col group cursor-pointer shadow-xl"
                    >
                        <div className="relative w-full h-64 overflow-hidden">
                            <ImageComparison image1={item.image} image2={item.image2} alt={item.title} />
                        </div>
                        <div className="p-8 flex flex-col flex-1">
                            <h3 className="font-heading text-2xl font-bold mb-3">
                                <span className="text-papua-yellow">{item.title.split(' ')[0]}</span> <span className="text-white">{item.title.split(' ').slice(1).join(' ')}</span>
                            </h3>
                            <p className="text-white/80 font-sans text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
