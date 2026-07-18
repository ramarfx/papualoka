"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

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
    return (
        <section className="w-full bg-papua-dark py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-8">
                {stats.map((stat, idx) => (
                    <div 
                        key={idx} 
                        className={`flex-1 flex flex-col ${idx == 0 ? 'md:border-x border-white/20 md:pr-8 ' : ''} text-center md:text-center items-center md:items-center md:border-r border-white/20`}
                    >
                        <Counter value={stat.value} suffix={stat.suffix} />
                        <p className="text-white/70 font-sans text-sm md:text-base leading-relaxed max-w-xs text-center md:text-center">
                            {stat.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
