import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { company } from "@/content/company";
import { routeSeo } from "@/lib/route-seo";

export const metadata: Metadata = {
  ...routeSeo("/privacy"),
  title: "Privacy Policy",
  description: `How ${company.legalName} collects, uses, and protects personal data.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="April 5, 2026">
      <p>
        {company.legalName} (“Sparus,” “we,” “us,” or “our”) respects your
        privacy. This policy describes how we handle information when you visit
        our website, contact us, or otherwise interact with us from{" "}
        <strong className="text-foreground/90">India</strong> or elsewhere.
      </p>

      <h2>Who we are</h2>
      <p>
        {company.legalName} is based in Udaipur, Rajasthan, India. For
        privacy-specific requests, contact{" "}
        <a href={`mailto:${company.privacyEmail}`}>{company.privacyEmail}</a>.
      </p>

      <h2>Information we collect</h2>
      <h3>You provide directly</h3>
      <ul>
        <li>
          <strong className="text-foreground/90">Contact &amp; lead forms:</strong>{" "}
          name, email, company, project details, and anything else you choose
          to include.
        </li>
        <li>
          <strong className="text-foreground/90">Email &amp; calendar:</strong>{" "}
          correspondence when you write to addresses published on this site.
        </li>
        <li>
          <strong className="text-foreground/90">Recruiting:</strong> if you
          apply for a role, resume/CV, portfolio links, and screening answers.
        </li>
      </ul>
      <h3>Collected automatically</h3>
      <ul>
        <li>
          <strong className="text-foreground/90">Usage &amp; device data:</strong>{" "}
          IP address, browser type, approximate region (derived from IP), pages
          viewed, and timestamps—typically through server logs or analytics
          tools we configure.
        </li>
        <li>
          <strong className="text-foreground/90">Cookies &amp; similar tech:</strong>{" "}
          see the Cookies section below.
        </li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>Respond to inquiries and operate sales conversations.</li>
        <li>
          Improve the website, measure campaign performance, and understand
          aggregate traffic patterns.
        </li>
        <li>Secure our systems, detect abuse, and comply with legal obligations.</li>
        <li>Hire and communicate with candidates when you apply for roles.</li>
      </ul>
      <p>
        We do not sell your personal information in the conventional sense of
        selling lists to data brokers. If we use tools that process data on our
        behalf (e.g., email or hosting), we require them to protect it
        appropriately.
      </p>

      <h2>Legal bases (where applicable)</h2>
      <p>
        Depending on your jurisdiction, we may rely on consent (e.g., certain
        cookies), contractual necessity (delivering services you requested),
        legitimate interests (securing the site, understanding aggregate
        analytics), or legal obligation.
      </p>

      <h2>Cookies &amp; analytics</h2>
      <p>
        We may use cookies or local storage for essential site operation,
        preferences, or analytics. You can control cookies through your browser
        settings. If we deploy non-essential cookies in a jurisdiction that
        requires it, we will surface a consent mechanism before they run.
      </p>

      <h2>Retention</h2>
      <p>
        We keep information only as long as needed for the purposes above,
        unless a longer period is required by law, dispute resolution, or
        contract. Lead and email threads are typically retained for the life of
        the business relationship plus a reasonable buffer unless you ask us to
        delete sooner (subject to exceptions).
      </p>

      <h2>Sharing</h2>
      <p>We may share data with:</p>
      <ul>
        <li>
          <strong className="text-foreground/90">Service providers</strong> who
          host the site, send email, or run analytics—under confidentiality and
          processing terms.
        </li>
        <li>
          <strong className="text-foreground/90">Professional advisors</strong>{" "}
          (lawyers, accountants) where necessary.
        </li>
        <li>
          <strong className="text-foreground/90">Authorities</strong> when
          required by law or to protect rights and safety.
        </li>
        <li>
          <strong className="text-foreground/90">Business transfers</strong> in
          connection with a merger, acquisition, or asset sale, with notice where
          required.
        </li>
      </ul>

      <h2>International transfers</h2>
      <p>
        We are headquartered in India. Your information may be processed in
        India and in the data centers of subprocessors we use (which may be
        located in other countries). Where required, we implement appropriate
        safeguards such as standard contractual clauses or equivalent
        mechanisms.
      </p>

      <h2>Your choices &amp; rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct,
        delete, or port your data, or to object to or restrict certain
        processing. Email{" "}
        <a href={`mailto:${company.privacyEmail}`}>{company.privacyEmail}</a>{" "}
        to exercise these rights. We may need to verify your identity before
        responding.
      </p>

      <h2>Children</h2>
      <p>
        This site is not directed at children under 16, and we do not
        knowingly collect their personal data.
      </p>

      <h2>Security</h2>
      <p>
        We use administrative, technical, and organizational measures
        appropriate to the nature of the data. No method of transmission over
        the Internet is completely secure.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy from time to time. The “Last updated” date at
        the top will change when we do; material changes may be announced more
        prominently.
      </p>
    </LegalPage>
  );
}
