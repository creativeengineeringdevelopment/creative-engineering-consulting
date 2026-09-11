import Link from "next/link";
import { Eyebrow, Section } from "@/components/primitives";
import { ROUTES } from "@/lib/constants";

// Funnel step: the ask — one clear next step, framed as structure not sales.
export function Hero() {
  return (
    <Section hero ariaLabelledby="contact-hero-heading">
      <div className="max-w-3xl space-y-8">
        <Eyebrow>Contact</Eyebrow>
        <h1
          id="contact-hero-heading"
          className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl"
        >
          Book an Operating System Diagnostic
        </h1>
        <p className="text-lg leading-relaxed text-zinc-400 sm:text-xl">
          Tell us which workflow matters most and where execution breaks today. We
          reply with timing, prep, and whether the diagnostic is the right next step.
        </p>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-500">
          This is not a sales call—it is a structured look at how your operations
          actually run. Read the{" "}
          <Link
            href={ROUTES.audit}
            className="text-zinc-300 underline decoration-zinc-600 underline-offset-4 transition hover:text-zinc-100"
          >
            Operating System Diagnostic overview
          </Link>{" "}
          first if you want the full picture of what you get.
        </p>
      </div>
    </Section>
  );
}
