"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";
import Image from "next/image";
import ChatMessage, { TypingIndicator, type Message } from "./chat-message";
import {
  WELCOME_MESSAGE,
  QUICK_REPLIES,
} from "@/data/chatbot-knowledge";

interface ChatPanelProps {
  onClose: () => void;
}

export default function ChatPanel({ onClose }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: WELCOME_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  // Focus input + scroll panel into view when opened
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 350);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      const userMessage: Message = { role: "user", content: trimmed };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      try {
        const apiMessages = [...messages, userMessage].map((m) => ({
          role: m.role === "assistant" ? ("assistant" as const) : ("user" as const),
          content: m.content,
        }));

        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: apiMessages }),
        });

        if (!res.ok) {
          throw new Error("API error");
        }

        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.content },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Maaf, terjadi gangguan koneksi. Coba lagi dalam beberapa saat ya! ðŸ™",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickReply = (reply: string) => {
    sendMessage(reply);
  };

  return (
    <motion.div
      ref={panelRef}
      initial={{ opacity: 0, y: 20, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[400px] h-[520px] sm:h-[560px] max-h-[80vh] bg-papua-dark/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,.6)] flex flex-col overflow-hidden z-50"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/10">
              <Image
                src="/mascot.png"
                alt="PapuaLoka AI"
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-papua-green-light rounded-full border-2 border-papua-dark" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-white text-sm tracking-wide">
              PapuaLoka AI
            </h3>
            <p className="text-[10px] text-papua-yellow/70 font-sans">
              Jelajah Papua â€¢ Online
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div data-lenis-prevent className="flex-1 overflow-y-auto px-4 py-4 space-y-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg} />
        ))}
        <AnimatePresence>{isLoading && <TypingIndicator />}</AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      {messages.length <= 2 && (
        <div className="px-4 pb-2">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {QUICK_REPLIES.map((reply) => (
              <button
                key={reply}
                onClick={() => handleQuickReply(reply)}
                className="shrink-0 px-3 py-1.5 rounded-full text-[11px] font-sans font-medium bg-white/[0.05] border border-white/[0.08] text-papua-yellow/80 hover:bg-papua-yellow/10 hover:border-papua-yellow/30 hover:text-papua-yellow transition-all duration-300 cursor-pointer"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="px-4 pb-4 pt-2 border-t border-white/[0.06]"
      >
        <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2 focus-within:border-papua-yellow/30 transition-colors">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tanya tentang Papua..."
            disabled={isLoading}
            className="flex-1 bg-transparent text-white text-sm font-sans placeholder:text-white/25 outline-none disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="w-8 h-8 rounded-lg flex items-center justify-center bg-papua-yellow text-papua-dark disabled:opacity-30 disabled:cursor-not-allowed hover:bg-papua-yellow/90 transition-all cursor-pointer shrink-0"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}
