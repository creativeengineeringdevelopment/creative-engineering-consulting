import Link from "next/link";
import { CtaPanel, Eyebrow, Section } from "@/components/primitives";
import { ROUTES, buttonPrimaryClass, buttonSecondaryClass } from "@/lib/constants";

// Funnel step: terminal CTA — sandbox intent converts to a request at /contact.
export function CTA() {
  return (
    <Section tone="solid" ariaLabelledby="sandbox-cta-heading" className="border-b-0">
      <CtaPanel className="border-zinc-800/90 px-8 py-14 sm:px-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Next step</Eyebrow>
          <h2
            id="sandbox-cta-heading"
            className="mt-4 font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
          >
            Explore first. Buy only what proves itself.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            If the sandbox shows you the gap, the next step is yours: deploy the
            free tier into your own accounts, subscribe to Edge Plus, or book an
            Operating System Diagnostic for the workflows that need custom judgment.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={ROUTES.contact} className={buttonPrimaryClass}>
              Request access
            </Link>
            <Link href={ROUTES.audit} className={buttonSecondaryClass}>
              Operating System Diagnostic
            </Link>
          </div>
        </div>
      </CtaPanel>
    </Section>
  );
}
