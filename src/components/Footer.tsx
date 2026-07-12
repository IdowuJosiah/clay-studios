import Image from "next/image";
import Link from "next/link";
import { business, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-maroon-900 text-cream-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/logo-light.png"
              alt={business.name}
              width={403}
              height={66}
              className="h-9 w-auto"
            />
            <p className="mt-3 max-w-xs text-sm text-cream-50/70">
              {business.tagline} — a full-service creative studio in{" "}
              {business.location}.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-cream-50/50">
              Explore
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-cream-50/80 hover:text-cream-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-cream-50/50">
              Get in touch
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-cream-50/80">
              <a href={`mailto:${business.email}`} className="hover:text-cream-50">
                {business.email}
              </a>
              {business.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="hover:text-cream-50"
                >
                  {phone}
                </a>
              ))}
              <a
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cream-50"
              >
                {business.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-cream-50/10 pt-6 text-xs text-cream-50/50 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>{business.location}</p>
        </div>
      </div>
    </footer>
  );
}
