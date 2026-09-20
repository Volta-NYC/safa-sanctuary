"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  includeSmsConsent?: boolean;
};

export default function ContactForm({
  includeSmsConsent = false,
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setFormError("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result: {
        message?: string;
        errors?: Record<string, string>;
      } = await response.json().catch(() => ({}));

      if (!response.ok) {
        setFieldErrors(result.errors ?? {});
        setFormError(result.message ?? "We could not send your inquiry. Please try again.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setFormError("We could not send your inquiry. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section
        className="contact-form contact-section contact-confirmation"
        role="status"
        aria-live="polite"
      >
        <div>
          <span className="contact-confirmation-icon" aria-hidden="true">
            ✓
          </span>
          <h2>Inquiry received</h2>
          <p>
            Thank you for reaching out. Your inquiry has been sent, and a member
            of our team will follow up within 24–48 hours.
          </p>
          <button
            type="button"
            className="btn-primary"
            onClick={() => setStatus("idle")}
          >
            Send another inquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form contact-section reveal"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="field-group">
          <span>Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
          />
          {fieldErrors.name ? (
            <p id="name-error" className="form-field-error">
              {fieldErrors.name}
            </p>
          ) : null}
        </label>
        <label className="field-group">
          <span>Phone</span>
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
          />
          {fieldErrors.phone ? (
            <p id="phone-error" className="form-field-error">
              {fieldErrors.phone}
            </p>
          ) : null}
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="field-group">
          <span>Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email ? (
            <p id="email-error" className="form-field-error">
              {fieldErrors.email}
            </p>
          ) : null}
        </label>
        <label className="field-group">
          <span>Subject</span>
          <input
            type="text"
            name="subject"
            required
            aria-invalid={Boolean(fieldErrors.subject)}
            aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
          />
          {fieldErrors.subject ? (
            <p id="subject-error" className="form-field-error">
              {fieldErrors.subject}
            </p>
          ) : null}
        </label>
      </div>

      <label className="field-group">
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
        />
        {fieldErrors.message ? (
          <p id="message-error" className="form-field-error">
            {fieldErrors.message}
          </p>
        ) : null}
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

      {fieldErrors.smsConsent ? (
        <p className="form-field-error" role="alert">
          {fieldErrors.smsConsent}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p
          className={`confidential-note transition-colors ${
            status === "error" ? "text-red-700" : "text-[--ink-soft]"
          }`}
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {status === "sending"
            ? "Sending your inquiry..."
            : status === "error"
              ? formError
              : "All information is treated confidentially."}
        </p>
        <button
          type="submit"
          className="btn-primary w-full justify-center sm:w-auto"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
