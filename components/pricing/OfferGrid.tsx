import Link from "next/link";
import { Card, Eyebrow, MicroLabel, Section } from "@/components/primitives";
import { OFFERS } from "@/lib/offers";
import { buttonPrimaryClass, buttonSecondaryClass } from "@/lib/constants";

// Funnel step: the offer ladder, data-driven from lib/offers.ts.
export function OfferGrid() {
  return (
    <Section tone="muted" ariaLabelledby="offers-heading">
      <div className="max-w-3xl space-y-4">
        <Eyebrow>The ladder</Eyebrow>
        <h2
          id="offers-heading"
          className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
        >
          Five ways in. Each one earns the next.
        </h2>
      </div>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {OFFERS.map((offer) => (
          <Card
            key={offer.slug}
            className={`flex min-h-full flex-col ${
              offer.featured ? "border-zinc-700/90 bg-zinc-900/40" : ""
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <MicroLabel>{offer.timeline}</MicroLabel>
              {offer.featured ? (
                <MicroLabel className="text-emerald-400/90">
                  Most common next step
                </MicroLabel>
              ) : null}
            </div>
            <h3 className="mt-4 font-serif text-2xl leading-tight text-zinc-50">
              {offer.name}
            </h3>
            <p className="mt-2 text-sm font-medium text-zinc-300">
              {offer.price}
            </p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
              {offer.body}
            </p>
            <div className="mt-6">
              <Link
                href={offer.cta.href}
                className={
                  offer.slug === "free-edge"
                    ? buttonPrimaryClass
                    : buttonSecondaryClass
                }
              >
                {offer.cta.label}
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
