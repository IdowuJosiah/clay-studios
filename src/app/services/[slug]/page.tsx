import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Pill from "@/components/Pill";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import VideoEmbed from "@/components/VideoEmbed";
import { services } from "@/lib/content";

// Only the services that live under /services/[slug]. Gear Rental has its own
// dedicated /rent-gear page, so it's excluded here.
const detailServices = services.filter((s) => s.href.startsWith("/services/"));

export function generateStaticParams() {
  return detailServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = detailServices.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — Clay Studio Creations`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = detailServices.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/services"
          className="text-sm font-medium text-ink/50 transition-colors hover:text-maroon"
        >
          ← All services
        </Link>

        <div className="mt-6 flex items-center gap-4">
          <span className="font-display text-2xl font-bold text-gold">
            {service.tag}
          </span>
          <Pill>What we do</Pill>
        </div>
        <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          {service.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">
          {service.longDescription}
        </p>

        {/* Video showcase — real embeds when available, placeholder drop-zones
            otherwise. */}
        {service.videos.length > 0 ? (
          <div className="mt-12 flex flex-col gap-4">
            {service.videos.map((video) => (
              <figure key={video.id}>
                <VideoEmbed
                  id={video.id}
                  title={video.title}
                  provider={video.provider}
                />
                <figcaption className="mt-2 text-sm text-ink/50">
                  {video.title}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          service.videoCount > 0 && (
            <div className="mt-12">
              <PlaceholderMedia
                index={0}
                label="Showreel video"
                className="aspect-video w-full rounded-lg"
              />
              {service.videoCount > 1 && (
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {Array.from({ length: service.videoCount - 1 }).map((_, i) => (
                    <PlaceholderMedia
                      key={i}
                      index={i + 1}
                      label="Video"
                      className="aspect-video w-full rounded-lg"
                    />
                  ))}
                </div>
              )}
            </div>
          )
        )}

        {/* What's included */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-line bg-cream-50 p-8">
            <h2 className="font-display text-lg font-bold">
              What&apos;s included
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-lg bg-maroon-900 p-8 text-cream-50">
            <div>
              <h2 className="font-display text-lg font-bold">
                Interested in this service?
              </h2>
              <p className="mt-2 text-sm text-cream-50/70">
                Every project starts with a consultation — no fixed packages,
                just a scope built around what you need.
              </p>
            </div>
            <Button href="/book" variant="ghost" className="w-full">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
