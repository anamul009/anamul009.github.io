import type { Project } from "./projects";

/**
 * PARKED DRAFTS — not imported anywhere, so nothing here reaches the site.
 *
 * Promofy only. To publish it: fill in every TODO, move the entry into
 * `projects.ts`, and delete it from here.
 *
 * TODO(year)   — real ship date. A guessed year is worse than none.
 * TODO(result) — every `value: "—"`. Put a number you can defend, or delete
 *                the stat entirely.
 * TODO(check)  — inferred, not read. Confirm or rewrite.
 *
 * CERO SecurityTalk was deliberately excluded from this portfolio. Do not
 * add it back.
 */
export const draftProjects: Project[] = [
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
