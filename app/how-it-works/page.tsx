import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTA, Label, Arrow } from "@/components/Shared";
import { CapabilityDemo } from "@/components/CapabilityDemo";
export const metadata: Metadata = {
  title: "The offering",
  description:
    "A defined AI-enabled system, implemented around your accounts and workflows. Source access, documented handoff and optional ongoing support.",
};
export default function Offering() {
  return (
    <main id="main-content">
      <PageHero
        label="THE OFFERING"
        title="Consulting that leaves you with a system."
        description="A defined implementation. An operating layer your team can use. A clear agreement about what you receive, what you control and what happens next."
      />
      <section className="container section-small capability-section">
        <div>
          <Label>HOW IT FITS TOGETHER</Label>
          <h2>
            An interface you choose.
            <br />
            <em>Capabilities you control.</em>
          </h2>
          <p>
            Your team makes requests through an agreed interface. The
            capabilities layer connects those requests to your business rules
            and approved actions in your existing systems.
          </p>
          <ul className="check-list">
            <li>Your accounts and authorized connections</li>
            <li>Permissions checked by the system</li>
            <li>Human approval where the workflow requires it</li>
            <li>Visible results and exceptions</li>
          </ul>
          <p className="caption">
            ChatGPT integration depends on your plan, workspace settings and
            supported connection methods. Compatibility is confirmed during
            scoping; model and vendor charges are separate.
          </p>
        </div>
        <CapabilityDemo />
      </section>
      <section id="engagement" className="section offer-section">
        <div className="container">
          <Label>COMMERCIAL STRUCTURE</Label>
          <div className="section-heading">
            <h2>
              One defined purchase.
              <br />
              <em>No undefined obligations.</em>
            </h2>
            <p>
              Implementation engagements start at $30,000 USD. The final price
              follows the scope, integrations and acceptance criteria—not an
              open-ended promise to automate everything.
            </p>
          </div>
          <div className="principles-grid">
            <article>
              <span className="index">01 / SOFTWARE</span>
              <h3>A defined codebase.</h3>
              <p>
                Source access, documentation and agreed internal-use rights. The
                agreement identifies the delivered version, reusable components
                and client-specific work.
              </p>
            </article>
            <article>
              <span className="index">02 / IMPLEMENTATION</span>
              <h3>A working deployment.</h3>
              <p>
                Agreed integrations, client-account configuration, acceptance
                testing and operator handoff. Deployment location and any hosted
                dependencies are explicit.
              </p>
            </article>
            <article>
              <span className="index">03 / CONTINUITY</span>
              <h3>A choice about support.</h3>
              <p>
                Maintenance, hosting and future development can be arranged
                separately. Source delivery does not imply unlimited updates or
                lifetime support.
              </p>
            </article>
          </div>
          <div className="payment-note">
            <strong>Milestones or installments.</strong>
            <p>
              Payment schedules can be structured across an agreed contract
              period. Ownership, license rights, third-party costs and support
              boundaries are documented before work begins.
            </p>
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <div>
            <Label>THE ENGAGEMENT</Label>
            <h2>
              Start narrow.
              <br />
              <em>Prove it. Then expand.</em>
            </h2>
          </div>
          <Link className="text-link" href="/audit">
            Inside the assessment <Arrow />
          </Link>
        </div>
        <ol className="process-list">
          <li>
            <span>01</span>
            <div>
              <h3>Map the real workflow</h3>
              <p>
                Understand the people, systems, data and exceptions. Establish
                what a better outcome means and how it will be measured.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Agree on the system</h3>
              <p>
                Define the scope, permissions, integrations, price and
                acceptance criteria. Identify what requires client or vendor
                participation.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Build and verify</h3>
              <p>
                Implement the workflow. Test normal cases, exceptions and
                permission boundaries against the agreed criteria.
              </p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>Hand it over deliberately</h3>
              <p>
                Document operation and recovery. Train the responsible person.
                Confirm they can use the system without the builder guiding each
                step.
              </p>
            </div>
          </li>
        </ol>
      </section>
      <section className="container section-small faq">
        <Label>BEFORE YOU ASK</Label>
        <h2>The practical details.</h2>
        {[
          {
            q: "Do we own the software?",
            a: "You receive source access and the rights specified in your agreement. The standard offer is designed for internal use while reusable platform components remain available to the practice. Exclusive IP ownership is a separate transaction, not an implied part of the purchase.",
          },
          {
            q: "Can our own technical team maintain it?",
            a: "That is a design goal. We define the deployment, dependencies, documentation and handoff around your operating capabilities. Any dependency on a managed service is identified in the scope.",
          },
          {
            q: "Do we have to replace our existing tools?",
            a: "Usually the first step is connecting a limited set of existing systems. If a migration or replacement is necessary, it is an explicit project decision with its own scope.",
          },
          {
            q: "Is this a legal or compliance service?",
            a: "No. We implement technical workflows and controls around requirements agreed with your team and qualified advisers. Software delivery does not constitute a legal opinion or compliance certification.",
          },
          {
            q: "What should we bring to the first conversation?",
            a: "One workflow that consumes time, loses context or produces inconsistent outcomes. A description of the tools involved and who owns the work is enough to start. Please do not send credentials or confidential investor records.",
          },
        ].map((x) => (
          <details key={x.q}>
            <summary>
              {x.q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{x.a}</p>
          </details>
        ))}
      </section>
      <CTA />
    </main>
  );
}
