import { Eyebrow, Section } from "@/components/primitives";
import { DeploymentMap } from "@/components/product-shots/DeploymentMap";

const rules = [
  {
    title: "Your infrastructure, your accounts",
    body: "The basic deployment rides third-party free allowances inside Cloudflare, Neon, and Resend accounts you create and own. We never hold your credentials, and you can revoke access at any time.",
  },
  {
    title: "We don't absorb your costs to preserve the word free",
    body: "Overages belong to you or are bundled transparently into a paid plan. If a third-party free tier stops being free, that is a provider change — not a bait and switch.",
  },
  {
    title: "AI is capped, customer-funded, or bring-your-own-key",
    body: "Agent usage stays inside explicit limits until unit economics are proven. No surprise inference bills, in either direction.",
  },
] as const;

// Funnel step: the economic rule — honesty as a differentiator, stated
// plainly instead of buried in fine print (vision: ownership before convenience).
export function EconomicRule() {
  return (
    <Section ariaLabelledby="economic-rule-heading">
      <div className="max-w-3xl space-y-4">
        <Eyebrow>The economic rule</Eyebrow>
        <h2
          id="economic-rule-heading"
          className="font-serif text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl"
        >
          Free means free because the infrastructure is already yours.
        </h2>
      </div>
      <div className="mt-12 space-y-0">
        {rules.map((rule, index) => (
          <div
            key={rule.title}
            className="grid gap-3 border-t border-zinc-800/80 py-8 sm:grid-cols-[56px_1fr_2fr] sm:gap-8"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="font-serif text-xl text-zinc-100">{rule.title}</h3>
            <p className="text-sm leading-relaxed text-zinc-400">{rule.body}</p>
          </div>
        ))}
        <div className="border-t border-zinc-800/80" />
      </div>
      <div className="mt-14">
        <DeploymentMap />
        <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          A live deployment — your accounts, named providers, synthetic data
        </figcaption>
      </div>
    </Section>
  );
}
