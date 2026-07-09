"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLenis } from "@/components/motion/lenis-provider";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/locations", label: "Location" },
  { href: "/about", label: "About" },
] as const;

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
        active ? "text-accent" : "text-muted hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onContact = pathname === "/contact";
  const { scroll } = useLenis();
  const scrolled = scroll > 48;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/80 bg-background/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[4.25rem] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="group flex items-baseline gap-1.5">
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            Sparus
          </span>
          <span className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-accent">
            tech
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
          <Link
            href="/contact"
            className={`relative overflow-hidden px-5 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
              onContact
                ? "bg-accent text-ink"
                : "border border-foreground/20 text-foreground hover:border-accent hover:text-accent"
            }`}
          >
            Start
          </Link>
        </div>

        <button
          type="button"
          className="p-2 text-foreground md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-6 w-6 stroke-[1.25]" />
          ) : (
            <Menu className="h-6 w-6 stroke-[1.25]" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-6 px-5 py-8">
              {navLinks.map((l) => (
                <NavLink
                  key={l.href}
                  href={l.href}
                  label={l.label}
                  onClick={() => setOpen(false)}
                />
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="w-fit border border-accent px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-accent"
              >
                Start
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
