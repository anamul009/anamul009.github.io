/**
 * Single source of truth for everything personal on the site.
 * Edit this file first — the pages read from it.
 */
export const site = {
  // `name` is the short logo mark in the nav; `fullName` is used in page
  // titles, metadata and the footer copyright.
  name: "Anamul",
  fullName: "Kazi Anamul Haque",
  role: "Brand & Digital Designer / Front-End Developer",
  yearsExperience: 12,
  location: "Japan",
  origin: "Bangladesh",
  // TODO: swap for an address on your own domain once you buy one.
  email: "rahulanamul33@gmail.com",
  url: "https://anamul009.github.io",

  tagline: "Twelve years turning brands into things people can use.",
  intro:
    "I build the whole thing — identity, interface, and the front-end code that ships it. Brand systems that hold up, and websites that feel as considered as the logo on them.",

  // Formspree gives a working contact form with no backend.
  // Make a free form at formspree.io, then paste the id here.
  formspreeId: "YOUR_FORM_ID",

  // Only real links belong here. A social icon pointing at "#" reads worse
  // than no icon at all, so add each one as it becomes real.
  socials: [
    { label: "GitHub", href: "https://github.com/anamul009" },
    { label: "Behance", href: "https://www.behance.net/anamul09" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/anamul09" },
  ],

  /** Where the logo and identity back catalogue lives. */
  behance: "https://www.behance.net/anamul09",

  services: [
    {
      title: "Brand Identity",
      body: "Logo systems, type and colour, guidelines a team can actually follow without calling me.",
      items: ["Naming support", "Logo & marks", "Type systems", "Brand guidelines"],
    },
    {
      title: "Digital Product Design",
      body: "Interfaces designed against real constraints, handed over as components rather than pretty pictures.",
      items: ["UI systems", "Web & app design", "Prototypes", "Design handoff"],
    },
    {
      title: "Front-End Development",
      body: "I build what I design, so nothing gets lost between the file and the browser.",
      items: ["Next.js & React", "Tailwind CSS", "CMS integration", "Performance & a11y"],
    },
    {
      title: "Print & Packaging",
      body: "Twelve years of press-ready work — the part of graphic design that punishes guesswork.",
      items: ["Packaging", "Editorial", "Signage", "Print production"],
    },
  ],
} as const;
