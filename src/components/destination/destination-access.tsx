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
            <div className="absolute -top-36 left-0 w-full h-auto z-10">
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

                    <div className="relative flex flex-col gap-24 md:gap-32">
                        {/* Curved Line Background (Desktop only) */}
                        <div className="hidden md:block absolute top-[10%] left-1/2 -translate-x-1/2 h-[80%] w-[600px] z-0 opacity-50 pointer-events-none">
                            <Image
                                src="/img/destination/curved-line.svg"
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </div>

                        {steps.map((step, idx) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className={`relative z-10 flex flex-col ${step.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20`}
                            >
                                {/* Image Circle */}
                                <div className="flex-1 flex justify-center">
                                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-2 border-2 border-papua-yellow/50 bg-transparent">
                                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                            <Image
                                                src={step.image}
                                                alt={step.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
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
                    </div>
                </div>
            </div>
        </section>
    );
}
