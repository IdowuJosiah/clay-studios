"use client";

import { useState, type FormEvent } from "react";
import Pill from "@/components/Pill";
import WhatsAppButton from "@/components/WhatsAppButton";
import { business, gearCatalog, rentalTerms } from "@/lib/content";

export default function RentGearPage() {
  const [submitted, setSubmitted] = useState(false);
  // Today's date (YYYY-MM-DD) so the date pickers can't select past days.
  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder handler — connect to real intake (email / form backend)
    // once decided. For now it confirms the request was "sent".
    setSubmitted(true);
  }

  return (
    <div className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Pill>Gear rental</Pill>
        <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Need high-quality gear without selling a kidney? We&apos;ve got you.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ink/70">
          Professional cameras, lenses, lighting, and accessories — the same
          kit we use on our own productions, available to rent with a
          simple sign-off.
        </p>

        {/* Catalog */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {gearCatalog.map((group) => (
            <div
              key={group.category}
              className="overflow-hidden rounded-lg border border-line"
            >
              <div className="bg-maroon px-6 py-4">
                <h2 className="font-display text-lg font-bold text-cream-50">
                  {group.category}
                </h2>
              </div>
              <ul className="divide-y divide-line bg-cream-50">
                {group.items.map((item) => (
                  <li key={item} className="px-6 py-4 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Terms + request form */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <div className="rounded-lg bg-maroon-900 p-8 text-cream-50">
              <h2 className="font-display text-lg font-bold">
                Rental terms
              </h2>
              <p className="mt-3 text-sm text-cream-50/70">
                {rentalTerms.returnPolicy}
              </p>
              <p className="mt-3 text-sm text-cream-50/70">
                {rentalTerms.lateFee}
              </p>
            </div>

            <div className="rounded-lg border border-line bg-white p-8">
              <h2 className="font-display text-lg font-bold">
                What you&apos;ll need to provide
              </h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-ink/70">
                {rentalTerms.requirements.map((req) => (
                  <li key={req} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-line bg-cream-50 p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2 className="font-display text-lg font-bold">
                  Request to rent
                </h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Phone number" name="phone" type="tel" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email address" name="email" type="email" required />
                  <div>
                    <label className="text-sm font-medium text-ink/70">
                      Valid ID type
                    </label>
                    <select
                      name="idType"
                      required
                      defaultValue=""
                      className="mt-2 w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-maroon"
                    >
                      <option value="" disabled>
                        Select ID type
                      </option>
                      <option>National ID</option>
                      <option>Driver&apos;s License</option>
                      <option>International Passport</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-ink/70">
                    Gear you&apos;d like to rent
                  </label>
                  <textarea
                    name="gear"
                    required
                    rows={3}
                    placeholder="e.g. Sony FX3, Sony 24-70mm GM, Aputure 300D"
                    className="mt-2 w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-maroon"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Pick-up date"
                    name="pickupDate"
                    type="date"
                    required
                    min={today}
                  />
                  <Field
                    label="Return date"
                    name="returnDate"
                    type="date"
                    required
                    min={today}
                  />
                </div>
                <label className="flex items-start gap-3 text-sm text-ink/60">
                  <input type="checkbox" required className="mt-1" />
                  I agree to the rental terms, including the return policy
                  and late fees above.
                </label>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-md bg-maroon px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-maroon-700"
                >
                  Submit rental request
                </button>
                <WhatsAppButton />
              </form>
            ) : (
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">
                  Request sent
                </p>
                <h2 className="font-display text-2xl font-bold">
                  We&apos;ve got your request.
                </h2>
                <p className="text-sm text-ink/60">
                  We&apos;ll confirm availability and follow up with next
                  steps — including finishing your biodata and reference
                  details — by phone or email shortly.
                </p>
                <div className="mt-2 flex flex-col gap-3 text-sm">
                  <WhatsAppButton />
                  {business.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="rounded-md bg-white px-4 py-3 hover:bg-cream"
                    >
                      Call now — {phone}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink/70">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        min={min}
        className="mt-2 w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-maroon"
      />
    </div>
  );
}
