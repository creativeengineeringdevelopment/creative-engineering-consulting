import { Card, Eyebrow, MicroLabel, Section } from "@/components/primitives";

const layers = [
  {
    title: "Edge — the operating environment",
    body: "The surface the customer and team actually use. Unifies investor CRM, investor portal, fund operations, documents, communications, and AI assistance into one coherent firm.",
  },
  {
    title: "Factory — the deployment engine",
    body: "Creates repositories, infrastructure, configuration, seed data, releases, and proof of deployment inside customer-owned Cloudflare, Neon, and Resend accounts.",
  },
  {
    title: "Specialist agents",
    body: "Bounded agents that work inside source-of-truth rules: classify, draft, route, summarize, verify, and escalate with human approval gates.",
  },
  {
    title: "Micro-app model",
    body: "Focused apps on a shared operating layer instead of monolithic software — the same pattern that powers the synthetic firm becomes the pattern for custom work.",
  },
] as const;

// Funnel step: product depth — what the platform actually includes.
export function PlatformLayers() {
  return (
    <Section tone="muted" ariaLabelledby="layers-heading">
      <div className="max-w-3xl space-y-4">
        <Eyebrow>What it includes</Eyebrow>
        <h2
          id="layers-heading"
          className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
        >
          Edge, Factory, agents, and a micro-app model.
        </h2>
      </div>
      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {layers.map((layer, index) => (
          <Card key={layer.title}>
            <MicroLabel>{String(index + 1).padStart(2, "0")}</MicroLabel>
            <h3 className="mt-3 font-serif text-2xl text-zinc-100">
              {layer.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              {layer.body}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
