"use client";

import { useState } from "react";

/* Elegant photo holder. If `src` exists in /public it is shown; otherwise a
   luxurious monogram placeholder is rendered so the site looks complete
   before real photos are added. */

export function CirclePhoto({
  src,
  initial,
  label,
  size = 220,
}: {
  src?: string;
  initial: string;
  label?: string;
  size?: number;
}) {
  const [ok, setOk] = useState(true);
  const showImg = src && ok;
  return (
    <div
      className="relative animate-[float_7s_ease-in-out_infinite]"
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 rounded-full animate-pulse-glow" />
      <div
        className="absolute inset-0 rounded-full"
        style={{
          padding: 6,
          background:
            "conic-gradient(from 0deg,#b8860b,#f7e394,#d4af37,#fff4c2,#b8860b)",
        }}
      >
        <div className="h-full w-full overflow-hidden rounded-full bg-[var(--bg-alt)]">
          {showImg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={label ?? initial}
              onError={() => setOk(false)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 50% 35%, rgba(240,217,140,0.35), rgba(232,180,160,0.25))",
              }}
            >
              <span className="font-script text-7xl gold-text">{initial}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function TilePhoto({
  src,
  label,
  className = "",
}: {
  src?: string;
  label: string;
  className?: string;
}) {
  const [ok, setOk] = useState(true);
  const showImg = src && ok;
  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(240,217,140,0.35), rgba(232,180,160,0.4), rgba(212,175,55,0.25))",
      }}
    >
      {showImg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label}
          onError={() => setOk(false)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
          <span className="text-3xl">🌸</span>
          <span className="font-script text-2xl text-brown/80 dark:text-cream/80">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
