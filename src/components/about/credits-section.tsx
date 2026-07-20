"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";

const CREDITS = [
  {
    id: "01",
    title: "Lorem Ipsum Dolor Sit",
    subtitle: "Sumber referensi konten",
    url: "#",
  },
  {
    id: "02",
    title: "Am consectetur adipis",
    subtitle: "Data dan riset",
    url: "#",
  },
  {
    id: "03",
    title: "Sed do eiusmod tempor",
    subtitle: "Artikel dan publikasi",
    url: "#",
  },
  {
    id: "04",
    title: "Incididunt ut labore",
    subtitle: "Gambar dan visual",
    url: "#",
  },
  {
    id: "05",
    title: "Dolore magna aliqua",
    subtitle: "Kontributor konten",
    url: "#",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 70, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 380, damping: 20 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, x: -20 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { type: "spring", stiffness: 400, damping: 22 },
  },
};

export default function CreditsSection() {
  return (
    <section className="bg-[#1F1F1F] w-full py-24 md:py-32 lg:py-[120px]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16 xl:gap-20"
      >
        {/* Left Column */}
        <motion.div variants={fadeUpVariants} className="flex-1 w-full">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] font-bold text-white uppercase leading-[1.05] tracking-tight mb-6 md:mb-7">
            Kredit &amp; Sumber Isi / Konten
          </h2>
          <p className="text-[#A9A9A9] text-sm sm:text-base leading-[170%] max-w-[340px]">
            Semua konten, data, dan materi visual yang ditampilkan di situs ini
            bersumber dari berbagai referensi terpercaya dan kontributor yang
            telah memberikan izin.
          </p>
        </motion.div>

        {/* Right Column - Scrollable Card */}
        <motion.div variants={fadeUpVariants} className="flex-1 w-full max-w-[620px]">
          <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl backdrop-blur-md p-6 sm:p-8 h-[360px] sm:h-[400px] md:h-[430px] overflow-y-auto credits-scrollbar">
            <ul className="flex flex-col">
              {CREDITS.map((credit) => (
                <motion.li
                  key={credit.id}
                  variants={itemVariants}
                >
                  <a
                    href={credit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-4 sm:gap-5 p-3 sm:p-4 rounded-xl border border-transparent transition-all duration-[350ms] ease-[cubic-bezier(.22,1,.36,1)] hover:border-[#CFC154] hover:bg-[rgba(207,193,84,.05)] hover:shadow-[0_0_18px_rgba(207,193,84,.18)] hover:-translate-y-1"
                  >
                    {/* Timeline */}
                    <div className="flex flex-col items-center pt-1 shrink-0">
                      <span className="text-[#F3F3F3] font-bold text-xs sm:text-sm font-sans">
                        {credit.id}
                      </span>
                      <div className="w-[2px] flex-1 min-h-[36px] mt-2 relative">
                        <div className="absolute inset-0 bg-white/10 rounded-full" />
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#CFC154] rounded-full transition-all duration-300 group-hover:scale-y-[1.5] group-hover:origin-top group-hover:shadow-[0_0_6px_rgba(207,193,84,.4)]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center min-w-0">
                      <p className="text-white font-semibold text-sm sm:text-[15px] leading-snug mb-1 transition-colors duration-300">
                        {credit.title}
                      </p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[#A5A5A5] text-xs sm:text-sm transition-colors duration-300 group-hover:text-[#CFC154]">
                          {credit.subtitle}
                        </span>
                        <span className="text-[#CFC154] text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                          Lihat Sumber
                        </span>
                        <ExternalLink
                          size={12}
                          className="text-[#CFC154] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1.5 shrink-0"
                        />
                      </div>
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
