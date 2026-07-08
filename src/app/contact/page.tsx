import Button from "@/components/Button";
import Pill from "@/components/Pill";
import { business } from "@/lib/content";

export const metadata = {
  title: "Contact — Clay Studio Creations",
};

export default function ContactPage() {
  return (
    <div className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <Pill>Questions?</Pill>
        <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Talk to {business.shortName} before you book.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ink/70">
          Whether it&apos;s a project, a rental, or you just have questions —
          reach us directly, or book a consultation and we&apos;ll come to
          you.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <ContactCard label="Call">
            {business.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="block hover:text-maroon"
              >
                {phone}
              </a>
            ))}
          </ContactCard>
          <ContactCard label="Email">
            <a
              href={`mailto:${business.email}`}
              className="hover:text-maroon"
            >
              {business.email}
            </a>
          </ContactCard>
          <ContactCard label="Instagram">
            <a
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-maroon"
            >
              {business.instagramHandle}
            </a>
          </ContactCard>
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-lg bg-maroon p-10 text-cream-50 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold">
              Ready to start?
            </h2>
            <p className="mt-2 text-cream-50/70">
              Book a consultation and let&apos;s scope your project.
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

function ContactCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-line bg-cream-50 p-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">
        {label}
      </p>
      <div className="mt-3 flex flex-col gap-2 text-sm font-medium">
        {children}
      </div>
    </div>
  );
}
