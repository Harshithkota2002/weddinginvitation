"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import { TilePhoto } from "./PhotoFrame";
import { gallery } from "@/lib/config";

export default function Gallery() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(gallery.map((g) => g.category)))],
    []
  );
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = gallery.filter(
    (g) => filter === "All" || g.category === filter
  );

  const current = lightbox != null ? gallery.find((g) => g.id === lightbox) : null;

  return (
    <Section
      id="gallery"
      alt
      eyebrow="Captured Moments"
      title="Our Gallery"
      subtitle="A glimpse of the memories we cherish — with many more to be made."
    >
      {/* Filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-5 py-2 text-sm transition-all ${
              filter === c
                ? "btn-gold"
                : "btn-outline-gold text-[var(--fg)]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Pinterest-style masonry */}
      <motion.div layout className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
        <AnimatePresence>
          {items.map((g) => (
            <motion.button
              layout
              key={g.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightbox(g.id)}
              className={`group relative block w-full overflow-hidden rounded-2xl border border-gold/30 ${
                g.tall ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <div className="h-full w-full transition-transform duration-500 group-hover:scale-110">
                <TilePhoto
                  src={`/gallery/${g.id}.jpg`}
                  label={g.label}
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-medium text-white">
                  {g.label}
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[95] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl gold-frame"
            >
              <div className="aspect-[4/3] w-full">
                <TilePhoto src={`/gallery/${current.id}.jpg`} label={current.label} />
              </div>
              <div className="glass flex items-center justify-between px-5 py-3">
                <span className="font-script text-2xl text-gold">
                  {current.label}
                </span>
                <span className="text-xs uppercase tracking-widest text-[var(--fg-soft)]">
                  {current.category}
                </span>
              </div>
            </motion.div>
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full glass text-white"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
