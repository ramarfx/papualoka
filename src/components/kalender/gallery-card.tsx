"use client";

import Image from "next/image";
import { GALLERY_ITEMS } from "@/data/kalender-events";

interface GalleryCardProps {
    hovered: boolean;
}

export default function GalleryCard({ hovered }: GalleryCardProps) {
    return (
        <div
            className="rounded-[18px] p-7 overflow-hidden transform-gpu will-change-transform transition-[transform,background-color,border-color,box-shadow] duration-350 ease-[cubic-bezier(.22,1,.36,1)]"
            style={{
                background: hovered
                    ? "rgba(255,255,255,0.045)"
                    : "rgba(255,255,255,0.03)",
                border: `1px solid ${hovered ? "#CFC154" : "rgba(255,255,255,0.08)"}`,
                boxShadow: hovered ? "0 0 20px rgba(207,193,84,0.18)" : "none",
                transform: hovered ? "translateY(-3px)" : "translateY(0px)",
            }}
        >
            <div className="flex items-center justify-between mb-5">
                <h3 className="font-heading text-white text-lg font-bold tracking-wide">
                    Galeri Acara
                </h3>
                <span className="text-papua-yellow/80 font-sans text-[11px] font-semibold tracking-[0.15em] uppercase">
                    {GALLERY_ITEMS.length} Sorotan
                </span>
            </div>

            {/* Collage */}
            <div
                className="grid grid-cols-2 gap-3"
                style={{ gridAutoRows: "104px" }}
            >
                {GALLERY_ITEMS.slice(0, 4).map((item, i) => (
                    <div
                        key={item.id}
                        className={`group relative rounded-xl overflow-hidden bg-black/40 ${
                            i === 0 ? "row-span-2" : "row-span-1"
                        }`}
                    >
                        <Image
                            src={item.src}
                            alt={item.location}
                            fill
                            className="object-cover transition-[transform,filter] duration-500 ease-out group-hover:scale-105 group-hover:brightness-105"
                            sizes="(max-width: 768px) 50vw, 20vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                            <p className="text-white font-sans text-[11px] font-bold tracking-wide">
                                {item.location}
                            </p>
                            <p className="text-white/60 font-sans text-[10px] leading-snug line-clamp-2 mt-0.5">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}