import type { Metadata } from "next";
import { CTA } from "@/components/pricing/CTA";
import { EconomicRule } from "@/components/pricing/EconomicRule";
import { Hero } from "@/components/pricing/Hero";
import { OfferGrid } from "@/components/pricing/OfferGrid";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Free Edge sandbox at $0, Edge Plus subscription, Operating System Diagnostic, Custom Operating System, and Managed Operating Layer — a product-led ladder with services at the high-value end.",
};

// Page job (design.md): convert intent into plan selection.
// Free → /sandbox; paid → /contact (diagnostic cross-links /audit).
export default function PricingPage() {
  return (
    <main id="main-content">
      <Hero />
      <OfferGrid />
      <EconomicRule />
      <CTA />
    </main>
  );
}
