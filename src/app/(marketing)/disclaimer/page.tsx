import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { company } from "@/content/company";
import { routeSeo } from "@/lib/route-seo";

export const metadata: Metadata = {
  ...routeSeo("/disclaimer"),
  title: "Disclaimer",
  description: `The limits of what ${company.legalName} publishes on this website: no professional advice, no guaranteed outcomes, no warranty on third-party content.`,
};

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" updated="April 5, 2026">
      <p>
        This page sets out the limits of what you should read into the content
        on this website. It works alongside our{" "}
        <a href="/terms">Terms of Service</a>, which govern your use of the site
        overall. Where a signed statement of work or master services agreement
        exists between you and {company.legalName}, that contract controls for
        the services it covers.
      </p>

      <h2>General information only</h2>
      <p>
        Everything published here—service descriptions, architecture notes,
        engineering commentary, benchmarks—is provided for{" "}
        <strong className="text-foreground/90">
          general information purposes only
        </strong>
        . It is not tailored to your systems, your constraints, or your risk
        profile, and it is not a substitute for an engagement in which we
        actually look at your environment.
      </p>

      <h2>Not professional advice</h2>
      <p>
        Nothing on this site constitutes legal, financial, tax, regulatory,
        security-certification, or compliance advice. References to standards
        and frameworks—such as SOC 2, ISO 27001, GDPR, DPDP, or HIPAA—describe
        how we approach engineering work around them. They are not an assurance
        that your organisation will achieve or maintain compliance.{" "}
        <strong className="text-foreground/90">
          Consult qualified professionals before acting on anything you read
          here.
        </strong>
      </p>

      <h2>No guaranteed outcomes</h2>
      <p>
        Case studies, timelines, cost ranges, performance figures, and
        uptime or latency numbers describe particular past situations or
        illustrative scenarios. Software outcomes depend on scope, data
        quality, existing systems, team availability, and decisions outside our
        control.{" "}
        <strong className="text-foreground/90">
          Past results do not guarantee comparable results for your project.
        </strong>{" "}
        Any estimate given before a scoping exercise is indicative, not a quote.
      </p>

      <h2>Accuracy and currency</h2>
      <p>
        We make a reasonable effort to keep this site accurate and current, but
        we make no warranty that it is complete, correct, or up to date.
        Technical content ages: versions change, APIs are deprecated, and
        recommendations that held last year may not hold now. We may change or
        remove content at any time without notice.
      </p>

      <h2>External links and third-party content</h2>
      <p>
        Links to third-party sites, repositories, tools, or vendors are provided
        for convenience. We do not control them, do not endorse everything they
        publish, and are not responsible for their content, availability, or
        practices. Naming a technology or vendor is not a recommendation for
        your context.
      </p>

      <h2>Trademarks</h2>
      <p>
        Product names, logos, and brands referenced on this site are the
        property of their respective owners. Use of them is nominative—to
        identify the technologies we work with—and does not imply affiliation,
        sponsorship, or endorsement by those owners unless explicitly stated.
      </p>

      <h2>Forward-looking statements</h2>
      <p>
        Statements about our roadmap, capabilities, or plans reflect current
        intent at the time of writing. They are not commitments, and we may
        change direction without updating every page that mentioned it.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {company.legalName} accepts no
        liability for loss or damage arising from reliance on the content of
        this site. The limitations and exclusions set out in our{" "}
        <a href="/terms">Terms of Service</a> apply to this Disclaimer as well.
        Nothing here excludes liability that cannot lawfully be excluded.
      </p>

      <h2>Contact</h2>
      <p>
        If something on this site looks wrong or out of date, tell us:{" "}
        <a href={`mailto:${company.contactEmail}`}>{company.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
