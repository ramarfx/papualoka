"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ChatPanel from "./chat-panel";
import { TOOLTIP_MESSAGES } from "@/data/chatbot-knowledge";

function PapuaMascotButton() {
  return (
    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden">
      <Image
        src="/mascot.png"
        alt="PapuaLoka AI"
        fill
        className="object-cover"
        sizes="48px"
      />
    </div>
  );
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [tooltipIndex, setTooltipIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
      return;
    }

    const showTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 7500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [isOpen, tooltipIndex]);

  useEffect(() => {
    if (isOpen) return;
    const interval = setInterval(() => {
      setTooltipIndex((prev) => (prev + 1) % TOOLTIP_MESSAGES.length);
    }, 12000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
    setShowTooltip(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isOpen && <ChatPanel onClose={toggle} />}
      </AnimatePresence>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 pointer-events-none"
          >
            <div className="bg-[#1F1F1F] border border-white/[0.08] rounded-xl px-4 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,.4)] whitespace-nowrap">
              <p className="text-white/80 text-xs font-sans">
                {TOOLTIP_MESSAGES[tooltipIndex]}
              </p>
              <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#1F1F1F] border-r border-b border-white/[0.08] rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={toggle}
        className={`fixed bottom-6 right-4 sm:right-6 z-50 w-[56px] h-[56px] sm:w-[62px] sm:h-[62px] rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(207,193,84,.35)] cursor-pointer overflow-hidden ring-3 ring-papua-yellow/40 ${isOpen ? "bg-linear-to-br from-papua-yellow to-[#A89B32]" : "bg-papua-dark"}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        animate={
          isOpen
            ? { rotate: 0 }
            : {
                boxShadow: [
                  "0 4px 24px rgba(207,193,84,.35)",
                  "0 4px 32px rgba(207,193,84,.55)",
                  "0 4px 24px rgba(207,193,84,.35)",
                ],
              }
        }
        transition={
          isOpen
            ? { type: "spring", stiffness: 400, damping: 22 }
            : {
                boxShadow: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
        aria-label={isOpen ? "Tutup chat PapuaLoka AI" : "Buka chat PapuaLoka AI"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="text-papua-dark"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="mascot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <PapuaMascotButton />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
