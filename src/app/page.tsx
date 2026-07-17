import Link from "next/link";
import Button from "@/components/Button";
import Pill from "@/components/Pill";
import VideoEmbed from "@/components/VideoEmbed";
import {
  business,
  services,
  serviceThumbnail,
  featuredWork,
  testimonials,
  processSteps,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grid relative overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-10 lg:py-28">
          <div>
            <Pill>{business.location}</Pill>
            <h1 className="font-display mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4rem]">
              {business.tagline.split(". ").map((word, i) => (
                <span key={i} className={i === 1 ? "text-maroon" : ""}>
                  {word}
                  {i < business.tagline.split(". ").length - 1 ? ". " : ""}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-lg text-lg text-ink/70">
              {business.name}{" "}is a full-service creative studio — brand
              storytelling, events, YouTube &amp; podcast production, music
              videos, documentaries, and professional gear rental, all under
              one roof in {business.location}.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/book" variant="primary">
                Book a Consultation
              </Button>
              <Button href="/rent-gear" variant="outline">
                Rent Equipment
              </Button>
            </div>
          </div>

          {/* Status card, echoing a booking-flow product feel */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg bg-maroon-900 p-8 text-cream-50 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-cream-50/50">
                Consultation request
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-md bg-white/5 p-4">
                  <p className="text-xs text-cream-50/50">Project type</p>
                  <p className="mt-1 text-base font-semibold">
                    Brand &amp; Corporate Storytelling
                  </p>
                </div>
                <div className="rounded-md bg-white/5 p-4">
                  <p className="text-xs text-cream-50/50">Status</p>
                  <p className="mt-1 text-base font-semibold">
                    Awaiting consultation call
                  </p>
                </div>
                <div className="rounded-md bg-gradient-to-br from-gold to-maroon-700 p-4">
                  <p className="text-xs text-cream-50/70">Next step</p>
                  <p className="mt-1 text-base font-semibold">
                    We reach out within 24 hours to schedule
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-md bg-gold/80 sm:block" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-line px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Pill>What we do</Pill>
              <h2 className="font-display mt-4 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                Creative services built for cool brands &amp; creators
              </h2>
            </div>
            <p className="max-w-sm text-ink/60">
              Whether you&apos;re a business, a creator, or planning a
              one-off shoot, we design experiences that convert attention
              into connection.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const thumb = serviceThumbnail(service);
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex flex-col overflow-hidden rounded-lg bg-maroon-900 text-cream-50 ring-1 ring-maroon-900/10 transition-shadow hover:shadow-xl"
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    {thumb ? (
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url('${thumb}')` }}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-gold via-maroon-700 to-maroon-900 transition-transform duration-500 group-hover:scale-105" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-900 via-maroon-900/20 to-transparent" />
                    <span className="absolute left-5 top-4 font-display text-sm font-bold text-gold">
                      {service.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-6">
                    <h3 className="font-display text-lg font-bold">
                      {service.title}
                    </h3>
                    <p className="text-sm text-cream-50/70">
                      {service.description}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-transform group-hover:translate-x-1">
                      Explore →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="border-b border-line px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Pill>Featured work</Pill>
              <h2 className="font-display mt-4 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                Want proof? Our visuals speak for themselves.
              </h2>
            </div>
            <Button href="/portfolio" variant="outline">
              View all work
            </Button>
          </div>

          <div className="mt-12 space-y-6">
            {/* First video — full width, featured */}
            <div>
              <VideoEmbed
                id={featuredWork[0].video.id}
                title={featuredWork[0].video.title}
                provider={featuredWork[0].video.provider}
              />
              <div className="mt-3 flex items-center gap-3">
                <span className="rounded-full bg-maroon px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream-50">
                  {featuredWork[0].category}
                </span>
                <Link
                  href={featuredWork[0].href}
                  className="font-display text-base font-bold hover:text-maroon"
                >
                  {featuredWork[0].title}
                </Link>
              </div>
            </div>

            {/* Remaining two — side by side */}
            <div className="grid gap-6 sm:grid-cols-2">
              {featuredWork.slice(1).map((work) => (
                <div key={work.video.id}>
                  <VideoEmbed
                    id={work.video.id}
                    title={work.video.title}
                    provider={work.video.provider}
                  />
                  <div className="mt-3 flex items-center gap-3">
                    <span className="rounded-full bg-maroon px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream-50">
                      {work.category}
                    </span>
                    <Link
                      href={work.href}
                      className="font-display text-base font-bold hover:text-maroon"
                    >
                      {work.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process / how booking works */}
      <section className="border-b border-line bg-cream-50 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Pill>How it works</Pill>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            From first message to final delivery
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-lg border border-line bg-white p-6"
              >
                <span className="font-display text-3xl font-bold text-gold">
                  {step.step}
                </span>
                <h3 className="font-display mt-4 text-lg font-bold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button href="/book" variant="primary">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Gear rental teaser */}
      <section className="border-b border-line px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-lg bg-maroon p-10 text-cream-50 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-16">
          <div>
            <Pill>
              <span className="text-cream-50/70">Gear rental</span>
            </Pill>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Pro cameras, lenses, and lighting — without selling a kidney.
            </h2>
            <p className="mt-4 max-w-lg text-cream-50/70">
              Rent the same Sony cinema bodies, GM lenses, and lighting kits
              we use on set. Simple sign-off, clear return terms, no
              surprises.
            </p>
          </div>
          <div className="flex lg:justify-end">
            <Button href="/rent-gear" variant="ghost">
              Browse the gear catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Pill>What clients say</Pill>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            Creative. Fast. Unforgettable.
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name + t.quote}
                className="flex flex-col justify-between rounded-lg border border-line bg-cream-50 p-8"
              >
                <blockquote className="font-display text-lg font-medium leading-snug">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-ink/60">
                  <span className="font-semibold text-ink">{t.name}</span>
                  <br />
                  {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
