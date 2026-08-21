import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { company } from "@/content/company";
import { routeSeo } from "@/lib/route-seo";

export const metadata: Metadata = {
  ...routeSeo("/refund"),
  title: "Refund & Cancellation Policy",
  description: `How ${company.legalName} handles cancellations and refunds for its software and technology services.`,
};

export default function RefundPage() {
  return (
    <LegalPage title="Refund & Cancellation Policy" updated="August 21, 2026">
      <p>
        This policy explains how {company.legalName} (“Sparus,” “we,” “us”)
        handles cancellations and refunds for the professional services we
        provide. It applies to payments made to us, including online payments
        made through this website. Where you have signed a separate statement of
        work (SOW) or master services agreement with us, the terms of that
        signed agreement control for the services it covers.
      </p>

      <h2>Nature of our services</h2>
      <p>
        Sparus provides custom software engineering, AI integration, and cloud
        infrastructure services. These are professional services delivered
        against an agreed scope — not returnable physical goods. Fees are tied
        to work performed and to milestones or capacity reserved for your
        engagement.
      </p>

      <h2>Cancellation</h2>
      <ul>
        <li>
          <strong className="text-foreground/90">Before work begins:</strong>{" "}
          you may cancel an engagement before we start work by writing to us at{" "}
          <a href={`mailto:${company.contactEmail}`}>{company.contactEmail}</a>.
          Any advance you have paid, less costs already incurred on your behalf,
          is refundable.
        </li>
        <li>
          <strong className="text-foreground/90">After work begins:</strong>{" "}
          you may cancel with written notice as set out in your SOW. Fees for
          work already completed, and for milestones already delivered or in
          progress, are non-refundable. For monthly retainers, cancellation
          takes effect at the end of the notice period stated in your agreement,
          and the current month’s fee is not refundable once that month has
          begun.
        </li>
      </ul>

      <h2>Refunds</h2>
      <ul>
        <li>
          Refunds are considered only for amounts paid in advance for work that
          has not yet been performed, or for a duplicate or incorrect charge.
        </li>
        <li>
          Fees for services already delivered, and for pre-paid time or capacity
          already consumed, are non-refundable.
        </li>
        <li>
          If we are unable to deliver a service you have paid for and no
          alternative is agreed, we will refund the amount paid for the
          undelivered portion.
        </li>
      </ul>

      <h2>How to request a refund</h2>
      <p>
        Email{" "}
        <a href={`mailto:${company.contactEmail}`}>{company.contactEmail}</a>{" "}
        with your invoice or payment reference and the reason for the request.
        We aim to acknowledge refund requests within{" "}
        <strong className="text-foreground/90">3 business days</strong>.
      </p>

      <h2>Processing time</h2>
      <p>
        Approved refunds are made to the original payment method. Once approved,
        refunds are typically processed within{" "}
        <strong className="text-foreground/90">5–7 business days</strong>; the
        time for the amount to appear in your account depends on your bank or
        card issuer and our payment provider.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about cancellations or refunds:{" "}
        <a href={`mailto:${company.contactEmail}`}>{company.contactEmail}</a> or{" "}
        <a href={`tel:${company.phoneHref}`}>{company.phone}</a>.
      </p>
    </LegalPage>
  );
}
