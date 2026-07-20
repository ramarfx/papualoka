"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { TEAM_MEMBERS } from "@/data/team";

const VERTICAL_OFFSETS = [
  "",
  "lg:-translate-y-16",
  "",
  "lg:-translate-y-10",
  "",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
};

function LinkedinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function TeamSection() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoadedBefore");
    const delay = hasLoaded ? 1500 : 3500;
    const timer = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#1F1F1F] w-full py-24 md:py-32 lg:py-[120px]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-bold text-[#C8B34A] tracking-wider text-center mb-6"
        >
          PAPUALOKA
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.1 }}
          className="text-[#b0b0b0] text-sm md:text-base leading-relaxed text-center max-w-[700px] mb-16 md:mb-24 lg:mb-40"
        >
          Tim kami terdiri dari individu-individu berdedikasi yang bekerja sama
          untuk melestarikan dan mempromosikan kekayaan budaya Papua.
        </motion.p>

        {/* Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={ready ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-end justify-items-center gap-x-6 sm:gap-x-8 lg:gap-x-9 gap-y-10 sm:gap-y-10 lg:gap-y-0"
        >
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className={`relative group cursor-pointer ${VERTICAL_OFFSETS[index]}`}
            >
              {/* Card */}
              <div
                className={`relative w-[140px] h-[200px] sm:w-[155px] sm:h-[220px] md:w-[170px] md:h-[240px] rounded-xl overflow-hidden transition-all duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-4 ${
                  member.glow ? "shadow-[0_0_18px_rgba(214,190,82,.45)]" : ""
                }`}
              >
                {/* Image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 140px, (max-width: 768px) 155px, 170px"
                />

                {/* Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-black/90 via-black/40 to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-[350ms] ease-[cubic-bezier(.22,1,.36,1)] sm:translate-y-5 sm:group-hover:translate-y-0 flex flex-col justify-end p-3 md:p-4">
                  <p className="text-white font-bold text-sm sm:text-base md:text-[22px] leading-tight mb-0.5">
                    {member.name}
                  </p>
                  <p className="text-[#d0d0d0] text-xs md:text-sm">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              {member.socials && (
                <div className="flex items-center justify-center gap-2 mt-3 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#C8B34A] hover:border-[#C8B34A] hover:text-white hover:scale-110 transition-all duration-300"
                    >
                      <LinkedinIcon />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#C8B34A] hover:border-[#C8B34A] hover:text-white hover:scale-110 transition-all duration-300"
                    >
                      <InstagramIcon />
                    </a>
                  )}
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#C8B34A] hover:border-[#C8B34A] hover:text-white hover:scale-110 transition-all duration-300"
                    >
                      <GithubIcon />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
