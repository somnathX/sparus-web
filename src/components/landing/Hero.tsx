"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-12 sm:px-8 sm:pb-32 sm:pt-16 lg:px-12">
      {/* Geometric accent — not a soft blob */}
      <div
        className="pointer-events-none absolute -right-[20%] top-1/2 h-[min(90vw,720px)] w-[min(90vw,720px)] -translate-y-1/2 rounded-full border border-accent/25 hero-ring"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[8%] top-1/2 h-[min(70vw,520px)] w-[min(70vw,520px)] -translate-y-1/2 rounded-full border border-border"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 max-w-lg space-y-2"
            >
              <p className="font-mono text-[11px] leading-relaxed text-muted uppercase tracking-[0.25em]">
                Software · AI systems · Infrastructure
              </p>
              <p className="font-mono text-[10px] leading-relaxed text-muted/80 uppercase tracking-[0.2em]">
                HQ · Udaipur, India · Dubai, UAE
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.92] tracking-tight text-foreground"
            >
              Serious engineering
              <br />
              <span className="text-muted">for teams who ship</span>
              <span className="text-accent">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-8 max-w-lg text-lg leading-relaxed text-muted sm:text-xl"
            >
              We design and build products that survive traffic spikes, audits,
              and the Tuesday after a long weekend—without the theater.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-accent px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-transform hover:-translate-y-0.5"
              >
                Brief us
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/services"
                className="link-strike font-mono text-xs uppercase tracking-[0.2em] text-foreground"
              >
                What we do
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-col justify-end gap-6 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="border-l-2 border-accent pl-8"
            >
              <p className="font-heading text-4xl font-bold text-paper sm:text-5xl">
                12+
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Years collective · product & platform
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="bg-surface-raised p-8 sm:p-10"
            >
              <p className="font-heading text-xl italic text-foreground/95 sm:text-2xl">
                &ldquo;Clarity beats velocity when you&apos;re still deciding
                what to build.&rdquo;
              </p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                — how we kick off engagements
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
