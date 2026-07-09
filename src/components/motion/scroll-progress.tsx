"use client";

import { useLenis } from "@/components/motion/lenis-provider";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useEffect, useState } from "react";

function useScrollMax() {
  const [max, setMax] = useState(0);

  useEffect(() => {
    const update = () =>
      setMax(
        Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
      );
    update();
    window.addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    observer.observe(document.documentElement);
    return () => {
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);

  return max;
}

export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scroll } = useLenis();
  const [nativeScroll, setNativeScroll] = useState(0);
  const max = useScrollMax();

  useEffect(() => {
    if (!reduced) return;
    const onScroll = () => setNativeScroll(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  const y = reduced ? nativeScroll : scroll;
  const progress = max > 0 ? Math.min(1, y / max) : 0;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[100] h-[2px] w-full bg-border/30"
      aria-hidden
    >
      <div
        className="h-full origin-left bg-accent transition-transform duration-150 ease-out will-change-transform"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
