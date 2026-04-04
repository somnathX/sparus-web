"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    n: "01",
    title: "Product & platform",
    description:
      "Applications, APIs, and internal tools with tests, observability, and docs your team can inherit without a map.",
  },
  {
    n: "02",
    title: "Applied intelligence",
    description:
      "Models and pipelines wired to your data boundaries—evaluation, safety, and rollback included, not bolted on later.",
  },
  {
    n: "03",
    title: "Systems & scale",
    description:
      "Cloud, containers, and automation that stay boring under load: cost-aware, recoverable, and observable.",
  },
];

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="border-t border-border bg-surface px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Practice
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Three lanes.
              <br />
              <span className="text-muted">One standard of care.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="max-w-sm text-sm leading-relaxed text-muted lg:text-right"
          >
            No cookie-cutter squads. We staff to the problem—then leave you
            with code and runbooks that don&apos;t need us on speed-dial.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-px bg-border lg:grid-cols-2 lg:grid-rows-2">
          {services.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative bg-background p-8 sm:p-10 ${
                i === 0 ? "lg:row-span-2 lg:flex lg:min-h-[480px] lg:flex-col lg:justify-between" : ""
              }`}
            >
              <span
                className="font-heading text-7xl font-bold leading-none text-foreground/[0.05] transition-colors group-hover:text-accent/20 sm:text-8xl"
                aria-hidden
              >
                {s.n}
              </span>
              <div className={i === 0 ? "lg:mt-auto" : ""}>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
                {i === 0 && (
                  <Link
                    href="/services"
                    className="link-strike mt-8 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-accent"
                  >
                    Read the full scope
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
