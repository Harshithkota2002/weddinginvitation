"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import Reveal from "./Reveal";
import { family } from "@/lib/config";

function Side({
  title,
  members,
  dir,
}: {
  title: string;
  members: { role: string; names: string }[];
  dir: "left" | "right";
}) {
  return (
    <Reveal dir={dir} className="flex-1">
      <div className="card-lux h-full rounded-[24px] p-8">
        <h3 className="mb-6 text-center font-script text-4xl gold-text">
          {title}
        </h3>
        <div className="space-y-4">
          {members.map((m, i) => (
            <motion.div
              key={m.role}
              initial={{ opacity: 0, x: dir === "left" ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 rounded-2xl border border-gold/20 px-5 py-3"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm"
                style={{
                  background:
                    "radial-gradient(circle at 40% 35%, rgba(240,217,140,0.5), rgba(212,175,55,0.2))",
                }}
              >
                👑
              </span>
              <div>
                <p className="text-accent text-xs uppercase tracking-widest">
                  {m.role}
                </p>
                <p className="text-sm">{m.names}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Family() {
  return (
    <Section
      id="family"
      eyebrow="With Love & Blessings"
      title="Our Families"
      subtitle="Two families united by love, tradition and countless blessings."
    >
      <div className="flex flex-col gap-8 md:flex-row">
        <Side title="Bride's Side" members={family.bride} dir="left" />
        <Side title="Groom's Side" members={family.groom} dir="right" />
      </div>
    </Section>
  );
}
