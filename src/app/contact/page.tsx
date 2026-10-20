import type { Metadata } from "next";
import { ContactOptions } from "@/components/ContactOptions";
import { Hero } from "@/components/Hero";
import { JobberEmbed } from "@/components/JobberEmbed";
import { TrustStrip } from "@/components/TrustStrip";
import { photos } from "@/content/photos";
import { PageTransition } from "@/components/PageTransition";
import { Pip } from "@/components/Pip";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Steps } from "@/components/Steps";
import { site } from "@/content/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact, Booking & Video House Calls",
  description: `Call ${site.phone.display}, book a visit online, or show a licensed plumber the problem on a live video call.`,
};

// Page goal: two routes only. Emergency → call. Planned job → schedule it in Jobber.
export default function ContactPage() {
  return (
    <PageTransition>
      <Hero
        size="home"
        eyebrow="Contact"
        title="Let's get it fixed"
        lead="Emergency? Call us now. Planned job? Schedule it online."
        actions={
          <>
            <a href={site.phone.href} className="btn btn--primary">
              Call {site.phone.display}
            </a>
            <a href="#schedule" className="btn btn--secondary">
              Schedule a job
            </a>
          </>
        }
        photo={photos.contactHero}
      />

      <TrustStrip />

      <Section tone="alt">
        <ContactOptions />
      </Section>

      <section id="schedule" className="section" aria-labelledby="schedule-heading">
        <div className="container">
          <div className={styles.bookHead}>
            <Reveal className={styles.bookCopy}>
              <p className="eyebrow">Book online</p>
              <h2 id="schedule-heading">Schedule a job</h2>
              <p className="muted">
                Pick the job and a time that works for you. Not sure what&apos;s wrong? Choose a Video House
                Call and show us the problem from your phone.
              </p>
            </Reveal>
            <Reveal className={styles.bookPip} delay={120}>
              <Pip pose="drips" sizes="(max-width: 48em) 9rem, 15rem" />
            </Reveal>
          </div>
          <JobberEmbed />
        </div>
      </section>

      <Section id="emergency" tone="alt" title="Water where it shouldn't be?" intro={<>Three steps, in this order. Keep our number handy: <a href={site.phone.href}>{site.phone.display}</a>.</>}>
        <Steps
          steps={[
            { title: "Shut off the water", body: "Find your main shut-off valve and turn it clockwise until it stops." },
            { title: "Protect what you can", body: "Move valuables away from the water and take photos for insurance." },
            { title: "Call us", body: `${site.phone.display}. We'll take it from there.` },
          ]}
        />
      </Section>
    </PageTransition>
  );
}
