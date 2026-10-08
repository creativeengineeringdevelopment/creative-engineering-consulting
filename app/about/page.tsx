import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTA, Label, Arrow } from "@/components/Shared";
export const metadata: Metadata = {
  title: "Jared Lutz — The story",
  description:
    "From tokenized assets and securities workflows to real-estate acquisitions and AI-enabled investor operations. The experience behind Creative Engineering.",
};
const chapters = [
  {
    year: "2022",
    tag: "PRIVATE MARKETS",
    title: "Understanding the rules before building the rails.",
    text: "I moved into tokenized assets and learned from Bethany LaFlam at Premier Law Group. That mentorship deepened my practical understanding of securities-related workflows and the importance of translating legal requirements into operating processes. It shaped how I work with counsel and design systems around their guidance.",
  },
  {
    year: "2023–24",
    tag: "ASSET INFRASTRUCTURE",
    title: "Connecting assets, custody and investor workflows.",
    text: "At REtokens, I led development and integration work with Brassica / BitGo as we prepared for an ATS / broker-dealer application. The experience brought the technical and institutional sides of tokenization into the same frame: records, verification, custody and the workflow between them.",
  },
  {
    year: "2024–25",
    tag: "REAL ESTATE OPERATIONS",
    title: "Getting close to how deals actually happen.",
    text: "Working with Tarek El Moussa’s businesses, including TEM Capital / Tarek Buys Houses, I gained hands-on exposure to wholesaling, flipping and acquisitions. I worked on data infrastructure and acquisition systems, connecting the technology to the people making the next operating decision.",
  },
  {
    year: "2025–26",
    tag: "AI-ENABLED OPERATIONS",
    title: "Building the operating layer for investor scale.",
    text: "As CTO at DiversyFund, I built an AI-enabled platform for a business with 30,000 active investors. The work spans investor workflows, CRM, communications and orchestration—bringing the lessons of private markets and acquisition operations into a connected software environment.",
  },
  {
    year: "Now",
    tag: "CREATIVE ENGINEERING",
    title: "Bringing that experience to your operation.",
    text: "This practice brings those chapters together. I work with investment and real-estate businesses to turn a defined operating problem into a usable system—with connected accounts, explicit rules, source access and a plan for who runs it after delivery.",
  },
];
export default function About() {
  return (
    <main id="main-content">
      <PageHero
        label="JARED LUTZ / FOUNDER & SYSTEMS ARCHITECT"
        title="Built from the inside out."
        description="I learned the work inside the businesses. Then I built the systems around it."
      />
      <section className="container about-intro">
        <Label>THE THROUGH-LINE</Label>
        <p>
          Private markets taught me to respect the rules. Real estate taught me
          to follow the deal. Investor operations taught me to make the whole
          system work together.
        </p>
      </section>
      <section className="container timeline" aria-label="Professional journey">
        {chapters.map((c) => (
          <article key={c.year}>
            <div className="timeline-year">
              {c.year}
              <span />
            </div>
            <div>
              <p className="eyebrow">{c.tag}</p>
              <h2>{c.title}</h2>
              <p>{c.text}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="container section-small">
        <div className="editorial-note">
          <strong>Experience, with clear boundaries</strong>
          <p>
            This is my account of the work and what I learned. Mentorship is not
            a legal credential; I do not provide legal advice. Application
            preparation does not imply regulatory approval. Named people and
            organizations are professional-history references, not endorsements.
            Investor scale is self-reported business context.
          </p>
        </div>
        <Link href="/work" className="text-link">
          See the work behind the story <Arrow />
        </Link>
      </section>
      <CTA />
    </main>
  );
}
