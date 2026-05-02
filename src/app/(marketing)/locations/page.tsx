import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Mail, Clock, ArrowUpRight } from "lucide-react";
import { company, offices } from "@/content/company";
import { routeSeo } from "@/lib/route-seo";

export const metadata: Metadata = {
  ...routeSeo("/locations"),
  title: "Locations",
  description:
    "Sparus Technology offices in Udaipur (HQ) and Dubai — hours, contact, and directions.",
};

export default function LocationsPage() {
  return (
    <div className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <header className="max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Locations
          </span>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.05] text-foreground sm:text-6xl">
            Our offices
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-muted">
            Product, platform, and delivery are coordinated from{" "}
            <strong className="font-medium text-foreground">Udaipur</strong> HQ
            with regional operations in{" "}
            <strong className="font-medium text-foreground">Dubai</strong>.
            We collaborate with clients remotely worldwide—clear comms,
            shared tooling, and scheduled overlap for milestones and incidents.
          </p>
        </header>

        <div className="mt-20 grid gap-8 border-t border-border pt-16 lg:grid-cols-2 lg:pt-20">
          {offices.map((office, i) => (
            <article
              key={office.id}
              className="border border-border bg-background p-8 sm:p-10"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                {office.label}
              </h2>
              <p className="mt-4 text-muted">{office.role}</p>

              <div className="mt-10 space-y-6">
                <div>
                  <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    <MapPin className="h-3.5 w-3.5" />
                    Address
                  </p>
                  <address className="mt-3 not-italic text-sm leading-relaxed text-muted">
                    {office.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
                <div>
                  <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    <Clock className="h-3.5 w-3.5" />
                    Hours
                  </p>
                  <p className="mt-3 text-sm text-muted">{office.hours}</p>
                </div>
                <div>
                  <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    <Mail className="h-3.5 w-3.5" />
                    Email
                  </p>
                  <a
                    href={`mailto:${company.contactEmail}?subject=${encodeURIComponent(`[${office.city}] Inquiry`)}`}
                    className="mt-3 inline-block text-sm text-foreground link-strike"
                  >
                    {company.contactEmail}
                  </a>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 bg-accent px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ink"
              >
                Directions
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <aside className="mt-24 border border-accent/30 bg-accent-soft p-8 sm:p-10">
          <h3 className="font-heading text-xl font-semibold text-foreground">
            Visiting or NDAs?
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            For on-site meetings, visitor badges, or MSA-backed
            engagements, email{" "}
            <a
              href={`mailto:${company.contactEmail}`}
              className="text-accent underline-offset-2 hover:underline"
            >
              {company.contactEmail}
            </a>{" "}
            with your company name and preferred dates. We&apos;ll confirm
            security and facilities steps ahead of time.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-accent"
          >
            Use the project form
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </aside>
      </div>
    </div>
  );
}
