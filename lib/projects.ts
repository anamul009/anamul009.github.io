export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  summary: string;
  /** Two colours drive the case-study art block until real images exist. */
  colorFrom: string;
  colorTo: string;
  /** Ink colour used on top of the art block. */
  onColor: string;
  services: string[];
  stats: { value: string; label: string }[];
  sections: { heading: string; body: string }[];
  /** Drop a file in /public/work and put the path here to replace the colour block. */
  image?: string;
  featured?: boolean;
};

/**
 * PLACEHOLDER CONTENT.
 * Replace each entry with a real project. Keep the shape identical and
 * every page updates itself — nothing else needs editing.
 */
export const projects: Project[] = [
  {
    slug: "orbit-retail",
    title: "Orbit Retail",
    client: "Placeholder Client",
    year: "2025",
    category: "Brand Identity",
    summary:
      "A retail group with eleven store formats and no shared visual language. One flexible identity system that scales from a shop sign to a receipt.",
    colorFrom: "#ff3b14",
    colorTo: "#ffb200",
    onColor: "#12110f",
    services: ["Brand strategy", "Identity system", "Guidelines", "Signage"],
    stats: [
      { value: "11", label: "Store formats unified" },
      { value: "6mo", label: "Rollout" },
      { value: "+34%", label: "Brand recall" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "Eleven store formats had drifted into eleven separate brands. Customers could not tell that two shops on the same street belonged to the same company, and every new location restarted the design work from zero.",
      },
      {
        heading: "What I did",
        body: "Built a single identity with a fixed core and a variable layer — one mark, one type system, and a colour set that shifts by format. Documented it so the in-house team could open a new store without me.",
      },
      {
        heading: "The result",
        body: "Rollout across all formats in six months. New store launches now take days of design time instead of weeks, and recall in customer surveys rose by a third.",
      },
    ],
    featured: true,
  },
  {
    slug: "meridian-app",
    title: "Meridian",
    client: "Placeholder Client",
    year: "2025",
    category: "Product Design & Build",
    summary:
      "A scheduling tool people were abandoning at signup. Redesigned the flow, built the front-end, and cut the drop-off in half.",
    colorFrom: "#1b34ff",
    colorTo: "#7ad9ff",
    onColor: "#f4efe4",
    services: ["UX audit", "UI system", "Next.js build", "Design system"],
    stats: [
      { value: "-51%", label: "Signup drop-off" },
      { value: "98", label: "Lighthouse score" },
      { value: "40+", label: "Components shipped" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "Over half of users left during a five-step onboarding that asked for information the product did not need yet. The team assumed it was a marketing problem.",
      },
      {
        heading: "What I did",
        body: "Ran a flow audit, cut onboarding to two steps, and rebuilt the interface as a documented component library. Because I wrote the front-end myself, the shipped product matches the design file exactly.",
      },
      {
        heading: "The result",
        body: "Drop-off fell by half in the first month. The component library became the base for two later products.",
      },
    ],
    featured: true,
  },
  {
    slug: "kanso-packaging",
    title: "Kanso",
    client: "Placeholder Client",
    year: "2024",
    category: "Packaging",
    summary:
      "A twelve-SKU range that had to look like one family on a crowded shelf, printed on three different substrates.",
    colorFrom: "#12110f",
    colorTo: "#4a463d",
    onColor: "#d8f24a",
    services: ["Packaging design", "Print production", "Art direction"],
    stats: [
      { value: "12", label: "SKUs" },
      { value: "3", label: "Substrates" },
      { value: "0", label: "Reprints" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "The range read as twelve unrelated products. Shelf tests showed customers could not find the second item after buying the first.",
      },
      {
        heading: "What I did",
        body: "Fixed the structure — a constant panel and typographic hierarchy across every SKU, with colour as the only variable. Prepared press-ready files for all three substrates and attended the print check.",
      },
      {
        heading: "The result",
        body: "Shipped on schedule with no reprints. The system now absorbs new SKUs without redesign.",
      },
    ],
    featured: true,
  },
  {
    slug: "atlas-editorial",
    title: "Atlas Quarterly",
    client: "Placeholder Client",
    year: "2024",
    category: "Editorial",
    summary:
      "A 140-page quarterly rebuilt around a grid that survives contact with real, unpredictable article lengths.",
    colorFrom: "#d8f24a",
    colorTo: "#8fd11f",
    onColor: "#12110f",
    services: ["Editorial design", "Grid system", "Typography"],
    stats: [
      { value: "140", label: "Pages per issue" },
      { value: "4", label: "Issues designed" },
      { value: "-60%", label: "Layout time" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "Every issue was laid out from scratch, so production ran late and no two issues looked related.",
      },
      {
        heading: "What I did",
        body: "Designed a modular grid with defined article templates and a strict type scale, then trained the editorial team on it.",
      },
      {
        heading: "The result",
        body: "Layout time per issue dropped by around 60% and the magazine finally reads as one publication.",
      },
    ],
  },
  {
    slug: "northline-site",
    title: "Northline",
    client: "Placeholder Client",
    year: "2023",
    category: "Web Design & Build",
    summary:
      "A slow, unmaintainable marketing site replaced with a fast static build the client can update themselves.",
    colorFrom: "#ff3b14",
    colorTo: "#1b34ff",
    onColor: "#f4efe4",
    services: ["Web design", "Front-end build", "CMS", "SEO"],
    stats: [
      { value: "0.9s", label: "Load time" },
      { value: "100", label: "Accessibility score" },
      { value: "+2.4x", label: "Enquiries" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "A page-builder site that took nine seconds to load and needed a developer for every text change.",
      },
      {
        heading: "What I did",
        body: "Redesigned the site around the two pages that actually generated enquiries, then rebuilt it as a static site with a simple CMS behind it.",
      },
      {
        heading: "The result",
        body: "Load time under a second, perfect accessibility score, and enquiries more than doubled over the following quarter.",
      },
    ],
  },
  {
    slug: "field-notes-system",
    title: "Field Notes",
    client: "Self-initiated",
    year: "2023",
    category: "Design System",
    summary:
      "An open component kit built to prove that a design system can stay small enough for one person to maintain.",
    colorFrom: "#4a463d",
    colorTo: "#12110f",
    onColor: "#ff3b14",
    services: ["Design system", "Documentation", "Open source"],
    stats: [
      { value: "32", label: "Components" },
      { value: "1", label: "Maintainer" },
      { value: "MIT", label: "Licence" },
    ],
    sections: [
      {
        heading: "The idea",
        body: "Most design systems collapse under their own documentation. I wanted to find the smallest set of components that still covers real client work.",
      },
      {
        heading: "What I did",
        body: "Built 32 components with tokens, accessibility baked in, and documentation short enough to read in one sitting.",
      },
      {
        heading: "Where it went",
        body: "It is now the starting point for most of my client builds, which is the only adoption metric that matters to me.",
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
