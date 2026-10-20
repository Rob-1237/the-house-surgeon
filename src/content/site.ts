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
  hours: TBD, // regular hours + emergency availability — promise only what Floyd keeps

  serviceArea: {
    center: "Decatur Township, Indianapolis",
    radiusMiles: 40,
    northernLimit: "Noblesville",
  },

  links: {
    googleProfile:
      "https://www.google.com/searchviewer/10?svid=CAwSHRIbCgNwdnESFENnMHZaeTh4TVhwbU0zUXhhamN3GAo",
    googleReview: "", // short review link from GBP — TBD
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
