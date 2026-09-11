import { CustomerJourney } from "@/components/home/CustomerJourney";
import { EdgeFleet } from "@/components/home/EdgeFleet";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Founder } from "@/components/home/Founder";
import { Hero } from "@/components/home/Hero";
import { Offers } from "@/components/home/Offers";
import { Problem } from "@/components/home/Problem";
import { ProofCaseStudy } from "@/components/home/ProofCaseStudy";

// Funnel intent (see design.md): Hero → Problem → Product → How it works →
// Proof → Offers → CTA. One job: earn the sandbox click.
export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Problem />
      <EdgeFleet />
      <CustomerJourney />
      <ProofCaseStudy />
      <Offers />
      <Founder />
      <FinalCTA />
    </main>
  );
}
