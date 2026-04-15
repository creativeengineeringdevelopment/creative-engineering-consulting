const layers = [
  {
    title: "Workflow engine",
    body: "Defines how work moves: states, transitions, and triggers so each case follows the same path.",
    outcome: "Work moves predictably instead of relying on memory",
  },
  {
    title: "Decision system",
    body: "Holds routing logic, scoring, and approvals—so the right branch fires every time.",
    outcome: "Decisions happen consistently, not differently every time",
  },
  {
    title: "Orchestration layer",
    body: "Connects tools through APIs and runs steps across systems in the right order.",
    outcome: "Your systems work together instead of in isolation",
  },
  {
    title: "Communication layer",
    body: "Handles email, SMS, and internal notifications as part of the workflow—not as one-off sends.",
    outcome: "Follow-up and communication happen automatically",
  },
  {
    title: "AI layer (bounded)",
    body: "AI runs inside defined steps. Inputs and outputs are controlled. AI does not control the system—it supports specific moments in the flow.",
    outcome: "AI enhances execution without creating chaos",
  },
] as const;

export function SystemLayers() {
  return (
    <section className="border-b border-zinc-900" aria-labelledby="system-layers-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Under the hood
          </p>
          <h2
            id="system-layers-heading"
            className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
          >
            What sits underneath day-to-day work
          </h2>
          <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
            Five layers work together so operations run end to end—not as a pile of separate tools
            and reminders.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {layers.map((layer) => (
            <li
              key={layer.title}
              className={`rounded-sm border border-zinc-800/80 bg-zinc-900/20 p-8 ${
                layer.title === "AI layer (bounded)" ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="font-serif text-2xl text-zinc-50">{layer.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{layer.body}</p>
              <p className="mt-6 border-t border-zinc-800/80 pt-6 text-sm font-medium leading-relaxed text-zinc-200">
                {layer.outcome}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
