import { Eyebrow, Section } from "@/components/primitives";

const boundaries = [
  "Synthetic data by default — no sensitive investor information required to explore.",
  "Not a production fund administrator, broker-dealer, custodian, transfer agent, or source of investment advice.",
  "Clear separation between sandbox, development, staging, and production environments.",
  "Human approval gates for communications, data changes, and consequential agent actions.",
  "No automatic creation of your human identity on infrastructure providers.",
  "Third-party free tiers are not guaranteed to remain free or support unlimited production usage.",
] as const;

// Funnel step: trust boundaries — the disclaimers are part of the pitch.
export function Boundaries() {
  return (
    <Section ariaLabelledby="boundaries-heading">
      <div className="max-w-2xl space-y-4">
        <Eyebrow>Trust boundaries</Eyebrow>
        <h2
          id="boundaries-heading"
          className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
        >
          Safe by design before production.
        </h2>
      </div>
      <ul className="mt-12 grid gap-3 md:grid-cols-2">
        {boundaries.map((boundary) => (
          <li
            key={boundary}
            className="flex gap-3 rounded-sm border border-zinc-800/80 bg-zinc-900/25 p-5 text-sm leading-relaxed text-zinc-400"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80"
              aria-hidden
            />
            <span>{boundary}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
