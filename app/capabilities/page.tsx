import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTA, Label } from "@/components/Shared";
import { CapabilityInventory } from "@/components/CapabilityInventory";
import { SystemShowcase } from "@/components/SystemShowcase";
import catalog from "@/lib/capability-inventory.json";
const actionCount = catalog.actions.length;
const domainCount = new Set(catalog.actions.map((action) => action.domain))
  .size;
export const metadata: Metadata = {
  title: "Application actions | Capability Atlas",
  description: `Explore ${actionCount} distinct application actions across ${domainCount} areas of work, from contact management and communication to investor workflows and operating procedures.`,
};
export default function Capabilities() {
  return (
    <main id="main-content">
      <PageHero
        label="THE CAPABILITY ATLAS"
        title="What can your system do?"
        description="Find a contact. Send an email. Onboard an employee. Explore the individual actions behind the software, then see how they connect into the workflows your business needs."
      />
      <section className="container inventory-overview">
        <div className="inventory-total">
          <div>
            <span className="eyebrow">CONSOLIDATED APPLICATION CATALOG</span>
            <strong>{actionCount}</strong>
            <p>distinct application actions in the reviewed catalog</p>
          </div>
          <p>
            Each action has a clear purpose and supporting source evidence.
            Duplicate implementations, delivery channels and technical entry
            points are consolidated under the action they serve.
          </p>
        </div>
        <div className="inventory-stats action-stats">
          {[
            [
              String(domainCount),
              "Areas of work",
              "Contacts, communications, people, properties and more.",
            ],
            [
              "6",
              "Example workflows",
              "See individual actions connect into a business outcome.",
            ],
            [
              "15",
              "Staff apps",
              "Explore the interfaces your team can work in.",
            ],
          ].map(([value, title, description]) => (
            <div key={title}>
              <strong>{value}</strong>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <div className="inventory-jumps">
          <Link className="button button-dark" href="#inventory">
            Browse {actionCount} application actions ↘
          </Link>
          <Link className="text-link" href="#systems">
            Explore example workflows ↘
          </Link>
        </div>
      </section>
      <section className="container section-small">
        <Label>ONE ACTION. ALL ITS CONNECTIONS.</Label>
        <div className="principles-grid">
          <article>
            <span className="index">01 / ASK</span>
            <h3>Send an email.</h3>
            <p>
              Your team can request it through an application or a connected AI
              tool. It is counted once in the catalog.
            </p>
          </article>
          <article>
            <span className="index">02 / EXECUTE</span>
            <h3>The system does the work.</h3>
            <p>
              An application request and background worker can support that same
              action. Personal and batch sending remain variants of email
              delivery.
            </p>
          </article>
          <article>
            <span className="index">03 / CONNECT</span>
            <h3>Build a complete workflow.</h3>
            <p>
              Combine finding contacts, preparing an audience, sending messages
              and reviewing response. The scope follows the result your team
              needs.
            </p>
          </article>
        </div>
      </section>
      <CapabilityInventory />
      <section className="container section-small catalog-methodology">
        <details>
          <summary>How actions are consolidated</summary>
          <p>
            We define an action by its business purpose: a verb and the thing it
            acts on. Equivalent implementations across applications, API
            versions, AI tools and background jobs share one catalog entry. List
            and detail views are combined into a read action; individual and
            bulk variants stay together.
          </p>
          <p>
            Different effects remain separate. Creating a contact, updating it
            and merging duplicates are three actions. Pausing a campaign and
            resuming it are two.
          </p>
          <p>
            Build scripts, tests, database maintenance and deployment
            configuration are excluded. Unclassified source entries and
            ambiguous tool detections are also excluded from the published
            count. Additional actions can be added after evidence review; this
            is not a complete count of everything in every repository.
          </p>
          <p>
            Reviewed against the October 2026 source snapshot. Source evidence
            establishes an implementation surface, not current deployment health
            or availability under a particular license. Permissions, provider
            access, reuse rights and production readiness are confirmed for each
            engagement.
          </p>
        </details>
      </section>
      <SystemShowcase dedicated />
      <section className="container section-small">
        <Label>FROM ACTION TO IMPLEMENTATION</Label>
        <h2>The scope is your workflow.</h2>
        <p className="lede">
          Choose the work that matters. We connect the relevant actions,
          configure your accounts and rules, verify the complete workflow and
          hand it over to your team.
        </p>
        <p className="caption">
          The public catalog describes application behavior. It contains no
          private records, endpoint paths or credentials. Investment, employment
          and other consequential decisions remain subject to your team’s
          authority and review process.
        </p>
      </section>
      <CTA />
    </main>
  );
}
