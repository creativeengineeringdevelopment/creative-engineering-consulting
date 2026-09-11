import Link from "next/link";
import { Eyebrow, MicroLabel, Section } from "@/components/primitives";
import { ROUTES, buttonPrimaryClass, buttonSecondaryClass } from "@/lib/constants";

// Funnel step: platform-story hero — orient the evaluator, point at /sandbox.
export function Hero() {
  return (
    <Section hero ariaLabelledby="unlockd-heading">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <Eyebrow>Unlockd · Platform and IP</Eyebrow>
            <h1
              id="unlockd-heading"
              className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl lg:text-[3.25rem]"
            >
              Explore a synthetic firm free. Deploy into infrastructure you own.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
              Unlockd gives an investment manager a complete synthetic firm to
              operate immediately, then a path to deploy the same system into
              customer-controlled vendor accounts — upgraded by subscription or
              transformed through a Creative Engineering engagement.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={ROUTES.sandbox} className={buttonPrimaryClass}>
              Explore the free sandbox
            </Link>
            <Link href="/" className={buttonSecondaryClass}>
              Back to Creative Engineering
            </Link>
          </div>
        </div>
        <div className="rounded-sm border border-zinc-800/90 bg-zinc-950/80 p-6 sm:p-8">
          <MicroLabel>The business in one view</MicroLabel>
          <p className="mt-4 font-serif text-2xl text-zinc-50">
            Creative Engineering is the studio. Unlockd is the platform. Factory
            deploys it. Edge is where you work.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            The paired diamond mark represents the sandbox becoming owned
            infrastructure across the controlled Factory-to-Edge boundary.
          </p>
        </div>
      </div>
    </Section>
  );
}
