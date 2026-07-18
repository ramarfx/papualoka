"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpSentencesProps {
    children: string;
    className?: string;
    delay?: number;
}

export function FadeUpSentences({ children, className = "", delay = 0 }: FadeUpSentencesProps) {
    const words = children.split(" ");

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
                delayChildren: delay,
            }
        }
    };

    const childVariants: Variants = {
        hidden: { opacity: 0, top: 15, filter: "blur(8px)" },
        visible: { 
            opacity: 1, 
            top: 0, 
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
        }
    };

    return (
        <motion.p
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10%" }}
            className={className}
        >
            {words.map((word, i) => (
                <motion.span 
                    key={i} 
                    variants={childVariants} 
                    className="relative inline-block mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </motion.p>
    );
}
