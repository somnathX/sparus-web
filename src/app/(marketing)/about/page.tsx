import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { companyStoryParagraphs, offices } from "@/content/company";
import { routeSeo } from "@/lib/route-seo";

export const metadata: Metadata = {
  ...routeSeo("/about"),
  title: "About Us",
  description:
    "Sparus Technology: engineering from Udaipur, India—how we work with teams worldwide.",
};

const values = [
  {
    title: "Outcomes over theater",
    text: "We measure in shipped value, uptime, and how fast you can change your mind—not vanity metrics on a slide.",
  },
  {
    title: "Direct lines",
    text: "You work with people who write and review code. Politics and black-box “delivery pods” aren’t our model.",
  },
  {
    title: "Pace you can sustain",
    text: "We automate and document so your team isn’t forever paying interest on the last heroic launch.",
  },
];

export default function AboutPage() {
  return (
    <div className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          <header className="lg:col-span-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              About
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.05] text-foreground sm:text-6xl">
              Built for the part after the keynote
            </h1>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted">
              {companyStoryParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </header>
          <aside className="space-y-8 lg:col-span-5">
            <div className="border-l-2 border-accent pl-8">
              <p className="font-heading text-xl italic leading-snug text-foreground/90">
                Good vendors leave you with options. Great ones leave you with
                systems you’re proud to own.
              </p>
            </div>
            <Link
              href="/locations"
              className="flex flex-col justify-end border border-border bg-surface-raised p-6 transition-colors hover:border-accent/40 sm:max-w-xs"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                {offices[0]!.label}
              </span>
              <span className="mt-2 font-heading text-xl font-semibold text-foreground">
                {offices[0]!.city}, {offices[0]!.region}
              </span>
              <span className="mt-2 text-[11px] text-muted">Address &amp; hours →</span>
            </Link>
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-accent"
            >
              <MapPin className="h-4 w-4" />
              Location &amp; hours
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>

        <div className="mt-24 grid gap-px bg-border sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="bg-background p-8 sm:p-10">
              <h2 className="font-heading text-lg font-semibold text-foreground">
                {v.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">{v.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-6 border border-border bg-surface px-8 py-12 text-center sm:px-12">
          <p className="max-w-lg text-sm text-muted">
            Hiring, press, or vendor onboarding: we route everything through the
            same front door so nothing gets lost between time zones.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 bg-accent px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-transform hover:-translate-y-0.5"
          >
            Write to us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
