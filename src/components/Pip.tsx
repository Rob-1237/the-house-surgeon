import Image from "next/image";

const poses = {
  stethoscope: { src: "/images/pip/pip-stethoscope.webp", alt: "Pip, The House Surgeon's pipe-wrench mascot, holding up a stethoscope" },
  wink: { src: "/images/pip/pip-wink.webp", alt: "Pip, The House Surgeon's pipe-wrench mascot, winking with a thumbs up" },
} as const;

/**
 * Mascot. Secondary brand tier only (video page, 404, about) — never nav or favicon.
 * Current art is the AI draft; swap for Rob's Figma redraw (PLUMBING_PLAN §4.2).
 */
export function Pip({ pose = "stethoscope", width = 320 }: { pose?: keyof typeof poses; width?: number }) {
  const p = poses[pose];
  return <Image src={p.src} alt={p.alt} width={width} height={Math.round(width * 1.5)} />;
}
