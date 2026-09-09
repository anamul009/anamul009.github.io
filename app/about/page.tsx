import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.yearsExperience} years of brand design, UI design and front-end development.`,
};

const toolGroups = [
  {
    label: "Design",
    tools: ["Figma", "Illustrator", "Photoshop", "InDesign", "After Effects"],
  },
  {
    label: "Build",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git"],
  },
  {
    label: "Practice",
    tools: ["Design systems", "Accessibility", "Print production", "Art direction"],
  },
];

// TODO: replace with your real timeline.
const timeline = [
  {
    period: "2014 — 2017",
    title: "Graphic designer",
    body: "Print, packaging and identity work. Learned production the hard way — on press, where mistakes cost money.",
  },
  {
    period: "2017 — 2021",
    title: "Brand designer",
    body: "Moved from single pieces to whole systems. Identity work for companies that needed a language, not a logo.",
  },
  {
    period: "2021 — now",
    title: "Designer & front-end developer",
    body: "Started writing the code for my own designs. Now I take projects from first sketch to deployed site without a handoff.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label text-flame">About</p>
            <h1 className="display mt-5 max-w-5xl text-[clamp(2.75rem,10vw,9rem)]">
              {site.yearsExperience} years of
              <br />
              making things
              <br />
              make sense
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-12">
          {/* Portrait. Set `portrait` in lib/site.ts to a file in /public and
              the coloured placeholder is replaced automatically. */}
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-flame to-electric">
              {site.portrait ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={site.portrait}
                  alt={`${site.fullName}, ${site.role}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                /* No portrait yet. This reads as a designed brand panel
                   rather than an empty slot waiting to be filled. */
                <div className="absolute inset-0 flex flex-col justify-between p-7 text-paper md:p-9">
                  <span
                    className="display pointer-events-none absolute -bottom-[6%] -right-[4%] text-[13rem] leading-none opacity-15"
                    aria-hidden="true"
                  >
                    {site.name.charAt(0)}
                  </span>
                  <p className="label relative">{site.location}</p>
                  <div className="relative">
                    <p className="display text-[clamp(2.25rem,6vw,3.5rem)]">
                      {site.fullName}
                    </p>
                    <p className="label mt-3 text-paper/80">{site.role}</p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={80}>
              <p className="text-2xl leading-relaxed md:text-3xl">{site.tagline}</p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  I started in print, where a bad decision becomes ten thousand copies of a
                  bad decision. That taught me to design against real constraints rather
                  than around them.
                </p>
                <p>
                  Over {site.yearsExperience} years the work moved outward — from single
                  pieces to identity systems, then to interfaces, and finally to writing
                  the front-end code myself. That last step is the useful one. Most
                  projects lose their best ideas in the gap between the design file and the
                  build. When one person crosses that gap, nothing gets dropped.
                </p>
                <p>
                  I work from {site.location} with clients in several countries, which
                  keeps one question permanently in front of me: what does this mark
                  actually communicate to the person looking at it, rather than what
                  looks right to me.
                </p>
                <p>
                  Today I work with founders and teams who need brand and product to look
                  like the same thought — wherever they happen to be.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <Link
                href="/contact/"
                className="label mt-10 inline-block rounded-full bg-ink px-7 py-4 text-paper transition-all duration-300 hover:-translate-y-1 hover:bg-flame"
              >
                Work with me
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ink px-5 py-24 text-paper md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label text-acid">The path</p>
            <h2 className="display mt-4 text-[clamp(2.5rem,7vw,5.5rem)]">How I got here</h2>
          </Reveal>

          <div className="mt-16">
            {timeline.map((item, i) => (
              <Reveal key={item.period} delay={i * 80}>
                <div className="grid gap-4 border-b border-paper/15 py-10 md:grid-cols-12 md:gap-10">
                  <p className="label text-acid md:col-span-3">{item.period}</p>
                  <h3 className="display text-[clamp(1.5rem,3.5vw,2.5rem)] md:col-span-4">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-paper/70 md:col-span-5">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label text-flame">Toolkit</p>
            <h2 className="display mt-4 text-[clamp(2.5rem,7vw,5.5rem)]">What I use</h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {toolGroups.map((group, i) => (
              <Reveal key={group.label} delay={i * 80}>
                <h3 className="label border-b border-ink/20 pb-4 text-ink-soft">
                  {group.label}
                </h3>
                <ul className="mt-6 space-y-3">
                  {group.tools.map((tool) => (
                    <li key={tool} className="display text-2xl md:text-3xl">
                      {tool}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
