import Link from "next/link";
import { SectionHeader } from "@/components/home/SectionHeader";
import { ROUTES, buttonSecondaryClass } from "@/lib/constants";

const offers = [
  {
    name: "Free Edge",
    price: "$0",
    timeline: "Self-serve",
    body: "A complete synthetic investment firm to explore, plus a basic deployment path within third-party free-tier limits. Acquisition through experience, not a lead magnet.",
  },
  {
    name: "Edge Plus",
    price: "Subscription",
    timeline: "Recurring",
    body: "Higher usage, managed releases, premium agents, integrations, observability, and support for teams running their own deployed environment.",
  },
  {
    name: "Operating System Diagnostic",
    price: "$10k–$25k",
    timeline: "1–2 weeks",
    body: "System map, source-of-truth assessment, dependency register, and implementation roadmap. Paid qualification and executive alignment.",
  },
  {
    name: "Custom Operating System",
    price: "$75k–$250k",
    timeline: "8–12 weeks",
    body: "Purpose-built workflows, integrations, data boundaries, agent runbooks, and owner transfer for the operations that need custom judgment.",
  },
  {
    name: "Managed Operating Layer",
    price: "Retainer",
    timeline: "Ongoing",
    body: "Ongoing system stewardship within defined scope and response windows — strategic and technical, without disguised employment.",
  },
];

export function Offers() {
  return (
    <section className="border-b border-zinc-900 bg-zinc-950/40" aria-labelledby="offers-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Offer ladder"
            title="Free product first. Services where custom judgment creates real value."
            description="The business is a product-led funnel with services at the high-value end. Free Edge is a useful operating environment, compelling enough to share — not a stripped-down lead magnet."
            titleId="offers-heading"
          />
          <Link href={ROUTES.sandbox} className={`${buttonSecondaryClass} shrink-0`}>
            Explore the sandbox
          </Link>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {offers.map((offer) => (
            <article
              key={offer.name}
              className="flex min-h-full flex-col rounded-sm border border-zinc-800/80 bg-zinc-900/20 p-6"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                {offer.timeline}
              </p>
              <h3 className="mt-4 font-serif text-xl leading-tight text-zinc-50">{offer.name}</h3>
              <p className="mt-3 text-sm font-medium text-zinc-300">{offer.price}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">{offer.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
