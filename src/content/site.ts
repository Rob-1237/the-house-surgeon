/**
 * Single source of truth for business facts (NAP, links, placeholders).
 * Anything marked `TBD` is waiting on Floyd — see NOTES/PLUMBING_PLAN.md §0.1.
 */

export const TBD = "TBD";

export const site = {
  name: "The House Surgeon",
  tagline: "Licensed plumbing for Indianapolis and the surrounding area.",
  url: "https://thehousesurgeonindy.com", // confirmed 2026-10-20
  devUrl: "https://thehousesurgeon.netlify.app",

  phone: {
    display: "(463) 312-4018",
    href: "tel:+14633124018",
  },
  email: "housesurgeonindy@gmail.com",

  license: TBD, // Indiana plumbing contractor license #
  bonding: TBD, // bonding / insurance carrier
  /** Matches GBP main hours (confirmed by Floyd 2026-11-09). Emergencies answered 24/7. */
  hours: "Every day, 6 AM–midnight · Emergencies 24/7",
  openingHours: { opens: "06:00", closes: "23:59" }, // every day; feeds JSON-LD

  /** Google rating as shown on the Business Profile. Update by hand when the count moves. */
  googleRating: {
    rating: "5.0",
    count: 30,
    asOf: "2026-11-09",
  },

  serviceArea: {
    center: "Decatur Township, Indianapolis",
    radiusMiles: 40,
    northernLimit: "Noblesville",
  },

  links: {
    googleProfile: "https://maps.app.goo.gl/e1HbBn3UPXrbezB49", // permanent GBP share link (2026-11-09)
    googleReview: "https://g.page/r/CRfYsCLEqUTmEBM/review", // GBP "Ask for reviews" link
    instagram: "https://www.instagram.com/thehousesurgeonindy/", // as listed on GBP
    facebook: "https://www.facebook.com/profile.php?id=61593558752254", // as listed on GBP
    payInvoice: "", // Jobber Client Hub link — TBD
  },

  /** Possible $100-off first visit. Off until Floyd confirms. */
  firstVisitOffer: {
    enabled: false,
    text: "$100 off your first visit",
  },
} as const;

export type NavItem = { href: string; label: string };

/** Four pages + the call button. Service detail pages are reached from /services/, not the nav. */
export const primaryNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];
