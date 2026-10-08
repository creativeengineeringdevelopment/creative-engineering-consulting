"use client";
import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";
export function ContactForm() {
  const [preview, setPreview] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  function prepare(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    setPreview(
      `Hi Jared,\n\nI'd like to discuss a workflow for ${String(d.get("company")).trim()}.\n\nName: ${String(d.get("name")).trim()}\nWork email: ${String(d.get("email")).trim()}\nInterest: ${d.get("interest")}\n\nThe workflow:\n${String(d.get("workflow")).trim()}\n\nTools involved:\n${String(d.get("tools")).trim() || "To discuss"}\n\nThanks,\n${String(d.get("name")).trim()}`,
    );
    setCopied(false);
    setCopyError(false);
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(preview);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <div className="contact-form-wrap">
      <form
        onSubmit={prepare}
        onChange={() => {
          setPreview("");
          setCopied(false);
          setCopyError(false);
        }}
        className="contact-form"
      >
        <div className="form-row">
          <label>
            Your name
            <input name="name" autoComplete="name" required maxLength={120} />
          </label>
          <label>
            Company
            <input
              name="company"
              autoComplete="organization"
              required
              maxLength={160}
            />
          </label>
        </div>
        <label>
          Your email
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={200}
          />
        </label>
        <label>
          What would you like to discuss?
          <select name="interest">
            <option>Workflow implementation</option>
            <option>System assessment</option>
            <option>Codebase / platform purchase</option>
            <option>Something else</option>
          </select>
        </label>
        <label>
          The workflow
          <textarea
            name="workflow"
            required
            maxLength={2500}
            rows={4}
            placeholder="What happens today, and where does it get stuck?"
          />
        </label>
        <label>
          Tools involved <span className="optional">(optional)</span>
          <input
            name="tools"
            maxLength={500}
            placeholder="Your CRM, documents, communication tools…"
          />
        </label>
        <p className="form-privacy">
          This form prepares an email on your device. Nothing is submitted to
          this website. Please leave out credentials, investor records and other
          confidential information.
        </p>
        <button className="button button-primary" type="submit">
          Prepare my inquiry <span aria-hidden="true">↗</span>
        </button>
      </form>
      {preview && (
        <div
          className="inquiry-preview"
          role="region"
          aria-label="Prepared inquiry"
        >
          <p className="eyebrow">READY TO REVIEW · NOT SENT</p>
          <h3>Your inquiry is prepared.</h3>
          <p>
            Open it in your email app, review it, then send. Or copy the text
            into your preferred email service.
          </p>
          <textarea
            aria-label="Prepared email text"
            readOnly
            value={preview}
            rows={8}
          />
          <div className="button-row">
            <a
              className="button button-primary"
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Creative Engineering — workflow inquiry")}&body=${encodeURIComponent(preview)}`}
            >
              Open email draft ↗
            </a>
            <button
              type="button"
              className="button button-secondary"
              onClick={copy}
            >
              {copied ? "Copied ✓" : "Copy inquiry"}
            </button>
          </div>
          <p role="status">
            {copyError
              ? "Copy wasn’t available. Select the prepared text above and copy it manually."
              : copied
                ? "Inquiry copied. Paste it into an email to " +
                  CONTACT_EMAIL +
                  "."
                : "Send to " + CONTACT_EMAIL}
          </p>
        </div>
      )}
    </div>
  );
}
