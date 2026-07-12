import Link from "next/link";
import Pill from "@/components/Pill";
import { services } from "@/lib/content";

export const metadata = {
  title: "Services — Clay Studio Creations",
};

export default function ServicesPage() {
  return (
    <div className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Pill>What we do</Pill>
        <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Creative services for cool brands &amp; creators
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ink/70">
          Every project starts with a consultation — no fixed packages,
          just a scope built around what you actually need.
        </p>

        <div className="mt-14 flex flex-col divide-y divide-line rounded-lg border border-line bg-cream-50">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col gap-4 p-8 transition-colors hover:bg-white sm:flex-row sm:items-center sm:gap-10"
            >
              <span className="font-display text-2xl font-bold text-gold sm:w-16">
                {service.tag}
              </span>
              <div className="flex-1">
                <h2 className="font-display text-xl font-bold">
                  {service.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-ink/60">
                  {service.description}
                </p>
              </div>
              <span className="shrink-0 text-sm font-semibold text-maroon transition-transform group-hover:translate-x-1">
                View service →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
