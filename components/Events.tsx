"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { events } from "@/lib/config";

export default function Events() {
  return (
    <Section
      id="events"
      eyebrow="Join The Celebration"
      title="Wedding Events"
      subtitle="A series of joyous ceremonies — we would be honoured by your presence at each."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e, i) => (
          <motion.div
            key={e.key}
            initial={{ opacity: 0, y: 40, rotateX: -8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group card-lux relative overflow-hidden rounded-[24px] p-7"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* gold sheen on hover */}
            <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(400px circle at 50% 0%, rgba(212,175,55,0.18), transparent 70%)",
              }}
            />
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full text-3xl"
              style={{
                background:
                  "radial-gradient(circle at 40% 35%, rgba(240,217,140,0.5), rgba(212,175,55,0.2))",
                border: "1px solid rgba(212,175,55,0.4)",
              }}
            >
              {e.icon}
            </div>

            <h3 className="section-title text-2xl">
              <span className="gold-text">{e.name}</span>
            </h3>
            <p className="mt-2 text-sm text-[var(--fg-soft)]">{e.desc}</p>

            <div className="mt-5 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span className="text-gold">📅</span> {e.date}
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gold">🕐</span> {e.time}
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gold">📍</span> {e.venue}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
