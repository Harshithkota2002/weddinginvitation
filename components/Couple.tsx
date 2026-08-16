"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import Reveal from "./Reveal";
import { CirclePhoto } from "./PhotoFrame";
import { wedding } from "@/lib/config";

function Card({
  role,
  name,
  parents,
  about,
  initial,
  src,
  dir,
}: {
  role: string;
  name: string;
  parents: string;
  about: string;
  initial: string;
  src?: string;
  dir: "left" | "right";
}) {
  return (
    <Reveal dir={dir} className="flex-1">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="card-lux relative flex flex-col items-center rounded-[28px] px-7 py-10 text-center"
      >
        <p className="text-accent mb-6 font-script text-3xl">{role}</p>
        <CirclePhoto initial={initial} label={name} src={src} size={200} />
        <h3 className="mt-6 section-title text-3xl">
          <span className="gold-text">{name}</span>
        </h3>
        <div className="divider-orn my-4 w-40" />
        <p className="text-sm uppercase tracking-widest text-[var(--fg-soft)]">
          Daughter / Son of
        </p>
        <p className="mt-1 font-serif text-lg">{parents}</p>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--fg-soft)]">
          {about}
        </p>
      </motion.div>
    </Reveal>
  );
}

export default function Couple() {
  return (
    <Section id="couple" eyebrow="The Bride & The Groom" title="Two Souls, One Journey">
      <div className="flex flex-col items-stretch gap-8 md:flex-row">
        {(() => {
          const brideSrc = encodeURI(
            "/gallery/745e462a-505d-4853-bfcf-dcc8da45e391.png"
          );
          return (
            <Card
              role="The Bride"
              name={wedding.bride.name}
              parents={wedding.bride.parents}
              about={wedding.bride.about}
              initial={wedding.bride.initial}
              src={brideSrc}
              dir="left"
            />
          );
        })()}

        <div className="flex items-center justify-center">
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="text-4xl"
          >
            💛
          </motion.span>
        </div>

        {(() => {
          const groomSrc = encodeURI(
            "/gallery/ChatGPT Image Aug 13, 2026, 09_17_05 AM.png"
          );
          return (
            <Card
              role="The Groom"
              name={wedding.groom.name}
              parents={wedding.groom.parents}
              about={wedding.groom.about}
              initial={wedding.groom.initial}
              src={groomSrc}
              dir="right"
            />
          );
        })()}
      </div>
    </Section>
  );
}
