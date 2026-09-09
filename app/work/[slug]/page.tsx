import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getProject, projects } from "@/lib/projects";

// Required by `output: "export"` — tells Next which case studies to render.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);

  // A case study for the same client group is a better onward link than
  // whatever happens to sit next in the array, so it wins when one exists.
  const relatedNext =
    (project.related ?? [])
      .map((slug) => getProject(slug))
      .find((p): p is NonNullable<typeof p> => Boolean(p)) ?? null;

  // With a single published project the fallback would point at the page you
  // are already on, so it is dropped until there are at least two.
  const cyclicNext = projects.length > 1 ? projects[(index + 1) % projects.length] : null;

  const next = relatedNext ?? cyclicNext;
  const isRelated = next !== null && next === relatedNext;

  return (
    <>
      {/* Title block */}
      <section className="px-5 pb-14 pt-36 md:px-10 md:pb-20 md:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <Link href="/work/" className="label wipe pb-1 text-ink-soft hover:text-flame">
              ← Back to work
            </Link>
          </Reveal>

          <Reveal delay={70}>
            <h1 className="display mt-8 text-[clamp(3rem,11vw,10rem)]">{project.title}</h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ink-soft md:text-2xl">
              {project.summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Art block */}
      <section className="px-5 md:px-10">
        <Reveal>
          <div
            className="relative mx-auto flex aspect-[16/10] max-w-[1400px] items-center justify-center overflow-hidden rounded-3xl md:aspect-[16/8]"
            style={{
              background: `linear-gradient(135deg, ${project.colorFrom}, ${project.colorTo})`,
            }}
          >
            {project.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <span
                className="display text-[clamp(4rem,18vw,16rem)] opacity-25"
                style={{ color: project.onColor }}
              >
                {project.title}
              </span>
            )}
          </div>
        </Reveal>
      </section>

      {/* Meta strip */}
      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <dl className="grid gap-8 border-y border-ink/15 py-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="label text-ink-soft">Client</dt>
              <dd className="mt-3 text-lg">{project.client}</dd>
            </div>
            <div>
              <dt className="label text-ink-soft">Year</dt>
              <dd className="mt-3 text-lg">{project.year}</dd>
            </div>
            <div>
              <dt className="label text-ink-soft">Discipline</dt>
              <dd className="mt-3 text-lg">{project.category}</dd>
            </div>
            <div>
              <dt className="label text-ink-soft">Services</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <span key={s} className="label rounded-full border border-ink/25 px-3 py-2">
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Narrative */}
      <section className="px-5 pb-8 md:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-12">
          <div className="md:col-span-8 md:col-start-4">
            {project.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 70}>
                <div className="mb-14 md:mb-20">
                  <h2 className="display text-[clamp(1.75rem,4vw,3rem)]">{section.heading}</h2>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
                    {section.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome numbers */}
      <section className="px-5 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="grid gap-px overflow-hidden rounded-3xl bg-ink/15 sm:grid-cols-3">
              {project.stats.map((stat) => (
                <div key={stat.label} className="bg-paper p-8 md:p-12">
                  <p className="display text-[clamp(2.5rem,6vw,4.5rem)] text-flame">
                    {stat.value}
                  </p>
                  <p className="label mt-3 text-ink-soft">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next project, or a way onward when this is the only one published */}
      <section className="border-t border-ink/15 px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="label text-flame">
            {isRelated ? "Same client group" : next ? "Next project" : "Get in touch"}
          </p>
          {isRelated && project.relatedNote && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {project.relatedNote}
            </p>
          )}
          <Link
            href={next ? `/work/${next.slug}/` : "/contact/"}
            className="display group mt-5 flex flex-wrap items-baseline gap-x-6 text-[clamp(2.5rem,9vw,7rem)] hover:text-flame"
          >
            {next ? next.title : "Start a project"}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-3">
              →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
