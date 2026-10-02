import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { PageTransition } from "@/components/PageTransition";
import { Pip } from "@/components/Pip";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { Reviews } from "@/components/Reviews";
import { Section } from "@/components/Section";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Steps } from "@/components/Steps";
import { TrustStrip } from "@/components/TrustStrip";
import { AreaList } from "@/components/AreaList";
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
        note={
          <>
            Water where it shouldn&apos;t be? <a href={site.phone.href}>Call us now</a>
          </>
        }
        media={<Placeholder label="Hero loop: Floyd's footage (hands, tools, water)" ratio="4 / 5" />}
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

      <Section id="video-call" tone="soft">
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
            <Pip pose="stethoscope" width={280} />
          </Reveal>
        </div>
      </Section>

      <Section id="how" eyebrow="How it works" title="Straightforward from the first call">
        <Steps
          steps={[
            { title: "Call or book", body: "Tell us what's going on. A photo of the problem helps." },
            { title: "We diagnose", body: "On a video call or in person, we find the cause and explain it plainly." },
            { title: "We fix it", body: "Clean, code-compliant work by licensed plumbers." },
          ]}
        />
      </Section>

      <Section id="reviews" tone="alt" eyebrow="Reviews" title="What our neighbors say">
        <Reviews />
      </Section>

      <Section
        id="area"
        eyebrow="Service area"
        title="South Indianapolis and about 40 miles around"
        intro={`From ${site.serviceArea.center} north to ${site.serviceArea.northernLimit}, east and west across the metro.`}
      >
        <Reveal className={styles.area}>
          <AreaList />
          <Link href="/services/#area">See the service area map</Link>
        </Reveal>
      </Section>

      <CtaBand />
    </PageTransition>
  );
}
