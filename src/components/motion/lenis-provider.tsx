"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

type LenisContextValue = {
  scroll: number;
};

const LenisContext = createContext<LenisContextValue>({ scroll: 0 });

export function useLenis() {
  return useContext(LenisContext);
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.1,
    });
    document.documentElement.classList.add("lenis");

    const onScroll = ({ scroll: y }: { scroll: number }) => {
      setScroll(y);
      ScrollTrigger.update();
    };
    lenis.on("scroll", onScroll);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      gsap.ticker.remove(tick);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
    };
  }, [reduced]);

  return (
    <LenisContext.Provider value={{ scroll }}>{children}</LenisContext.Provider>
  );
}
