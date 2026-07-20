"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Global smooth scroll provider using Lenis.
 * Place this once in the layout or page wrapper.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            lerp: 0.05,
        });

        lenisRef.current = lenis;

        lenis.on("scroll", ScrollTrigger.update);

        const raf = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        // Automatically observe body height changes and update Lenis scroll bounds
        const resizeObserver = new ResizeObserver(() => {
            lenis.resize();
            ScrollTrigger.refresh();
        });

        if (document.body) {
            resizeObserver.observe(document.body);
        }

        return () => {
            resizeObserver.disconnect();
            lenis.destroy();
            lenisRef.current = null;
            gsap.ticker.remove(raf);
        };
    }, []);

    return <>{children}</>;
}

