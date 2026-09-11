import Link from "next/link";
import { CtaPanel, Eyebrow, Section } from "@/components/primitives";
import { ROUTES, buttonPrimaryClass, buttonSecondaryClass } from "@/lib/constants";

// Funnel step: terminal CTA — Free → /sandbox, everything else → /contact.
export function CTA() {
  return (
    <Section tone="solid" ariaLabelledby="pricing-cta-heading" className="border-b-0">
      <CtaPanel className="border-zinc-800/90 px-8 py-14 sm:px-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Start at $0</Eyebrow>
          <h2
            id="pricing-cta-heading"
            className="mt-4 font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
          >
            The sandbox is the price of entry. Everything else is earned.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            Operate the synthetic firm first. If it earns the conversation, the
            ladder is right there.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={ROUTES.sandbox} className={buttonPrimaryClass}>
              Explore the free sandbox
            </Link>
            <Link href={ROUTES.contact} className={buttonSecondaryClass}>
              Talk to us
            </Link>
          </div>
        </div>
      </CtaPanel>
    </Section>
  );
}
