"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, AlertCircle, MapPin } from "lucide-react";
import { company, offices } from "@/content/company";

type FieldErrors = Partial<Record<"name" | "email" | "details", string>>;

function validate(
  name: string,
  email: string,
  details: string
): FieldErrors {
  const e: FieldErrors = {};
  if (!name.trim()) e.name = "Name is required.";
  if (!email.trim()) e.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
    e.email = "Enter a valid email address.";
  if (!details.trim()) e.details = "Tell us about your project.";
  else if (details.trim().length < 20)
    e.details = "Please add a bit more detail (at least 20 characters).";
  return e;
}

const inputClass =
  "w-full border-0 border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const next = validate(name, email, details);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border bg-paper px-5 py-24 text-ink sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Contact
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.05] sm:text-5xl">
              Say what you&apos;re building—not what you think we want to hear.
            </h2>
            <p className="mt-8 text-sm leading-relaxed text-ink/65">
              We reply within one business day. If it&apos;s not a fit,
              we&apos;ll say so and try to point you somewhere useful.
            </p>
            <div className="mt-10 space-y-6 border border-ink/10 bg-ink/[0.03] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                Where we work
              </p>
              <ul className="space-y-4 text-sm text-ink/75">
                {offices.map((o) => (
                  <li key={o.id}>
                    <span className="font-medium text-ink">
                      {o.city}, {o.region}
                    </span>
                    <span className="text-ink/50"> — </span>
                    <span className="text-ink/65">{o.role}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-accent"
              >
                <MapPin className="h-3.5 w-3.5" />
                Address &amp; hours
              </Link>
              <a
                href={`mailto:${company.contactEmail}`}
                className="block font-mono text-[11px] text-ink/80 hover:text-accent"
              >
                {company.contactEmail}
              </a>
            </div>
            <div className="mt-10 hidden border-l-2 border-accent pl-6 lg:block">
              <p className="font-heading text-lg italic leading-snug text-ink/80">
                The best briefs read like a memo, not a pitch deck.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <div className="border border-ink/10 bg-background/5 p-10 sm:p-12">
                <p className="font-heading text-2xl font-bold text-ink">
                  Received.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  This demo doesn&apos;t send mail yet—hook up your API route or
                  form backend to capture leads.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-10" noValidate>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name)
                        setErrors((o) => ({ ...o, name: undefined }));
                    }}
                    className={inputClass}
                    placeholder="Alex Rivera"
                  />
                  {errors.name && (
                    <p className="mt-2 flex items-center gap-1 font-mono text-[11px] text-accent">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email)
                        setErrors((o) => ({ ...o, email: undefined }));
                    }}
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="mt-2 flex items-center gap-1 font-mono text-[11px] text-accent">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-details"
                    className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50"
                  >
                    Project
                  </label>
                  <textarea
                    id="contact-details"
                    name="details"
                    rows={5}
                    value={details}
                    onChange={(e) => {
                      setDetails(e.target.value);
                      if (errors.details)
                        setErrors((o) => ({ ...o, details: undefined }));
                    }}
                    className={`${inputClass} resize-y pt-4`}
                    placeholder="Problem, constraints, timeline, what success looks like…"
                  />
                  {errors.details && (
                    <p className="mt-2 flex items-center gap-1 font-mono text-[11px] text-accent">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      {errors.details}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 bg-ink px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-paper transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  Send
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <p className="font-mono text-[9px] leading-relaxed text-ink/45">
                  By submitting, you agree we may process what you send to
                  respond to your inquiry, as described in our{" "}
                  <Link
                    href="/privacy"
                    className="text-ink/60 underline underline-offset-2 hover:text-accent"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
