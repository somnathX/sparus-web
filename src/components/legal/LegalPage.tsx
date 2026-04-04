import Link from "next/link";
import { company } from "@/content/company";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
        >
          ← Home
        </Link>
        <h1 className="mt-6 font-heading text-4xl font-bold text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Last updated · {updated}
        </p>
        <p className="mt-6 border-l-2 border-accent pl-4 text-sm italic text-muted">
          This is starter legal language for a marketing site. Have counsel
          review before you rely on it in contracts or disputes.
        </p>
        <div className="legal-doc mt-12 text-sm leading-relaxed text-muted">
          {children}
        </div>
        <p className="mt-16 border-t border-border pt-8 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
          Questions?{" "}
          <a
            href={`mailto:${company.privacyEmail}`}
            className="text-accent hover:underline"
          >
            {company.privacyEmail}
          </a>
        </p>
      </div>
    </div>
  );
}
