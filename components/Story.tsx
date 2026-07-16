"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { story } from "@/lib/config";

export default function Story() {
  return (
    <Section
      id="story"
      alt
      eyebrow="Our Love Story"
      title="How It All Began"
      subtitle="Every love story is beautiful, but ours is our favourite."
    >
      <div className="relative mx-auto max-w-2xl pl-12">
        {/* Golden connecting line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute left-[18px] top-2 h-[calc(100%-1rem)] w-[2px] origin-top"
          style={{
            background:
              "linear-gradient(#f0d98c,#d4af37,#b8860b,#d4af37,#f0d98c)",
          }}
        />

        <div className="space-y-8">
          {story.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.7,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Heart node on the rail */}
              <span
                className="absolute -left-[2.65rem] top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full text-sm animate-pulse-glow"
                style={{
                  background:
                    "conic-gradient(from 0deg,#b8860b,#f7e394,#d4af37,#b8860b)",
                }}
              >
                {s.icon}
              </span>

              <div className="card-lux w-full rounded-2xl px-6 py-5">
                <h3 className="section-title text-xl">
                  <span className="gold-text">{s.title}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fg-soft)]">
                  {s.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
