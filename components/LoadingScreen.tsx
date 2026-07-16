"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mandala } from "./Ornament";
import { wedding } from "@/lib/config";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: "var(--bg)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <Mandala className="animate-spin-slow" size={180} />
            <span className="absolute inset-0 flex items-center justify-center text-4xl">
              💍
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 font-script text-4xl gold-text"
          >
            {wedding.bride.name} &amp; {wedding.groom.name}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 1.4, ease: "easeInOut" }}
            className="mt-5 h-[2px] w-40 origin-left rounded"
            style={{
              background: "linear-gradient(90deg,transparent,#d4af37,transparent)",
            }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-3 text-sm tracking-[0.3em] uppercase text-[var(--fg-soft)]"
          >
            Loading Invitation
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
