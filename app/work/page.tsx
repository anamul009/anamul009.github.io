import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected brand identity, product design and front-end projects from twelve years of practice.",
};

export default function WorkPage() {
  return (
    <>
      <section className="px-5 pb-16 pt-36 md:px-10 md:pb-20 md:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label text-flame">Portfolio</p>
            <h1 className="display mt-5 text-[clamp(3rem,12vw,11rem)]">Work</h1>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-soft md:text-2xl">
              Brand systems, interfaces, and the code that ships them. Each case study
              covers the constraint, the decision, and what actually changed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-[1400px] gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 90}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
