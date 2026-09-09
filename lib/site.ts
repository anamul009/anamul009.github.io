/**
 * Single source of truth for everything personal on the site.
 * Edit this file first — the pages read from it.
 */
export const site = {
  // TODO: put your full name here as you want clients to read it.
  name: "Anamul",
  fullName: "Anamul",
  role: "Brand & Digital Designer / Front-End Developer",
  yearsExperience: 12,
  location: "Japan",
  email: "hello@example.com", // TODO: swap for your domain address once it exists
  url: "https://anamul009.github.io",

  tagline: "Twelve years turning brands into things people can use.",
  intro:
    "I build the whole thing — identity, interface, and the front-end code that ships it. Brand systems that hold up, and websites that feel as considered as the logo on them.",

  // Formspree gives a working contact form with no backend.
  // Make a free form at formspree.io, then paste the id here.
  formspreeId: "YOUR_FORM_ID",

  socials: [
    { label: "GitHub", href: "https://github.com/anamul009" },
    { label: "Behance", href: "#" }, // TODO
    { label: "LinkedIn", href: "#" }, // TODO
    { label: "Instagram", href: "#" }, // TODO
  ],

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
