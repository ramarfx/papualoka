'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Indonesia");
  const [activeCulture, setActiveCulture] = useState(0);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  const languages = ["Indonesia", "English", "Deutsch", "日本語"];


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
        <div ref={bgRef} className="absolute inset-0 w-full h-[120%] pointer-events-none transform-gpu">
          <Image
            src="/img/opening-bg.png"
            alt="Langit Papua"
            fill
            className="object-cover object-center scale-[1.02]"
            priority
          />
        </div>

        {/* Layer 2: Text "PAPUA" (Moves medium, 25%) */}
        <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 transform-gpu">
          <h1 className="font-bold text-[85px] sm:text-[140px] md:text-[200px] lg:text-[240px] text-white leading-none tracking-normal font-heading -mt-18 text-center select-none">
            PAPUA
          </h1>
        </div>

        {/* Layer 3: Foreground Mountain Overlay (Moves slowest, 10%) */}
        <div ref={overlayRef} className="absolute inset-0 w-full h-[108%] pointer-events-none z-20 transform-gpu">
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
              className="pointer-events-auto px-5 py-2.5 rounded-full border-2 border-white bg-transparent font-sans text-xl tracking-normal font-semibold uppercase cursor-pointer hover:bg-papua-green hover:border-papua-green hover:text-white transition-all"
            >
              Menjelajah
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <div className="pointer-events-auto relative select-none">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 text-white/80 hover:text-white text-xs sm:text-sm font-sans tracking-widest transition-colors duration-200 py-2 cursor-pointer font-semibold uppercase"
              >
                <span>{selectedLang}</span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${langDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Language Dropdown List */}
              {langDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setLangDropdownOpen(false)} />
                  <div className="absolute bottom-10 left-0 z-20 bg-black/75 backdrop-blur-xl border border-white/10 rounded-2xl py-2.5 w-40 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-3">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setSelectedLang(lang);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-5 py-2.5 text-xs transition-colors cursor-pointer ${selectedLang === lang ? "text-emerald-400 bg-white/5 font-semibold" : "text-white/70 hover:text-white hover:bg-white/10"}`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
