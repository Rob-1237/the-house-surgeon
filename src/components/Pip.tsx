import Image from "next/image";

/**
 * Pip, the mascot. One pose per page (DESIGN.md → Imagery). Never in the nav or favicon.
 * Art is Rob's v2 draft; swap files in /public/images/pip when the Figma redraw lands.
 */
export const pipPoses = {
  /** Home hero (inside PipBadge): full figure, mirrored in the file to face left; the circle crops his legs. */
  standing: { src: "/images/pip/pip-standing-stethoscope.webp", w: 800, h: 1359, alt: "Pip, The House Surgeon's pipe-wrench mascot, holding up a stethoscope" },
  /** Former home pose (waist-up crop). Kept for reference; the hard waist cut showed inside the circle. */
  bust: { src: "/images/pip/pip-bust-stethoscope.webp", w: 898, h: 1128, alt: "Pip, The House Surgeon's pipe-wrench mascot, holding up a stethoscope" },
  /** Services → closing CTA band */
  walking: { src: "/images/pip/pip-walking-toolbox.webp", w: 640, h: 963, alt: "Pip, The House Surgeon's pipe-wrench mascot, walking with a toolbox and giving a thumbs up" },
  /** Contact → booking section */
  drips: { src: "/images/pip/pip-drips.webp", w: 640, h: 977, alt: "Pip, The House Surgeon's pipe-wrench mascot, catching two leaking water drops" },
  /** 404 */
  wink: { src: "/images/pip/pip-wink.webp", w: 520, h: 881, alt: "Pip, The House Surgeon's pipe-wrench mascot, winking with a thumbs up" },
} as const;

export type PipPose = keyof typeof pipPoses;

export function Pip({
  pose,
  className,
  preload,
  sizes = "(max-width: 48em) 60vw, 360px",
}: {
  pose: PipPose;
  className?: string;
  preload?: boolean;
  sizes?: string;
}) {
  const p = pipPoses[pose];
  return (
    <Image src={p.src} alt={p.alt} width={p.w} height={p.h} className={className} preload={preload} sizes={sizes} />
  );
}
