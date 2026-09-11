import type { Metadata } from "next";
import { CTA } from "@/components/how-it-works/CTA";
import { Clarification } from "@/components/how-it-works/Clarification";
import { FitSection } from "@/components/how-it-works/FitSection";
import { Founder } from "@/components/how-it-works/Founder";
import { Hero } from "@/components/how-it-works/Hero";
import { SystemFlow } from "@/components/how-it-works/SystemFlow";
import { SystemLayers } from "@/components/how-it-works/SystemLayers";
import { WhyItMatters } from "@/components/how-it-works/WhyItMatters";
import { LaunchSequence } from "@/components/home/LaunchSequence";
import { OperatingPrinciples } from "@/components/home/OperatingPrinciples";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How the system works",
  description: `${SITE.name} installs execution systems—not software products. How structured workflows, decisions, orchestration, and bounded AI run your operations once installed.`,
  openGraph: {
    title: `How the system works · ${SITE.name}`,
    description:
      "Once installed, workflows run as structured systems: triggers, decisions, actions, and clear outcomes—on top of what you already use.",
  },
};

export default function HowItWorksPage() {
  return (
    <main id="main-content">
      <Hero />
      <SystemFlow />
      <SystemLayers />
      <Clarification />
      <WhyItMatters />
      <OperatingPrinciples />
      <LaunchSequence />
      <Founder />
      <FitSection />
      <CTA />
    </main>
  );
}
