import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Label } from "@/components/Shared";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT_EMAIL } from "@/lib/constants";
export const metadata: Metadata = {
  title: "Let’s talk",
  description:
    "Talk with Jared Lutz about a workflow, an implementation or a software purchase. Prepare an inquiry or email directly.",
};
export default function Contact() {
  return (
    <main id="main-content">
      <PageHero
        label="START A CONVERSATION"
        title="What should work better?"
        description="Tell me about one workflow. We’ll start with the business problem, the systems involved and what a useful outcome would look like."
      />
      <section className="container contact-grid section-small">
        <aside>
          <Label>YOU’LL TALK WITH JARED</Label>
          <h2>
            Direct access.
            <br />
            <em>Clear next steps.</em>
          </h2>
          <p>
            I personally scope engagements and lead the architecture. The first
            conversation is about fit; a detailed assessment or implementation
            is scoped separately.
          </p>
          <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL} ↗
          </a>
          <p className="caption">
            Prefer your own email app? Send a short description directly to the
            address above.
          </p>
          <div className="contact-expect">
            <strong>Helpful context</strong>
            <ul>
              <li>The workflow and who owns it</li>
              <li>Where time or information gets lost</li>
              <li>The systems you use today</li>
              <li>Your timing and constraints</li>
            </ul>
          </div>
          <Link className="text-link" href="/how-it-works">
            Review the offering →
          </Link>
        </aside>
        <ContactForm />
      </section>
    </main>
  );
}
