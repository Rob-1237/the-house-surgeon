import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PageTransition } from "@/components/PageTransition";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Thanks", robots: { index: false } };

export default function ThanksPage() {
  return (
    <PageTransition>
      <Hero
        eyebrow="Message sent"
        title="Thanks, we've got it."
        lead={`We'll get back to you soon. If it's urgent, call ${site.phone.display}.`}
        actions={
          <Link href="/" className="btn btn--secondary">
            Back to home
          </Link>
        }
      />
    </PageTransition>
  );
}
