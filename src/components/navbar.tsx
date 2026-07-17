"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, ChevronRight } from "lucide-react";

export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-16 py-4 md:py-6 transition-all duration-500 ${isScrolled ? "bg-black/45 backdrop-blur-md border-b border-white/5 py-3 md:py-4 shadow-lg" : "bg-transparent"}`}>
                {/* Left: MENU and Hamburger Icon */}
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="focus:outline-none flex items-center gap-3 p-2 rounded-full hover:bg-white/10 transition-colors duration-300 group"
                    aria-label="Buka Menu"
                >
                    <span className="text-white font-sans text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">Menu</span>
                    <div className="flex flex-col gap-[5px] items-start w-6">
                        <div className="w-full h-[2px] bg-white rounded-full transition-all duration-300 group-hover:bg-emerald-400"></div>
                        <div className="w-[80%] h-[2px] bg-white rounded-full transition-all duration-300 group-hover:bg-emerald-400"></div>
                        <div className="w-[50%] h-[2px] bg-white rounded-full transition-all duration-300 group-hover:bg-emerald-400"></div>
                    </div>
                </button>

                {/* Center: Logo */}
                <Link href="/" className="absolute left-1/2 -translate-x-1/2 cursor-pointer flex items-center">
                    <Image
                        src="/img/logo.png"
                        alt="PapuaLoka"
                        width={180}
                        height={44}
                        className="h-7 sm:h-9 md:h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                {/* Right: 4-bar Icon */}
                <button
                    className="focus:outline-none flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
                    aria-label="Audio/Visualizer Menu"
                >
                    <div className="flex items-end gap-[3.5px] h-6 w-6 justify-center">
                        <div className="w-[3px] h-3.5 bg-white rounded-full transition-all duration-300"></div>
                        <div className="w-[3px] h-6 bg-white rounded-full transition-all duration-300"></div>
                        <div className="w-[3px] h-2.5 bg-white rounded-full transition-all duration-300"></div>
                        <div className="w-[3px] h-6 bg-white rounded-full transition-all duration-300"></div>
                    </div>
                </button>
            </nav>

            {/* Sidebar Drawer */}
            <div className={`fixed inset-0 z-50 transition-all duration-500 ${sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                {/* Backdrop */}
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-500"
                />
                {/* Drawer Body */}
                <div className={`absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-gradient-to-b from-[#09110d] to-[#040806] border-r border-white/5 p-8 flex flex-col justify-between shadow-2xl transition-transform duration-500 ease-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <div>
                        <div className="flex items-center justify-between mb-12">
                            <Image src="/img/logo.png" alt="PapuaLoka" width={130} height={32} className="h-6 w-auto object-contain" />
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Menu Links */}
                        <div className="flex flex-col gap-6 font-sans">
                            {[
                                { label: "Beranda", id: "beranda" },
                                { label: "Destinasi Pilihan", id: "destinasi-pilihan" },
                                { label: "Warisan Budaya", id: "warisan-budaya" },
                                { label: "Rencanakan Perjalanan", id: "rencanakan-perjalanan" }
                            ].map((item, idx) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setSidebarOpen(false);
                                        if (item.id === "beranda") {
                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                        }
                                    }}
                                    className="text-left text-lg text-white/70 hover:text-emerald-400 hover:translate-x-2 transition-all duration-300 font-medium tracking-wide flex items-center gap-3 group cursor-pointer"
                                >
                                    <span className="text-xs text-emerald-500 font-mono">0{idx + 1}</span>
                                    <span>{item.label}</span>
                                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-400" strokeWidth={2.5} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-6">
                        <p className="text-[10px] text-white/40 tracking-wider uppercase mb-3">Ikuti Kami</p>
                        <div className="flex gap-4 mb-5">
                            {["Instagram", "YouTube", "Twitter"].map((social) => (
                                <a key={social} href="#" className="text-xs text-white/60 hover:text-emerald-400 transition-colors">{social}</a>
                            ))}
                        </div>
                        <p className="text-[10px] text-white/30">&copy; 2026 PapuaLoka. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
}