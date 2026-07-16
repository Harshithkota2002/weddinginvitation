"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSite } from "./SiteProvider";
import {
  googleCalendarUrl,
  nativeShare,
  whatsappShareUrl,
} from "@/lib/actions";

function Fab({
  children,
  label,
  onClick,
  href,
  delay,
}: {
  children: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
  delay: number;
}) {
  const inner = (
    <motion.span
      initial={{ opacity: 0, y: 12, scale: 0.6 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.6 }}
      transition={{ delay }}
      className="group flex items-center gap-2"
    >
      <span className="pointer-events-none rounded-full glass px-3 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
        {label}
      </span>
      <span className="flex h-11 w-11 items-center justify-center rounded-full glass text-lg shadow-lg transition-transform hover:scale-110">
        {children}
      </span>
    </motion.span>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {inner}
    </a>
  ) : (
    <button onClick={onClick} aria-label={label}>
      {inner}
    </button>
  );
}

export default function FloatingButtons() {
  const { opened, muted, toggleMute } = useSite();
  const [open, setOpen] = useState(false);

  if (!opened) return null;

  const share = async () => {
    const ok = await nativeShare();
    if (!ok) window.open(whatsappShareUrl(), "_blank");
  };

  return (
    <>
      {/* Floating RSVP button (bottom-left) */}
      <motion.a
        href="#rsvp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="btn-gold fixed bottom-5 left-5 z-[60] flex items-center gap-2 rounded-full px-5 py-3 text-sm shadow-xl"
      >
        <span className="animate-pulse">✍️</span> RSVP
      </motion.a>

      {/* Action cluster (bottom-right) */}
      <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
        <AnimatePresence>
          {open && (
            <>
              <Fab label="Music" onClick={toggleMute} delay={0}>
                {muted ? "🔇" : "🎵"}
              </Fab>
              <Fab label="Share on WhatsApp" onClick={share} delay={0.05}>
                💬
              </Fab>
              <Fab label="Add to Calendar" href={googleCalendarUrl()} delay={0.1}>
                📅
              </Fab>
              <Fab label="Save / Print" onClick={() => window.print()} delay={0.15}>
                🖨️
              </Fab>
            </>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen((o) => !o)}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: open ? 135 : 0 }}
          aria-label="Actions"
          className="btn-gold flex h-14 w-14 items-center justify-center rounded-full text-2xl shadow-xl"
        >
          ✦
        </motion.button>
      </div>
    </>
  );
}
