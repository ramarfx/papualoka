"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface StatItem {
    value: number;
    suffix: string;
    description: string;
}

interface DestinationStatsProps {
    stats: StatItem[];
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (!isInView) return;
        
        let start = 0;
        const duration = 2000; // 2 seconds
        const increment = value / (duration / 16); // 60fps

        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [value, isInView]);

    // Format numbers like 1700 to 1.700
    const formattedCount = new Intl.NumberFormat('id-ID').format(count);

    return (
        <h3 ref={ref} className="text-white text-5xl md:text-6xl lg:text-[72px] font-heading font-medium mb-4">
            {formattedCount}{suffix}
        </h3>
    );
}

export default function DestinationStats({ stats }: DestinationStatsProps) {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { type: "spring", stiffness: 200, damping: 20 } 
        }
    };

    return (
        <section className="w-full bg-papua-dark pb-24 pt-32 md:pt-40 lg:pt-64 px-6 relative z-10 overflow-hidden">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-8"
            >
                {stats.map((stat, idx) => (
                    <motion.div 
                        variants={itemVariants}
                        key={idx} 
                        className={`flex-1 flex flex-col ${idx == 0 ? 'md:border-x border-white/20 md:pr-8 ' : ''} text-center md:text-center items-center md:items-center md:border-r border-white/20`}
                    >
                        <Counter value={stat.value} suffix={stat.suffix} />
                        <p className="text-white/70 font-sans text-sm md:text-base leading-relaxed max-w-xs text-center md:text-center">
                            {stat.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
