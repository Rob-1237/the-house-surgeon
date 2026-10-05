import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { PageTransition } from "@/components/PageTransition";
import { PipBadge } from "@/components/PipBadge";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Reviews } from "@/components/Reviews";
import { Section } from "@/components/Section";
import { ServiceGrid } from "@/components/ServiceGrid";
import { TrustStrip } from "@/components/TrustStrip";
import { photos } from "@/content/photos";
import { services } from "@/content/services";
import { site } from "@/content/site";
import styles from "./page.module.css";

// Page goal: call, or book a visit.
export default function Home() {
  return (
    <PageTransition>
      <Hero
        size="home"
        eyebrow="Licensed plumbers · South Indianapolis"
        title="We find the problem, then we fix it right."
        lead="Pipe repair, gas lines, and water quality for homes across South Indianapolis and the surrounding area."
        actions={
          <>
            <a href={site.phone.href} className="btn btn--primary">
              Call {site.phone.display}
            </a>
            <Link href="/contact/#video" className="btn btn--secondary">
              Book a Video House Call
            </Link>
          </>
        }
        backdrop={<PipBadge preload />}
      />

      <TrustStrip />

      <Section
        id="services"
        eyebrow="What we do"
        title="Plumbing, gas, and water quality"
        intro="The work we know best, done by licensed plumbers who explain what they find."
      >
        <ServiceGrid services={services} />
      </Section>

      <Section id="video-call" tone="alt">
        <div className={styles.split}>
          <Reveal className={styles.splitCopy}>
            <p className="eyebrow">Video House Call</p>
            <h2>Show us the problem from your phone</h2>
            <p className="muted">
              Book a short video call and point your camera at the problem. One of our plumbers will tell you what
              you&apos;re looking at. If it&apos;s a quick fix, we&apos;ll walk you through it. If not, we show up
              with the right parts.
            </p>
            <Link href="/contact/#video" className="btn btn--primary">
              Book a Video House Call
            </Link>
          </Reveal>
          <Reveal className={styles.splitMedia} delay={120}>
            <Image
              src={photos.videoCall.src}
              alt={photos.videoCall.alt}
              width={photos.videoCall.width}
              height={photos.videoCall.height}
              sizes="(max-width: 48em) 100vw, 460px"
              className={styles.photo}
              style={{ objectPosition: photos.videoCall.position }}
            />
          </Reveal>
        </div>
      </Section>

      <Section id="reviews" eyebrow="Reviews" title="What our neighbors say">
        <Reviews />
      </Section>

      <CtaBand />
    </PageTransition>
  );
}
