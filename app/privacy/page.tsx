import type { Metadata } from "next";
import { PageHero } from "@/components/Shared";
import { CONTACT_EMAIL } from "@/lib/constants";
export const metadata: Metadata = { title: "Privacy & site information" };
export default function Privacy() {
  return (
    <main id="main-content">
      <PageHero
        label="SITE INFORMATION"
        title="A straightforward first contact."
        description="How this website handles inquiries and how to read the experience presented here."
      />
      <article className="container legal-copy section-small">
        <h2>Inquiry preparation</h2>
        <p>
          The inquiry form prepares text locally in your browser. It does not
          submit your entries to a website database or email service. Selecting
          “Open email draft” passes the prepared text to your configured email
          application; you decide whether to send it. Copying an inquiry places
          its text on your device clipboard.
        </p>
        <h2>Email correspondence</h2>
        <p>
          If you email Jared, your message and contact details are handled
          through the email services used by you and the recipient, and used to
          discuss and respond to your inquiry. Do not include passwords, access
          tokens, confidential investor records or other sensitive documents in
          an initial inquiry.
        </p>
        <h2>Hosting</h2>
        <p>
          This website is hosted on Vercel, which may process technical request
          information to deliver and secure the site. This implementation does
          not add advertising trackers or an analytics SDK.
        </p>
        <h2>Professional history</h2>
        <p>
          Case studies describe Jared’s experience across operating roles, based
          on his records and account. Mention of a person or organization does
          not imply endorsement, an active client relationship or approval to
          offer its services. No legal advice, regulatory approval or investment
          performance is represented.
        </p>
        <h2>Software engagements</h2>
        <p>
          Website descriptions are an introduction to the offering. Delivery
          scope, source access, intellectual-property rights, third-party
          dependencies, price and support are established in a written
          agreement.
        </p>
        <h2>Questions</h2>
        <p>
          For questions about this site or information you have sent, email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </article>
    </main>
  );
}
