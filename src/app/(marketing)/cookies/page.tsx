import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { company } from "@/content/company";
import { routeSeo } from "@/lib/route-seo";

export const metadata: Metadata = {
  ...routeSeo("/cookies"),
  title: "Cookie Policy",
  description: `How ${company.legalName} uses cookies, local storage, and similar technologies on this website.`,
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy" updated="April 5, 2026">
      <p>
        This Cookie Policy explains how {company.legalName} (“Sparus,” “we,”
        “us”) uses cookies and similar technologies when you visit our website.
        It supplements our{" "}
        <a href="/privacy">Privacy Policy</a>, which describes how we handle
        personal data more broadly.
      </p>

      <h2>What cookies are</h2>
      <p>
        Cookies are small text files a site stores on your device so it can
        recognise that device on later requests. We use the term loosely here to
        also cover{" "}
        <strong className="text-foreground/90">
          local storage, session storage, and pixels
        </strong>
        —different mechanisms, same basic question of what gets kept on your
        device and why.
      </p>

      <h2>What we actually use</h2>
      <p>
        This is a marketing site, not a logged-in product. We keep the footprint
        deliberately small.
      </p>
      <h3>Strictly necessary</h3>
      <p>
        Required for the site to load, stay secure, and balance traffic. These
        cannot be switched off through a consent banner because the site does
        not function without them. They include hosting and CDN-level cookies
        set by our infrastructure provider for routing and abuse prevention.
      </p>
      <h3>Preferences</h3>
      <p>
        If you set something that should persist between visits—such as reduced
        motion or a display preference—we may store that in local storage on
        your device. It stays on your device and is not sent to us as an
        identifier.
      </p>
      <h3>Analytics</h3>
      <p>
        We may use privacy-conscious analytics to understand which pages are
        read and where visitors come from, in aggregate. Where we deploy
        analytics that rely on non-essential cookies or that could identify you,{" "}
        <strong className="text-foreground/90">
          we ask for consent first in jurisdictions that require it
        </strong>{" "}
        (including the EU/UK under the ePrivacy rules).
      </p>
      <h3>Advertising</h3>
      <p>
        We do not run advertising cookies, cross-site tracking, or data-broker
        pixels on this site, and we do not sell or share personal information
        for cross-context behavioural advertising.
      </p>

      <h2>Third parties</h2>
      <p>
        Some cookies are set by services we rely on rather than by us directly—
        for example our hosting and CDN provider, embedded maps, or a video or
        scheduling widget if one appears on a page. Those providers act under
        their own policies. Following an outbound link (e.g. LinkedIn, GitHub)
        takes you to a site whose cookie practices we do not control.
      </p>

      <h2>How long they last</h2>
      <ul>
        <li>
          <strong className="text-foreground/90">Session cookies</strong> are
          deleted when you close your browser.
        </li>
        <li>
          <strong className="text-foreground/90">Persistent cookies</strong>{" "}
          remain until they expire or you delete them. Where we control the
          lifetime, we keep it to what the purpose needs—typically no more than
          twelve months for analytics.
        </li>
      </ul>

      <h2>Your choices</h2>
      <ul>
        <li>
          <strong className="text-foreground/90">Consent banner:</strong> where
          one is shown, you can accept or decline non-essential categories, and
          change your mind later from the same control.
        </li>
        <li>
          <strong className="text-foreground/90">Browser settings:</strong>{" "}
          every major browser lets you block or delete cookies and clear local
          storage. Blocking strictly necessary cookies may break parts of the
          site.
        </li>
        <li>
          <strong className="text-foreground/90">
            Global Privacy Control:
          </strong>{" "}
          we honour GPC signals where applicable law gives them effect.
        </li>
        <li>
          <strong className="text-foreground/90">Do Not Track:</strong> browsers
          send this inconsistently and there is no agreed standard for
          responding, so we do not rely on it. Use the controls above instead.
        </li>
      </ul>

      <h2>Changes</h2>
      <p>
        If we add or remove a category of cookie, we will update this page and
        the “Last updated” date above.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about cookies or a request to exercise your rights:{" "}
        <a href={`mailto:${company.privacyEmail}`}>{company.privacyEmail}</a>.
      </p>
    </LegalPage>
  );
}
