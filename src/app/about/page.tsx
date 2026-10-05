import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { PageTransition } from "@/components/PageTransition";
import { Section } from "@/components/Section";
import { Tbd } from "@/components/Tbd";
import { TrustStrip } from "@/components/TrustStrip";
import { credentials } from "@/content/credentials";
import { photos } from "@/content/photos";
import { site } from "@/content/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet The House Surgeon, a licensed plumbing team serving South Indianapolis.",
};

// Page goal: build trust → call.
export default function AboutPage() {
  return (
    <PageTransition>
      <Hero
        size="home"
        eyebrow="About"
        title="Why we're called The House Surgeon"
        lead={<Tbd>Origin of the name, in Floyd&apos;s words. Team voice (&quot;we&quot;).</Tbd>}
        actions={
          <>
            <a href={site.phone.href} className="btn btn--primary">
              Call {site.phone.display}
            </a>
            <Link href="/contact/#book" className="btn btn--secondary">
              Book a visit
            </Link>
          </>
        }
        photo={photos.aboutHero}
      />

      <TrustStrip />
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
        <ul className={styles.logos}>
          {credentials.map((c) => (
            <li key={c.name} className={styles.logo}>
              <Image src={c.logo} alt={c.name} width={c.width} height={c.height} />
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </PageTransition>
  );
}
