import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTA, Label } from "@/components/Shared";
import { CapabilityInventory } from "@/components/CapabilityInventory";
import { SystemShowcase } from "@/components/SystemShowcase";
export const metadata: Metadata = {
  title: "Capability Atlas",
  description:
    "Explore the software behind the workflows: 15 business domains, 141 candidate capability groups and a source inventory of 4,129 operations.",
};
export default function Capabilities() {
  return (
    <main id="main-content">
      <PageHero
        label="THE CAPABILITY ATLAS"
        title="More than the apps you see."
        description="The apps are where people work. Underneath them are the operations that move information, coordinate work and connect systems. Explore that foundation—and the outcomes it can support."
      />
      <section className="container inventory-overview">
        <div className="inventory-total">
          <div>
            <span className="eyebrow">
              SOURCE DISCOVERY SNAPSHOT · OCTOBER 2026
            </span>
            <strong>4,129</strong>
            <p>discovered operations across 56 repositories</p>
          </div>
          <p>
            The homepage shows six example workflows and 28 selected
            capabilities. This page opens up the broader inventory: 141
            candidate groups across 15 business domains.
          </p>
        </div>
        <div className="inventory-stats">
          {[
            [
              "2,790",
              "HTTP operations",
              "Application requests and integrations.",
            ],
            [
              "431",
              "Background jobs",
              "Work that runs outside an interactive request.",
            ],
            ["32", "MCP tools", "Tools exposed to compatible AI clients."],
            [
              "852",
              "Commands",
              "Development, maintenance and operating scripts.",
            ],
            [
              "24",
              "Deployment operations",
              "Deployment surfaces included in the total.",
            ],
          ].map(([n, label, description]) => (
            <div key={label}>
              <strong>{n}</strong>
              <h2>{label}</h2>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <p className="caption">
          Static source scan generated October 7, 2026 UTC. Repository coverage
          includes legacy and overlapping implementations. Discovery
          demonstrates code presence, not current runtime health, ownership or
          availability for every client.
        </p>
        <div className="inventory-jumps">
          <Link className="button button-dark" href="#inventory">
            Browse all 141 groups ↘
          </Link>
          <Link className="text-link" href="#systems">
            Explore example workflows ↘
          </Link>
        </div>
      </section>
      <section className="container section-small">
        <Label>HOW TO READ THE ATLAS</Label>
        <div className="principles-grid">
          <article>
            <span className="index">01 / OPERATION</span>
            <h3>A single piece of work.</h3>
            <p>
              An endpoint, background job, tool or command. Several may support
              one action, and similar operations may exist in multiple systems.
            </p>
          </article>
          <article>
            <span className="index">02 / CAPABILITY</span>
            <h3>A useful business action.</h3>
            <p>
              Combine those pieces into something your team understands: build
              an audience, coordinate follow-up or generate a report. Candidate
              groups still need review and consolidation.
            </p>
          </article>
          <article>
            <span className="index">03 / OUTCOME</span>
            <h3>The result you need.</h3>
            <p>
              Connect capabilities into a workflow, configure your accounts and
              rules, then verify the result. The six examples below show how
              those connections can work.
            </p>
          </article>
        </div>
      </section>
      <CapabilityInventory />
      <SystemShowcase dedicated />
      <section className="container section-small">
        <Label>FROM INVENTORY TO IMPLEMENTATION</Label>
        <h2>The scope is your workflow.</h2>
        <p className="lede">
          We select the relevant components, confirm reuse rights, connect your
          accounts and test the complete workflow. Your team gets an agreed
          system and handoff—not an obligation to use every operation in this
          inventory.
        </p>
        <p className="caption">
          The discovery report also identifies 1,526 data objects and 1,850
          review items. Those review items require classification or authority
          checks; they are not additional features. This public index contains
          aggregate counts, not private records, endpoint paths or access
          credentials.
        </p>
      </section>
      <CTA />
    </main>
  );
}
