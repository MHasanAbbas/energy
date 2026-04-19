"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="surface-card p-6 md:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="field-label">
          Name
          <input type="text" placeholder="Your name" className="field-input" />
        </label>
        <label className="field-label">
          Company
          <input type="text" placeholder="Company or organisation" className="field-input" />
        </label>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="field-label">
          Email
          <input type="email" placeholder="name@company.com" className="field-input" />
        </label>
        <label className="field-label">
          Location
          <input type="text" placeholder="Governorate or project area" className="field-input" />
        </label>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="field-label">
          Project Stage
          <select className="field-input">
            <option>Early feasibility</option>
            <option>Technical definition</option>
            <option>Delivery planning</option>
            <option>Operational review</option>
          </select>
        </label>
        <label className="field-label">
          Primary Requirement
          <select className="field-input">
            <option>Solar PV</option>
            <option>Wind energy</option>
            <option>Hybrid system</option>
            <option>Battery storage</option>
            <option>Containerized units</option>
            <option>Consultancy / O&amp;M</option>
          </select>
        </label>
      </div>
      <label className="field-label mt-4">
        Project Brief
        <textarea
          placeholder="Share the operating context, timeline and what the project needs to solve."
          className="field-input min-h-44 resize-y"
        />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0f6666_0%,#0e3744_100%)] px-5 text-sm font-extrabold tracking-[-0.02em] text-white shadow-[0_16px_42px_rgba(12,34,42,0.22)] transition hover:-translate-y-0.5"
      >
        Submit Project Brief
      </button>
      <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
        Prototype form only. Connect this action to a CRM, email route or server action in production.
      </p>
      {submitted ? (
        <p className="mt-3 text-sm font-semibold text-[var(--gulf-teal)]">
          Thank you. Your project brief has been captured for prototype review.
        </p>
      ) : null}
    </form>
  );
}
