"use client";

import { useState, type FormEvent } from "react";
import Pill from "@/components/Pill";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  business,
  gearCatalog,
  rentalTerms,
  formatNaira,
} from "@/lib/content";
import { submitLead, buildMailto } from "@/lib/lead";

export default function RentGearPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  // Cart: names of picked items (one of each is available).
  const [picked, setPicked] = useState<string[]>([]);
  // Today's date (YYYY-MM-DD) so the date pickers can't select past days.
  const today = new Date().toISOString().split("T")[0];

  const allItems = gearCatalog.flatMap((g) => g.items);
  const selected = allItems.filter((i) => picked.includes(i.name));
  const total = selected.reduce((sum, i) => sum + (i.price ?? 0), 0);
  const hasPriced = selected.some((i) => i.price != null);
  const totalLabel = hasPriced ? formatNaira(total) : "On request";

  function toggle(name: string) {
    setPicked((p) =>
      p.includes(name) ? p.filter((n) => n !== name) : [...p, name],
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selected.length === 0) {
      setError("Add at least one item to your request.");
      return;
    }
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const name = String(data.name ?? "").trim();
    const gearLines = selected
      .map((i) =>
        i.price != null
          ? `${i.name} — ${formatNaira(i.price)}/day`
          : `${i.name} — On request`,
      )
      .join("\n");

    setSubmitting(true);
    setError("");
    const subject = `New rental request${
      name ? ` from ${name}` : ""
    } — Clay Studio Creations`;
    try {
      await submitLead({
        type: "rental",
        name: data.name,
        phone: data.phone,
        email: data.email,
        pickupDate: data.pickupDate,
        returnDate: data.returnDate,
        items: selected.map((i) => ({ name: i.name, price: i.price ?? null })),
        totalLabel,
        _gotcha: data._gotcha,
      });
      setSubmitted(true);
    } catch {
      // Fall back to a pre-filled email so the request still reaches us.
      window.location.href = buildMailto(business.email, subject, {
        Name: data.name,
        Phone: data.phone,
        Email: data.email,
        "Pick-up date": data.pickupDate,
        "Return date": data.returnDate,
        "Gear requested": gearLines,
        "Estimated total (per day)": totalLabel,
      });
      setError(
        "We're opening your email app so you can send this request to us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Pill>Gear rental</Pill>
        <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          High quality gear without breaking a leg? Come closer.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ink/70">
          Get access to our professional cameras, lenses, lighting and
          accessories without the commitment of buying. Add what you need to
          your list, drop your details, and we&apos;ll take it from there.
        </p>

        {/* Catalog */}
        <p className="mt-8 text-sm font-medium text-ink/50">
          Prices are per shoot day. Items without a price are quoted on
          request. Tap “Add” to build your rental list.
        </p>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          {gearCatalog.map((group) => (
            <div
              key={group.category}
              className="overflow-hidden rounded-lg border border-line"
            >
              <div className="bg-maroon px-6 py-4">
                <h2 className="font-display text-lg font-bold text-cream-50">
                  {group.category}
                </h2>
                {group.note && (
                  <p className="mt-1 text-xs text-cream-50/70">{group.note}</p>
                )}
              </div>
              <ul className="divide-y divide-line bg-cream-50">
                {group.items.map((item) => {
                  const isPicked = picked.includes(item.name);
                  return (
                    <li
                      key={item.name}
                      className="flex items-center gap-4 px-6 py-4 text-sm"
                    >
                      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-md border border-line bg-white">
                        {item.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-cream text-ink/25">
                            <svg
                              viewBox="0 0 24 24"
                              className="h-6 w-6"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              aria-hidden="true"
                            >
                              <rect x="3" y="5" width="18" height="14" rx="2" />
                              <circle cx="9" cy="10" r="1.5" />
                              <path d="M4 17l5-4 4 3 3-2 4 3" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="font-semibold text-maroon">
                          {item.price != null
                            ? formatNaira(item.price)
                            : "On request"}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggle(item.name)}
                        aria-pressed={isPicked}
                        className={`shrink-0 rounded-md border border-maroon px-4 py-1.5 text-xs font-semibold transition-colors ${
                          isPicked
                            ? "bg-maroon text-cream-50"
                            : "text-maroon hover:bg-maroon hover:text-cream-50"
                        }`}
                      >
                        {isPicked ? "Added ✓" : "Add"}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Terms + request form */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <div className="rounded-lg bg-maroon-900 p-8 text-cream-50">
              <h2 className="font-display text-lg font-bold">Rental terms</h2>
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
                {/* Honeypot: hidden from people, catches bots. */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <h2 className="font-display text-lg font-bold">
                  Your rental request
                </h2>

                {/* Cart summary */}
                <div className="rounded-md border border-line bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">
                    Your selection
                  </p>
                  {selected.length === 0 ? (
                    <p className="mt-2 text-sm text-ink/50">
                      Add gear above to start your request.
                    </p>
                  ) : (
                    <>
                      <ul className="mt-3 flex flex-col gap-2 text-sm">
                        {selected.map((i) => (
                          <li
                            key={i.name}
                            className="flex justify-between gap-4"
                          >
                            <span>{i.name}</span>
                            <span className="shrink-0 text-ink/60">
                              {i.price != null
                                ? formatNaira(i.price)
                                : "On request"}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 flex justify-between border-t border-line pt-3 text-sm font-semibold">
                        <span>Estimated total / day</span>
                        <span className="text-maroon">{totalLabel}</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field
                    label="Phone number"
                    name="phone"
                    type="tel"
                    required
                    numericOnly
                  />
                </div>
                <Field
                  label="Email address (optional)"
                  name="email"
                  type="email"
                />
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
                  I agree to the rental terms, including the return policy and
                  late fees above.
                </label>
                <button
                  type="submit"
                  disabled={submitting || selected.length === 0}
                  className="mt-2 inline-flex items-center justify-center rounded-md bg-maroon px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-maroon-700 disabled:opacity-60"
                >
                  {submitting
                    ? "Sending…"
                    : selected.length === 0
                      ? "Add gear to request"
                      : `Submit rental request (${selected.length})`}
                </button>
                {error && (
                  <p className="text-sm text-maroon" role="alert">
                    {error}
                  </p>
                )}
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
                  We&apos;ll confirm availability and follow up with next steps —
                  including finishing your biodata and reference details — by
                  phone or email shortly.
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
  numericOnly = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: string;
  numericOnly?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink/70">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        min={min}
        inputMode={numericOnly ? "numeric" : undefined}
        pattern={numericOnly ? "[0-9]{7,15}" : undefined}
        title={numericOnly ? "Enter digits only (7–15 numbers)." : undefined}
        onInput={
          numericOnly
            ? (e) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /[^0-9]/g,
                  "",
                );
              }
            : undefined
        }
        className="mt-2 w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-maroon"
      />
    </div>
  );
}
