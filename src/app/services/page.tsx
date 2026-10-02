import type { Metadata } from "next";
import { AreaList } from "@/components/AreaList";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { PageTransition } from "@/components/PageTransition";
import { Placeholder } from "@/components/Placeholder";
import { Section } from "@/components/Section";
import { ServiceGrid } from "@/components/ServiceGrid";
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
        eyebrow="Services"
        title="Plumbing services"
        lead="Licensed plumbing for homes across South Indianapolis. Pick a service to see what's included."
      />
      <Section>
        <ServiceGrid services={services} />
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
          {/* Real map: static image with the 40-mile radius (no home-address pin). See PLUMBING_PLAN §0.3. */}
          <Placeholder label="Map: 40-mile service radius" ratio="4 / 3" />
          <div className={styles.towns}>
            <h3>Towns we serve</h3>
            <AreaList />
          </div>
        </div>
      </Section>

      <CtaBand title="Not sure which service you need?" lead="Call and describe it. We'll tell you." />
    </PageTransition>
  );
}
