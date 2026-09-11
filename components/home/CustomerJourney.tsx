import { SectionHeader } from "@/components/home/SectionHeader";

const stages = [
  {
    stage: "Explore",
    action: "Open the free sandbox",
    response: "A complete synthetic investment firm loads — funds, investors, pipeline, documents, communications, agent briefings.",
    outcome: "You understand the operating model without a sales call.",
  },
  {
    stage: "Authorize",
    action: "Connect your own service accounts",
    response: "Scoped authorization to Cloudflare, Neon, and Resend — no passwords collected, access revocable at any time.",
    outcome: "You retain account ownership from the first minute.",
  },
  {
    stage: "Deploy",
    action: "Choose the basic Edge configuration",
    response: "Factory creates the application, database, storage, secrets, and seed structure inside your accounts.",
    outcome: "A real customer-owned environment materializes with minimal manual setup.",
  },
  {
    stage: "Operate",
    action: "Invite the team, replace synthetic data",
    response: "Edge begins supporting real workflows, with usage and agent cost visible.",
    outcome: "Subscription and custom-service opportunities emerge from actual needs.",
  },
];

export function CustomerJourney() {
  return (
    <section className="border-b border-zinc-900" aria-labelledby="journey-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <SectionHeader
          eyebrow="From curiosity to ownership"
          title="Explore. Authorize. Deploy. Operate."
          description="Each stage delivers independent value while making the next decision obvious. Customer ownership is a product feature, not a contractual afterthought."
          titleId="journey-heading"
        />
        <ol className="mt-14 grid gap-4 lg:grid-cols-4">
          {stages.map((item, index) => (
            <li key={item.stage} className="relative rounded-sm border border-zinc-800/80 bg-zinc-900/25 p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-sky-300/80">
                {String(index + 1).padStart(2, "0")} · {item.stage}
              </p>
              <h3 className="mt-4 font-serif text-xl leading-tight text-zinc-50">{item.action}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.response}</p>
              <p className="mt-4 border-l border-zinc-700 pl-4 text-xs leading-relaxed text-zinc-500">{item.outcome}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-zinc-500">
          The platform never creates your human identity on infrastructure providers,
          never impersonates you, and never requires shared passwords. You create and
          verify your own accounts; Factory receives scoped, revocable authorization.
        </p>
      </div>
    </section>
  );
}
