import { Eyebrow, Section } from "@/components/primitives";

const useCases = [
  "A fund manager wants to see a coherent operating environment before committing to change.",
  "A firm wants AI assistance without surrendering control of data, approvals, or core business logic.",
  "A team wants to deploy real infrastructure without a platform engineering hire.",
  "An operator wants subscription software that can grow into a custom operating system, not a dead-end SaaS.",
] as const;

// Funnel step: fit — let the evaluator self-select.
export function PlatformFit() {
  return (
    <Section ariaLabelledby="fit-heading">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="space-y-4">
          <Eyebrow>When Unlockd fits</Eyebrow>
          <h2
            id="fit-heading"
            className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
          >
            For firms that want ownership, not another dependency.
          </h2>
        </div>
        <ul className="space-y-3">
          {useCases.map((useCase) => (
            <li
              key={useCase}
              className="flex gap-3 border-b border-zinc-800/80 pb-3 text-sm leading-relaxed text-zinc-300"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80"
                aria-hidden
              />
              <span>{useCase}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
