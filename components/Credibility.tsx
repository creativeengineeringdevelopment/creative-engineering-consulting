import Image from "next/image";
import Link from "next/link";
import { Arrow, Label } from "@/components/Shared";

function Brand({
  name,
  file,
  dark = false,
}: {
  name: string;
  file?: string;
  dark?: boolean;
}) {
  return (
    <div className={`experience-mark${dark ? " experience-mark-dark" : ""}`}>
      {file ? (
        <Image
          src={`/brands/${file}`}
          alt={name}
          width={240}
          height={88}
          className="brand-image"
        />
      ) : (
        <span className="brand-name">{name}</span>
      )}
    </div>
  );
}

export function ExperienceBrands() {
  return (
    <section className="section container experience-brands" id="experience">
      <div className="section-heading">
        <div>
          <Label>EXPERIENCE BEHIND THE PRACTICE</Label>
          <h2>
            Real businesses.
            <br />
            <em>Firsthand experience.</em>
          </h2>
        </div>
        <p>
          Operating roles, development work and mentorship across private
          markets, real estate and hospitality. The context behind how we build.
        </p>
      </div>
      <div className="brand-grid">
        <article className="brand-card">
          <Brand name="DiversyFund" file="diversyfund.svg" />
          <span className="eyebrow">TECHNOLOGY LEADERSHIP</span>
          <h3>Investor operations at scale.</h3>
          <p>
            CTO work connecting investor workflows, AI capabilities and
            communication infrastructure.
          </p>
          <Link className="text-link" href="/work/investor-operations">
            Explore the work <Arrow />
          </Link>
        </article>
        <article className="brand-card">
          <Brand name="REtokens" file="retokens.png" />
          <span className="eyebrow">TOKENIZED-ASSET INFRASTRUCTURE</span>
          <h3>Connecting assets and systems.</h3>
          <p>
            Development leadership and Brassica / BitGo integration work during
            ATS / broker-dealer application preparation.
          </p>
          <Link
            className="text-link"
            href="/work/tokenized-asset-infrastructure"
          >
            Explore the work <Arrow />
          </Link>
        </article>
        <article className="brand-card">
          <Brand name="Mariposa Beach Resort" file="mariposa.png" />
          <span className="eyebrow">HOSPITALITY & DIGITAL OPERATIONS</span>
          <h3>The guest experience, connected.</h3>
          <p>
            Digital systems and investor operations, with website,
            content-management and guest-experience application work.
          </p>
          <Link className="text-link" href="/about#hospitality">
            More about the role <Arrow />
          </Link>
        </article>
        <article className="brand-card brand-card-wide">
          <div className="brand-family">
            <Brand name="TEM Capital" file="tem-capital.png" />
            <Brand
              name="Tarek Buys Houses"
              file="tarek-buys-houses.webp"
              dark
            />
            <Brand name="Nestla" />
          </div>
          <span className="eyebrow">TAREK EL MOUSSA’S BUSINESSES</span>
          <h3>From property data to the next decision.</h3>
          <p>
            Acquisition and investor systems for TEM Capital / Tarek Buys
            Houses; property matching and market intelligence for Nestla.
            Grounded in the realities of wholesaling, flipping and acquisitions.
          </p>
          <Link className="text-link" href="/work/real-estate-acquisitions">
            Explore the work <Arrow />
          </Link>
        </article>
        <article className="brand-card">
          <Brand name="Premier Law Group" file="premier-law-group.png" dark />
          <span className="eyebrow">MENTORSHIP · BETHANY LAFLAM</span>
          <h3>Business context before code.</h3>
          <p>
            Mentorship that shaped Jared’s practical understanding of
            securities-related workflows and the importance of working with
            counsel.
          </p>
          <Link className="text-link" href="/about">
            Read the founder story <Arrow />
          </Link>
        </article>
      </div>
      <p className="caption">
        Names and marks identify Jared’s professional experience and mentorship.
        They do not imply sponsorship, endorsement or that each organization is
        a client of this consultancy.
      </p>
    </section>
  );
}

const technologies = [
  {
    number: "01",
    title: "AI & workflow execution",
    detail: "Turn a request into a bounded, reviewable action.",
    tools: ["OpenAI", "Vercel AI SDK", "Trigger.dev", "MCP"],
  },
  {
    number: "02",
    title: "Customer & business data",
    detail: "Bring records, context and follow-up together.",
    tools: ["Salesforce", "Snowflake", "Twilio Segment"],
  },
  {
    number: "03",
    title: "Applications & infrastructure",
    detail: "Build interfaces and systems your team can operate.",
    tools: ["Next.js", "TypeScript", "PostgreSQL / Neon", "Vercel"],
  },
];
export function TechnologyStack() {
  return (
    <section className="technology-section section" id="technology">
      <div className="container">
        <div className="section-heading">
          <div>
            <Label>TOOLS WITH A JOB TO DO</Label>
            <h2>
              Built to work with
              <br />
              <em>your systems.</em>
            </h2>
          </div>
          <p>
            Selected technologies used across Jared’s application and
            integration work. We choose the stack around your workflow, existing
            accounts and operating requirements.
          </p>
        </div>
        <div className="technology-grid">
          {technologies.map((group) => (
            <article key={group.number}>
              <span className="index">{group.number}</span>
              <h3>{group.title}</h3>
              <p>{group.detail}</p>
              <ul className="technology-tags">
                {group.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="technology-footnote">
          <p>
            Your environment determines the implementation. Product access,
            licensing and integration scope are confirmed during discovery.
          </p>
          <Link className="text-link" href="/contact">
            Talk through your stack <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
