"use client";

import { useEffect, useRef } from "react";
import styles from "./Steps.module.css";

export type Step = { title: string; body: string };

/**
 * Numbered process joined by a pipe. Plays once, when the list is ~45vh into view: step 1 appears,
 * the pipe fills to step 2, step 2 appears, then the pipe fills to step 3. The hidden state is set
 * by JS only, so the steps stay visible without it (and for lists that start on screen).
 */
export function Steps({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.getBoundingClientRect().top < window.innerHeight * 0.55) return;

    el.dataset.state = "armed";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.state = "play";
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -45% 0px" }, // fires once the top is 45% of the viewport up from the bottom
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <ol ref={ref} className={styles.steps}>
      {steps.map((step, i) => (
        <li key={step.title} className={styles.step} style={{ "--i": i } as React.CSSProperties}>
          <span className={styles.num} aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className={styles.title}>{step.title}</h3>
          <p className="muted">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
