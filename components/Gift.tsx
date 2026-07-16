"use client";

import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { wedding } from "@/lib/config";

/* Simple, dependency-free QR using a public QR image service as a fallback,
   with graceful degradation to the UPI id text if offline. */
function upiUri() {
  const g = wedding.gift;
  return `upi://pay?pa=${encodeURIComponent(g.upiId)}&pn=${encodeURIComponent(
    g.accountName
  )}&cu=INR`;
}

function Row({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-gold/20 px-4 py-3">
      <div className="min-w-0">
        <p className="text-accent text-xs uppercase tracking-widest">{label}</p>
        <p className="truncate text-sm">{value}</p>
      </div>
      <button
        onClick={copy}
        className="btn-outline-gold shrink-0 rounded-full px-3 py-1.5 text-xs"
      >
        {copied ? "✓ Copied" : "Copy"}
      </button>
    </div>
  );
}

export default function Gift() {
  if (!wedding.gift.enabled) return null;
  const g = wedding.gift;
  const qr = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    upiUri()
  )}`;

  return (
    <Section
      id="gift"
      eyebrow="Your Presence Is Our Present"
      title="Blessings & Gifts"
      subtitle="Your love and blessings mean the world to us. Should you wish to bless us with a gift, here are the details."
    >
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        <Reveal dir="left">
          <div className="card-lux flex h-full flex-col items-center justify-center rounded-[24px] p-8 text-center">
            <p className="text-accent mb-4 text-sm uppercase tracking-widest">
              Scan to Bless via UPI
            </p>
            <div className="overflow-hidden rounded-2xl gold-frame bg-white p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qr}
                alt="UPI QR code"
                width={200}
                height={200}
                className="h-[200px] w-[200px]"
              />
            </div>
            <p className="mt-4 font-serif text-lg">{g.upiId}</p>
          </div>
        </Reveal>

        <Reveal dir="right">
          <div className="card-lux flex h-full flex-col justify-center gap-3 rounded-[24px] p-8">
            <Row label="Account Name" value={g.accountName} />
            <Row label="Bank" value={g.bankName} />
            <Row label="Account Number" value={g.accountNumber} />
            <Row label="IFSC" value={g.ifsc} />
          </div>
        </Reveal>
      </div>

      <p className="mt-10 text-center font-script text-3xl gold-text">
        &ldquo;Your presence is the greatest gift.&rdquo;
      </p>
    </Section>
  );
}
