"use client";

import { motion } from "framer-motion";

const technologies = [
  { label: "TypeScript", size: "lg" },
  { label: "Next.js", size: "xl" },
  { label: "Kubernetes", size: "sm" },
  { label: "PostgreSQL", size: "md" },
  { label: "AWS", size: "lg" },
  { label: "Python", size: "md" },
  { label: "Terraform", size: "sm" },
  { label: "React", size: "xl" },
  { label: "GraphQL", size: "sm" },
  { label: "Redis", size: "md" },
  { label: "Docker", size: "lg" },
  { label: "Node", size: "md" },
];

const sizeClass: Record<string, string> = {
  sm: "text-base sm:text-lg",
  md: "text-xl sm:text-2xl",
  lg: "text-2xl sm:text-3xl",
  xl: "text-3xl sm:text-4xl",
};

export function TechMarquee() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Stack
            </span>
            <h2 className="mt-4 max-w-sm font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Tools we go to war with
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted lg:text-right">
            Boring where it should be. Sharp where your margins depend on it.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-wrap items-baseline gap-x-3 gap-y-2 sm:gap-x-4 sm:gap-y-3"
        >
          {technologies.map((t, i) => (
            <span key={t.label} className="contents">
              <span
                className={`font-heading font-semibold tracking-tight text-foreground/90 ${sizeClass[t.size]}`}
                style={{ opacity: 0.35 + (i % 5) * 0.12 }}
              >
                {t.label}
              </span>
              {i < technologies.length - 1 && (
                <span className="font-mono text-muted/40 select-none">/</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
