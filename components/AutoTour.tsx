"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useSite } from "./SiteProvider";

const SPEED = 38; // pixels per second — slow, cinematic glide

export default function AutoTour() {
  const { opened } = useSite();
  const [touring, setTouring] = useState(false);
  const rafRef = useRef(0);
  const lastRef = useRef(0);
  const posRef = useRef(0);

  useEffect(() => {
    if (!touring) return;

    posRef.current = window.scrollY;
    lastRef.current = performance.now();

    const step = (now: number) => {
      const dt = (now - lastRef.current) / 1000;
      lastRef.current = now;
      posRef.current += SPEED * dt;
      window.scrollTo(0, posRef.current);

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setTouring(false);
        return;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    // Any manual interaction stops the tour
    const stop = () => setTouring(false);
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchmove", stop, { passive: true });
    window.addEventListener("keydown", stop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchmove", stop);
      window.removeEventListener("keydown", stop);
    };
  }, [touring]);

  if (!opened) return null;

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
      onClick={() => setTouring((t) => !t)}
      aria-label={touring ? "Stop auto tour" : "Start auto tour"}
      className="glass fixed bottom-24 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-2 rounded-full px-5 py-3 text-sm text-gold shadow-xl sm:bottom-6"
    >
      {touring ? (
        <>
          <span className="text-xs">❚❚</span> Stop Tour
        </>
      ) : (
        <>
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            ▶
          </motion.span>{" "}
          Auto Tour
        </>
      )}
    </motion.button>
  );
}
