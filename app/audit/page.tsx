import type { Metadata } from "next";
import { CTA } from "@/components/audit/CTA";
import { Hero } from "@/components/audit/Hero";
import { WhatHappensAfter } from "@/components/audit/WhatHappensAfter";
import { WhatThisIs } from "@/components/audit/WhatThisIs";
import { WhatWeLookFor } from "@/components/audit/WhatWeLookFor";
import { WhatYouGet } from "@/components/audit/WhatYouGet";
import { WhoItsFor } from "@/components/audit/WhoItsFor";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Operating System Diagnostic",
  description:
    "A paid one- to two-week diagnostic that maps operating truth, owner dependencies, proof gaps, and a 90-day build roadmap before broad AI automation.",
  openGraph: {
    title: `Operating System Diagnostic · ${SITE.name}`,
    description:
      "Map how your operations run, find failure points, and prioritize what should be system-driven.",
  },
};

export default function AuditPage() {
  return (
    <main id="main-content">
      <Hero />
      <WhatThisIs />
      <WhatYouGet />
      <WhatWeLookFor />
      <WhatHappensAfter />
      <WhoItsFor />
      <CTA />
    </main>
  );
}
