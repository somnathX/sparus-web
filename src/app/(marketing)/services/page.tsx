import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { routeSeo } from "@/lib/route-seo";

export const metadata: Metadata = {
  ...routeSeo("/services"),
  title: "Services",
  description:
    "Software development, AI integration, and infrastructure services from Sparus Technology.",
};

const pillars = [
  {
    n: "I",
    title: "Custom software development",
    body: "We design, build, and maintain web and backend applications, APIs, and integrations for businesses—new products as well as modernization of existing systems. Deliverables include source code, tests, and documentation so your team can own the software long-term.",
  },
  {
    n: "II",
    title: "AI integration",
    body: "We integrate AI and machine-learning capabilities into your products: retrieval and search, chat and agent workflows, batch inference, and evaluation—built around your data and compliance requirements.",
  },
  {
    n: "III",
    title: "Cloud infrastructure & DevOps",
    body: "We set up and manage cloud infrastructure, CI/CD pipelines, infrastructure-as-code, monitoring, and on-call runbooks across major cloud providers—cost-aware, recoverable, and observable.",
  },
];

export default function ServicesPage() {
  return (
    <div className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <header className="max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Services
          </span>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            How we show up
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Sparus Technology Private Limited provides software engineering, AI
            integration, and cloud infrastructure services to businesses. Every
            engagement is scoped and quoted individually—see{" "}
            <Link href="/pricing" className="text-accent link-strike">
              Pricing
            </Link>{" "}
            for how we bill.
          </p>
        </header>

        <ol className="mt-20 space-y-px bg-border">
          {pillars.map(({ n, title, body }) => (
            <li
              key={title}
              className="flex flex-col gap-8 bg-background p-8 sm:flex-row sm:items-start sm:gap-12 sm:p-12"
            >
              <span className="font-heading text-5xl font-bold text-foreground/[0.08] sm:w-24 sm:shrink-0 sm:text-6xl">
                {n}
              </span>
              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  {title}
                </h2>
                <p className="mt-4 max-w-2xl text-muted">{body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 border border-accent/40 bg-accent-soft p-10 sm:p-12">
          <p className="font-heading text-2xl font-semibold text-foreground">
            Unsure which lane fits first?
          </p>
          <p className="mt-3 max-w-lg text-sm text-muted">
            Send constraints and deadlines—we&apos;ll reply with a phased plan
            and where we&apos;d start digging.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent link-strike"
          >
            Start a thread
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
