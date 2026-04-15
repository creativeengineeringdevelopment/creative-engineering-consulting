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
  title: "System Audit",
  description:
    "Structured diagnosis of how your business executes: how operations actually run, where execution breaks, and what should be system-driven—not a sales call.",
  openGraph: {
    title: `System Audit · ${SITE.name}`,
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
