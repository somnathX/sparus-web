import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { company } from "@/content/company";
import { routeSeo } from "@/lib/route-seo";

export const metadata: Metadata = {
  ...routeSeo("/acceptable-use"),
  title: "Acceptable Use Policy",
  description: `What is and is not allowed when using ${company.legalName}'s website, systems, and delivered services.`,
};

export default function AcceptableUsePage() {
  return (
    <LegalPage title="Acceptable Use Policy" updated="April 5, 2026">
      <p>
        This Acceptable Use Policy (“AUP”) describes conduct that is not
        permitted on {company.legalName}’s website, in communication with our
        team, or in connection with any environment, repository, or system we
        operate or hand over to you. It expands on the “Permitted use” section
        of our <a href="/terms">Terms of Service</a> and is incorporated into
        it. If a signed agreement contains its own use restrictions, the
        stricter of the two applies.
      </p>

      <h2>Who this applies to</h2>
      <p>
        Anyone who visits the site, contacts us, or is given access to systems
        we manage—including your employees, contractors, and anyone acting on
        your behalf.{" "}
        <strong className="text-foreground/90">
          You are responsible for use of any credentials issued to you.
        </strong>
      </p>

      <h2>Prohibited activity</h2>
      <h3>Security and integrity</h3>
      <ul>
        <li>
          Probing, scanning, or testing the vulnerability of our systems, or
          breaching authentication or access controls, without prior written
          authorisation defining scope.
        </li>
        <li>
          Accessing data, accounts, or environments you were not granted access
          to, or retaining access after an engagement ends.
        </li>
        <li>
          Introducing malware, backdoors, cryptominers, or any code intended to
          disrupt, degrade, or gain unauthorised access.
        </li>
        <li>
          Interfering with service to any user, host, or network—including
          deliberate overload, flooding, or amplification.
        </li>
      </ul>
      <h3>Automated access</h3>
      <ul>
        <li>
          Sending automated traffic beyond what a human could reasonably produce
          in the same period. Public search-engine crawlers that respect our
          robots rules are welcome.
        </li>
        <li>
          Scraping or mirroring substantial portions of the site to build a
          competing commercial offering, or to train a model for redistribution,
          without permission.
        </li>
        <li>
          Circumventing rate limits, access controls, or technical measures that
          restrict use.
        </li>
      </ul>
      <h3>Content and conduct</h3>
      <ul>
        <li>
          Using our forms, inboxes, or systems for spam, phishing, fraud, or
          any unlawful purpose.
        </li>
        <li>
          Submitting content that infringes intellectual property, violates
          privacy or export-control law, or that you have no right to share
          with us.
        </li>
        <li>
          Uploading regulated or highly sensitive data—payment card numbers,
          government identifiers, health records—into shared channels or
          environments not explicitly scoped and secured for it.
        </li>
        <li>
          Harassing, threatening, or abusing our team. We will end an engagement
          over this.
        </li>
      </ul>
      <h3>Misrepresentation</h3>
      <ul>
        <li>
          Impersonating any person or entity, or misstating your affiliation
          with one.
        </li>
        <li>
          Presenting yourself as authorised to bind an organisation when you are
          not.
        </li>
      </ul>

      <h2>Responsible disclosure</h2>
      <p>
        If you believe you have found a security issue in something we run,{" "}
        <strong className="text-foreground/90">
          report it before you dig further
        </strong>
        . Email{" "}
        <a href={`mailto:${company.contactEmail}`}>{company.contactEmail}</a>{" "}
        with enough detail to reproduce it, give us a reasonable window to
        respond, and do not access or exfiltrate data belonging to others. We
        will not pursue action against good-faith research that follows this
        paragraph.
      </p>

      <h2>Reporting a violation</h2>
      <p>
        To report abuse of our systems or content, contact{" "}
        <a href={`mailto:${company.contactEmail}`}>{company.contactEmail}</a>{" "}
        with the relevant URLs, timestamps, and any headers or logs you have.
      </p>

      <h2>Enforcement</h2>
      <p>
        Where activity threatens the security or availability of our systems or
        those of our clients, we may suspend access immediately and investigate
        after. Otherwise we will generally contact you first. Depending on
        severity we may rate-limit or block access, revoke credentials, remove
        content, suspend or terminate an engagement under the relevant
        agreement, preserve logs, and report unlawful activity to the
        authorities.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this AUP by posting a revised version and changing the
        “Last updated” date. Continued use after a change constitutes
        acceptance.
      </p>
    </LegalPage>
  );
}
