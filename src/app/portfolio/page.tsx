import Link from "next/link";
import Button from "@/components/Button";
import Pill from "@/components/Pill";
import { portfolioProjects, videoThumbnail } from "@/lib/content";

export const metadata = {
  title: "Our Work — Clay Studio Creations",
};

export default function PortfolioPage() {
  return (
    <div className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Pill>Our work</Pill>
        <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          The receipts? They&apos;re right here.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ink/70">
          A selection of projects across brand storytelling, events, music
          videos, documentaries, and more.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <Link
              key={project.video.id}
              href={project.href}
              className="group block overflow-hidden rounded-lg bg-maroon-900"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${videoThumbnail(project.video)}')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/70 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-maroon-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream-50 backdrop-blur">
                  {project.category}
                </span>
              </div>
              <div className="p-6 text-cream-50">
                <h3 className="font-display text-lg font-bold">
                  {project.title}
                </h3>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-transform group-hover:translate-x-1">
                  Watch the work →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 rounded-lg bg-maroon p-10 text-cream-50 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold">
              Got a project in mind?
            </h2>
            <p className="mt-2 text-cream-50/70">
              Let&apos;s talk about what you&apos;re building.
            </p>
          </div>
          <Button href="/book" variant="ghost">
            Book a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}
