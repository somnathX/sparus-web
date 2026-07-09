"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { company } from "@/content/company";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const NAV_SECTIONS = ["services", "who", "about", "offices", "contact"] as const;

const STACK = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Python",
  "Go",
  "PostgreSQL",
  "Redis",
  "GraphQL",
  "Kubernetes",
  "Docker",
  "AWS",
  "GCP",
  "Azure",
  "Terraform",
  "CI/CD",
  "Observability",
  "RAG",
  "Agents",
];

const SERVICES = [
  {
    code: "/software",
    title: "Software development",
    body: "Apps, APIs, and internal tools. We focus on tests, observability, and documentation so your team can own the code long-term — no handover cliff, no mystery modules.",
    chips: ["Web apps", "APIs", "Internal tools", "Testing", "Documentation"],
  },
  {
    code: "/ai",
    title: "AI integration",
    body: "Retrieval, agents, and ML pipelines tied to your data and compliance needs. Includes evaluation, safety, and rollback — not just slideware.",
    chips: ["RAG", "Agents", "ML pipelines", "Evaluation", "Safety & rollback"],
  },
  {
    code: "/infra",
    title: "Infrastructure & DevOps",
    body: "Cloud, containers, CI/CD, and automation. Cost-aware, observable, and built for real incidents at 3 a.m.",
    chips: ["Cloud", "Kubernetes", "CI/CD", "Automation", "Observability"],
  },
];

const OPS_LINES: [string, string][] = [
  ["pr", "$ git push origin main"],
  ["ok", "✓ ci — 412 tests passed in 2m08s"],
  ["go", "→ build api@v2.14.3 (docker, 84s)"],
  ["go", "→ deploy rolling update · pods 3/3"],
  ["ok", "✓ healthcheck /ready 200 in 41ms"],
  ["pr", "● uptime 99.98% — 90d window"],
  ["pr", "$ terraform plan"],
  ["ok", "✓ no changes. infrastructure up-to-date"],
  ["go", "→ canary 5% traffic · error Δ +0.00%"],
  ["ok", "✓ promote canary → stable"],
  ["pr", "$ kubectl top pods — all nominal"],
  ["ok", "✓ alerts firing: 0 · silenced: 2"],
  ["go", "→ backup snapshot pg-primary… done"],
  ["ok", "✓ docs & runbook updated — handover ready"],
];

function tzTime(offsetMin: number) {
  const now = new Date();
  return new Date(now.getTime() + (now.getTimezoneOffset() + offsetMin) * 60000);
}

function fmtHms(d: Date) {
  return [d.getHours(), d.getMinutes(), d.getSeconds()]
    .map((n) => String(n).padStart(2, "0"))
    .join(":");
}

function ClockSvg({ tz }: { tz: number }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const digiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const g = svg.querySelector(".ticks");
    if (g && !g.childElementCount) {
      for (let i = 0; i < 12; i++) {
        const a = (i * 30 * Math.PI) / 180;
        const r1 = i % 3 === 0 ? 40 : 43;
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", String(50 + Math.sin(a) * r1));
        line.setAttribute("y1", String(50 - Math.cos(a) * r1));
        line.setAttribute("x2", String(50 + Math.sin(a) * 46));
        line.setAttribute("y2", String(50 - Math.cos(a) * 46));
        g.appendChild(line);
      }
    }

    const tick = () => {
      const t = tzTime(tz);
      const s = t.getSeconds();
      const m = t.getMinutes() + s / 60;
      const h = (t.getHours() % 12) + m / 60;
      svg.querySelector(".h")?.setAttribute("transform", `rotate(${h * 30} 50 50)`);
      svg.querySelector(".m")?.setAttribute("transform", `rotate(${m * 6} 50 50)`);
      svg.querySelector(".s")?.setAttribute("transform", `rotate(${s * 6} 50 50)`);
      if (digiRef.current) digiRef.current.textContent = fmtHms(t);
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, [tz]);

  return (
    <div>
      <svg ref={svgRef} className="ed-clock" viewBox="0 0 100 100" aria-hidden>
        <circle cx="50" cy="50" r="47" />
        <g className="ticks" />
        <line className="h" x1="50" y1="50" x2="50" y2="28" />
        <line className="m" x1="50" y1="50" x2="50" y2="18" />
        <line className="s" x1="50" y1="54" x2="50" y2="14" />
        <circle className="pin" cx="50" cy="50" r="3" />
      </svg>
      <div ref={digiRef} className="ed-digi">
        --:--:--
      </div>
    </div>
  );
}

