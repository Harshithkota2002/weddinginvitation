"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import Reveal from "./Reveal";
import { wedding } from "@/lib/config";

function InfoTile({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="text-xl">{icon}</span>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-[var(--fg-soft)]">{text}</p>
      </div>
    </div>
  );
}

export default function Venue() {
  const v = wedding.venue;
  return (
    <Section id="venue" eyebrow="Find Your Way" title="The Venue">
      <div className="grid items-stretch gap-8 lg:grid-cols-2">
        <Reveal dir="left">
          <div className="card-lux h-full overflow-hidden rounded-[24px]">
            <iframe
              title="Venue location"
              src={v.mapEmbed}
              className="h-72 w-full border-0 lg:h-full lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal dir="right">
          <div className="card-lux flex h-full flex-col rounded-[24px] p-8">
            <h3 className="section-title text-2xl">
              <span className="gold-text">{v.name}</span>
            </h3>
            <p className="mt-2 text-[var(--fg-soft)]">{v.address}</p>

            <div className="my-6 h-px w-full bg-gold/25" />

            <div className="space-y-4">
              <InfoTile icon="🅿️" title="Parking" text={v.parking} />
              <InfoTile
                icon="🏨"
                title="Accommodation"
                text={v.accommodation}
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href={v.mapLink}
                target="_blank"
                rel="noreferrer"
                className="btn-gold flex items-center gap-2 rounded-full px-6 py-3 text-sm"
              >
                🧭 Get Directions
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${wedding.phone}`}
                className="btn-outline-gold flex items-center gap-2 rounded-full px-6 py-3 text-sm"
              >
                📞 Call Us
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
