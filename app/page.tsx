import { FinalCTA } from "@/components/home/FinalCTA";
import { Founder } from "@/components/home/Founder";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { IdealClients } from "@/components/home/IdealClients";
import { Problem } from "@/components/home/Problem";
import { WhatWeInstall } from "@/components/home/WhatWeInstall";
import { WhyDifferent } from "@/components/home/WhyDifferent";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Problem />
      <WhatWeInstall />
      <HowItWorks />
      <IdealClients />
      <WhyDifferent />
      <Founder />
      <FinalCTA />
    </main>
  );
}
