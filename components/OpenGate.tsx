"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useSite } from "./SiteProvider";
import { Mandala } from "./Ornament";
import { burst } from "@/lib/celebrate";
import { wedding } from "@/lib/config";
import { GlowLights } from "./Effects";

export default function OpenGate() {
  const { opened, open } = useSite();

  const handleOpen = () => {
    open();
    setTimeout(burst, 250);
  };

  return (
    <AnimatePresence>
      {!opened && (
        <motion.div
          key="gate"
          className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden px-6"
          style={{
            background:
              "radial-gradient(circle at 50% 28%, #0e5b58 0%, #073f40 45%, #052a2c 75%, #041f21 100%)",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlowLights />

          {/* Ornamental frame */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="gold-frame relative z-10 mx-auto w-full max-w-lg rounded-[26px] px-8 py-12 text-center"
            style={{
              background: "rgba(6, 46, 47, 0.55)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              boxShadow:
                "0 10px 45px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(240,217,140,0.15)",
            }}
          >
            <Mandala
              className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-70 animate-spin-slow"
              size={130}
            />

            <p className="mt-6 text-3xl">💌</p>
            <p className="mt-4 text-xs uppercase tracking-[0.35em] text-[#bfe3da]">
              The Wedding Of
            </p>
            <h1 className="mt-3 font-script text-5xl gold-text sm:text-6xl">
              {wedding.bride.name}
            </h1>
            <p className="my-1 text-lg text-rosegold">&amp;</p>
            <h1 className="font-script text-5xl gold-text sm:text-6xl">
              {wedding.groom.name}
            </h1>

            <div className="divider-orn mx-auto my-6 max-w-[220px]" />
            <p className="text-sm tracking-widest text-[#bfe3da]">
              {wedding.dateLong.toUpperCase()}
            </p>

            <motion.button
              onClick={handleOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="btn-gold mt-8 rounded-full px-10 py-4 text-base uppercase"
            >
              ✧ Open Invitation ✧
            </motion.button>

            <p className="mt-5 text-xs text-[#9fc9c0]">
              (Tap to begin — music &amp; magic await 🎶)
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
