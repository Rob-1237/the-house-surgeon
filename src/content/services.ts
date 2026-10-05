/**
 * Service menu. Order = emphasis: Floyd's preferred work (pipe, gas, water quality) leads;
 * the Google Business Profile fixture services follow. Copy is a Garfish draft for Floyd to approve.
 */

export type Service = {
  slug: string;
  name: string;
  /** One line for cards. */
  summary: string;
  /** Lead paragraph on the service page. */
  intro: string;
  includes: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "pipe-repair",
    name: "Pipe Repair",
    summary: "Leaks, bursts, and worn-out pipe.",
    intro:
      "From a pinhole leak to a full section of failing galvanized line, we find the cause and fix it properly, not just the spot that's dripping.",
    includes: [
      "Leaking and burst pipe repair",
      "Galvanized and old pipe replacement",
      "Frozen pipe thaw and repair",
      "Shut-off and supply valve replacement",
    ],
    featured: true,
  },
  {
    slug: "gas-lines",
    name: "Gas Lines",
    summary: "Line repair and appliance hookups.",
    intro:
      "Gas work is not a DIY job. Our licensed plumbers repair gas lines, run new ones, and connect appliances safely and to code.",
    includes: [
      "Gas leak checks and line repair",
      "New gas lines for ranges, dryers, and water heaters",
      "Appliance hookups and shut-off valves",
    ],
    featured: true,
  },
  {
    slug: "water-quality",
    name: "Water Quality",
    summary: "Softeners and filtration for better water.",
    intro:
      "Hard water and off-tasting water wear on your fixtures and your patience. We install and service the equipment that fixes it.",
    includes: [
      "Water softener installation and repair",
      "Whole-house filtration",
      "Drinking-water filters",
    ],
    featured: true,
  },
  {
    slug: "leak-detection",
    name: "Leak Detection",
    summary: "Find the leak before it finds your ceiling.",
    intro:
      "Rising water bills, damp drywall, or the sound of running water when everything's off: we track down hidden leaks and fix them.",
    includes: [
      "Hidden and slab leak detection",
      "Running toilet and fixture leaks",
      "Leak repair once it's found",
    ],
  },
  {
    slug: "water-heaters",
    name: "Water Heaters",
    summary: "Installation and replacement.",
    intro:
      "No hot water, or a heater near the end of its life? We'll help you choose the right replacement and install it.",
    includes: ["Tank water heater installation", "Replacement and haul-away", "Gas and electric units"],
  },
  {
    slug: "fixtures",
    name: "Faucets & Toilets",
    summary: "Fixture installation and repair.",
    intro:
      "Dripping faucets, running toilets, and shower upgrades. The everyday fixes, handled by licensed plumbers.",
    includes: [
      "Faucet installation and repair",
      "Toilet installation and repair",
      "Shower installation",
    ],
  },
];

/** Said plainly so the wrong leads self-select out. */
export const notOffered = ["Septic systems"];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
