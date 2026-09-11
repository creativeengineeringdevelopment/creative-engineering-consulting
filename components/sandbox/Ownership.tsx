import { Card, Eyebrow, Section } from "@/components/primitives";
import { PipelineReview } from "@/components/product-shots/PipelineReview";

const deployTargets = [
  { name: "Cloudflare", role: "Application hosting and object storage" },
  { name: "Neon", role: "Postgres and authentication" },
  { name: "Resend", role: "Transactional communication" },
  { name: "Your AI key", role: "Customer-funded or capped demonstration allocation" },
] as const;

// Funnel step: ownership — the deploy path is into accounts the customer owns.
export function Ownership() {
  return (
    <Section tone="muted" ariaLabelledby="ownership-heading">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="space-y-4">
          <Eyebrow>Customer ownership</Eyebrow>
          <h2
            id="ownership-heading"
            className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
          >
            Deployment into infrastructure you own.
          </h2>
          <p className="text-sm leading-relaxed text-zinc-500">
            You create and verify your own third-party accounts, then authorize
            Factory to create and manage agreed resources. Scoped, revocable,
            audited — and the basic deployment rides third-party free allowances
            in your accounts, so the free tier costs us nothing to give you.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {deployTargets.map((target) => (
            <Card key={target.name} className="p-5">
              <p className="font-serif text-xl text-zinc-100">{target.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {target.role}
              </p>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-14">
        <PipelineReview />
        <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          The same console you explored here, running on your accounts — synthetic data
        </figcaption>
      </div>
    </Section>
  );
}
