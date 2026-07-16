import type { Metadata, Viewport } from "next";
import "./globals.css";
import { wedding } from "@/lib/config";

const title = `${wedding.bride.name} & ${wedding.groom.name} — Wedding Invitation`;
const description = `Together with their families, ${wedding.bride.name} & ${wedding.groom.name} invite you to celebrate their wedding on ${wedding.dateLong} at ${wedding.city}.`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "wedding invitation",
    wedding.bride.name,
    wedding.groom.name,
    "Indian wedding",
    wedding.city,
  ],
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title, statusBarStyle: "black-translucent" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title, description },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#d4af37",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
