import Link from "next/link";
import { CtaPanel, Eyebrow, Section } from "@/components/primitives";
import { ROUTES, buttonPrimaryClass, buttonSecondaryClass } from "@/lib/constants";

// Funnel step: terminal CTA — this page's job ends at /sandbox (design.md).
export function CTA() {
  return (
    <Section tone="solid" ariaLabelledby="unlockd-cta-heading" className="border-b-0">
      <CtaPanel className="border-zinc-800/90 px-8 py-14 sm:px-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>First step</Eyebrow>
          <h2
            id="unlockd-cta-heading"
            className="mt-4 font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
          >
            Product before pitch. Operate the idea before you buy it.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            Open the sandbox, run a real workflow against synthetic data, and
            decide what deserves to become real in your own infrastructure.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={ROUTES.sandbox} className={buttonPrimaryClass}>
              Explore the sandbox
            </Link>
            <Link href={ROUTES.audit} className={buttonSecondaryClass}>
              Book a diagnostic
            </Link>
          </div>
        </div>
      </CtaPanel>
    </Section>
  );
}
