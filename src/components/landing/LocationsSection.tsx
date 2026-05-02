import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { offices } from "@/content/company";

export function LocationsSection() {
  return (
    <section className="border-t border-border bg-background px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Locations
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
              {offices.map((o) => o.city).join(" · ")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              Engineering and delivery run from{" "}
              <strong className="font-medium text-foreground">Udaipur</strong>{" "}
              HQ. We also have a regional presence in{" "}
              <strong className="font-medium text-foreground">Dubai</strong>{" "}
              and collaborate remotely with distributed teams worldwide.
            </p>
          </div>
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 self-start border border-border px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground transition-colors hover:border-accent hover:text-accent lg:self-auto"
          >
            Address, hours &amp; maps
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {offices.map((office) => (
            <article
              key={office.id}
              className="group flex flex-col border border-border bg-surface transition-colors hover:border-accent/40"
            >
              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                  {office.label}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-foreground">
                  {office.city}
                  <span className="text-muted">, {office.region}</span>
                </h3>
                <p className="mt-2 text-sm text-muted">{office.role}</p>
                <address className="mt-6 not-italic">
                  <ul className="space-y-1 text-sm leading-relaxed text-muted">
                    {office.addressLines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </address>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  {office.hours}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-accent link-strike"
                >
                  <MapPin className="h-4 w-4" />
                  Open in Maps
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
