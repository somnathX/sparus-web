import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms and conditions for using ${company.legalName}'s website and introductory services.`,
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="April 5, 2026">
      <p>
        These Terms of Service (“Terms”) govern your access to and use of the
        websites and marketing materials operated by {company.legalName}{" "}
        (“Sparus,” “we,” “us”). By using the site, you agree to these Terms. If
        you engage us under a separate statement of work, master services
        agreement, or order form, that contract controls for the services it
        covers, and these Terms apply only where they do not conflict.
      </p>

      <h2>Who we are</h2>
      <p>
        Sparus delivers software engineering, AI integration, and infrastructure
        work from our studio in{" "}
        <strong className="text-foreground/90">Udaipur, Rajasthan, India</strong>
        . Contact:{" "}
        <a href={`mailto:${company.contactEmail}`}>{company.contactEmail}</a>.
      </p>

      <h2>Permitted use</h2>
      <p>You may use the site to learn about Sparus and to contact us lawfully.</p>
      <p>You agree not to:</p>
      <ul>
        <li>
          Probe, scan, or test the vulnerability of our systems, or breach
          security or authentication measures.
        </li>
        <li>
          Use automated means to access the site in a way that sends more
          request traffic than a human could reasonably produce in the same
          period, except public search engine crawlers that respect robots rules.
        </li>
        <li>
          Copy, scrape, or mirror substantial portions of the site for a
          competing commercial offering without permission.
        </li>
        <li>
          Misrepresent your affiliation with any person or entity, or use the
          site for phishing, spam, or unlawful purposes.
        </li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        The site’s design, text, graphics, logos, and compilation are owned by
        Sparus or our licensors and are protected by intellectual property laws.
        You receive a limited, non-exclusive, non-transferable license to view
        and download materials temporarily for personal or internal business
        evaluation—not to redistribute or create derivative marketing without
        consent.
      </p>
      <p>
        Unless a written agreement says otherwise,{" "}
        <strong className="text-foreground/90">
          custom deliverables from paid engagements belong to you only as
          stated in your contract
        </strong>
        . This site does not by itself grant a license to our proprietary
        frameworks or tools.
      </p>

      <h2>Third-party links</h2>
      <p>
        The site may link to third-party sites (e.g., GitHub, LinkedIn). We are
        not responsible for their content or practices.
      </p>

      <h2>Disclaimers</h2>
      <p>
        The site and its content are provided{" "}
        <strong className="text-foreground/90">“as is”</strong> and{" "}
        <strong className="text-foreground/90">“as available.”</strong> To the
        fullest extent permitted by law, we disclaim warranties of
        merchantability, fitness for a particular purpose, and
        non-infringement. Case studies, timelines, and technical descriptions
        are illustrative—not a guarantee of future results for your project.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by applicable law, Sparus and its
        affiliates, officers, and employees will not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or for loss of
        profits, data, or goodwill, arising from your use of the site or
        inability to use it.
      </p>
      <p>
        Our aggregate liability for claims arising out of or relating to the
        site (excluding liability that cannot be limited by law) is limited to{" "}
        <strong className="text-foreground/90">
          the greater of INR 8,500 or the amount you paid Sparus specifically
          for access to premium web content in the twelve months before the claim
        </strong>{" "}
        — which will typically be zero for marketing-site visitors.
      </p>

      <h2>Indemnity</h2>
      <p>
        You will defend and indemnify Sparus against any third-party claim
        arising from your misuse of the site, your violation of these Terms, or
        your violation of others’ rights—subject to applicable law and our right
        to control our own defense where required.
      </p>

      <h2>Governing law &amp; disputes</h2>
      <p>
        These Terms are governed by the{" "}
        <strong className="text-foreground/90">
          laws of India, without regard to conflict-of-law rules
        </strong>
        , unless mandatory consumer protections in your country say otherwise.
        Courts in <strong className="text-foreground/90">Udaipur, Rajasthan</strong>{" "}
        shall have exclusive jurisdiction for disputes solely related to use of
        this marketing site, subject to any non-waivable rights you may have.
      </p>
      <p>
        If you negotiate a separate services contract with us, that executed
        agreement may specify different governing law or dispute resolution—we
        honor what is signed.
      </p>

      <h2>Changes</h2>
      <p>
        We may modify these Terms by posting an updated version and changing the
        “Last updated” date. Continued use after changes constitutes acceptance
        of the revised Terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms:{" "}
        <a href={`mailto:${company.contactEmail}`}>{company.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
