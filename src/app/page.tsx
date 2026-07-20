"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [animationDelay, setAnimationDelay] = useState<number | null>(null);

  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if it's the first load to synchronize animation with the InitialLoader
    const hasLoaded = sessionStorage.getItem("hasLoadedBefore");
    if (!hasLoaded) {
      setAnimationDelay(4); // Loader duration + delay
    } else {
      setAnimationDelay(2.5);
    }

    let ticking = false;

    const updatePosition = () => {
      const y = window.scrollY;

      // Background layer (sky) moves at 40% scroll speed
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(0, ${y * 0.4}px, 0)`;
      }

      // Text layer ("PAPUA") moves at 25% scroll speed and fades out
      if (textRef.current) {
        textRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0)`;
        const opacity = Math.max(0, 1 - y / 550);
        textRef.current.style.opacity = `${opacity}`;
      }

      // Foreground mountain overlay moves at 10% scroll speed
      if (overlayRef.current) {
        overlayRef.current.style.transform = `translate3d(0, ${y * 0.1}px, 0)`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = ["Indonesia"];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#050906] text-white min-h-screen font-sans selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      <Navbar />

      {/* Hero Parallax Header Container */}
      <header className="h-screen w-full relative overflow-hidden bg-[#060b08]">
        {/* Layer 1: Background Sky (Moves slow, 40%) */}
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-[120%] pointer-events-none transform-gpu"
        >
          <Image
            src="/img/opening-bg.png"
            alt="Langit Papua"
            fill
            className="object-cover object-center scale-[1.02]"
            priority
          />
        </div>

        {/* Layer 2: Text "PAPUA" (Moves medium, 25%) */}
        <div
          ref={textRef}
          className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              pointer-events-none
              z-10
              transform-gpu
              translate-y-[3vh]
          "
        >
          <div className=" py-4">
            <motion.h1
              initial="hidden"
              animate={animationDelay !== null ? "visible" : "hidden"}
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    damping: 15,
                    stiffness: 100,
                    delay: animationDelay || 0,
                  },
                },
              }}
              className="font-bold -mt-12 text-[85px] sm:text-[140px] md:text-[200px] lg:text-[240px] text-white leading-none tracking-normal font-heading text-center select-none"
            >
              PAPUA
            </motion.h1>
          </div>
        </div>

        {/* Layer 3: Foreground Mountain Overlay (Moves slowest, 10%) */}
        <div
          ref={overlayRef}
          className="absolute inset-0 w-full h-[108%] pointer-events-none z-20 transform-gpu"
        >
          <Image
            src="/img/opening-overlay.png"
            alt="Pegunungan Papua"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>

        <div className="absolute bottom-0 w-full h-1/3 z-30 flex flex-col justify-between px-8 md:px-16 pb-8 pointer-events-none">
          <div className="flex justify-center">
            <Link
              href="/home"
              className="pointer-events-auto px-5 py-2.5 rounded-full border-2 border-white bg-transparent font-sans text-xl tracking-normal font-semibold uppercase cursor-pointer hover:bg-papua-green-light hover:border-papua-green-light hover:text-white transition-all"
            >
              Menjelajah
            </Link>
          </div>

        </div>
      </header>
    </div>
  );
}
