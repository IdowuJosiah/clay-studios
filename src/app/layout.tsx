import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { business } from "@/lib/content";

// Fonts are loaded via a standard <link> tag below (Bricolage Grotesque +
// Inter from Google Fonts) rather than next/font/google, so the site
// doesn't depend on build-time network access to fonts.googleapis.com —
// browsers fetch the font CSS/files directly at runtime instead.

export const metadata: Metadata = {
  title: `${business.name} — ${business.tagline}`,
  description: `${business.name} is a full-service creative studio in ${business.location}. Brand storytelling, events, YouTube & podcast production, music videos, documentaries, and gear rental.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
