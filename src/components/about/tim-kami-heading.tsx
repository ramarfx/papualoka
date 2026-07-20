"use client";

import { motion, type Variants } from "framer-motion";

const text = "TIM KAMI";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const letterVariants: Variants = {
  hidden: {
    y: "-120%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 18,
    },
  },
};

export default function TimKamiHeading() {
  return (
    <section className="relative flex items-center w-full overflow-hidden bg-[#1F1F1F] min-h-[160px] sm:min-h-[220px] md:min-h-[320px] lg:min-h-[420px] py-4 sm:py-8">
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          w-full
          font-heading
          font-black
          uppercase
          leading-none
          text-center
          whitespace-nowrap
          select-none
          tracking-wider
          text-[20.2vw]
          px-0
        "
      >
        {text.split("").map((char, index) =>
          char === " " ? (
            <span key={index} className="inline-block w-[0.3em]" />
          ) : (
            <span key={index} className="inline-block overflow-hidden">
              <motion.span
                variants={letterVariants}
                className="
                  inline-block
                  bg-linear-to-t
                  from-white/50
                  to-white/0
                  bg-clip-text
                  text-transparent
                  blur-[0.3px]
                  will-change-transform
                "
              >
                {char}
              </motion.span>
            </span>
          ),
        )}
      </motion.h2>
    </section>
  );
}
