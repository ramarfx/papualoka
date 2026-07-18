"use client";

import { motion, Variants } from "framer-motion";

interface DestinationVideoProps {
    title: string;
    subtitle: string;
    description: string;
    youtubeId: string;
}

export default function DestinationVideo({ title, subtitle, description, youtubeId }: DestinationVideoProps) {
    const textContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const textItemVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <section className="w-full bg-papua-dark py-24 relative z-10 overflow-hidden">
            <div className="max-w-7xl px-6 mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                {/* Left Text */}
                <motion.div 
                    variants={textContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex-1 flex flex-col"
                >
                    <motion.h2 
                        variants={textItemVariants}
                        className="text-white font-heading text-5xl md:text-6xl font-bold mb-2"
                    >
                        {title}
                    </motion.h2>
                    <motion.h3 
                        variants={textItemVariants}
                        className="text-white/80 font-sans text-3xl md:text-4xl font-light mb-8"
                    >
                        {subtitle}
                    </motion.h3>
                    <motion.p 
                        variants={textItemVariants}
                        className="text-white/70 font-sans text-base md:text-lg leading-relaxed max-w-xl"
                    >
                        {description}
                    </motion.p>
                </motion.div>

                {/* Right Video */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="flex-1 w-full"
                >
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
                    >
                        {/* Overlay glow effect on hover */}
                        <div className="absolute inset-0 bg-papua-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                        <iframe 
                            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0`} 
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full z-0"
                        ></iframe>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
