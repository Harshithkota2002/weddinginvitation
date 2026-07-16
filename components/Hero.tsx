"use client";

import { motion } from "framer-motion";
import { GlowLights } from "./Effects";
import { Corner } from "./Ornament";
import { wedding } from "@/lib/config";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-24 pb-16"
    >
      {/* Couple background image — drop /public/couple.jpg to replace the gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-grad)" }}
      />
      <div
        className="absolute inset-0 opacity-0 [background-size:cover] [background-position:center]"
        style={{
          backgroundImage: "var(--couple-img,none)",
        }}
      />
      {/* subtle motif overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #b8860b 1px, transparent 1.5px), radial-gradient(circle at 70% 60%, #b8860b 1px, transparent 1.5px)",
          backgroundSize: "42px 42px",
        }}
      />
      <GlowLights />

      {/* Decorative gold border frame */}
      <div className="pointer-events-none absolute inset-3 rounded-[28px] border border-gold/40 sm:inset-6">
        <Corner className="absolute -left-[1px] -top-[1px]" />
        <Corner className="absolute -right-[1px] -top-[1px] rotate-90" />
        <Corner className="absolute -bottom-[1px] -right-[1px] rotate-180" />
        <Corner className="absolute -bottom-[1px] -left-[1px] -rotate-90" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ scale: 0, rotate: -30, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-3xl card-lux"
        >
          💍
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-accent font-script text-3xl sm:text-4xl"
        >
          Together With Their Families
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-3 text-xs uppercase tracking-[0.35em] text-[var(--fg-soft)] sm:text-sm"
        >
          Invite You To Celebrate The Wedding Of
        </motion.p>

        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.9, ease: "easeOut" }}
          className="section-title mt-6 flex flex-col items-center gap-2 text-4xl leading-tight sm:text-6xl"
        >
          <span className="gold-text">{wedding.bride.name}</span>
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="text-3xl text-rosegold sm:text-4xl"
          >
            ❤️
          </motion.span>
          <span className="gold-text">{wedding.groom.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <div className="glass inline-flex items-center gap-3 rounded-full px-6 py-2 text-sm tracking-widest text-[var(--fg)]">
            <span>📅</span>
            {wedding.dateLong}
          </div>
          <div className="inline-flex items-center gap-2 text-sm text-[var(--fg-soft)]">
            <span>📍</span>
            {wedding.city}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mx-auto mt-8 max-w-xl font-serif text-lg italic text-[var(--fg-soft)]"
        >
          &ldquo;{wedding.tagline}&rdquo;
        </motion.p>

        <motion.a
          href="#rsvp"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25 }}
          className="btn-gold mt-9 inline-block rounded-full px-9 py-3.5 text-sm uppercase"
        >
          RSVP Now
        </motion.a>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold"
      >
        <svg width="26" height="40" viewBox="0 0 26 40" fill="none" aria-hidden>
          <rect
            x="1"
            y="1"
            width="24"
            height="38"
            rx="12"
            stroke="#d4af37"
            strokeWidth="1.4"
          />
          <circle cx="13" cy="12" r="3" fill="#d4af37" />
        </svg>
      </motion.div>
    </section>
  );
}
