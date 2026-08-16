"use client";

import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { Divider } from "./Ornament";

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  alt = false,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  alt?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative px-4 py-12 sm:py-20 ${className}`}
      style={alt ? { background: "var(--bg-alt)" } : undefined}
    >
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title) && (
          <Reveal className="mb-12 text-center">
            {eyebrow && (
              <p className="text-accent mb-2 text-xs font-medium uppercase tracking-[0.35em]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="section-title text-2xl sm:text-4xl">
                <span className="gold-text">{title}</span>
              </h2>
            )}
            <Divider />
            {subtitle && (
              <p className="mx-auto max-w-2xl text-[var(--fg-soft)]">
                {subtitle}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
