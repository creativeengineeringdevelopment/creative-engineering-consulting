import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Label, Arrow } from "@/components/Shared";
export const metadata: Metadata = {
  title: "System assessment",
  description:
    "Define the workflow, the opportunity and the implementation before commissioning software.",
};
export default function Audit() {
  return (
    <main id="main-content">
      <PageHero
        label="START HERE / SYSTEM ASSESSMENT"
        title="Find the workflow worth fixing."
        description="Before we build, we establish what is happening, where it breaks and what a better system needs to do."
      />
      <section className="container section-small assessment-grid">
        <div>
          <Label>THE FIRST CONVERSATION</Label>
          <h2>
            One problem.
            <br />
            <em>Enough context to start.</em>
          </h2>
          <p>
            Tell Jared which workflow matters, who handles it and where your
            current tools fall short. We’ll determine whether a structured
            assessment makes sense.
          </p>
          <p>
            This initial conversation is for fit and scope. A detailed
            assessment is a separate, scoped engagement; its fee, schedule and
            deliverables are agreed before it begins.
          </p>
          <Link
            href="/contact?interest=assessment"
            className="button button-primary"
          >
            Request an assessment conversation <Arrow />
          </Link>
        </div>
        <div className="assessment-card">
          <Label>A SCOPED ASSESSMENT CAN INCLUDE</Label>
          <ol>
            <li>
              <strong>A current-state workflow map</strong>
              <span>People, systems, handoffs and exceptions.</span>
            </li>
            <li>
              <strong>A prioritized opportunity</strong>
              <span>The first workflow worth implementing and why.</span>
            </li>
            <li>
              <strong>A system & integration outline</strong>
              <span>Data access, capabilities and approval boundaries.</span>
            </li>
            <li>
              <strong>A delivery proposal</strong>
              <span>Scope, acceptance criteria, dependencies and price.</span>
            </li>
          </ol>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <div>
            <Label>GOOD FIT</Label>
            <h2>
              A real workflow.
              <br />A responsible owner.
            </h2>
          </div>
          <p>
            This works best when someone can explain the operation, provide
            appropriate access and own the process after delivery.
          </p>
        </div>
        <div className="principles-grid">
          <article>
            <h3>Investment operations</h3>
            <p>
              Investor onboarding, documents, communications and internal
              follow-through.
            </p>
          </article>
          <article>
            <h3>Real-estate teams</h3>
            <p>
              Acquisition intake, qualification, routing and the work between
              systems.
            </p>
          </article>
          <article>
            <h3>Complex service workflows</h3>
            <p>
              Repeatable processes with meaningful handoffs, clear permissions
              and human decisions.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
