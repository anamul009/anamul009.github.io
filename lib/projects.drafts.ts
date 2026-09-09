import type { Project } from "./projects";

/**
 * PARKED DRAFTS — not imported anywhere, so nothing here reaches the site.
 *
 * Morizo, CERO and Promofy, drafted from the project folders but still
 * carrying gaps. To publish one: fill in every TODO, move the entry into
 * `projects.ts`, and delete it from here.
 *
 * TODO(year)   — real ship date. A guessed year is worse than none.
 * TODO(result) — every `value: "—"`. Put a number you can defend, or delete
 *                the stat entirely.
 * TODO(check)  — inferred, not read. Confirm or rewrite.
 *
 * Note on CERO: it is your employer's product. Get sign-off before naming it
 * publicly, or rewrite it unnamed as "a security product sold through a
 * dealer network" — the case study barely weakens.
 */
export const draftProjects: Project[] = [
  {
    slug: "morizo-corporate",
    title: "Morizo",
    client: "株式会社森蔵 / Morizo Co., Ltd.",
    year: "2025", // TODO(year)
    category: "Web Design & Build",
    summary:
      "A company running two unrelated businesses — food and beverage, and beauty — under one name, with no website that made the pairing look deliberate.",
    colorFrom: "#1d3a2f",
    colorTo: "#b98b3c",
    onColor: "#f4efe4",
    services: ["Web design", "Figma to React", "Front-end build", "Motion"],
    stats: [
      { value: "2", label: "Divisions under one identity" },
      { value: "—", label: "TODO(result): a number you can defend" },
      { value: "—", label: "TODO(result): or delete this stat" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "Morizo operates a food and beverage division and a beauty division. Two audiences, two vocabularies, one company. Presented carelessly that reads as a business with no focus; presented well it reads as range. The site had to hold both without either half looking like an afterthought.",
      },
      {
        heading: "What I did",
        body: "Designed the site in Figma and then built it myself in React, so the layout and typography that were approved are the layout and typography that shipped — no interpretation step in between. A shared component layer keeps both divisions inside one visual system, with scroll-triggered motion used to pace the page rather than to decorate it.",
      },
      {
        heading: "The result",
        body: "TODO(result): what actually changed for them — enquiries, recruitment applications, how the two divisions are perceived.",
      },
    ],
  },
  {
    slug: "cero-securitytalk",
    title: "CERO SecurityTalk",
    client: "TODO(check): confirm how to name the client publicly",
    year: "2026", // TODO(year)
    category: "Brand Identity & Product",
    summary:
      "A security communication product that needed an identity and a working commercial platform at the same time — logo system, app icons, and the signup, payment and activation flow behind them.",
    colorFrom: "#0b2f7a",
    colorTo: "#3f8fd6",
    onColor: "#f4efe4",
    services: ["Brand identity", "App iconography", "Product design", "Front-end build"],
    stats: [
      { value: "—", label: "TODO(result): accounts, dealers, or scale" },
      { value: "—", label: "TODO(result): time from brand to launch" },
      { value: "—", label: "TODO(result): something measurable" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "A new product being taken to market through dealers needed to look established before it had any track record, and it needed the commercial machinery to sell itself — accounts, payment, activation — running at the same time. Brand and product could not be sequenced one after the other.",
      },
      {
        heading: "What I did",
        body: "Built the identity as a system rather than a single mark: primary logo, reversed treatment for dark and light grounds, a defined palette, and separate application icons drawn to stay legible at small sizes. Then designed and built the customer-facing side of the platform — signup through payment to an active account — so the interface carried the same identity all the way through.",
      },
      {
        heading: "Why it mattered",
        body: "A dealer network sells what it can explain. TODO(result): add what the business actually saw.",
      },
    ],
  },
  {
    slug: "promofy-identity",
    title: "Promofy",
    client: "TODO(check): client name",
    year: "2024", // TODO(year)
    category: "Brand Identity",
    summary:
      "TODO(check): only the logo artwork survives in the folder — no brief, no notes. Two or three sentences on what the company does and what the identity had to achieve.",
    colorFrom: "#ff3b14",
    colorTo: "#b5179e",
    onColor: "#f4efe4",
    services: ["Logo design", "Identity system"],
    stats: [
      { value: "—", label: "TODO(result)" },
      { value: "—", label: "TODO(result)" },
      { value: "—", label: "TODO(result)" },
    ],
    sections: [
      { heading: "The problem", body: "TODO(check): what was wrong, missing, or being launched." },
      { heading: "What I did", body: "TODO(check): the decisions you made and why." },
      { heading: "The result", body: "TODO(result): what changed." },
    ],
  },
];
