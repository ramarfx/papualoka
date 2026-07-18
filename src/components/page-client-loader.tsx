"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/loader";
import { motion, AnimatePresence } from "framer-motion";

export default function PageClientLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Force the loader to show for exactly 5 seconds on the client side
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        
        // Hide scrollbar while loading
        document.body.style.overflow = 'hidden';
        
        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100]"
                >
                    <Loader />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
