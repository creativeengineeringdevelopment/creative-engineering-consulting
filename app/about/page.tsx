import type { Metadata } from "next";
import Link from "next/link";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { PageHero, CTA, Label, Arrow } from "@/components/Shared";
export const metadata: Metadata = {
  title: "Jared Lutz — The story",
  description:
    "From tokenized assets and securities workflows to real-estate acquisitions and AI-enabled investor operations. The experience behind Creative Engineering.",
};
export default function About() {
  return (
    <main id="main-content">
      <PageHero
        label="JARED LUTZ / FOUNDER & SYSTEMS ARCHITECT"
        title="I built. I learned. Then I went deeper."
        description="From launching a crypto trading app to connecting the operations of an investor business. Each chapter revealed the next problem worth understanding."
      />
      <JourneyTimeline detailed />
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
      <section className="container section" id="hospitality">
        <Label>HOSPITALITY & DIGITAL OPERATIONS</Label>
        <h2>
          Another operating lens: <em>Mariposa.</em>
        </h2>
        <p className="lede">
          As a general partner at Mariposa Beach Resort, I bring the same
          systems thinking to hospitality.
        </p>
        <p>
          My work spans digital systems and investor operations, including
          website and content-management infrastructure and guest-experience
          applications. It connects the business behind the stay with the
          experience a guest actually has.
        </p>
      </section>
      <CTA />
    </main>
  );
}
