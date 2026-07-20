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
    <section className="relative flex items-center justify-center w-full overflow-hidden bg-[#1F1F1F] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          font-heading
          font-black
          uppercase
          leading-[0.85]
          text-center
          whitespace-nowrap
          select-none
          text-[60px]
          sm:text-[100px]
          md:text-[160px]
          lg:text-[220px]
          xl:text-[280px]
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
                  bg-linear-to-b
                  from-white/30
                  to-white/5
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
