"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface DestinationVideoProps {
    title: string;
    subtitle: string;
    description: string;
    youtubeId: string;
}

export default function DestinationVideo({ title, subtitle, description, youtubeId }: DestinationVideoProps) {
    return (
        <section className="w-full bg-papua-dark py-24 relative z-10 ">
            <div className="max-w-7xl px-6 mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                {/* Left Text */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 flex flex-col"
                >
                    <h2 className="text-white font-heading text-5xl md:text-6xl font-bold mb-2">
                        {title}
                    </h2>
                    <h3 className="text-white/80 font-sans text-3xl md:text-4xl font-light mb-8">
                        {subtitle}
                    </h3>
                    <p className="text-white/70 font-sans text-base md:text-lg leading-relaxed max-w-xl">
                        {description}
                    </p>
                </motion.div>

                {/* Right Video */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex-1 w-full"
                >
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                        <iframe 
                            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0`} 
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
