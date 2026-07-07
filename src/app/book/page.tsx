"use client";

import { useState, type FormEvent } from "react";
import Pill from "@/components/Pill";
import { business, services, processSteps } from "@/lib/content";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: this is a placeholder submit handler. Wire this up to a real
    // endpoint (email, CRM, WhatsApp API, etc.) once that's decided —
    // for now it just simulates a confirmation so the flow can be reviewed.
    const ref = `CSC-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    setReference(ref);
    setSubmitted(true);
  }

  return (
    <div className="bg-grid border-b border-line px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Pill>Step one</Pill>
        <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Book a consultation
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ink/70">
          We don&apos;t lock you into a package upfront. Tell us what
          you&apos;re working on, and we&apos;ll set up a call to scope the
          project, timeline, and budget together.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form / confirmation card */}
          <div className="rounded-3xl border border-line bg-cream-50 p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <Field label="Full name" name="name" required />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone number" name="phone" type="tel" required />
                  <Field label="Email address" name="email" type="email" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-ink/70">
                    Project type
                  </label>
                  <select
                    name="projectType"
                    required
                    defaultValue=""
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-maroon"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-ink/70">
                    Tell us about your project
                  </label>
                  <textarea
                    name="details"
                    required
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-maroon"
                    placeholder="What are you creating, when do you need it, and any details we should know?"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-maroon-700"
                >
                  Request a consultation
                </button>
              </form>
            ) : (
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">
                  Request received
                </p>
                <div className="rounded-2xl bg-maroon-900 p-6 text-cream-50">
                  <p className="text-xs text-cream-50/50">Reference</p>
                  <p className="mt-1 font-display text-2xl font-bold">
                    {reference}
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="rounded-xl bg-white/5 p-3 text-sm">
                      <span className="text-cream-50/50">Status: </span>
                      Awaiting consultation call
                    </div>
                    <div className="rounded-xl bg-gradient-to-br from-gold to-maroon-700 p-3 text-sm">
                      Next: we reach out within 24 hours to schedule
                    </div>
                  </div>
                </div>
                <p className="text-sm text-ink/60">
                  Save this reference for your records. In a hurry? Reach us
                  directly using the contact details alongside.
                </p>
              </div>
            )}
          </div>

          {/* Process reminder + direct contact */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-line bg-white p-8">
              <h2 className="font-display text-lg font-bold">
                What happens next
              </h2>
              <div className="mt-6 flex flex-col gap-5">
                {processSteps.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <span className="font-display text-lg font-bold text-gold">
                      {step.step}
                    </span>
                    <div>
                      <p className="font-semibold">{step.title}</p>
                      <p className="text-sm text-ink/60">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-maroon-900 p-8 text-cream-50">
              <h2 className="font-display text-lg font-bold">
                Rather talk directly?
              </h2>
              <p className="mt-2 text-sm text-cream-50/70">
                Reach {business.name} by phone, email, or Instagram.
              </p>
              <div className="mt-6 flex flex-col gap-3 text-sm">
                {business.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10"
                  >
                    Call — {phone}
                  </a>
                ))}
                <a
                  href={`mailto:${business.email}`}
                  className="rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10"
                >
                  Email — {business.email}
                </a>
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10"
                >
                  Instagram — {business.instagramHandle}
                </a>
              </div>
            </div>
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink/70">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-maroon"
      />
    </div>
  );
}
