import type { Metadata } from "next";
import { PageHero, CTA } from "@/components/Shared";
import { WorkCards } from "@/components/WorkCards";
export const metadata: Metadata = {
  title: "Selected work",
  description:
    "Selected experience in investor operations, tokenized-asset infrastructure and real-estate acquisition systems.",
};
export default function Work() {
  return (
    <main id="main-content">
      <PageHero
        label="SELECTED WORK / 2023–2026"
        title="The work behind the practice."
        description="Three operating environments. One recurring challenge: connecting the business rules, the data and the next action."
      />
      <section className="container section-small">
        <WorkCards />
        <div className="editorial-note">
          <strong>A note on these case studies</strong>
          <p>
            These accounts describe Jared’s work across operating roles, using
            his project records and professional history. They are not claims of
            current client relationships or endorsements. Business-scale figures
            are contextual; no unverified revenue lift, cost savings or
            investment returns are presented.
          </p>
        </div>
      </section>
      <CTA />
    </main>
  );
}
