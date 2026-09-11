import Link from "next/link";
import { Eyebrow, MicroLabel, Section } from "@/components/primitives";
import { ONBOARDING_JOURNEY } from "@/lib/onboarding";
import { ROUTES, buttonPrimaryClass } from "@/lib/constants";

// Funnel step: conversion — name the post-sandbox sequence so intent has a
// visible, ordered path instead of a dead-end "request access" button.
export function Journey() {
  return (
    <Section tone="muted" ariaLabelledby="journey-heading">
      <div className="max-w-3xl space-y-4">
        <Eyebrow>What happens after you explore</Eyebrow>
        <h2
          id="journey-heading"
          className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
        >
          From synthetic firm to your firm — in five steps.
        </h2>
        <p className="text-sm leading-relaxed text-zinc-500">
          Exploring is free and anonymous. When the sandbox shows you the gap,
          this is the exact sequence that follows — no surprise asks, no
          credentials until you choose a path.
        </p>
      </div>

      <ol className="mt-14 space-y-0">
        {ONBOARDING_JOURNEY.map((item, index) => (
          <li
            key={item.step}
            className="grid gap-3 border-t border-zinc-800/80 py-7 sm:grid-cols-[64px_1fr_2fr] sm:gap-8"
          >
            <MicroLabel className="pt-1">{item.step}</MicroLabel>
            <h3 className="font-serif text-xl text-zinc-100">{item.title}</h3>
            <p className="text-sm leading-relaxed text-zinc-400">{item.body}</p>
            {index === ONBOARDING_JOURNEY.length - 1 ? null : null}
          </li>
        ))}
        <li className="border-t border-zinc-800/80" aria-hidden />
      </ol>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link href={ROUTES.contact} className={buttonPrimaryClass}>
          Start the intake
        </Link>
        <p className="text-sm text-zinc-500">
          Four short steps · a few minutes · a human replies.
        </p>
      </div>
    </Section>
  );
}
