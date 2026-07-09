"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

const rowA = [
  "TypeScript",
  "Next.js",
  "React",
  "Kubernetes",
  "PostgreSQL",
  "Python",
  "AWS",
  "Terraform",
  "GraphQL",
  "Redis",
  "Docker",
  "Node.js",
];

const rowB = [
  "Observability",
  "CI/CD",
  "RAG",
  "Agents",
  "gRPC",
  "OpenTelemetry",
  "Argo",
  "GCP",
  "Azure",
  "Prisma",
  "FastAPI",
  "Go",
];

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden border-y border-border/50 py-5 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex shrink-0 gap-10 pr-10 ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
      >
        {doubled.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="whitespace-nowrap font-heading text-2xl font-semibold tracking-tight text-foreground/25 sm:text-3xl"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TechMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-tech='reveal']", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={sectionRef} className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <p
          data-tech="reveal"
          className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent"
        >
          Stack
        </p>
        <h2
          data-tech="reveal"
          className="mt-4 max-w-lg font-heading text-3xl font-bold sm:text-4xl"
        >
          Proven tools.
          <span className="text-muted"> Sharp execution.</span>
        </h2>
      </div>

      <div className="mt-14 space-y-0">
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </div>
    </section>
  );
}
