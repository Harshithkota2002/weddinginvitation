"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import { heartsPop } from "@/lib/celebrate";

type Blessing = { name: string; text: string; at: string };

const SEED: Blessing[] = [
  { name: "Ananya", text: "Wishing you a lifetime of love and laughter!", at: "" },
  { name: "Ravi & Family", text: "May your journey together be blessed. ❤️", at: "" },
  { name: "Priya", text: "So happy for you both. God bless!", at: "" },
];

export default function Blessings() {
  const [list, setList] = useState<Blessing[]>(SEED);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("wedding-blessings") || "[]");
      if (Array.isArray(saved) && saved.length) setList([...saved, ...SEED]);
    } catch {}
  }, []);

  const add = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    const entry = { name: name.trim(), text: text.trim(), at: new Date().toISOString() };
    const saved = (() => {
      try {
        return JSON.parse(localStorage.getItem("wedding-blessings") || "[]");
      } catch {
        return [];
      }
    })();
    const next = [entry, ...saved];
    try {
      localStorage.setItem("wedding-blessings", JSON.stringify(next));
    } catch {}
    setList([entry, ...list]);
    setName("");
    setText("");
    heartsPop();
  };

  const field =
    "w-full rounded-xl border border-gold/30 bg-[var(--card)] px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30";

  return (
    <Section id="blessings" alt eyebrow="Shower Your Love" title="Blessings">
      {/* Animated quote */}
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mx-auto mb-12 max-w-2xl text-center font-script text-3xl leading-relaxed gold-text sm:text-4xl"
      >
        &ldquo;Two hearts, one soul, one beautiful journey.&rdquo;
      </motion.p>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Leave a blessing */}
        <motion.form
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={add}
          className="card-lux h-fit rounded-[24px] p-7"
        >
          <h3 className="mb-4 section-title text-xl">
            <span className="gold-text">Leave Your Blessing</span>
          </h3>
          <div className="grid gap-3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={field}
            />
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              placeholder="Write your heartfelt wishes..."
              className={field}
            />
            <button className="btn-gold rounded-full px-6 py-3 text-sm uppercase">
              Send Blessing 🌸
            </button>
          </div>
        </motion.form>

        {/* Wall of blessings */}
        <div className="max-h-[380px] space-y-3 overflow-y-auto pr-1">
          <AnimatePresence initial={false}>
            {list.map((b, i) => (
              <motion.div
                key={`${b.name}-${b.at}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-lux rounded-2xl p-5"
              >
                <p className="text-sm italic text-[var(--fg-soft)]">
                  &ldquo;{b.text}&rdquo;
                </p>
                <p className="mt-2 font-script text-2xl text-gold">— {b.name}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
