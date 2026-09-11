import type { ReactNode } from "react";

// Shared layout primitives — the code form of design.md.
// Funnel step served: all — these only enforce composition rules
// (section rhythm, container, card shape); they carry no page intent.

type SectionProps = {
  children: ReactNode;
  id?: string;
  ariaLabelledby?: string;
  /** Alternate section backgrounds for rhythm (design.md rule 3). */
  tone?: "default" | "muted" | "solid";
  /** Heroes use pt-24/28; sections use py-20/24. */
  hero?: boolean;
  className?: string;
};

const toneClass = {
  default: "",
  muted: "bg-zinc-950/40",
  solid: "bg-zinc-950",
} as const;

export function Section({
  children,
  id,
  ariaLabelledby,
  tone = "default",
  hero = false,
  className = "",
}: SectionProps) {
  const padding = hero
    ? "pb-20 pt-24 sm:pb-28 sm:pt-28"
    : "py-20 sm:py-24";
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`border-b border-zinc-900 ${toneClass[tone]} ${className}`}
    >
      <div className={`mx-auto max-w-6xl px-6 lg:px-8 ${padding}`}>
        {children}
      </div>
    </section>
  );
}

type EyebrowProps = { children: ReactNode; className?: string };

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-[0.22em] text-zinc-500 ${className}`}
    >
      {children}
    </p>
  );
}

/** Micro-label inside cards. */
export function MicroLabel({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`font-mono text-[10px] uppercase tracking-widest text-zinc-600 ${className}`}
    >
      {children}
    </p>
  );
}

type CardProps = {
  children: ReactNode;
  className?: string;
  /** Feature cards get p-8; standard cards p-6. */
  feature?: boolean;
};

export function Card({ children, className = "", feature = false }: CardProps) {
  return (
    <div
      className={`rounded-sm border border-zinc-800/80 bg-zinc-900/25 ${
        feature ? "p-8" : "p-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * The single sanctioned gradient surface (design.md palette rule):
 * zinc-only, CTA panels only. No other gradients on the site.
 */
export function CtaPanel({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-sm border border-zinc-800/80 bg-gradient-to-br from-zinc-900/60 to-zinc-950 p-8 sm:p-10 ${className}`}
    >
      {children}
    </div>
  );
}

/** Status badge — the one place rounded-full is allowed (design.md shape rule). */
export function Badge({
  children,
  tone = "sky",
  className = "",
}: EyebrowProps & { tone?: "sky" | "emerald" | "zinc" }) {
  const tones = {
    sky: "border-sky-500/30 bg-sky-500/10 text-sky-300",
    emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    zinc: "border-zinc-700 bg-zinc-900/60 text-zinc-400",
  } as const;
  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
