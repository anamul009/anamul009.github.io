import Link from "next/link";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
  /** Index is used only to alternate the card height for a staggered grid. */
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: Props) {
  const tall = index % 2 === 0;

  return (
    <Link
      href={`/work/${project.slug}/`}
      className="group block focus:outline-none"
      aria-label={`${project.title} — ${project.category}`}
    >
      <div
        // A fixed aspect ratio on a narrow screen cannot hold a long summary —
        // it clipped the "View case study" link. On mobile the card grows with
        // its text instead; the staggered ratios return once there is width.
        className={`relative min-h-[20rem] overflow-hidden rounded-3xl transition-transform duration-500 ease-out group-hover:-translate-y-2 group-focus-visible:ring-4 group-focus-visible:ring-flame md:min-h-0 ${
          tall ? "md:aspect-[4/5]" : "md:aspect-[4/3]"
        }`}
        style={{
          background: `linear-gradient(135deg, ${project.colorFrom}, ${project.colorTo})`,
        }}
      >
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <>
            {/* Placeholder art: oversized initial plus a drifting ring. */}
            <span
              className="display pointer-events-none absolute -bottom-[8%] -left-[3%] text-[13rem] leading-none opacity-20 md:text-[18rem]"
              style={{ color: project.onColor }}
            >
              {project.title.charAt(0)}
            </span>
            <span
              className="pointer-events-none absolute right-[8%] top-[12%] h-32 w-32 rounded-full border-2 md:h-48 md:w-48"
              style={{ borderColor: project.onColor, opacity: 0.35, animation: "var(--animate-drift)" }}
            />
          </>
        )}

        {/* In normal flow so it can set the card's height on mobile; the
            aspect ratio takes over from md up, where h-full fills it. */}
        <div className="relative flex h-full flex-col justify-between gap-8 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="label rounded-full px-3 py-2" style={{ background: project.onColor, color: project.colorFrom }}>
              {project.category}
            </span>
            <span className="label" style={{ color: project.onColor }}>
              {project.year}
            </span>
          </div>

          <div style={{ color: project.onColor }}>
            <h3 className="display text-[clamp(2rem,4vw,3.25rem)]">{project.title}</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed opacity-80 md:text-base">
              {project.summary}
            </p>
            <span className="label mt-5 inline-flex items-center gap-2">
              View case study
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
