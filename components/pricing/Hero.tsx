import { Eyebrow, Section } from "@/components/primitives";

// Funnel step: pricing hero — frame the ladder, Free first.
export function Hero() {
  return (
    <Section hero ariaLabelledby="pricing-heading">
      <div className="max-w-3xl space-y-6">
        <Eyebrow>Pricing</Eyebrow>
        <h1
          id="pricing-heading"
          className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl lg:text-[3.25rem]"
        >
          Free product first. Pay for what proves itself.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
          The business is a product-led funnel with services at the high-value
          end. Start with the synthetic firm at $0; upgrade when product
          behavior — not a pitch — says it is time.
        </p>
      </div>
    </Section>
  );
}
