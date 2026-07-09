"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !root.current) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-hero='line']", {
        yPercent: 110,
        opacity: 0,
        duration: 1.1,
        stagger: 0.09,
        ease: "power4.out",
        delay: 0.15,
      });
      gsap.from("[data-hero='fade']", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.07,
        ease: "power3.out",
        delay: 0.55,
      });
      gsap.from("[data-hero='orb']", {
        scale: 0.85,
        opacity: 0,
        duration: 1.6,
        stagger: 0.12,
        ease: "power2.out",
      });
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,90,44,0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        data-hero="orb"
        className="motion-orb pointer-events-none absolute -left-[10%] top-[15%] h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-accent/20 blur-[100px]"
        aria-hidden
      />
      <div
        data-hero="orb"
        className="motion-orb pointer-events-none absolute -right-[5%] bottom-[10%] h-[min(55vw,400px)] w-[min(55vw,400px)] rounded-full bg-accent-glow/10 blur-[90px] [animation-delay:-5s]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1400px]">
        <p
          data-hero="fade"
          className="mb-8 font-mono text-[10px] uppercase tracking-[0.35em] text-muted"
        >
          Udaipur · Dubai · Remote
        </p>

        <h1 className="max-w-[14ch] font-heading text-[clamp(2.75rem,9vw,6.5rem)] font-bold leading-[0.9] tracking-[-0.03em]">
          <span className="block overflow-hidden">
            <span data-hero="line" className="block">
              Build systems
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-hero="line" className="block text-muted">
              that hold up
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-hero="line" className="block text-accent">
              in production.
            </span>
          </span>
        </h1>

        <p
          data-hero="fade"
          className="mt-10 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Sparus ships software, applied AI, and infrastructure for teams who
          need reliability—not another slide deck.
        </p>

        <div
          data-hero="fade"
          className="mt-12 flex flex-wrap items-center gap-5"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-accent px-8 py-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink transition-transform duration-300 hover:scale-[1.02]"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/services"
            className="link-strike font-mono text-[10px] uppercase tracking-[0.2em] text-foreground"
          >
            Our practice
          </Link>
        </div>
      </div>

      <div
        data-hero="fade"
        className="relative mx-auto mt-16 flex w-full max-w-[1400px] items-end justify-between border-t border-border/60 pt-6"
      >
        <div className="flex gap-10 sm:gap-16">
          <div>
            <p className="font-heading text-3xl font-bold sm:text-4xl">12+</p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
              Years collective
            </p>
          </div>
          <div>
            <p className="font-heading text-3xl font-bold sm:text-4xl">2</p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
              Global studios
            </p>
          </div>
        </div>
        <div className="scroll-cue hidden flex-col items-center gap-2 sm:flex">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 text-accent" />
        </div>
      </div>
    </section>
  );
}
