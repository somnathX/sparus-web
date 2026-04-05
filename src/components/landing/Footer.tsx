import Link from "next/link";
import { Code2, MessageCircle, UsersRound } from "lucide-react";
import { company } from "@/content/company";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/locations", label: "Location" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

const socialCandidates = [
  { href: company.linkedinUrl, icon: UsersRound, label: "LinkedIn" },
  { href: company.twitterUrl, icon: MessageCircle, label: "Twitter" },
  { href: company.githubUrl, icon: Code2, label: "GitHub" },
] as const;

const social = socialCandidates.filter((s) => s.href.trim() !== "");

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:justify-between">
          <div className="max-w-md">
            <p className="font-heading text-[clamp(3rem,10vw,5.5rem)] font-bold leading-none tracking-tight text-foreground/[0.07]">
              Sparus
            </p>
            <p className="-mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
              Technology
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              Product engineering and platforms for teams who care what
              production feels like on a random Tuesday.
            </p>
            <p className="mt-6 font-mono text-[10px] leading-relaxed text-muted/80">
              <span className="uppercase tracking-[0.15em] text-accent">
                Studio
              </span>
              <br />
              Udaipur, Rajasthan, India
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16 lg:gap-24">
            <nav className="flex flex-col gap-3">
              <span className="mb-1 font-mono text-[9px] uppercase tracking-[0.25em] text-muted">
                Site
              </span>
              {footerLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <nav className="flex flex-col gap-3">
              <span className="mb-1 font-mono text-[9px] uppercase tracking-[0.25em] text-muted">
                Legal
              </span>
              {legalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted">
                Social
              </span>
              <div className="flex gap-6">
                {social.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    <Icon className="h-5 w-5 stroke-[1.25]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            © {new Date().getFullYear()} Sparus Technology
          </p>
          <p className="font-mono text-[10px] text-muted/70">
            India (IST) · Remote-friendly worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