type EditorialHeaderProps = {
  enableSpy?: boolean;
};

export function EditorialHeader({ enableSpy = false }: EditorialHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [clkIN, setClkIN] = useState("--:--:--");
  const [clkAE, setClkAE] = useState("--:--:--");
  const [clkUTC, setClkUTC] = useState("--:--:--");

  useEffect(() => {
    const tick = () => {
      setClkIN(fmtHms(tzTime(330)));
      setClkAE(fmtHms(tzTime(240)));
      setClkUTC(fmtHms(tzTime(0)));
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    if (!enableSpy) return;
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });
    return () => spy.disconnect();
  }, [enableSpy]);

  return (
    <header className="ed-header">
      <div className="ed-status" aria-hidden>
        <div className="ed-status-in">
          <span className="ed-op">All systems operational</span>
          <span className="ed-hide-m">
            UDAIPUR <b style={{ fontWeight: 400 }}>{clkIN}</b> IST
          </span>
          <span className="ed-hide-m">
            DUBAI <b style={{ fontWeight: 400 }}>{clkAE}</b> GST
          </span>
          <span className="ed-right">
            <span>
              UTC <b style={{ fontWeight: 400 }}>{clkUTC}</b>
            </span>
          </span>
        </div>
      </div>
      <div className="ed-nav-in">
        <Link href="/#home" className="ed-logo">
          Sparus<em>.</em>
        </Link>
        <nav className={`ed-nav-links${menuOpen ? " open" : ""}`}>
          <a
            href="#services"
            className={active === "services" ? "ed-active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#who"
            className={active === "who" ? "ed-active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Clients
          </a>
          <a
            href="#about"
            className={active === "about" ? "ed-active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            How we work
          </a>
          <a
            href="#offices"
            className={active === "offices" ? "ed-active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Offices
          </a>
          <a href="#contact" className="ed-nav-go" onClick={() => setMenuOpen(false)}>
            Start a conversation
          </a>
        </nav>
        <button
          type="button"
          className={`ed-burger${menuOpen ? " open" : ""}`}
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export function EditorialFooter() {
  return (
    <footer className="ed-foot">
      <div className="ed-wrap ed-foot-in">
        <span className="ed-logo ed-disp">
          Sparus<em style={{ fontStyle: "normal", color: "var(--ed-cobalt)" }}>.</em>
        </span>
        <span>
          © {new Date().getFullYear()} {company.legalName} · Udaipur / Dubai
        </span>
        <span>Built to work in production.</span>
      </div>
    </footer>
  );
}

export function SubpageHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clkIN, setClkIN] = useState("--:--:--");
  const [clkAE, setClkAE] = useState("--:--:--");
  const [clkUTC, setClkUTC] = useState("--:--:--");

  useEffect(() => {
    const tick = () => {
      setClkIN(fmtHms(tzTime(330)));
      setClkAE(fmtHms(tzTime(240)));
      setClkUTC(fmtHms(tzTime(0)));
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <header className="ed-header">
      <div className="ed-status" aria-hidden>
        <div className="ed-status-in">
          <span className="ed-op">All systems operational</span>
          <span className="ed-hide-m">
            UDAIPUR <b style={{ fontWeight: 400 }}>{clkIN}</b> IST
          </span>
          <span className="ed-hide-m">
            DUBAI <b style={{ fontWeight: 400 }}>{clkAE}</b> GST
          </span>
          <span className="ed-right">
            <span>
              UTC <b style={{ fontWeight: 400 }}>{clkUTC}</b>
            </span>
          </span>
        </div>
      </div>
      <div className="ed-nav-in">
        <Link href="/" className="ed-logo">
          Sparus<em>.</em>
        </Link>
        <nav className={`ed-nav-links${menuOpen ? " open" : ""}`}>
          <Link href="/#services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/#who" onClick={() => setMenuOpen(false)}>
            Clients
          </Link>
          <Link href="/#about" onClick={() => setMenuOpen(false)}>
            How we work
          </Link>
          <Link href="/#offices" onClick={() => setMenuOpen(false)}>
            Offices
          </Link>
          <Link href="/#contact" className="ed-nav-go" onClick={() => setMenuOpen(false)}>
            Start a conversation
          </Link>
        </nav>
        <button
          type="button"
          className={`ed-burger${menuOpen ? " open" : ""}`}
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export function HomeExperience() {
  const reduced = useReducedMotion();
  const opsRef = useRef<HTMLDivElement>(null);
  const opsIdx = useRef(0);
  const opsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const rv = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            rv.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".ed-rv,.ed-how-item").forEach((el) => rv.observe(el));
    return () => rv.disconnect();
  }, []);

  useEffect(() => {
    const body = opsRef.current;
    if (!body) return;

    if (reduced) {
      OPS_LINES.slice(0, 9).forEach(([cls, txt]) => {
        const d = document.createElement("div");
        d.className = "ln";
        d.innerHTML = `<span class="${cls}">${txt}</span>`;
        body.appendChild(d);
      });
      return;
    }

    const opsBody = body;

    function typeLine() {
      const [cls, txt] = OPS_LINES[opsIdx.current % OPS_LINES.length]!;
      opsIdx.current++;
      const d = document.createElement("div");
      d.className = "ln";
      const span = document.createElement("span");
      span.className = cls;
      const caret = document.createElement("span");
      caret.className = "ed-caret";
      d.appendChild(span);
      d.appendChild(caret);
      opsBody.appendChild(d);
      while (opsBody.children.length > 9) opsBody.removeChild(opsBody.firstChild!);

      let i = 0;
      function step() {
        if (i <= txt.length) {
          span.textContent = txt.slice(0, i);
          i++;
          opsTimer.current = setTimeout(step, 14 + Math.random() * 22);
        } else {
          caret.remove();
          opsTimer.current = setTimeout(typeLine, 500 + Math.random() * 900);
        }
      }
      step();
    }

    typeLine();
    return () => {
      if (opsTimer.current) clearTimeout(opsTimer.current);
    };
  }, [reduced]);

  return (
    <>
      <EditorialHeader enableSpy />

      <section id="home" className="ed-hero">
        <div className="ed-wrap ed-hero-in">
          <div>
            <div className="ed-tag ed-hero-tag">
              Sparus Technology — Product-minded engineering
            </div>
            <h1 className="ed-disp">
              <span className="row">
                <i>Software that</i>
              </span>
              <span className="row">
                <i>
                  works in <span className="blue">production,</span>
                </i>
              </span>
              <span className="row">
                <i>not just in demos.</i>
              </span>
            </h1>
            <p className="ed-hero-sub">
              We build software, integrate AI where it actually helps, and set up
              the infrastructure underneath so things run reliably — including at
              3 a.m., when it counts.
            </p>
            <div className="ed-hero-cta">
              <a className="ed-btn ed-btn-ink" href="#contact">
                Start a conversation
              </a>
              <a className="ed-btn ed-btn-line" href="#services">
                What we do ↓
              </a>
            </div>
          </div>
          <div className="ed-ops" aria-hidden>
            <div className="ed-ops-head">
              <span className="sq f" />
              <span className="sq" />
              <span className="sq" />
              <b>sparus-ops — production</b>
            </div>
            <div ref={opsRef} className="ed-ops-body" />
          </div>
        </div>
      </section>

      <section id="services" className="ed-sec">
        <div className="ed-wrap">
          <div className="ed-sec-head">
            <div>
              <div className="ed-tag ed-rv">What we do</div>
              <h2 className="ed-disp ed-rv ed-d1" style={{ marginTop: 16 }}>
                Three disciplines,
                <br />
                one standard.
              </h2>
            </div>
            <p className="ed-sec-note ed-rv ed-d2">
              Everything we ship comes with tests, observability and documentation
              — so your team can own it long-term.
            </p>
          </div>

          {SERVICES.map((s, i) => (
            <div
              key={s.code}
              className={`ed-svc ed-rv${i > 0 ? ` ed-d${i}` : ""}`}
              data-svc
            >
              <div
                className="ed-svc-top"
                onClick={(e) => {
                  const row = e.currentTarget.parentElement;
                  if (matchMedia("(hover: none)").matches) {
                    row?.classList.toggle("open");
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.currentTarget.parentElement?.classList.toggle("open");
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <span className="ed-svc-code">{s.code}</span>
                <h3>{s.title}</h3>
                <span className="ed-svc-x" aria-hidden />
              </div>
              <div className="ed-svc-more">
                <div className="ed-svc-more-in">
                  <div className="ed-svc-detail">
                    <span />
                    <div>
                      <p>{s.body}</p>
                      <div className="ed-svc-chips">
                        {s.chips.map((c) => (
                          <em key={c}>{c}</em>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="who" className="ed-sec">
        <div className="ed-wrap">
          <div className="ed-sec-head">
            <div>
              <div className="ed-tag ed-rv">Who we work with</div>
              <h2 className="ed-disp ed-rv ed-d1" style={{ marginTop: 16 }}>
                Built for teams
                <br />
                under real pressure.
              </h2>
            </div>
            <p className="ed-sec-note ed-rv ed-d2">
              Scale-ups modernizing their stack, enterprises with legacy systems,
              and teams that need senior engineers without hiring a department
              overnight.
            </p>
          </div>
          <div className="ed-who-grid ed-rv ed-d1">
            <div className="ed-who">
              <span className="ed-mono">01 — Scale</span>
              <h3>High-growth teams</h3>
              <p>
                Ship fast without breaking architecture every six months. We help
                you grow the system at the pace you grow the company.
              </p>
            </div>
            <div className="ed-who">
              <span className="ed-mono">02 — Modernize</span>
              <h3>Enterprises modernizing</h3>
              <p>
                Gradual migrations, ERP and CRM integrations, and no big-bang
                outages. Legacy gets replaced piece by piece, in daylight.
              </p>
            </div>
            <div className="ed-who">
              <span className="ed-mono">03 — Comply</span>
              <h3>Regulated environments</h3>
              <p>
                Security, logging, access controls, and audit-friendly practices
                from the first commit — not retrofitted before the audit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="ed-sec">
        <div className="ed-wrap">
          <div className="ed-sec-head">
            <div>
              <div className="ed-tag ed-rv">How we work</div>
              <h2 className="ed-disp ed-rv ed-d1" style={{ marginTop: 16 }}>
                No delivery pods.
                <br />
                No theater.
              </h2>
            </div>
          </div>
          <div className="ed-how-grid">
            <div>
              <div className="ed-how-list ed-rv">
                <div className="ed-how-item">
                  <span className="mk" />
                  <p>
                    Based in <b>Udaipur, India</b> (HQ) with a regional office in{" "}
                    <b>Dubai, UAE</b> — working with clients remotely, worldwide.
                  </p>
                </div>
                <div className="ed-how-item" style={{ animationDelay: "0.1s" }}>
                  <span className="mk" />
                  <p>
                    Scheduled overlap across time zones for stand-ups, reviews, and
                    incidents.
                  </p>
                </div>
                <div className="ed-how-item" style={{ animationDelay: "0.2s" }}>
                  <span className="mk" />
                  <p>
                    Every engagement ends with <b>code, runbooks, and context</b>{" "}
                    your team can inherit.
                  </p>
                </div>
                <div className="ed-how-item" style={{ animationDelay: "0.3s" }}>
                  <span className="mk" />
                  <p>
                    Direct communication with people who write and review code —{" "}
                    <b>no black-box delivery pods.</b>
                  </p>
                </div>
              </div>
              <div className="ed-asset ed-rv ed-d2">
                <Image
                  src={company.teamPhotoSrc}
                  alt={company.teamPhotoAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 980px) 100vw, 55vw"
                  quality={85}
                />
              </div>
            </div>
            <div className="ed-values ed-rv ed-d1">
              <div className="ed-val">
                <h3>
                  Outcomes <span>over theater</span>
                </h3>
                <p>Shipped value, uptime, and flexibility — not vanity metrics.</p>
              </div>
              <div className="ed-val">
                <h3>
                  Direct <span>lines</span>
                </h3>
                <p>You talk to engineers, not layers of account managers.</p>
              </div>
              <div className="ed-val">
                <h3>
                  Pace you can <span>sustain</span>
                </h3>
                <p>
                  Automation and docs, so you&apos;re not paying forever for one
                  heroic launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="offices" className="ed-sec">
        <div className="ed-wrap">
          <div className="ed-sec-head">
            <div>
              <div className="ed-tag ed-rv">Offices</div>
              <h2 className="ed-disp ed-rv ed-d1" style={{ marginTop: 16 }}>
                Two clocks,
                <br />
                one team.
              </h2>
            </div>
            <p className="ed-sec-note ed-rv ed-d2">
              Headquartered in Udaipur, with client engagement running out of Dubai.
              The clocks are live — someone usually is too.
            </p>
          </div>
          <div className="ed-off-grid">
            <div className="ed-office ed-rv">
              <div>
                <span className="ed-mono">HQ — India</span>
                <h3>Udaipur, Rajasthan</h3>
                <p>
                  Headquarters — product engineering &amp; delivery.
                  <br />
                  Industrial growth corridor, Madri–Bhuwana link road vicinity,
                  Udaipur, Rajasthan 313031.
                </p>
                <div className="hours">MON–FRI · 10:00–19:00 IST</div>
              </div>
              <ClockSvg tz={330} />
            </div>
            <div className="ed-office ed-rv ed-d1">
              <div>
                <span className="ed-mono">Regional — UAE</span>
                <h3>Dubai</h3>
                <p>
                  Client engagement &amp; regional operations.
                  <br />
                  Business Bay, Dubai, United Arab Emirates.
                </p>
                <div className="hours">MON–FRI · 10:00–19:00 GST</div>
              </div>
              <ClockSvg tz={240} />
            </div>
          </div>

          <div className="ed-stack-box ed-rv ed-d2" style={{ marginTop: 28 }}>
            <div className="ed-stack-head">
              <span>{"// tech we use"}</span>
              <span>stack.txt</span>
            </div>
            <div className="ed-stack-body">
              {STACK.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="ed-sec">
        <div className="ed-wrap">
          <div className="ed-tag ed-rv">Contact</div>
          <h2
            className="ed-disp ed-rv ed-d1"
            style={{ marginTop: 16, color: "var(--ed-paper)" }}
          >
            Tell us what&apos;s breaking.
            <br />
            Or what you want to build.
          </h2>
          <a
            className="ed-contact-big ed-rv ed-d2"
            href={`mailto:${company.contactEmail}`}
          >
            {company.contactEmail.replace("@", "@\u200b")}
          </a>
          <div className="ed-contact-rows ed-rv ed-d2">
            <div className="ed-crow">
              <span className="k">Careers</span>
              <a href={`mailto:${company.careersEmail}`}>{company.careersEmail}</a>
            </div>
            <div className="ed-crow">
              <span className="k">Privacy</span>
              <a href={`mailto:${company.privacyEmail}`}>{company.privacyEmail}</a>
            </div>
            {company.linkedinUrl && (
              <div className="ed-crow">
                <span className="k">LinkedIn</span>
                <a
                  href={company.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /company/sparus-tech ↗
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <EditorialFooter />
    </>
  );
}
