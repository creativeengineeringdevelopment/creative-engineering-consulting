import type { Metadata } from "next";
import Link from "next/link";
import { BookingPrimaryLink } from "@/components/BookingPrimaryLink";
import {
  PUBLIC_BOOKING_URL,
  PUBLIC_CONTACT_EMAIL,
  ROUTES,
  SITE,
  buttonSecondaryClass,
  systemAuditMailto,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request an Operating System Diagnostic or ask about execution systems for your operations.",
  openGraph: {
    title: `Contact · ${SITE.name}`,
    description:
      "Book a structured operating-system diagnostic or start a conversation about how your operations execute.",
  },
};

export default function ContactPage() {
  const mailto = systemAuditMailto();
  const hasChannel = Boolean(PUBLIC_BOOKING_URL || mailto);
  const showDevHint =
    process.env.NODE_ENV !== "production" && !hasChannel;

  return (
    <main id="main-content">
      <section
        className="relative border-b border-zinc-900"
        aria-labelledby="contact-hero-heading"
      >
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:px-8">
          <div className="max-w-3xl space-y-8">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
              Contact
            </p>
            <h1
              id="contact-hero-heading"
              className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl"
            >
              Book an Operating System Diagnostic
            </h1>
            <p className="text-lg leading-relaxed text-zinc-400 sm:text-xl">
              Tell us which workflow matters most and where execution breaks today. We
              reply with timing, prep, and whether the diagnostic is the right next step.
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-500">
              This is not a sales call—it is a structured look at how your operations
              actually run. Read the{" "}
              <Link
                href={ROUTES.audit}
                className="text-zinc-300 underline decoration-zinc-600 underline-offset-4 transition hover:text-zinc-100"
              >
                Operating System Diagnostic overview
              </Link>{" "}
              first if you want the full picture of what you get.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-900" aria-labelledby="prep-heading">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
            <div>
              <h2
                id="prep-heading"
                className="font-serif text-2xl font-medium tracking-tight text-zinc-50"
              >
                What to include
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                A few specifics help us respond with a useful next step instead of a
                generic reply.
              </p>
            </div>
            <ul className="space-y-4 border-l border-zinc-800 pl-8 text-sm leading-relaxed text-zinc-400">
              <li>
                <span className="font-medium text-zinc-200">Company</span> and what you
                sell or deliver
              </li>
              <li>
                <span className="font-medium text-zinc-200">One workflow</span> you
                want examined end-to-end (from trigger to done)
              </li>
              <li>
                <span className="font-medium text-zinc-200">Where it hurts</span>—
                delays, rework, dropped handoffs, or manual glue
              </li>
              <li>
                <span className="font-medium text-zinc-200">Time zone</span> and any
                scheduling constraints
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950" aria-labelledby="contact-cta-heading">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="rounded-sm border border-zinc-800/90 bg-gradient-to-br from-zinc-900/50 to-zinc-950 px-8 py-12 sm:px-10 sm:py-14">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="contact-cta-heading"
                className="font-serif text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl"
              >
                Start the conversation
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                {PUBLIC_BOOKING_URL
                  ? "Pick a time that works for you. We will confirm prep and focus areas before the diagnostic."
                  : mailto
                    ? "Send one email from your work address—we will follow up with availability and prep."
                    : "If we are already connected, continue the thread you have with us and mention you want an Operating System Diagnostic. Otherwise, ask for an introduction—we take diagnostics by fit, not volume."}
              </p>

              {showDevHint ? (
                <p className="mt-6 rounded-sm border border-dashed border-amber-900/50 bg-amber-950/20 px-4 py-3 text-left font-mono text-xs leading-relaxed text-amber-200/90">
                  Local dev: add{" "}
                  <code className="text-amber-100/90">NEXT_PUBLIC_BOOKING_URL</code>{" "}
                  and/or{" "}
                  <code className="text-amber-100/90">NEXT_PUBLIC_CONTACT_EMAIL</code>{" "}
                  (see <code className="text-amber-100/90">.env.example</code>).
                </p>
              ) : null}

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                {hasChannel ? (
                  <BookingPrimaryLink>
                    {PUBLIC_BOOKING_URL ? "Schedule a call" : "Email to book"}
                  </BookingPrimaryLink>
                ) : null}
                <Link href={ROUTES.audit} className={buttonSecondaryClass}>
                  Operating System Diagnostic details
                </Link>
                <Link href="/" className={buttonSecondaryClass}>
                  Home
                </Link>
              </div>

              {PUBLIC_CONTACT_EMAIL && PUBLIC_BOOKING_URL ? (
                <p className="mt-8 font-mono text-[11px] text-zinc-600">
                  Prefer email?{" "}
                  <a
                    href={mailto ?? undefined}
                    className="text-zinc-400 underline decoration-zinc-700 underline-offset-4 transition hover:text-zinc-200"
                  >
                    {PUBLIC_CONTACT_EMAIL}
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
