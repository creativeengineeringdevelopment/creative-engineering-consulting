import Link from "next/link";
import { Arrow, CTA, Label } from "@/components/Shared";
import { WorkCards } from "@/components/WorkCards";
import { CapabilityDemo } from "@/components/CapabilityDemo";
export default function Home() {
  return (
    <main id="main-content">
      <section className="hero container">
        <div className="hero-copy">
          <Label>INDEPENDENT EXPERTISE. OPERATIONAL SOFTWARE.</Label>
          <h1>
            Your operations.
            <br />
            <em>Engineered.</em>
          </h1>
          <p className="hero-lede">
            Turn the way your business works into a system your team can
            actually run.
          </p>
          <p className="hero-detail">
            AI-enabled workflows, connected to your accounts. Built around your
            rules. Delivered with source access and a clear handoff.
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/contact">
              Discuss your workflow <Arrow />
            </Link>
            <Link className="text-link" href="/work">
              Explore the work <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <p className="hero-signoff">
            <span className="signature-line" /> A founder-led practice by Jared
            Lutz
          </p>
        </div>
        <div className="hero-system">
          <div className="system-caption">
            <span>THE OPERATING MODEL</span>
            <span>CE / 001</span>
          </div>
          <div className="system-input">
            <span className="system-icon">↗</span>
            <div>
              <span className="tiny-label">YOUR TEAM</span>
              <h3>Ask. Review. Act.</h3>
              <p>In the AI interface you choose.</p>
            </div>
          </div>
          <div className="connector">
            <span>YOUR IDENTITY & PERMISSIONS</span>
          </div>
          <div className="system-core">
            <div className="core-title">
              <span className="core-symbol">✳</span>
              <span>Your capabilities layer</span>
            </div>
            <div className="core-tags">
              <span>Business rules</span>
              <span>Workflows</span>
              <span>Approvals</span>
              <span>Execution records</span>
            </div>
          </div>
          <div className="connector bottom-connector">
            <span>CONNECTED TO YOUR OPERATION</span>
          </div>
          <div className="system-targets">
            <div>
              <span>01</span>CRM
            </div>
            <div>
              <span>02</span>Documents
            </div>
            <div>
              <span>03</span>Comms
            </div>
          </div>
          <div className="system-note">
            <span className="live-dot" /> Your accounts. Explicit authority.
            Visible results.
          </div>
        </div>
      </section>
      <section className="experience-strip">
        <div className="container experience-inner">
          <span className="eyebrow">EXPERIENCE ACROSS</span>
          <span>Private markets</span>
          <span>Tokenized assets</span>
          <span>Real estate</span>
          <span>Investor operations</span>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <Label>THE PROBLEM WORTH SOLVING</Label>
            <h2>
              The gap between
              <br />
              <em>having tools</em> and getting work done.
            </h2>
          </div>
          <p>
            Your team already has software. The work between those systems still
            depends on someone remembering, reconciling, copying and chasing.
          </p>
        </div>
        <div className="principles-grid">
          <article>
            <span className="index">01 / CONNECT</span>
            <h3>Put the context together.</h3>
            <p>
              Bring the right records into the workflow, with a clear source of
              truth and access tied to the person doing the work.
            </p>
          </article>
          <article>
            <span className="index">02 / CONTROL</span>
            <h3>Make the rules explicit.</h3>
            <p>
              Define what can happen automatically, what needs approval and
              where an exception should go.
            </p>
          </article>
          <article>
            <span className="index">03 / COMPLETE</span>
            <h3>Close the loop.</h3>
            <p>
              Make the result visible. Know what ran, what failed, who owns the
              next step and whether the work is complete.
            </p>
          </article>
        </div>
      </section>
      <section className="section work-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Label>SELECTED EXPERIENCE</Label>
              <h2>
                Built in the real world.
                <br />
                <em>Brought to your business.</em>
              </h2>
            </div>
            <Link href="/work" className="text-link">
              View all case studies <Arrow />
            </Link>
          </div>
          <WorkCards />
          <p className="caption">
            Selected work from Jared’s operating roles. Organization names
            identify experience, not endorsements.
          </p>
        </div>
      </section>
      <section className="section container capability-section">
        <div>
          <Label>CONSULTING, WITH AN OPERATING LAYER</Label>
          <h2>
            Your AI.
            <br />
            Your accounts.
            <br />
            <em>Real capabilities.</em>
          </h2>
          <p className="lede">
            Give your team a way to work with the systems they already depend
            on.
          </p>
          <p>
            We connect an agreed set of capabilities to your chosen AI
            interface—including ChatGPT where its connector and workspace
            settings support the integration.
          </p>
          <p>
            Your systems enforce access and action limits. The model helps
            interpret the request; it does not become the permission system.
          </p>
          <Link className="text-link" href="/how-it-works">
            Inside the offering <Arrow />
          </Link>
        </div>
        <CapabilityDemo />
      </section>
      <section className="section offer-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Label>A DEFINED ENGAGEMENT</Label>
              <h2>
                Buy a working system.
                <br />
                <em>Keep a clear path forward.</em>
              </h2>
            </div>
            <p>
              A scoped implementation with source access, documentation and a
              handoff. Ongoing support is a separate choice.
            </p>
          </div>
          <div className="offer-grid">
            <div className="offer-price">
              <span className="eyebrow">IMPLEMENTATION ENGAGEMENTS</span>
              <p className="price">
                From $30,000<span>USD · scoped to your operation</span>
              </p>
              <p>
                Start with one high-value workflow. Expand when the first one
                earns its place.
              </p>
              <Link
                href="/how-it-works#engagement"
                className="button button-primary"
              >
                What’s included <Arrow />
              </Link>
            </div>
            <div className="offer-inclusions">
              <div>
                <span>01</span>
                <p>
                  <strong>A defined system</strong>Agreed workflows,
                  integrations and acceptance criteria.
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  <strong>Source access & documentation</strong>Internal-use
                  rights and deployment responsibilities defined in the
                  agreement.
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  <strong>Payment flexibility</strong>Milestone or installment
                  arrangements can be scoped in the contract.
                </p>
              </div>
              <div>
                <span>04</span>
                <p>
                  <strong>Optional ongoing support</strong>Maintenance,
                  improvements and managed services priced separately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section container founder-preview">
        <div className="founder-monogram" aria-hidden="true">
          <span>J / L</span>
          <span className="monogram-note">OPERATOR → ARCHITECT → BUILDER</span>
        </div>
        <div>
          <Label>THE FOUNDER</Label>
          <h2>
            Experience before
            <br />
            <em>the abstraction.</em>
          </h2>
          <p className="lede">
            “The system only matters if it helps the next person do the work.”
          </p>
          <p>
            My path has run through tokenized assets, securities-related
            workflows, real-estate acquisitions and investor operations. Each
            chapter brought the same lesson: the difficult part is connecting
            the business, the people and the software.
          </p>
          <p>
            Creative Engineering brings that experience together in a focused
            implementation practice.
          </p>
          <Link href="/about" className="text-link">
            Meet Jared Lutz <Arrow />
          </Link>
        </div>
      </section>
      <CTA />
    </main>
  );
}
