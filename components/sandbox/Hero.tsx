import Link from "next/link";
import { Eyebrow, MicroLabel, Section } from "@/components/primitives";
import { ROUTES, buttonPrimaryClass, buttonSecondaryClass } from "@/lib/constants";

const sandboxContents = [
  { label: "Synthetic funds", value: "3" },
  { label: "Synthetic investors", value: "135" },
  { label: "Micro-apps", value: "6" },
  { label: "Credentials required", value: "0" },
] as const;

const quickWins = [
  "Walk an investor from first conversation to commitment in the CRM",
  "See the portal an investor would actually use",
  "Watch a communication move through approval to delivery evidence",
  "Read the AI Operator's morning briefing and approve its queue",
] as const;

// Funnel step: conversion-goal hero — the sandbox IS the pitch.
export function Hero() {
  return (
    <Section hero ariaLabelledby="sandbox-heading">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <Eyebrow>Unlockd Edge · Free sandbox</Eyebrow>
            <h1
              id="sandbox-heading"
              className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl"
            >
              Operate a complete synthetic investment firm. Free.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
              The sandbox loads a realistic operating environment — funds,
              investors, pipeline, documents, communications, and an AI operator —
              so you can discover the gap between your current tools and a
              coherent operating system. No budget authority, production
              credentials, or sensitive data required.
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
              The product earns the conversation. When you are ready, the same
              system deploys into accounts you own, upgrades into Edge Plus, or
              becomes a Creative Engineering transformation.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={ROUTES.contact} className={buttonPrimaryClass}>
              Request sandbox access
            </Link>
            <Link href={ROUTES.unlockd} className={buttonSecondaryClass}>
              How the platform works
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-sm border border-zinc-800/90 bg-zinc-950/80 shadow-2xl shadow-black/30">
          <div className="border-b border-zinc-800/80 bg-zinc-900/60 px-5 py-3">
            <MicroLabel>Launch parameters</MicroLabel>
            <p className="mt-1 text-sm text-zinc-300">
              Demonstration scale, not a production-capacity promise
            </p>
          </div>
          <div className="grid gap-px bg-zinc-800/70 sm:grid-cols-2">
            {sandboxContents.map((item) => (
              <div key={item.label} className="bg-zinc-950 p-5">
                <p className="font-serif text-3xl text-zinc-50">{item.value}</p>
                <p className="mt-2 text-[11px] uppercase tracking-wider text-zinc-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <div className="border-t border-zinc-800/80 p-5">
            <MicroLabel>What you can do in minutes</MicroLabel>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              {quickWins.map((win) => (
                <li key={win}>· {win}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
