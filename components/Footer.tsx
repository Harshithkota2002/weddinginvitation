"use client";

import { motion } from "framer-motion";
import { Mandala } from "./Ornament";
import { wedding } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-5 py-16 text-center">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg,var(--bg-alt),var(--bg))",
        }}
      />
      <Mandala
        className="absolute left-1/2 top-6 -translate-x-1/2 opacity-10 animate-spin-slow"
        size={220}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-xl"
      >
        <p className="text-4xl">💍</p>
        <h2 className="mt-4 font-script text-5xl gold-text">Thank You</h2>
        <p className="mt-4 text-[var(--fg-soft)]">
          Looking forward to celebrating with you. Your presence will make our
          day complete.
        </p>

        <div className="divider-orn mx-auto my-8 max-w-xs" />

        <p className="font-serif text-2xl">
          <span className="gold-text">{wedding.bride.name}</span>
          <span className="mx-2 text-rosegold">&amp;</span>
          <span className="gold-text">{wedding.groom.name}</span>
        </p>
        <p className="mt-2 text-sm tracking-widest text-[var(--fg-soft)]">
          {wedding.dateShort} • {wedding.city}
        </p>

        <p className="mt-10 text-xs text-[var(--fg-soft)]">
          Made with <span className="text-rosegold">❤️</span> for our special day
        </p>
      </motion.div>
    </footer>
  );
}
