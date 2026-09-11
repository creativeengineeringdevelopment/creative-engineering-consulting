import type { Metadata } from "next";
import { Hero } from "@/components/contact/Hero";
import { Prep } from "@/components/contact/Prep";
import { StartConversation } from "@/components/contact/StartConversation";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request an Operating System Diagnostic or ask about execution systems for your operations.",
  openGraph: {
    title: `Contact · ${SITE.name}`,
    description:
      "Book a structured operating-system diagnostic or start a conversation about how your operations execute.",
  },
};

// Page job (design.md): terminal conversion — booking or email, nothing else.
export default function ContactPage() {
  return (
    <main id="main-content">
      <Hero />
      <Prep />
      <StartConversation />
    </main>
  );
}
