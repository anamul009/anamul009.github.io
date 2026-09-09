"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const budgets = ["Under ¥500k", "¥500k — ¥1.5m", "¥1.5m — ¥4m", "¥4m+", "Not sure yet"];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  // Until a real Formspree id is pasted into lib/site.ts the form would post
  // into the void, so fall back to a plain mailto prompt instead.
  const configured = site.formspreeId !== "YOUR_FORM_ID";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!configured) return;

    const form = event.currentTarget;
    setStatus("sending");
    setError("");

    try {
      const response = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!response.ok) throw new Error(`Form service returned ${response.status}`);

      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border-2 border-ink bg-acid p-10 md:p-14">
        <p className="label">Message sent</p>
        <h2 className="display mt-4 text-[clamp(2rem,5vw,3.5rem)]">Thanks — talk soon.</h2>
        <p className="mt-4 max-w-md text-lg leading-relaxed">
          I reply to everything within two working days. If it is urgent, email me directly
          at {site.email}.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="label mt-8 rounded-full bg-ink px-6 py-3 text-paper transition-colors hover:bg-flame"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {!configured && (
        <p className="label rounded-2xl border-2 border-dashed border-flame p-5 leading-relaxed text-flame">
          Setup step: create a free form at formspree.io and paste its id into
          lib/site.ts. Until then this form cannot send.
        </p>
      )}

      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Your name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <Field label="Company (optional)" name="company" />

      <div>
        <label htmlFor="budget" className="label text-ink-soft">
          Budget range
        </label>
        <select
          id="budget"
          name="budget"
          defaultValue=""
          className="mt-3 w-full border-b-2 border-ink/25 bg-transparent py-4 text-lg outline-none transition-colors focus:border-flame"
        >
          <option value="">Select a range</option>
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="label text-ink-soft">
          What are you building?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="A sentence or two about the project, the timeline, and what success looks like."
          className="mt-3 w-full resize-y border-b-2 border-ink/25 bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-ink-soft/50 focus:border-flame"
        />
      </div>

      {/* Honeypot: bots fill hidden fields, humans never see this one. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {status === "error" && (
        <p role="alert" className="label text-flame">
          Could not send — {error}. Email {site.email} instead.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending" || !configured}
        className="label rounded-full bg-ink px-8 py-5 text-paper transition-all duration-300 hover:-translate-y-1 hover:bg-flame disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-ink"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="label text-ink-soft">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border-b-2 border-ink/25 bg-transparent py-4 text-lg outline-none transition-colors focus:border-flame"
      />
    </div>
  );
}
