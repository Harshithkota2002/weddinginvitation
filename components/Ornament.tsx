"use client";

/* Reusable SVG flourishes for a royal Indian aesthetic */

export function Mandala({
  className = "",
  size = 160,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
    >
      <g stroke="#d4af37" strokeWidth="1.1" opacity="0.9">
        <circle cx="100" cy="100" r="90" strokeDasharray="2 5" />
        <circle cx="100" cy="100" r="72" />
        <circle cx="100" cy="100" r="40" strokeDasharray="4 4" />
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i * Math.PI) / 8;
          return (
            <g key={i} transform={`rotate(${(i * 360) / 16} 100 100)`}>
              <path
                d="M100 12 C108 30, 108 48, 100 64 C92 48, 92 30, 100 12 Z"
                fill="#d4af37"
                opacity="0.18"
              />
              <circle cx="100" cy="72" r="2.4" fill="#d4af37" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export function Divider({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 py-2">
      <div className="divider-orn w-full max-w-md text-gold">
        <svg width="46" height="24" viewBox="0 0 46 24" aria-hidden>
          <path
            d="M23 4c6 0 10 4 10 8s-4 8-10 8-10-4-10-8 4-8 10-8Z"
            fill="none"
            stroke="#d4af37"
            strokeWidth="1.2"
          />
          <circle cx="23" cy="12" r="2.6" fill="#d4af37" />
          <path d="M2 12h9M35 12h9" stroke="#d4af37" strokeWidth="1.2" />
        </svg>
      </div>
      {label ? (
        <span className="font-script text-2xl text-gold">{label}</span>
      ) : null}
    </div>
  );
}

/* Corner flourish for framed cards */
export function Corner({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 2c26 0 50 24 50 50"
        stroke="#d4af37"
        strokeWidth="1.3"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M2 14c22 0 38 16 38 38"
        stroke="#d4af37"
        strokeWidth="0.9"
        fill="none"
        opacity="0.5"
      />
      <circle cx="4" cy="4" r="3" fill="#d4af37" />
    </svg>
  );
}

/* Temple bell used in decorative borders */
export function Bell({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="26"
      height="34"
      viewBox="0 0 26 34"
      fill="none"
      aria-hidden
    >
      <path d="M13 3v3" stroke="#d4af37" strokeWidth="1.4" />
      <circle cx="13" cy="3" r="2" fill="#d4af37" />
      <path
        d="M6 24c0-8 2-14 7-14s7 6 7 14H6Z"
        fill="#f0d98c"
        stroke="#b8860b"
        strokeWidth="1"
      />
      <path d="M4 24h18v2H4z" fill="#d4af37" />
      <circle cx="13" cy="29" r="2.4" fill="#b8860b" />
    </svg>
  );
}
