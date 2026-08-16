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
      <div className="space-y-6">
        {events.map((e, i) => (
          <motion.div
            key={e.key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="group card-lux overflow-hidden rounded-[20px] p-0 shadow-lg transition-transform duration-500 hover:scale-[1.02]"
            style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))' }}
          >
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-1/3 relative overflow-hidden bg-[rgba(0,0,0,0.03)]">
                {(() => {
                  const fallback = "/gallery/ChatGPT Image Aug 13, 2026, 09_17_05 AM.png";
                  const raw = e.image ?? fallback;
                  const src = encodeURI(raw);
                  return (
                    <div className="relative h-44 sm:h-56 md:h-64 w-full">
                      <img
                        src={src}
                        alt={e.name}
                        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                        style={{ objectPosition: "center center" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-40 transition-opacity" />
                      <div className="absolute left-4 bottom-4 rounded-md bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
                        {e.name}
                      </div>
                    </div>
                  );
                })()}
              </div>

              <div className="sm:w-2/3 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{e.icon}</div>
                    <h3 className="section-title text-2xl">
                      <span className="gold-text">{e.name}</span>
                    </h3>
                  </div>
                  <div className="hidden sm:block">
                    <a href="#rsvp" className="btn-gold px-4 py-2 text-sm rounded-full">RSVP</a>
                  </div>
                </div>

                <p className="mt-3 text-sm text-[var(--fg-soft)]">{e.desc}</p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(212,175,55,0.06)] px-3 py-1 text-sm">
                    <span className="text-gold">📅</span>
                    <span className="text-[0.95rem]">{e.date}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(212,175,55,0.04)] px-3 py-1 text-sm">
                    <span className="text-gold">🕐</span>
                    <span className="text-[0.95rem]">{e.time}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(212,175,55,0.04)] px-3 py-1 text-sm">
                    <span className="text-gold">📍</span>
                    <span className="text-[0.95rem]">{e.venue}</span>
                  </div>
                </div>

                <div className="mt-6 sm:hidden">
                  <a href="#rsvp" className="btn-gold px-5 py-2 text-sm rounded-full">RSVP Now</a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
