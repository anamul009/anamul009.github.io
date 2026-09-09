import Link from "next/link";
import Marquee from "@/components/Marquee";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { featuredProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------
          Hero
          --------------------------------------------------------------- */}
      <section className="relative overflow-hidden px-5 pb-24 pt-36 md:px-10 md:pb-32 md:pt-48">
        {/* Loose colour shapes behind the headline. */}
        <div
          className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-flame/25 blur-3xl md:h-[32rem] md:w-[32rem]"
          style={{ animation: "var(--animate-drift)" }}
        />
        <div className="pointer-events-none absolute -left-32 top-1/2 h-64 w-64 rounded-full bg-electric/20 blur-3xl md:h-96 md:w-96" />

        <div className="relative mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label flex items-center gap-3 text-ink-soft">
              <span className="inline-block h-2 w-2 rounded-full bg-flame" />
              {site.origin} → {site.location} · {site.yearsExperience} years in practice
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display mt-8 text-[clamp(3.2rem,13vw,13rem)]">
              Brand
              <span className="text-flame">.</span>
              <br />
              Interface
              <span className="text-electric">.</span>
              <br />
              <span className="inline-flex flex-wrap items-baseline gap-x-5">
                Code
                <span className="text-acid">.</span>
                <span
                  className="hidden h-4 w-24 shrink-0 rounded-full bg-ink md:inline-block lg:w-48"
                  aria-hidden="true"
                />
              </span>
            </h1>
          </Reveal>

          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12">
            <Reveal delay={160} className="md:col-span-7 lg:col-span-6">
              <p className="text-xl leading-relaxed text-ink-soft md:text-2xl">
                {site.intro}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/work/"
                  className="label rounded-full bg-ink px-7 py-4 text-paper transition-all duration-300 hover:-translate-y-1 hover:bg-flame"
                >
                  See the work
                </Link>
                <Link
                  href="/contact/"
                  className="label rounded-full border-2 border-ink px-7 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-ink hover:text-paper"
                >
                  Start a project
                </Link>
              </div>
            </Reveal>

            <Reveal delay={240} className="md:col-span-5 md:col-start-9">
              <dl className="grid grid-cols-2 gap-y-8 border-t border-ink/15 pt-8">
                {[
                  { v: `${site.yearsExperience}+`, l: "Years designing" },
                  { v: "80+", l: "Projects delivered" },
                  { v: "3", l: "Disciplines, one person" },
                  { v: "100%", l: "Designed and coded by me" },
                ].map((s) => (
                  <div key={s.l}>
                    <dt className="display text-4xl md:text-5xl">{s.v}</dt>
                    <dd className="label mt-2 text-ink-soft">{s.l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          Ticker
          --------------------------------------------------------------- */}
      <section className="border-y-2 border-ink bg-acid py-5">
        <Marquee
          items={["Brand Identity", "UI Design", "Front-End", "Packaging", "Editorial", "Design Systems"]}
        />
      </section>

      {/* ---------------------------------------------------------------
          Selected work
          --------------------------------------------------------------- */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="label text-flame">Selected work</p>
                <h2 className="display mt-4 text-[clamp(2.5rem,7vw,6rem)]">
                  Recent
                  <br />
                  projects
                </h2>
              </div>
              <Link href="/work/" className="label wipe pb-1 hover:text-flame">
                All projects →
              </Link>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 90}>
                <ProjectCard project={project} index={i} />
              </Reveal>
            ))}

            {/* Tail card that pushes the visitor onward. */}
            <Reveal delay={featuredProjects.length * 90}>
              <Link
                href="/work/"
                className="group flex aspect-[4/3] flex-col justify-between rounded-3xl border-2 border-dashed border-ink/25 p-6 transition-colors duration-300 hover:border-flame hover:bg-flame/5 md:p-8"
              >
                <span className="label text-ink-soft">More</span>
                <span className="display text-[clamp(2rem,4vw,3.25rem)] group-hover:text-flame">
                  See every
                  <br />
                  case study
                  <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          Services
          --------------------------------------------------------------- */}
      <section className="bg-ink px-5 py-24 text-paper md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label text-acid">What I do</p>
            <h2 className="display mt-4 max-w-4xl text-[clamp(2.5rem,7vw,6rem)]">
              One person, the whole pipeline
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-paper/15 md:grid-cols-2">
            {site.services.map((service, i) => (
              <Reveal key={service.title} delay={i * 70}>
                <article className="group h-full bg-ink p-8 transition-colors duration-300 hover:bg-flame md:p-12">
                  <span className="label text-paper/40 transition-colors group-hover:text-paper/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-5 text-[clamp(1.75rem,3.5vw,2.75rem)]">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-paper/70 transition-colors group-hover:text-paper">
                    {service.body}
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="label rounded-full border border-paper/25 px-3 py-2 text-paper/70 transition-colors group-hover:border-paper/50 group-hover:text-paper"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          Approach
          --------------------------------------------------------------- */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="label text-flame">How it goes</p>
              <h2 className="display mt-4 text-[clamp(2.5rem,6vw,4.5rem)]">
                No handoff
                <br />
                gap
              </h2>
            </Reveal>

            <div className="md:col-span-7 md:col-start-6">
              {[
                {
                  step: "Understand",
                  body: "I start with the constraint, not the moodboard. What the business needs, who it is for, and what has already failed.",
                },
                {
                  step: "Design",
                  body: "Identity and interface built as a system, not as loose files. Every decision has a reason I can explain out loud.",
                },
                {
                  step: "Build",
                  body: "I write the front-end myself. Nothing is lost in translation because there is no translation step.",
                },
                {
                  step: "Hand over",
                  body: "Documentation your team can actually use, so you are not locked into calling me for every change.",
                },
              ].map((item, i) => (
                <Reveal key={item.step} delay={i * 80}>
                  <div className="flex gap-6 border-b border-ink/15 py-8 md:gap-10">
                    <span className="label shrink-0 pt-2 text-ink-soft">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="display text-[clamp(1.5rem,3vw,2.25rem)]">{item.step}</h3>
                      <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
