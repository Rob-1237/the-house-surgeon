"use client";

import { useEffect, useRef } from "react";
import styles from "./Steps.module.css";

export type Step = { title: string; body: string };

/**
 * Numbered process joined by a pipe. The steps (fittings, titles, text) fade in together with the
 * site's standard reveal; once the list is ~35vh into view the pipe draws left to right, segment
 * 1→2 first, then 2→3 as soon as it finishes. Hidden states are set by JS only, so everything stays
 * visible without it, and lists that start on screen skip the animation.
 */
export function Steps({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add("reveal");
    el.dataset.pipe = "armed";
    const reveal = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          reveal.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }, // same trigger as <Reveal>
    );
    const pipe = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.pipe = "draw";
          pipe.disconnect();
        }
      },
      { rootMargin: "0px 0px -35% 0px" }, // once the list's top is 35vh up from the viewport bottom
    );
    reveal.observe(el);
    pipe.observe(el);
    return () => {
      reveal.disconnect();
      pipe.disconnect();
    };
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
