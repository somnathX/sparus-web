"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ArrowUpRight } from "lucide-react";
import { offices } from "@/content/company";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

export function LocationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-loc='card']", {
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="border-t border-border bg-surface px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent">
              Studios
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              {offices.map((o) => o.city).join(" · ")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              HQ in Udaipur. Regional operations in Dubai. Remote delivery
              worldwide—with overlap built into how we run reviews and releases.
            </p>
          </div>
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 self-start border border-foreground/15 px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent lg:self-auto"
          >
            Addresses &amp; hours
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {offices.map((office) => (
            <article
              key={office.id}
              data-loc="card"
              className="glass-panel group p-8 transition-colors duration-500 hover:border-accent/30 sm:p-10"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                {office.label}
              </p>
              <h3 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">
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
                className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-accent link-strike"
              >
                <MapPin className="h-4 w-4" />
                Maps
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
