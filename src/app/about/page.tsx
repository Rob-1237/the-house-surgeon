import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { PageTransition } from "@/components/PageTransition";
import { Placeholder } from "@/components/Placeholder";
import { Section } from "@/components/Section";
import { Tbd } from "@/components/Tbd";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet The House Surgeon, a licensed plumbing team serving South Indianapolis.",
};

// Page goal: build trust → call.
export default function AboutPage() {
  return (
    <PageTransition>
      <Hero
        eyebrow="About"
        title="Why we're called The House Surgeon"
        lead={<Tbd>Origin of the name, in Floyd&apos;s words. Team voice (&quot;we&quot;).</Tbd>}
        media={<Placeholder label="Team photo: Floyd's shoot" ratio="4 / 3" />}
      />
      <Section tone="alt" eyebrow="Our team" title="Licensed plumbers who explain what they find">
        <p className="muted">
          <Tbd>Team bio: years licensed, how we work, what we care about. No &quot;we&apos;re passionate about.&quot;</Tbd>
        </p>
      </Section>
      <Section title="Credentials">
        <ul>
          <li>
            Indiana plumbing contractor license # <Tbd>{site.license}</Tbd>
          </li>
          <li>
            Bonded &amp; insured: <Tbd>{site.bonding}</Tbd>
          </li>
          <li>
            Local recognition: <Tbd>names, years, logos</Tbd>
          </li>
        </ul>
      </Section>
      <CtaBand />
    </PageTransition>
  );
}
