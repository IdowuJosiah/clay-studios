"use client";

import Link from "next/link";
import { useState } from "react";
import { business, nav } from "@/lib/content";
import Button from "./Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          {business.shortName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/book" variant="primary">
            Book a Consultation
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-ink/15 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-4 bg-ink transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[5px] h-[1.5px] w-4 bg-ink transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-[10px] h-[1.5px] w-4 bg-ink transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-cream px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink/80"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/book" variant="primary" className="mt-2 w-full">
              Book a Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
