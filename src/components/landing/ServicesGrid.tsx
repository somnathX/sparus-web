"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    n: "01",
    title: "Product & platform",
    description:
      "Applications, APIs, and internal tools with tests, observability, and docs your team can inherit.",
    tags: ["Next.js", "APIs", "QA"],
  },
  {
    n: "02",
    title: "Applied intelligence",
    description:
      "Models and pipelines wired to your data boundaries—evaluation, safety, and rollback included.",
    tags: ["RAG", "Agents", "ML ops"],
  },
  {
    n: "03",
    title: "Systems & scale",
    description:
      "Cloud, containers, and automation that stay boring under load: cost-aware and observable.",
    tags: ["K8s", "IaC", "SRE"],
  },
];

export function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !sectionRef.current || !pinRef.current || !trackRef.current)
      return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const track = trackRef.current!;
      const getScroll = () =>
        Math.max(0, track.scrollWidth - window.innerWidth + 80);

      const tween = gsap.to(track, {
        x: () => -getScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: () => `+=${getScroll()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, [reduced]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative border-t border-border bg-surface"
    >
      <div className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent">
              Practice
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              What we
              <span className="text-muted"> ship.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted lg:text-right">
            Three lanes. One bar for quality—code, runbooks, and context you can
            inherit.
          </p>
        </div>
      </div>

      <div ref={pinRef} className="hidden overflow-hidden lg:block">
        <div
          ref={trackRef}
          className="flex w-max gap-5 px-5 pb-20 pt-4 sm:gap-6 sm:px-8 lg:px-12"
        >
          {services.map((s) => (
            <article
              key={s.n}
              className="glass-panel flex w-[min(88vw,420px)] shrink-0 flex-col justify-between p-8 sm:w-[min(72vw,460px)] sm:p-10 lg:w-[480px]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                {s.n}
              </span>
              <div className="mt-8">
                <h3 className="font-heading text-2xl font-semibold sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
          <article className="flex w-[min(88vw,320px)] shrink-0 flex-col justify-center border border-dashed border-border/80 p-8 sm:w-[320px]">
            <p className="font-heading text-xl font-semibold">Full scope</p>
            <p className="mt-3 text-sm text-muted">
              Deep dive into how we engage on product, AI, and platform work.
            </p>
            <Link
              href="/services"
              className="link-strike mt-8 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-accent"
            >
              Services page →
            </Link>
          </article>
        </div>
      </div>

      {/* Mobile / tablet: stacked cards (horizontal scroll disabled) */}
      <div className="flex flex-col gap-4 px-5 pb-20 lg:hidden">
        {services.map((s) => (
          <article
            key={`m-${s.n}`}
            className="glass-panel border border-border p-6"
          >
            <span className="font-mono text-[10px] text-accent">{s.n}</span>
            <h3 className="mt-3 font-heading text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
