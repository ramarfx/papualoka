"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        setStartAnimation(true);
        if (process.env.NODE_ENV === "development") {
            console.error(error);
        }
    }, [error]);

    return (
        <html lang="id">
            <body className="bg-papua-dark text-white antialiased">
                <main className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 py-24">
                    {/* Ambient glow */}
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

                    <motion.div
                        className="relative flex flex-col items-center text-center"
                        initial="hidden"
                        animate={startAnimation ? "visible" : "hidden"}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.12, delayChildren: 0.1 },
                            },
                        }}
                    >
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
                            KESALAHAN SISTEM
                        </motion.span>

                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.8, ease: EASE },
                                },
                            }}
                            className="font-heading text-white text-7xl sm:text-8xl md:text-[160px] font-bold leading-[1] tracking-tight"
                        >
                            <span className="text-papua-yellow">!</span>
                        </motion.h1>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.65, ease: EASE, delay: 0.1 },
                                },
                            }}
                            className="text-white/65 font-sans text-sm md:text-base leading-relaxed max-w-[560px] mt-6 mb-5"
                        >
                            Maaf, terjadi kesalahan tak terduga pada aplikasi. Coba muat
                            ulang halaman — bila masalah berlanjut, kembali sebentar lagi
                            dan kami akan menyambutmu di tanah Papua.
                        </motion.p>

                        {error?.digest && (
                            <div className="mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-white/40 font-sans text-[11px] tracking-[0.15em] uppercase">
                                Kode: {error.digest}
                            </div>
                        )}

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
                            <button
                                onClick={reset}
                                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-papua-yellow text-papua-dark font-sans text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-[0_0_24px_rgba(207,193,84,0.45)] hover:-translate-y-0.5 cursor-pointer"
                            >
                                <RotateCcw className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" strokeWidth={2.5} />
                                <span>Coba Lagi</span>
                            </button>
                            <Link
                                href="/home"
                                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-papua-yellow/60 hover:bg-white/[0.04] font-sans text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer"
                            >
                                Kembali ke Beranda
                            </Link>
                        </motion.div>
                    </motion.div>
                </main>
            </body>
        </html>
    );
}