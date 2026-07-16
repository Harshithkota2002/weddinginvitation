"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import { wedding } from "@/lib/config";
import { heartsPop } from "@/lib/celebrate";

type Status = "idle" | "sending" | "done";

export default function Rsvp() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "1",
    attend: "yes",
    message: "",
  });

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    setStatus("sending");
    try {
      if (wedding.rsvpEndpoint) {
        await fetch(wedding.rsvpEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        // Store locally so nothing is lost without a backend
        const key = "wedding-rsvps";
        const prev = JSON.parse(localStorage.getItem(key) || "[]");
        prev.push({ ...form, at: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(prev));
        await new Promise((r) => setTimeout(r, 700));
      }
      setStatus("done");
      heartsPop();
    } catch {
      // still show success gracefully for guests
      setStatus("done");
      heartsPop();
    }
  };

  const field =
    "w-full rounded-xl border border-gold/30 bg-[var(--card)] px-4 py-3 text-sm outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/30";

  return (
    <Section
      id="rsvp"
      alt
      eyebrow="Will You Join Us?"
      title="RSVP"
      subtitle="Kindly confirm your presence so we can make our day perfect for you."
    >
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="card-lux gold-frame relative overflow-hidden rounded-[26px] p-8"
        >
          <AnimatePresence mode="wait">
            {status === "done" ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-10 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-6xl"
                >
                  💐
                </motion.div>
                <h3 className="mt-4 font-script text-4xl gold-text">
                  Thank You, {form.name.split(" ")[0]}!
                </h3>
                <p className="mt-3 text-[var(--fg-soft)]">
                  {form.attend === "yes"
                    ? "We can't wait to celebrate with you. 💛"
                    : "We'll miss you, but thank you for letting us know. 💛"}
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setForm({
                      name: "",
                      phone: "",
                      guests: "1",
                      attend: "yes",
                      message: "",
                    });
                  }}
                  className="btn-outline-gold mt-6 rounded-full px-6 py-2.5 text-sm"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={submit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-4"
              >
                <div>
                  <label className="mb-1 block text-sm">Guest Name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Your full name"
                    className={field}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm">Phone</label>
                    <input
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="Mobile number"
                      inputMode="tel"
                      className={field}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm">Number of Guests</label>
                    <select
                      value={form.guests}
                      onChange={set("guests")}
                      className={field}
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm">Will You Attend?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { v: "yes", l: "Joyfully Accept 💛" },
                      { v: "no", l: "Regretfully Decline" },
                    ].map((o) => (
                      <button
                        type="button"
                        key={o.v}
                        onClick={() => setForm((f) => ({ ...f, attend: o.v }))}
                        className={`rounded-xl border px-4 py-3 text-sm transition-all ${
                          form.attend === o.v
                            ? "border-gold bg-gold/15 text-gold-deep"
                            : "border-gold/30 text-[var(--fg-soft)]"
                        }`}
                      >
                        {o.l}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm">Message (optional)</label>
                  <textarea
                    value={form.message}
                    onChange={set("message")}
                    rows={3}
                    placeholder="Leave a sweet note for the couple..."
                    className={field}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-gold mt-2 rounded-full px-8 py-3.5 text-sm uppercase disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send RSVP ✦"}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}
