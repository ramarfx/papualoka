"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";

const heroTextVariants: Variants = {
  hidden: { y: 100, opacity: 0, scale: 0.85 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 350, damping: 18, delay: 0.2 },
  },
};

export default function TimKamiHeading() {
  const [ready, setReady] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoadedBefore");
    const delay = hasLoaded ? 1500 : 3500;
    const timer = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (!headingRef.current) return;

      const rect = headingRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(Math.max((vh - rect.top) / (vh * 0.9), 0), 1);

      const translateY = window.scrollY * 0.06;
      const opacity = 0.12 + progress * 0.28;
      const scale = 0.97 + progress * 0.03;

      headingRef.current.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      headingRef.current.style.opacity = String(opacity);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="bg-[#1F1F1F] w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden flex items-center justify-center">
      <div className="overflow-hidden px-4">
        <motion.h2
          ref={headingRef}
          initial="hidden"
          animate={ready ? "visible" : "hidden"}
          variants={heroTextVariants}
          className="font-heading font-black uppercase leading-[0.85] text-center whitespace-nowrap bg-gradient-to-b from-white/25 to-white/5 bg-clip-text text-transparent blur-[0.3px] transform-gpu will-change-transform text-[60px] sm:text-[100px] md:text-[160px] lg:text-[220px] xl:text-[280px]"
        >
          TIM KAMI
        </motion.h2>
      </div>
    </section>
  );
}
