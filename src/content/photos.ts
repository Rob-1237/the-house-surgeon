/**
 * Placeholder photography (supplied by Rob, 2026-10-02) until Floyd's own shoot.
 * ⚠ Confirm usage rights for each before launch.
 * `position` = object-position for the wide hero crop.
 */
export type Photo = { src: string; alt: string; width: number; height: number; position?: string };

export const photos = {
  /** Page heroes (`Hero` with `photo`): each file is named for the page it heads. */
  servicesHero: {
    src: "/images/photos/services-hero.webp",
    alt: "Water leaking from a sink trap into a flooded cabinet",
    width: 645,
    height: 360,
    position: "50% 30%",
  },
  aboutHero: {
    src: "/images/photos/about-hero.webp",
    alt: "Downtown Indianapolis skyline above the near south side",
    width: 1200,
    height: 900,
    position: "100% 0%", // anchor top-right: crop only from the left and bottom
  },
  contactHero: {
    src: "/images/photos/contact-hero.webp",
    alt: "Plumber tightening a chrome sink trap with a pipe wrench",
    width: 1600,
    height: 1063,
    position: "70% 50%", // keep the hands and wrench in view as the left side crops
  },
  videoCall: {
    src: "/images/photos/video-call.webp",
    alt: "Homeowner kneeling at an open sink cabinet with a leaking drain, talking on her phone",
    width: 1080,
    height: 1450,
    position: "50% 40%",
  },
  waterFiltration: {
    src: "/images/photos/water-filtration.webp",
    alt: "Whole-house water filter and brass manifold with red shut-off valves on a basement wall",
    width: 1600,
    height: 1067,
    position: "50% 40%",
  },
  waterHeaterInstall: {
    src: "/images/photos/water-heater-install.webp",
    alt: "Newly installed water heater with copper supply lines, shut-off valve, and expansion tank",
    width: 1024,
    height: 693,
    position: "50% 15%",
  },
  gasWaterHeater: {
    src: "/images/photos/gas-water-heater.webp",
    alt: "Gas control valve and flexible gas line on a residential water heater",
    width: 1224,
    height: 816,
    position: "50% 35%",
  },
  waterMeters: {
    src: "/images/photos/water-meters.webp",
    alt: "Close-up of water meters, valves, and supply pipes",
    width: 700,
    height: 900,
    position: "50% 45%",
  },
} satisfies Record<string, Photo>;

/** Hero photo per service page; services without one fall back to a placeholder. */
export const servicePhotos: Record<string, Photo | undefined> = {
  "pipe-repair": photos.waterMeters,
  "gas-lines": photos.gasWaterHeater,
  "water-quality": photos.waterFiltration,
  "leak-detection": photos.waterMeters,
  "water-heaters": photos.waterHeaterInstall,
};

/** Card photo per service on the Services page (supplied by Rob, 2026-10-05). ⚠ Confirm rights. */
export const serviceCardPhotos: Record<string, Photo> = {
  "pipe-repair": {
    src: "/images/services/pipe-repair.webp",
    alt: "Pipe wrenches, pliers, brass fittings and thread tape laid out on a workbench",
    width: 768,
    height: 512,
    position: "40% 50%",
  },
  "gas-lines": {
    src: "/images/services/gas-lines.webp",
    alt: "Gas meter and regulator on the side of a house",
    width: 750,
    height: 750,
    position: "50% 30%",
  },
  "water-quality": {
    src: "/images/services/water-quality.webp",
    alt: "Clear water pouring into a glass",
    width: 800,
    height: 532,
    position: "75% 50%",
  },
  "leak-detection": {
    src: "/images/services/leak-detection.webp",
    alt: "Plumber using an acoustic leak detector over an opened concrete floor",
    width: 632,
    height: 384,
    position: "65% 50%",
  },
  "water-heaters": {
    src: "/images/services/water-heaters.webp",
    alt: "Tank water heater installed in a garage",
    width: 800,
    height: 472,
    position: "50% 40%",
  },
  fixtures: {
    src: "/images/services/fixtures.webp",
    alt: "Faucet parts and tools on a bathroom floor beside a toilet",
    width: 800,
    height: 534,
    position: "30% 50%",
  },
};

/** Contact page photos (supplied by Rob, 2026-10-05). ⚠ Confirm rights; the video photo (480px)
 * and the Services hero (645px, `photos.servicesHero`) are low-resolution; replace with larger files. */
export const contactPhotos = {
  videoHouseCall: {
    src: "/images/photos/video-house-call.webp",
    alt: "Woman on a video call, holding up her phone in her living room",
    width: 480,
    height: 270,
    position: "40% 50%",
  },
  call: {
    src: "/images/contact/call.webp",
    alt: "Woman on the phone beside a leaking pipe under her sink",
    width: 800,
    height: 533,
    position: "70% 40%",
  },
  book: {
    src: "/images/contact/book.webp",
    alt: "A date circled on a calendar",
    width: 600,
    height: 400,
    position: "40% 60%",
  },
  video: {
    src: "/images/contact/video.webp",
    alt: "Man looking at his phone during a video call",
    width: 500,
    height: 281,
    position: "50% 40%",
  },
  message: {
    src: "/images/contact/message.webp",
    alt: "Hands typing a message on a phone",
    width: 500,
    height: 281,
    position: "60% 50%",
  },
} satisfies Record<string, Photo>;
