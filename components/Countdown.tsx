"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wedding } from "@/lib/config";
import Reveal from "./Reveal";

function diff(target: number) {
  const now = Date.now();
  const d = Math.max(0, target - now);
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
    over: d === 0,
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  const v = value.toString().padStart(2, "0");
  return (
    <div className="card-lux relative flex min-w-[74px] flex-col items-center rounded-2xl px-3 py-4 sm:min-w-[104px] sm:px-6 sm:py-6">
      <div className="relative h-[1.1em] overflow-hidden text-4xl font-bold tabular-nums sm:text-6xl">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={v}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="block gold-text"
          >
            {v}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[var(--fg-soft)] sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const target = new Date(wedding.weddingDateISO).getTime();
  const [t, setT] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section id="countdown" className="relative px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-accent mb-2 text-xs font-medium uppercase tracking-[0.35em]">
            Save The Date
          </p>
          <h2 className="section-title text-3xl sm:text-5xl">
            <span className="gold-text">Our Forever Begins In...</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          {t.over ? (
            <p className="mt-10 font-script text-5xl gold-text">
              Today is the day! 🎉
            </p>
          ) : (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
              <Unit value={t.days} label="Days" />
              <span className="hidden text-3xl text-gold sm:block">:</span>
              <Unit value={t.hours} label="Hours" />
              <span className="hidden text-3xl text-gold sm:block">:</span>
              <Unit value={t.minutes} label="Minutes" />
              <span className="hidden text-3xl text-gold sm:block">:</span>
              <Unit value={t.seconds} label="Seconds" />
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
