import { Reveal } from "./Reveal";
import styles from "./Steps.module.css";

export type Step = { title: string; body: string };

/** Numbered process. Candidate for the bespoke element (§4.5: hand-drawn "how a visit works"). */
export function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className={styles.steps}>
      {steps.map((step, i) => (
        <Reveal as="li" key={step.title} delay={i * 100} className={styles.step}>
          <span className={styles.num} aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className={styles.title}>{step.title}</h3>
          <p className="muted">{step.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}
