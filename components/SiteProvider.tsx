"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type SiteState = {
  opened: boolean;
  open: () => void;
  muted: boolean;
  toggleMute: () => void;
};

const SiteCtx = createContext<SiteState | null>(null);

export function useSite() {
  const ctx = useContext(SiteCtx);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}

export default function SiteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const open = useCallback(() => {
    setOpened(true);
    const a = audioRef.current;
    if (a) {
      a.volume = 0.55;
      a.play().catch(() => {
        /* autoplay may be blocked or file missing — fail silently */
      });
    }
    // allow scrolling again
    document.body.style.overflow = "";
  }, []);

  // lock scroll until opened
  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  const toggleMute = useCallback(() => {
    setMuted((m) => {
      const next = !m;
      const a = audioRef.current;
      if (a) {
        a.muted = next;
        if (!next && a.paused && opened) a.play().catch(() => {});
      }
      return next;
    });
  }, [opened]);

  return (
    <SiteCtx.Provider value={{ opened, open, muted, toggleMute }}>
      {children}
      {/* Background music — the couple's chosen song. */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/Kalyanam.mp3" type="audio/mpeg" />
        <source src="/music/wedding.wav" type="audio/wav" />
      </audio>
    </SiteCtx.Provider>
  );
}
