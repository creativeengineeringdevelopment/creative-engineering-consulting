import type { Metadata } from "next";
import { Boundaries } from "@/components/sandbox/Boundaries";
import { CTA } from "@/components/sandbox/CTA";
import { Hero } from "@/components/sandbox/Hero";
import { Ownership } from "@/components/sandbox/Ownership";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Edge Sandbox",
  description:
    "Launch a complete synthetic investment firm free: three funds, 135 synthetic investors, pipeline, documents, communications, fund operations, and an AI operator — no credentials required.",
  openGraph: {
    title: `Free Edge Sandbox · ${SITE.name}`,
    description:
      "Explore a coherent investment-manager operating environment with synthetic data, then deploy into infrastructure you own.",
  },
};

// Page job (design.md): convert intent into a request → ends at /contact.
export default function SandboxPage() {
  return (
    <main id="main-content">
      <Hero />
      <Ownership />
      <Boundaries />
      <CTA />
    </main>
  );
}
