"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

function MascotAvatar({ size = 30 }: { size?: number }) {
  return (
    <div
      className="relative shrink-0 mt-0.5 rounded-full overflow-hidden border border-white/10"
      style={{ width: size, height: size }}
    >
      <Image
        src="/mascot.png"
        alt="PapuaLoka AI"
        fill
        className="object-cover"
        sizes={`${size}px`}
      />
    </div>
  );
}

function parseMarkdown(text: string): string {
  return text
    .replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="font-semibold text-white">$1</strong>',
    )
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(
      /(\/(?:destination|cerita-rakyat|alam-papua|about|home)[\/\w-]*)/g,
      '<a href="$1" class="text-papua-yellow underline underline-offset-2 decoration-papua-yellow/40 hover:decoration-papua-yellow transition-colors cursor-pointer">$1</a>',
    );
}

export default function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} gap-2.5 mb-3`}
    >
      {!isUser && <MascotAvatar size={30} />}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed font-sans ${isUser
            ? "bg-papua-yellow text-papua-dark rounded-br-md font-medium"
            : "bg-white/[0.06] border border-white/[0.08] text-[#E0E0E0] rounded-bl-md"
          }`}
      >
        {isUser ? (
          <p>{message.content}</p>
        ) : (
          <p
            dangerouslySetInnerHTML={{ __html: parseMarkdown(message.content) }}
          />
        )}
      </div>
    </motion.div>
  );
}

export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex justify-start mb-3 gap-2.5"
    >
      <MascotAvatar size={30} />
      <div className="bg-white/[0.06] border border-white/[0.08] rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-papua-yellow/60"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
