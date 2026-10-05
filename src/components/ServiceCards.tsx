import type { Service } from "@/content/services";
import { serviceCardPhotos } from "@/content/photos";
import type { IconName } from "./Icon";
import { PhotoCard } from "./PhotoCard";
import { Reveal } from "./Reveal";
import styles from "./ServiceCards.module.css";

/** Services-page cards (the home page keeps `ServiceGrid`): photo cards, name only, no link or hover. */
export function ServiceCards({ services }: { services: Service[] }) {
  return (
    <ul className={styles.grid}>
      {services.map((s, i) => (
        <Reveal as="li" key={s.slug} delay={(i % 3) * 80} className={styles.item}>
          <PhotoCard
            photo={serviceCardPhotos[s.slug]}
            icon={s.slug as IconName}
            title={s.name}
            sizes="(max-width: 36em) 100vw, (max-width: 60em) 50vw, 24rem"
          />
        </Reveal>
      ))}
    </ul>
  );
}
