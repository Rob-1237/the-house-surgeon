import type { Metadata } from "next";
import { CalEmbed } from "@/components/CalEmbed";
import { ContactForm } from "@/components/ContactForm";
import { ContactOptions } from "@/components/ContactOptions";
import { FaqList } from "@/components/FaqList";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { IconBadge } from "@/components/Icon";
import { TrustStrip } from "@/components/TrustStrip";
import { contactPhotos, photos } from "@/content/photos";
import { PageTransition } from "@/components/PageTransition";
import { Pip } from "@/components/Pip";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { Steps } from "@/components/Steps";
import { Tbd } from "@/components/Tbd";
import { site } from "@/content/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact, Booking & Video House Calls",
  description: `Call ${site.phone.display}, book a visit online, or show a licensed plumber the problem on a live video call.`,
};

// Page goal: start a job, by whichever route suits the customer.
export default function ContactPage() {
  return (
    <PageTransition>
      <Hero
        size="home"
        eyebrow="Contact"
        title="Let's get it fixed"
        lead="Call, book online, show us on video, or send a message."
        actions={
          <>
            <a href={site.phone.href} className="btn btn--primary">
              Call {site.phone.display}
            </a>
            <a href="#book" className="btn btn--secondary">
              Book a visit
            </a>
          </>
        }
        photo={photos.contactHero}
      />

      <TrustStrip />

      <Section>
        <ContactOptions />
      </Section>

      <Section id="video" tone="alt">
        <div className={styles.split}>
          <Reveal className={styles.splitCopy}>
            <p className="eyebrow">Video House Call</p>
            <h2>Show us the problem from your phone</h2>
            <p className="muted">
              Just a short video call. Works on any phone, no app to install.
            </p>
            <p className="muted">
              Fee: <Tbd>decide whether this is shown (prices are off the site)</Tbd>
            </p>
            <a href="#book" className="btn btn--primary">
              Pick a time
            </a>
          </Reveal>
          <Reveal className={styles.splitMedia} delay={120}>
            <Image
              src={contactPhotos.videoHouseCall.src}
              alt={contactPhotos.videoHouseCall.alt}
              width={contactPhotos.videoHouseCall.width}
              height={contactPhotos.videoHouseCall.height}
              sizes="(max-width: 48em) 100vw, 460px"
              className={styles.photo}
              style={{ objectPosition: contactPhotos.videoHouseCall.position }}
            />
          </Reveal>
        </div>
        <div className={styles.steps}>
          <Steps
            steps={[
              { title: "Pick a time", body: "Choose a Video House Call below and tell us a little about the problem." },
              { title: "Get your link", body: "We'll text and email you a link. Tap it at your appointment time." },
              { title: "Show us", body: "Point your camera at the problem. We'll tell you what's going on and what comes next." },
            ]}
          />
        </div>
        <FaqList
          faqs={[
            { q: "Do I need an iPhone?", a: "No. Any smartphone or computer with a camera works, right in the browser." },
            { q: "What if it can't be fixed over video?", a: "Then we'll schedule a visit, and we'll already know what to bring." },
          ]}
        />
      </Section>

      <section id="book" className="section" aria-labelledby="book-heading">
        <div className="container">
          <div className={styles.bookHead}>
            <Reveal className={styles.bookCopy}>
              <p className="eyebrow">Book online</p>
              <h2 id="book-heading">Book a visit or a Video House Call</h2>
              <p className="muted">Pick the kind of appointment, then a time that works for you.</p>
            </Reveal>
            <Reveal className={styles.bookPip} delay={120}>
              <Pip pose="drips" sizes="(max-width: 48em) 9rem, 15rem" />
            </Reveal>
          </div>
          <CalEmbed calLink={site.cal.profile} label="service visit + Video House Call" />
        </div>
      </section>

      <Section id="message" tone="alt" eyebrow="Send a message" title="Not ready to book? Tell us what's going on.">
        <div className={styles.layout}>
          <ContactForm />
          <aside className={`on-dark ${styles.aside}`} aria-label="Other ways to reach us">
            <IconBadge name="phone" tone="light" />
            <h3>Prefer to talk?</h3>
            <p>
              <a href={site.phone.href}>{site.phone.display}</a>
            </p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p className="muted">
              Hours: <Tbd>{site.hours}</Tbd>
            </p>
          </aside>
        </div>
      </Section>

      <Section id="emergency" title="Water where it shouldn't be?" intro={<>Call us now at <a href={site.phone.href}>{site.phone.display}</a>. While you wait:</>}>
        <Steps
          steps={[
            { title: "Shut off the water", body: "Find your main shut-off valve and turn it clockwise until it stops." },
            { title: "Smell gas? Get out first", body: "Leave the house, then call your gas utility's emergency line or 911. Then call us." },
            { title: "Protect what you can", body: "Move valuables away from the water and take photos for insurance." },
          ]}
        />
      </Section>
    </PageTransition>
  );
}
