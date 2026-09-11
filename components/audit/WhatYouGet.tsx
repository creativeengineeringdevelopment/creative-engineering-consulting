const deliverables = [
  "A source-of-truth map across systems, data, workflows, and owners",
  "A dependency register showing which people or vendors quietly hold the operation together",
  "Proof gaps where actions, handoffs, sends, approvals, or exceptions cannot be verified",
  "A ranked list of workflows that should be system-driven first",
  "An agent-readiness assessment: where AI can execute safely and where it should not",
  "A 90-day transformation plan with build scope, owners, and acceptance gates",
] as const;

export function WhatYouGet() {
  return (
    <section className="border-b border-zinc-900" aria-labelledby="what-you-get-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <h2
            id="what-you-get-heading"
            className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
          >
            What you get
          </h2>
        </div>

        <ul className="mt-10 max-w-2xl space-y-3 text-base text-zinc-300">
          {deliverables.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
