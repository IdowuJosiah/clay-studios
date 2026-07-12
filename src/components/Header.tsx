"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { business, nav } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll and allow Escape to close while the overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt={business.name}
              width={403}
              height={66}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex items-center gap-3 rounded-full border border-ink/15 bg-cream-50 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-ink transition-all hover:bg-white active:scale-95"
          >
            Menu
            <span className="flex flex-col gap-[3px]">
              <span className="block h-[2px] w-5 bg-ink" />
              <span className="block h-[2px] w-5 bg-ink" />
            </span>
          </button>
        </div>
      </header>

      {/* Fullscreen overlay menu — sibling of <header> so the header's
          backdrop-filter doesn't trap this fixed element in its box. */}
      <div
        className={`fixed inset-0 z-[60] bg-maroon-900 text-cream-50 transition-opacity duration-500 ease-out motion-reduce:transition-none ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center"
            >
              <Image
                src="/logo-light.png"
                alt={business.name}
                width={403}
                height={66}
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="group flex items-center gap-3 rounded-full border border-cream-50/20 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-cream-50 transition-all hover:bg-cream-50/10 active:scale-95"
            >
              Close
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 lg:px-10">
            <nav className="flex flex-col">
              {nav.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${150 + i * 70}ms` : "0ms" }}
                  className={`group flex items-baseline gap-4 border-b border-cream-50/10 py-3 transition-all duration-500 ease-out motion-reduce:transition-none sm:py-4 ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <span className="font-display text-sm font-bold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-4xl font-bold uppercase tracking-tight transition-[transform,color] duration-200 group-hover:translate-x-2 group-hover:text-gold sm:text-6xl">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            <div
              style={{
                transitionDelay: open ? `${150 + nav.length * 70}ms` : "0ms",
              }}
              className={`mt-10 transition-all duration-500 ease-out motion-reduce:transition-none ${
                open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-maroon-900 transition-all hover:bg-gold/90 active:scale-95"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-cream-50/60 sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <a href={`mailto:${business.email}`} className="hover:text-cream-50">
              {business.email}
            </a>
            <a
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cream-50"
            >
              {business.instagramHandle}
            </a>
            <span>{business.location}</span>
          </div>
        </div>
      </div>
    </>
  );
}
