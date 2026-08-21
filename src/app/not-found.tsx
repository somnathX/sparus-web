import Link from "next/link";
import { SubpageHeader, EditorialFooter } from "@/components/home/home-experience";

const suggestions = [
  { href: "/services", label: "Services", note: "What we build and run" },
  { href: "/solutions", label: "Solutions", note: "Where it gets applied" },
  { href: "/about", label: "About", note: "How we work" },
  { href: "/locations", label: "Locations", note: "Udaipur · Dubai" },
  { href: "/contact", label: "Contact", note: "Start a conversation" },
];

export default function NotFound() {
  return (
    <>
      <SubpageHeader />
      <main className="ed-subpage-main">
        <section className="ed-wrap ed-404">
          <span className="ed-tag">Error 404</span>
          <p className="ed-404-num ed-disp">404</p>
          <h1 className="ed-404-title ed-disp">This page moved on</h1>
          <p className="ed-404-lede">
            The URL you followed doesn’t resolve to anything we serve. It may
            have been renamed, retired, or typed slightly wrong. Nothing is
            broken on your end.
          </p>
          <div className="ed-404-grid">
            {suggestions.map((s) => (
              <Link key={s.href} href={s.href} className="ed-404-link">
                <span className="ed-404-link-label">{s.label}</span>
                <span className="ed-404-link-note">{s.note}</span>
              </Link>
            ))}
          </div>
          <Link href="/" className="ed-404-home">
            ← Back to home
          </Link>
        </section>
      </main>
      <EditorialFooter />
    </>
  );
}
