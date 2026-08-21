import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { company } from "@/content/company";
import { routeSeo } from "@/lib/route-seo";

export const metadata: Metadata = {
  ...routeSeo("/pricing"),
  title: "Pricing",
  description: `How ${company.legalName} prices software engineering, AI integration, and infrastructure engagements.`,
};

export default function PricingPage() {
  return (
    <LegalPage title="Pricing" updated="August 21, 2026">
      <p>
        {company.legalName} provides custom software engineering, AI
        integration, and cloud infrastructure services. Because every
        engagement differs in scope, technology, and timeline, we do not sell
        fixed off-the-shelf products at a standard shelf price. Pricing is
        quoted per engagement.
      </p>

      <h2>How we price</h2>
      <ul>
        <li>
          <strong className="text-foreground/90">Project / fixed scope:</strong>{" "}
          a written quote and statement of work (SOW) defining deliverables,
          milestones, and the total fee, agreed before work begins.
        </li>
        <li>
          <strong className="text-foreground/90">Retainer:</strong> a fixed
          monthly fee for an agreed engineering capacity, billed in advance each
          month.
        </li>
        <li>
          <strong className="text-foreground/90">Time &amp; materials:</strong>{" "}
          an agreed hourly or daily rate, billed against tracked, reported time.
        </li>
      </ul>

      <h2>Quotes, taxes, and currency</h2>
      <p>
        We provide a written quote after an initial scoping conversation. Fees
        are stated exclusive of applicable taxes; where Goods and Services Tax
        (GST) or other taxes apply, they are added as required under Indian law.
        Unless a quote states
        otherwise, amounts are in Indian Rupees (INR); where we invoice
        international clients in another currency, the quote will say so.
      </p>

      <h2>Invoicing and payment</h2>
      <p>
        Invoices are issued per the schedule in your SOW or order form
        (typically on project milestones, or monthly for retainers). Payment is
        due within the period stated on the invoice. Online payments made
        through this website are processed by our third-party payment provider;
        we do not store your full card or bank details.
      </p>

      <h2>Get a quote</h2>
      <p>
        For a scoped quote, contact{" "}
        <a href={`mailto:${company.contactEmail}`}>{company.contactEmail}</a> or
        call{" "}
        <a href={`tel:${company.phoneHref}`}>{company.phone}</a>. See our{" "}
        <a href="/refund">Refund &amp; Cancellation Policy</a> for how refunds
        and cancellations are handled.
      </p>
    </LegalPage>
  );
}
