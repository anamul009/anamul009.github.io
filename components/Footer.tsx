import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-5 pb-10 pt-20 text-paper md:px-10 md:pt-28">
      <div className="mx-auto max-w-[1400px]">
        <p className="label text-acid">Available for new work</p>

        <Link
          href="/contact/"
          className="display mt-6 block text-[clamp(3rem,13vw,11rem)] transition-colors duration-300 hover:text-flame"
        >
          Let&rsquo;s talk
        </Link>

        <div className="mt-16 grid gap-10 border-t border-paper/15 pt-10 md:grid-cols-3">
          <div>
            <p className="label text-paper/50">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="wipe mt-3 inline-block text-lg hover:text-acid"
            >
              {site.email}
            </a>
          </div>

          <div>
            <p className="label text-paper/50">Elsewhere</p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="wipe text-lg hover:text-acid"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label text-paper/50">Based in</p>
            <p className="mt-3 text-lg">{site.location}</p>
            <p className="mt-1 text-paper/60">Working with clients worldwide</p>
          </div>
        </div>

        <div className="label mt-16 flex flex-col gap-2 text-paper/40 md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {site.fullName}
          </span>
          <span>Designed and built by hand</span>
        </div>
      </div>
    </footer>
  );
}
