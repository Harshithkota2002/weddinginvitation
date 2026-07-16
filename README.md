# 💍 Thejasree ❤️ Venkatesh — Luxury Wedding Invitation

A premium, mobile-first royal Indian wedding invitation website — gold &
cream aesthetic, cinematic animations, falling petals, glassmorphism, and a
full guest experience. Built with **Next.js 16, Tailwind CSS v4 & Framer
Motion**.

## ✨ Features

- **Elegant loading screen** → **"Open Invitation"** gate that starts the
  music, confetti & petals
- Full-screen **Hero** with animated names, glowing lights and gold borders
- Glass **navbar** with active-section tracking, smooth scroll & **dark/light**
  toggle
- Live **countdown** with animated flip numbers
- **Couple**, **Love-story timeline**, **Events** (hover cards)
- **Gallery** with category filter + zoom **lightbox**
- **Venue** with Google Maps, directions & call buttons
- **RSVP** form (success animation; stores locally or POSTs to your endpoint)
- **Family** royal cards, **Blessings** wall (guests leave wishes), optional
  **Gift** section with UPI QR
- Floating **RSVP / Share (WhatsApp) / Add-to-Calendar / Print-PDF / Music**
  buttons
- **PWA** (installable, offline shell), **SEO** metadata, confetti & sparkles
- Falling petals, floating hearts, golden shimmer, 3D hover, parallax feel

## 🚀 Run it

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

## 🛠 Customise everything in one file

Open **`lib/config.ts`** — names, parents, date/time, city, tagline, phone,
events, love-story, family, venue (map/parking/accommodation), gift/UPI/bank
details, gallery items and nav links all live there.

- Change the countdown & calendar by editing `weddingDateISO` / `weddingEndISO`.
- Point RSVPs at a backend by setting `rsvpEndpoint` (e.g. a Formspree URL).
  Left blank, submissions are saved in the guest's browser.

## 🖼 Add your media (optional — beautiful placeholders work out of the box)

| Put files in       | Named                       | Used for                    |
| ------------------ | --------------------------- | --------------------------- |
| `public/couple/`   | `bride.jpg`, `groom.jpg`    | Couple circular photos      |
| `public/gallery/`  | `1.jpg` … `9.jpg`           | Gallery tiles + lightbox    |
| `public/music/`    | `wedding.mp3`               | Background music on open    |

Any missing file automatically falls back to an elegant gold/floral
placeholder, so the site always looks finished.

## 🎨 Theme

Colours & fonts (Great Vibes · Playfair Display · Poppins) are defined in
`app/globals.css`. Palette: Gold `#D4AF37`, Cream `#FFF8F0`, Rose Gold
`#E8B4A0`, Dark Brown `#4A2C2A`.

## ☁️ Deploy

Push to GitHub and import into **Vercel** (zero config), or run
`npm run build && npm run start` on any Node host.

---

Made with ❤️ for the wedding of Thejasree & Venkatesh — 26.08.2026, Kota.
