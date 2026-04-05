import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { routeSeo } from "@/lib/route-seo";

export const metadata: Metadata = {
  ...routeSeo("/solutions"),
  title: "Solutions",
  description:
    "Industry-focused technology solutions: scale-ups, enterprises, and regulated teams.",
};

const solutions = [
  {
    tag: "Growth",
    title: "High-growth teams",
    points: [
      "Speed that doesn’t fork your architecture every six months",
      "Platform choices you won’t regret at Series C",
      "Augmentation or embedded squad—your call",
    ],
  },
  {
    tag: "Enterprise",
    title: "Modernization",
    points: [
      "Stranglers and cutovers without a big-bang outage story",
      "Integration layers that respect ERP / CRM reality",
      "Reporting your execs can actually use",
    ],
  },
  {
    tag: "Trust",
    title: "Regulated environments",
    points: [
      "Threat modeling and least privilege by default",
      "Logging, access, and residency options auditors expect",
      "Review cadence aligned to your compliance calendar",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <header className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Solutions
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.05] text-foreground sm:text-6xl">
              Same craft.
              <br />
              <span className="text-muted">Different guardrails.</span>
            </h1>
          </header>
          <p className="max-w-sm text-sm leading-relaxed text-muted lg:text-right">
            The work is continuous delivery and honest tradeoffs. The wrapper
            is whatever your market demands.
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {solutions.map((s) => (
            <article
              key={s.title}
              className="flex flex-col border border-border bg-surface p-8 sm:p-10"
            >
              <span className="w-fit border border-accent/50 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                {s.tag}
              </span>
              <h2 className="mt-6 font-heading text-xl font-semibold text-foreground">
                {s.title}
              </h2>
              <ul className="mt-6 flex flex-1 flex-col gap-4 text-sm text-muted">
                {s.points.map((p) => (
                  <li key={p} className="border-l border-border pl-4 leading-relaxed">
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-foreground px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Talk through your roadmap
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
