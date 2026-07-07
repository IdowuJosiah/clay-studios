import Button from "@/components/Button";
import Pill from "@/components/Pill";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import { portfolioProjects } from "@/lib/content";

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
          videos, documentaries, and more. Placeholder covers below —
          swap in real stills and reels once they&apos;re ready.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project, i) => (
            <div
              key={project.slug}
              className="group overflow-hidden rounded-3xl border border-line"
            >
              <PlaceholderMedia
                index={i}
                label={project.category}
                className="aspect-[4/5] w-full"
              />
              <div className="bg-cream-50 p-6">
                <h3 className="font-display text-lg font-bold">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-ink/60">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 rounded-3xl bg-maroon p-10 text-cream-50 sm:flex-row sm:items-center sm:justify-between">
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
