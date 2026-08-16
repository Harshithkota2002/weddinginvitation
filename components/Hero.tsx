"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GlowLights } from "./Effects";
import { Corner } from "./Ornament";
import { wedding } from "@/lib/config";

export default function Hero() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const fullText = "Welcome to the Kota Wedding Invitation";
    let isDeleting = false;
    let index = 0;
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const tick = () => {
      if (!isDeleting) {
        index += 1;
        setTypedText(fullText.slice(0, index));
        if (index === fullText.length) {
          // pause at end, then start deleting
          timeout = setTimeout(() => {
            isDeleting = true;
            tick();
          }, 1600);
          return;
        }
      } else {
        index -= 1;
        setTypedText(fullText.slice(0, index));
        if (index === 0) {
          // pause before typing again
          timeout = setTimeout(() => {
            isDeleting = false;
            tick();
          }, 800);
          return;
        }
      }

      const speed = isDeleting ? 40 : 100;
      timeout = setTimeout(tick, speed + Math.random() * 60);
    };

    tick();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-24 pb-16"
    >
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
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #b8860b 1px, transparent 1.5px), radial-gradient(circle at 70% 60%, #b8860b 1px, transparent 1.5px)",
          backgroundSize: "42px 42px",
        }}
      />
      <GlowLights />

      <div className="pointer-events-none absolute inset-3 rounded-[28px] border border-gold/40 sm:inset-6">
        <Corner className="absolute -left-[1px] -top-[1px]" />
        <Corner className="absolute -right-[1px] -top-[1px] rotate-90" />
        <Corner className="absolute -bottom-[1px] -right-[1px] rotate-180" />
        <Corner className="absolute -bottom-[1px] -left-[1px] -rotate-90" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-2 lg:flex-row lg:items-center lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[42%]"
        >
          <div className="card-lux relative mx-auto overflow-hidden rounded-[30px] border border-gold/30 bg-[rgba(255,255,255,0.12)] p-3 shadow-[0_25px_80px_rgba(120,78,20,0.18)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,239,188,0.65),_transparent_50%)]" />
            <div className="relative overflow-hidden rounded-[24px]">
              <img
                src="/gallery/ChatGPT Image Aug 13, 2026, 09_17_05 AM.png"
                alt="Wedding couple"
                className="h-[520px] w-full rounded-[24px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.22),_transparent_52%)]" />
              <div className="absolute left-1/2 top-10 flex -translate-x-1/2 items-center justify-center gap-4 rounded-full border border-gold/40 bg-[rgba(255,255,255,0.12)] px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--fg)] backdrop-blur-sm">
                <span>✦</span>
                <span>Wedding</span>
                <span>✦</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="w-full text-center lg:w-[58%] lg:text-left"
        >
          <motion.div
            initial={{ scale: 0, rotate: -30, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            className="ganesh-badge mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full text-4xl card-lux lg:mx-0"
            aria-label="Lord Ganesha symbol"
          >
            ॐ
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-accent text-xs uppercase tracking-[0.45em] sm:text-sm"
          >
            With the blessings of Lord Ganesha
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="typing-line mt-2 font-serif text-4xl font-bold tracking-[0.08em] text-rosegold sm:text-6xl"
          >
            {typedText}
            <span className="inline-block w-[0.08em] animate-pulse text-rosegold">|</span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-6 text-accent font-script text-3xl sm:text-4xl"
          >
            Together With Their Families
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-3 text-xs uppercase tracking-[0.35em] text-[var(--fg-soft)] sm:text-sm"
          >
            Invite You To Celebrate The Wedding Of
          </motion.p>

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.9, ease: "easeOut" }}
            className="section-title mt-6 flex flex-col items-center gap-2 text-4xl leading-tight sm:text-6xl lg:items-start"
          >
            <span className="wedding-name gold-shimmer">{wedding.bride.name}</span>
            <motion.span
              animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="text-3xl text-rosegold sm:text-4xl"
            >
              ❤️
            </motion.span>
            <span className="wedding-name gold-shimmer">{wedding.groom.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex flex-col items-center gap-3 lg:items-start"
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
            className="mx-auto mt-8 max-w-xl font-serif text-lg italic text-[var(--fg-soft)] lg:mx-0"
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
        </motion.div>
      </div>

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
