"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import { services } from "@/content/services";
import { site } from "@/content/site";
import styles from "./ContactForm.module.css";

/**
 * Netlify Forms with a static export: the blueprint lives in public/__forms.html and this
 * form POSTs multipart data to it (multipart because of the optional photo upload).
 */
export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/__forms.html", { method: "POST", body: new FormData(e.currentTarget) });
      if (!res.ok) throw new Error(String(res.status));
      router.push("/thanks/");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form name="contact" className={styles.form} onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <p className="visually-hidden">
        <label>
          Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className={styles.row}>
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
      </div>
      <div className={styles.row}>
        <Field label="Email" name="email" type="email" autoComplete="email" hint="Optional" />
        <Field label="ZIP code" name="zip" inputMode="numeric" autoComplete="postal-code" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="service">What do you need help with?</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {services.map((s) => (
            <option key={s.slug}>{s.name}</option>
          ))}
          <option>Something else</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Tell us what&apos;s going on</label>
        <textarea id="message" name="message" rows={5} required />
      </div>

      <div className={styles.field}>
        <label htmlFor="photo">
          Add a photo of the problem <span className="muted">(optional)</span>
        </label>
        <input id="photo" name="photo" type="file" accept="image/*" />
        <p className={styles.hint}>A quick photo helps us bring the right parts.</p>
      </div>

      <div className={styles.submit}>
        <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "error" && (
          <p role="alert" className={styles.error}>
            Something went wrong sending your message. Please call us at{" "}
            <a href={site.phone.href}>{site.phone.display}</a>.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  hint,
  ...input
}: { label: string; name: string; hint?: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={styles.field}>
      <label htmlFor={name}>
        {label} {hint && <span className="muted">({hint.toLowerCase()})</span>}
      </label>
      <input id={name} name={name} {...input} />
    </div>
  );
}
