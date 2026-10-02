import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { PageTransition } from "@/components/PageTransition";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { getService, services } from "@/content/services";
import { site } from "@/content/site";
import styles from "./page.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return { title: `${service.name} in South Indianapolis`, description: service.summary };
}

// Page goal: request this service.
export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <PageTransition>
      <Hero
        eyebrow="Services"
        title={service.name}
        lead={service.intro}
        actions={
          <>
            <a href={site.phone.href} className="btn btn--primary">
              Call {site.phone.display}
            </a>
            <Link href="/contact/" className="btn btn--secondary">
              Request service
            </Link>
          </>
        }
        media={<Placeholder label={`Photo: ${service.name} job`} ratio="4 / 3" />}
      />

      <Section tone="alt" title="What's included" id="included">
        <ul className={styles.includes}>
          {service.includes.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 60}>
              {item}
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* TODO: per-service FAQ + a short real job story once Floyd's photos arrive */}

      <Section title="Other services" id="other">
        <ul className={styles.others}>
          {others.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}/`}>{s.name}</Link>
            </li>
          ))}
          <li>
            <Link href="/services/">All services</Link>
          </li>
        </ul>
      </Section>

      <CtaBand title={`Need help with ${service.name.toLowerCase()}?`} />
    </PageTransition>
  );
}
