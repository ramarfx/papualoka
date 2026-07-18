"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface AccessStep {
    id: string | number;
    title: string;
    description: string;
    image: string;
    align: "left" | "right";
}

interface DestinationAccessProps {
    title: string;
    steps: AccessStep[];
}

export default function DestinationAccess({ title, steps }: DestinationAccessProps) {
    return (
        <section className="w-full relative z-20">
            {/* Top Divider */}
            <div className="absolute -top-18 d:-top-36 left-0 w-full h-auto z-10">
                <Image
                    src="/img/divider.svg"
                    alt="Divider"
                    width={1440}
                    height={297}
                    className="object-cover object-top w-full h-auto"
                    priority
                />
            </div>

            <div className="bg-papua-green w-full pt-12 md:pt-24 pb-48">
                <div className="max-w-5xl mx-auto px-6 relative z-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-white font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-24 md:mb-32"
                    >
                        {title}
                    </motion.h2>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.3 } },
                            hidden: {}
                        }}
                        className="relative flex flex-col gap-24 md:gap-32"
                    >
                        {steps.map((step, idx) => (
                            <motion.div
                                key={step.id}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { 
                                        opacity: 1, 
                                        y: 0, 
                                        transition: { duration: 0.8, ease: "easeOut" } 
                                    }
                                }}
                                className={`relative z-10 flex flex-col ${step.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20`}
                            >
                                {/* Connector Line to next step */}
                                {idx < steps.length - 1 && (
                                    <motion.div 
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ opacity: 0.5 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="hidden md:block absolute left-1/2 -translate-x-1/2 z-[-1] pointer-events-none"
                                        style={{ top: '50%', width: step.align === 'left' ? 762 : 782 }}
                                    >
                                        <Image
                                            src={step.align === 'left' ? "/img/destination/curved-right.svg" : "/img/destination/curved-left.svg"}
                                            alt=""
                                            width={step.align === 'left' ? 762 : 782}
                                            height={step.align === 'left' ? 374 : 311}
                                            className="w-full h-auto object-contain"
                                        />
                                    </motion.div>
                                )}

                                {/* Image Circle */}
                                <div className="flex-1 flex justify-center">
                                    <motion.div 
                                        whileHover={{ scale: 1.05, rotate: 2 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-2 border-2 border-papua-yellow/50 bg-transparent cursor-pointer"
                                    >
                                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                            <Image
                                                src={step.image}
                                                alt={step.title}
                                                fill
                                                className="object-cover transition-transform duration-700 hover:scale-110"
                                            />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                                    <h3 className="text-white font-heading text-2xl md:text-3xl font-bold mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/80 font-sans text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
