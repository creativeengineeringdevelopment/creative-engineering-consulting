import { Section } from "@/components/primitives";

const prepItems = [
  {
    lead: "Company",
    rest: "and what you sell or deliver",
  },
  {
    lead: "One workflow",
    rest: "you want examined end-to-end (from trigger to done)",
  },
  {
    lead: "Where it hurts",
    rest: "—delays, rework, dropped handoffs, or manual glue",
  },
  {
    lead: "Time zone",
    rest: "and any scheduling constraints",
  },
] as const;

// Funnel step: prep — specifics that turn a reply into a useful next step.
export function Prep() {
  return (
    <Section ariaLabelledby="prep-heading" className="[&>div]:py-16">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
        <div>
          <h2
            id="prep-heading"
            className="font-serif text-2xl font-medium tracking-tight text-zinc-50"
          >
            What to include
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500">
            A few specifics help us respond with a useful next step instead of a
            generic reply.
          </p>
        </div>
        <ul className="space-y-4 border-l border-zinc-800 pl-8 text-sm leading-relaxed text-zinc-400">
          {prepItems.map((item) => (
            <li key={item.lead}>
              <span className="font-medium text-zinc-200">{item.lead}</span>{" "}
              {item.rest}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
