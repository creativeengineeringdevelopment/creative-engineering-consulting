import { SectionHeader } from "@/components/home/SectionHeader";

const principles = [
  {
    title: "Product before pitch",
    body: "Let people operate the idea before asking them to buy it.",
  },
  {
    title: "Truth before agents",
    body: "Establish reliable system boundaries before automating decisions.",
  },
  {
    title: "Proof before claims",
    body: "Instrument the workflow and preserve evidence.",
  },
  {
    title: "Ownership before convenience",
    body: "Customer control is more valuable than invisible lock-in.",
  },
  {
    title: "Service after signal",
    body: "Use product behavior to identify where custom judgment creates real value.",
  },
  {
    title: "Transfer before dependency",
    body: "Every implementation should make the customer more capable.",
  },
  {
    title: "Platform after repetition",
    body: "Productize only the patterns that survive real operating work.",
  },
];

export function OperatingPrinciples() {
  return (
    <section className="border-b border-zinc-900 bg-zinc-950/40" aria-labelledby="principles-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <SectionHeader
          eyebrow="Operating principles"
          title="What protects the customer — and the company — from sprawl."
          description="The opportunity is broad enough to create dangerous product sprawl. These principles decide what gets built, in what order, and who owns it."
          titleId="principles-heading"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <article key={principle.title} className="rounded-sm border border-zinc-800/80 bg-zinc-900/25 p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-xl text-zinc-100">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{principle.body}</p>
            </article>
          ))}
          <article className="rounded-sm border border-dashed border-zinc-700/80 bg-zinc-950/60 p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">Boundary</p>
            <h3 className="mt-3 font-serif text-xl text-zinc-100">Safe by design before production</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Synthetic data by default. Clear environment separation. Scoped,
              revocable authorization. Human approval gates for consequential actions.
              Not a fund administrator, broker-dealer, custodian, or source of
              investment advice.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
