import type { Metadata } from "next";
import { CTA } from "@/components/unlockd/CTA";
import { Hero } from "@/components/unlockd/Hero";
import { PlatformFit } from "@/components/unlockd/PlatformFit";
import { PlatformLayers } from "@/components/unlockd/PlatformLayers";

export const metadata: Metadata = {
  title: "Unlockd Platform",
  description:
    "Unlockd is the product and proprietary operating layer: a free synthetic-firm sandbox, a Factory deployment engine, and the Edge environment investment managers actually use.",
};

// Page job (design.md): platform depth for evaluators → ends at /sandbox.
export default function UnlockdPage() {
  return (
    <main id="main-content">
      <Hero />
      <PlatformLayers />
      <PlatformFit />
      <CTA />
    </main>
  );
}
