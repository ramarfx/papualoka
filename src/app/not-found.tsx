"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function NotFound() {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const hasLoaded = sessionStorage.getItem("hasLoadedBefore");
        const delay = hasLoaded ? 600 : 3600;
        const t = setTimeout(() => setStartAnimation(true), delay);
        return () => clearTimeout(t);
    }, []);

    return (
        <SmoothScroll>
            <main className="bg-papua-dark min-h-screen relative overflow-hidden">
                <Navbar />

                {/* Ambient gold glow */}
                <motion.div
                    className="pointer-events-none absolute inset-0 opacity-70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: startAnimation ? 0.7 : 0 }}
                    transition={{ duration: 1.2, ease: EASE }}
                    style={{
                        background:
                            "radial-gradient(50% 50% at 50% 30%, rgba(207,193,84,0.08), transparent 70%)",
                    }}
                />

                <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-6 py-24">
                    <motion.div
                        className="flex flex-col items-center text-center"
                        initial="hidden"
                        animate={startAnimation ? "visible" : "hidden"}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.12, delayChildren: 0.1 },
                            },
                        }}
                    >
                        {/* Eyebrow */}
                        <motion.span
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, ease: EASE },
                                },
                            }}
                            className="text-papua-yellow font-sans text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase mb-5"
                        >
                            HALAMAN TIDAK DITEMUKAN
                        </motion.span>

                        {/* 404 — large heading */}
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.8, ease: EASE },
                                },
                            }}
                            className="font-heading text-white text-7xl sm:text-8xl md:text-[200px] font-bold leading-[1] tracking-tight"
                        >
                            4<span className="text-papua-yellow">0</span>4
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.65, ease: EASE, delay: 0.1 },
                                },
                            }}
                            className="text-white/65 font-sans text-sm md:text-base leading-relaxed max-w-[560px] mt-6 mb-10"
                        >
                            Sepertinya kamu tersesat di tengah hutan Papua. Halaman yang
                            kamu cari tidak ada, atau mungkin sudah dipindahkan ke jalan
                            setapak yang lain.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, ease: EASE, delay: 0.2 },
                                },
                            }}
                            className="flex flex-col sm:flex-row items-center gap-3"
                        >
                            <Link
                                href="/home"
                                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-papua-yellow text-papua-dark font-sans text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-[0_0_24px_rgba(207,193,84,0.45)] hover:-translate-y-0.5 cursor-pointer"
                            >
                                <span>Kembali Menjelajah</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-papua-dark/70 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                            <Link
                                href="/kalender"
                                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-papua-yellow/60 hover:bg-white/[0.04] font-sans text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer"
                            >
                                Lihat Kalender Budaya
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>

                <Footer className="bg-papua-dark" />
            </main>
        </SmoothScroll>
    );
}