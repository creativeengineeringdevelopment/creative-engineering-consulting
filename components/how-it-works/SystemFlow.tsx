import { Fragment } from "react";

const steps = [
  {
    title: "Trigger",
    examples: ["New lead", "Form submission", "Status change"],
  },
  {
    title: "Decision",
    examples: ["Qualification", "Routing", "Approval logic"],
  },
  {
    title: "Action",
    examples: ["Send message", "Assign owner", "Update system"],
  },
  {
    title: "Output",
    examples: ["Lead contacted", "Task completed", "System updated"],
  },
] as const;

export function SystemFlow() {
  return (
    <section
      className="border-b border-zinc-900 bg-zinc-950/30"
      aria-labelledby="system-flow-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Execution flow
          </p>
          <h2
            id="system-flow-heading"
            className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
          >
            One path from start to finish
          </h2>
          <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
            Every workflow is structured like this—no ambiguity, no missed steps.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-4 lg:flex-row lg:items-stretch">
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              <article className="flex-1 rounded-sm border border-zinc-800/80 bg-zinc-900/20 p-6">
                <h3 className="font-serif text-xl text-zinc-50">{step.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-400">
                  {step.examples.map((ex) => (
                    <li key={ex} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </article>
              {index < steps.length - 1 ? (
                <div
                  className="flex shrink-0 items-center justify-center py-1 text-lg text-zinc-600 lg:px-1 lg:py-0"
                  aria-hidden
                >
                  <span className="lg:hidden">↓</span>
                  <span className="hidden lg:inline">→</span>
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
