"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  includeSmsConsent?: boolean;
};

export default function ContactForm({
  includeSmsConsent = false,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitted(true);
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form contact-section reveal"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="field-group">
          <span>Name</span>
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className="field-group">
          <span>Phone</span>
          <input type="tel" name="phone" required autoComplete="tel" />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="field-group">
          <span>Email</span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
        <label className="field-group">
          <span>Subject</span>
          <input type="text" name="subject" required />
        </label>
      </div>

      <label className="field-group">
        <span>Message</span>
        <textarea name="message" rows={5} required />
      </label>

      {includeSmsConsent ? (
        <fieldset className="space-y-3 rounded-2xl border border-[--line] bg-[--paper-soft] p-4">
          <legend className="px-1 text-sm font-semibold text-[--ink-strong]">
            SMS Consent (Optional)
          </legend>
          <label className="radio-row">
            <input type="radio" name="smsConsent" value="yes" />
            <span className="radio-row-copy">
              I consent to receive conversational and informational SMS from
              Safa Sanctuary Inc related to my inquiry or services. Reply STOP
              to opt out, and HELP for support. Message and data rates may
              apply.
            </span>
          </label>
          <label className="radio-row">
            <input type="radio" name="smsConsent" value="no" />
            <span className="radio-row-copy">
              I do not consent to receive SMS messages.
            </span>
          </label>
        </fieldset>
      ) : null}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p
          className={`confidential-note transition-colors ${
            submitted ? "text-[--accent-strong]" : "text-[--ink-soft]"
          }`}
          role="status"
        >
          {submitted
            ? "Thank you for submitting your inquiry. We look forward to connecting soon."
            : "All information is treated confidentially."}
        </p>
        <button type="submit" className="btn-primary w-full justify-center sm:w-auto">
          Submit
        </button>
      </div>
    </form>
  );
}
