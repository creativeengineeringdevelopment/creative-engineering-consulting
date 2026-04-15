export function Clarification() {
  return (
    <section
      className="border-b border-zinc-900 bg-zinc-950/30"
      aria-labelledby="clarification-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2
            id="clarification-heading"
            className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
          >
            This is not automation as most people know it
          </h2>
          <div className="mt-10 space-y-8 text-base leading-relaxed text-zinc-400 sm:text-lg">
            <p>It is not Zapier-style wiring, not open-ended AI agents, and not disconnected sequences that stop when someone forgets the next step.</p>
            <p className="font-medium text-zinc-200">
              It is a structured system that executes complete workflows with defined logic, states,
              and outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
