"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/components/loader";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [prevPathname, setPrevPathname] = useState(pathname);
    const [isLoading, setIsLoading] = useState(false);
    
    // Store the previous page content to show while the loader is active
    const oldChildren = useRef(children);

    if (pathname !== prevPathname) {
        setPrevPathname(pathname);
        setIsLoading(true);
        // Do not update oldChildren.current here, so it keeps the previous page
    } else if (!isLoading) {
        // Keep it up to date only when not loading
        oldChildren.current = children;
    }

    useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 2000); // Enforce minimum 2 seconds loader
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    return (
        <>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        key="transition-loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-[99999]"
                    >
                        <Loader />
                    </motion.div>
                )}
            </AnimatePresence>
            {isLoading ? oldChildren.current : children}
        </>
    );
}
