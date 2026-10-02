/** FAQ draft. Answers marked TBD need Floyd. Doubles as FAQPage schema later. */
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Are you licensed?",
    a: "Yes. We're a licensed, bonded, and insured Indiana plumbing contractor. License # TBD.",
  },
  {
    q: "Do you work on gas lines?",
    a: "Yes. Gas line repair, new lines, and appliance hookups are some of our core work.",
  },
  {
    q: "Do you work on septic systems?",
    a: "No. We don't take septic work. We're happy to point you to someone who does.",
  },
  {
    q: "What is a Video House Call?",
    a: "A short live video call where one of our plumbers looks at the problem with you through your phone's camera. Sometimes it's an easy fix you can do yourself; if not, we arrive knowing what to bring.",
  },
  {
    q: "How far do you travel?",
    a: "About 40 miles from Decatur Township on the south side of Indianapolis, as far north as Noblesville.",
  },
];
