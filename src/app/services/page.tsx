import type { Metadata } from "next";
import { AreaList } from "@/components/AreaList";
import { AreaMap } from "@/components/AreaMap";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { PageTransition } from "@/components/PageTransition";
import { Pip } from "@/components/Pip";
import { photos } from "@/content/photos";
import { Section } from "@/components/Section";
import { ServiceCards } from "@/components/ServiceCards";
import { notOffered, services } from "@/content/services";
import { site } from "@/content/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Plumbing Services & Service Area",
  description:
    "Pipe repair, gas lines, water quality, leak detection, water heaters, and fixtures within about 40 miles of South Indianapolis.",
};

// Page goal: "do you do this, and do you come to me?" → yes → call or book.
export default function ServicesPage() {
  return (
    <PageTransition>
      <Hero
        size="home"
        eyebrow="Services"
        title="Plumbing services"
        lead="Licensed plumbing for homes across South Indianapolis. Pick a service to see what's included."
        actions={
          <>
            <a href={site.phone.href} className="btn btn--primary">
              Call {site.phone.display}
            </a>
            <a href="#area" className="btn btn--secondary">
              Service area
            </a>
          </>
        }
        photo={photos.indianapolis}
      />

      <TrustStrip />
      <Section>
        <ServiceCards services={services} />
        <p className={`muted ${styles.note}`}>
          We don&apos;t offer: {notOffered.join(", ").toLowerCase()}.
        </p>
      </Section>

      <Section
        id="area"
        tone="alt"
        eyebrow="Service area"
        title="Do we come to you?"
        intro={`If you're within about ${site.serviceArea.radiusMiles} miles of ${site.serviceArea.center}, as far north as ${site.serviceArea.northernLimit}, yes.`}
      >
        <div className={styles.area}>
          {/* Centred on downtown Indianapolis, no pin (no home address, PLUMBING_PLAN §0.3). */}
          <AreaMap className={styles.map} title={`Map of our service area around ${site.serviceArea.center}`} />
          <div className={styles.towns}>
            <h3>Towns we serve</h3>
            <AreaList />
          </div>
        </div>
      </Section>

      <CtaBand
        title="Not sure which service you need?"
        lead="Call and describe it. We'll tell you."
        media={<Pip pose="walking" sizes="(max-width: 60em) 9rem, 17rem" />}
      />
    </PageTransition>
  );
}
