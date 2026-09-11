import Link from "next/link";
import { BookingPrimaryLink } from "@/components/BookingPrimaryLink";
import { CtaPanel, Section } from "@/components/primitives";
import {
  PUBLIC_BOOKING_URL,
  PUBLIC_CONTACT_EMAIL,
  ROUTES,
  buttonSecondaryClass,
  systemAuditMailto,
} from "@/lib/constants";

// Funnel step: terminal — the single conversion action for the whole page.
export function StartConversation() {
  const mailto = systemAuditMailto();
  const hasChannel = Boolean(PUBLIC_BOOKING_URL || mailto);
  const showDevHint = process.env.NODE_ENV !== "production" && !hasChannel;

  return (
    <Section tone="solid" ariaLabelledby="contact-cta-heading" className="border-b-0">
      <CtaPanel className="from-zinc-900/50 px-8 py-12 sm:px-10 sm:py-14">
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
      </CtaPanel>
    </Section>
  );
}
