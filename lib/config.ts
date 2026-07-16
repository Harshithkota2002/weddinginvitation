// ─────────────────────────────────────────────────────────────
//  EDIT EVERYTHING ABOUT THE WEDDING HERE
//  (names, dates, events, family, venue, gift details, etc.)
// ─────────────────────────────────────────────────────────────

export const wedding = {
  bride: {
    name: "Thejasree",
    parents: "Hemalatha & Soban",
    about:
      "A soul of grace and warmth, Thejasree fills every room with light and every heart with joy.",
    initial: "T",
  },
  groom: {
    name: "Venkatesh",
    parents: "Lakshmi & Ramesh",
    about:
      "Kind, ambitious and endlessly caring — Venkatesh is the steady hand and the gentle smile she fell for.",
    initial: "V",
  },

  // Muhurtham date & time (used for countdown + calendar). ISO local time.
  weddingDateISO: "2026-08-26T09:00:00+05:30",
  weddingEndISO: "2026-08-26T12:00:00+05:30",
  dateLong: "26 August 2026",
  dateShort: "26.08.2026",

  city: "Kota, Andhra Pradesh",
  tagline:
    "We are delighted to invite you to celebrate the beginning of our forever.",

  // Contact for RSVP / call buttons
  phone: "+919000000000",
  whatsapp: "919000000000",

  // Google Maps
  venue: {
    name: "Sri Kalyana Mandapam",
    address: "Main Road, Kota, Andhra Pradesh 524316",
    mapEmbed:
      "https://www.google.com/maps?q=Kota,+Andhra+Pradesh&output=embed",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Kota+Andhra+Pradesh",
    parking: "Complimentary valet & open parking available beside the venue.",
    accommodation:
      "Rooms have been arranged for outstation guests at nearby hotels. Please mention your stay dates in the RSVP.",
  },

  // Optional gift section
  gift: {
    enabled: true,
    upiId: "venkatesh@upi",
    bankName: "State Bank of India",
    accountName: "Venkatesh",
    accountNumber: "XXXXXXXXXXXX",
    ifsc: "SBINXXXXXXX",
  },

  // External form endpoint (optional). Leave "" to store RSVPs locally in the browser.
  rsvpEndpoint: "",
};

export const events = [
  {
    key: "haldi",
    name: "Haldi Ceremony",
    icon: "🌼",
    date: "24 August 2026",
    time: "9:00 AM onwards",
    venue: "Bride's Residence, Kota",
    desc: "A joyful morning of turmeric, laughter and golden blessings.",
  },
  {
    key: "mehendi",
    name: "Mehendi",
    icon: "🖐️",
    date: "24 August 2026",
    time: "5:00 PM onwards",
    venue: "Garden Lawn, Kota",
    desc: "Intricate henna, music and colours to adorn the bride.",
  },
  {
    key: "sangeet",
    name: "Sangeet",
    icon: "🎶",
    date: "25 August 2026",
    time: "7:00 PM onwards",
    venue: "Banquet Hall, Kota",
    desc: "An evening of dance, song and celebration with both families.",
  },
  {
    key: "muhurtham",
    name: "Wedding Muhurtham",
    icon: "💍",
    date: "26 August 2026",
    time: "9:00 AM (Sacred Muhurtham)",
    venue: "Sri Kalyana Mandapam, Kota",
    desc: "The sacred union — witness two souls become one.",
  },
  {
    key: "reception",
    name: "Reception",
    icon: "🥂",
    date: "26 August 2026",
    time: "7:00 PM onwards",
    venue: "Sri Kalyana Mandapam, Kota",
    desc: "Join us for dinner, blessings and a grand celebration.",
  },
];

export const story = [
  {
    title: "How We Met",
    icon: "✨",
    text: "Two families, one auspicious introduction — a single conversation that felt like it had been written in the stars.",
  },
  {
    title: "The First Spark",
    icon: "💛",
    text: "From shy smiles to endless phone calls, friendship quietly bloomed into something far more beautiful.",
  },
  {
    title: "Engagement",
    icon: "💍",
    text: "Surrounded by loved ones, we exchanged rings and promises — the beginning of a lifelong vow.",
  },
  {
    title: "Family Blessings",
    icon: "🙏",
    text: "With the loving blessings of our elders, our two worlds joined hands to become one family.",
  },
  {
    title: "Wedding Day",
    icon: "❤️",
    text: "And now, we invite you to witness the day our forever truly begins.",
  },
];

export const family = {
  bride: [
    { role: "Parents", names: "Hemalatha & Soban" },
    { role: "Grandparents", names: "With the blessings of our elders" },
    { role: "Siblings", names: "Loving brothers & sisters" },
    { role: "Relatives", names: "The extended family & well-wishers" },
  ],
  groom: [
    { role: "Parents", names: "Lakshmi & Ramesh" },
    { role: "Grandparents", names: "With the blessings of our elders" },
    { role: "Siblings", names: "Loving brothers & sisters" },
    { role: "Relatives", names: "The extended family & well-wishers" },
  ],
};

// Gallery items — swap `src` with photos placed in /public/gallery,
// or leave as-is to use the elegant themed placeholders.
export const gallery = [
  { id: 1, category: "Pre-Wedding", label: "Together", tall: true },
  { id: 2, category: "Haldi", label: "Golden Glow" },
  { id: 3, category: "Engagement", label: "The Ring" },
  { id: 4, category: "Pre-Wedding", label: "Candid", tall: true },
  { id: 5, category: "Mehendi", label: "Henna Hands" },
  { id: 6, category: "Engagement", label: "Forever" },
  { id: 7, category: "Haldi", label: "Blessings" },
  { id: 8, category: "Pre-Wedding", label: "Sunset", tall: true },
  { id: 9, category: "Mehendi", label: "Colours" },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "Story" },
  { href: "#events", label: "Events" },
  { href: "#gallery", label: "Gallery" },
  { href: "#venue", label: "Venue" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#blessings", label: "Blessings" },
];
