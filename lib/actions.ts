import { wedding } from "./config";

function fmt(iso: string) {
  // → YYYYMMDDTHHmmssZ (UTC) for Google Calendar
  const d = new Date(iso);
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export function googleCalendarUrl() {
  const text = `${wedding.bride.name} & ${wedding.groom.name} Wedding`;
  const dates = `${fmt(wedding.weddingDateISO)}/${fmt(wedding.weddingEndISO)}`;
  const details = wedding.tagline;
  const location = `${wedding.venue.name}, ${wedding.venue.address}`;
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text,
    dates,
    details,
    location,
  });
  return `https://calendar.google.com/calendar/render?${p.toString()}`;
}

export function shareText() {
  return `You're invited to the wedding of ${wedding.bride.name} & ${wedding.groom.name} on ${wedding.dateLong} at ${wedding.city}! 💍`;
}

export function whatsappShareUrl() {
  const url = typeof window !== "undefined" ? window.location.href : "";
  return `https://wa.me/?text=${encodeURIComponent(shareText() + " " + url)}`;
}

export async function nativeShare() {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const data = {
    title: `${wedding.bride.name} & ${wedding.groom.name} Wedding`,
    text: shareText(),
    url,
  };
  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share(data);
      return true;
    } catch {
      return false;
    }
  }
  return false;
}
