import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a brand, product design or front-end project.",
};

export default function ContactPage() {
  return (
    <section className="px-5 pb-24 pt-36 md:px-10 md:pb-32 md:pt-48">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="label text-flame">Contact</p>
          <h1 className="display mt-5 text-[clamp(3rem,11vw,10rem)]">
            Start a<br />
            project
          </h1>
        </Reveal>

        <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="md:col-span-4 md:col-start-9">
            <div className="space-y-10">
              <div>
                <p className="label text-ink-soft">Prefer email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="wipe mt-3 inline-block text-xl hover:text-flame"
                >
                  {site.email}
                </a>
              </div>

              <div>
                <p className="label text-ink-soft">Response time</p>
                <p className="mt-3 text-xl">Within two working days</p>
              </div>

              <div>
                <p className="label text-ink-soft">Good fit for</p>
                <ul className="mt-3 space-y-2 text-lg text-ink-soft">
                  <li>— Brand identity from scratch or a rebuild</li>
                  <li>— Product and marketing site design</li>
                  <li>— Design plus front-end build in one engagement</li>
                  <li>— Packaging and print systems</li>
                </ul>
              </div>

              <div>
                <p className="label text-ink-soft">Elsewhere</p>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {site.socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="wipe text-lg hover:text-flame"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
