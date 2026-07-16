"use client";

import { useEffect, useMemo, useState } from "react";

/* Deterministic-after-mount particle fields (rendered client-only to avoid
   hydration mismatch). Pure CSS animations keep them buttery-smooth. */

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const PETAL_COLORS = ["#f6c9b3", "#e8b4a0", "#f7dca0", "#f3b0c3", "#fbe3b3"];

export function Petals({ count = 22 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: rand(0, 100),
        size: rand(10, 22),
        duration: rand(9, 18),
        delay: rand(0, 12),
        drift: rand(-120, 120),
        color: PETAL_COLORS[i % PETAL_COLORS.length],
        rounded: Math.random() > 0.5,
      })),
    [count]
  );

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          style={
            {
              position: "absolute",
              top: "-6vh",
              left: `${p.left}%`,
              width: p.size,
              height: p.size * 0.72,
              background: `radial-gradient(circle at 30% 30%, #fff, ${p.color})`,
              borderRadius: p.rounded
                ? "50% 0 50% 50%"
                : "60% 40% 55% 45% / 55% 55% 45% 45%",
              opacity: 0.85,
              boxShadow: `0 0 6px ${p.color}66`,
              animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
              // custom prop consumed by keyframes
              ["--drift" as string]: `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function Sparkles({ count = 26 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: rand(0, 100),
        top: rand(0, 100),
        size: rand(3, 8),
        duration: rand(2.5, 6),
        delay: rand(0, 5),
      })),
    [count]
  );

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[4] overflow-hidden">
      {stars.map((s) => (
        <span
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #fff8d0 0%, #f0d98c 45%, transparent 70%)",
            boxShadow: "0 0 8px #f0d98c",
            animation: `sparkle-twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function FloatingHearts({ count = 10 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: rand(2, 96),
        size: rand(12, 24),
        duration: rand(8, 15),
        delay: rand(0, 10),
      })),
    [count]
  );

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[4] overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          style={{
            position: "absolute",
            bottom: "-5vh",
            left: `${h.left}%`,
            fontSize: h.size,
            color: "#e8b4a0",
            opacity: 0.7,
            animation: `heart-rise ${h.duration}s ease-in ${h.delay}s infinite`,
          }}
        >
          ❤
        </span>
      ))}
    </div>
  );
}

/* Soft glowing lights blobs for hero ambiance */
export function GlowLights() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -left-24 top-10 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "rgba(240,217,140,0.35)" }}
      />
      <div
        className="absolute right-0 top-1/3 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "rgba(232,180,160,0.3)" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "rgba(212,175,55,0.22)" }}
      />
    </div>
  );
}
