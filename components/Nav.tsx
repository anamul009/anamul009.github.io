"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Solid background only after the hero scrolls away, so the nav does not
  // sit as a grey bar over the opening headline.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Prevent the page behind the mobile sheet from scrolling.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname === href.replace(/\/$/, "");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        open
          ? "bg-paper"
          : scrolled
            ? "bg-paper/85 backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      {/* The mobile sheet below is a child of this header, so its z-index is
          scoped to the header's stacking context. This bar needs its own
          higher layer or the sheet paints over the logo and Close button. */}
      <div className="relative z-50 mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 md:py-6">
        <Link
          href="/"
          className="display text-xl leading-none md:text-2xl"
          aria-label={`${site.name} — home`}
        >
          {site.name}
          <span className="text-flame">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`label wipe pb-1 transition-colors hover:text-flame ${
                isActive(link.href) ? "text-flame" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            className="label rounded-full bg-ink px-5 py-3 text-paper transition-transform duration-300 hover:-translate-y-0.5 hover:bg-flame"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="label flex items-center gap-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "Close" : "Menu"}
          <span className="flex h-4 w-5 flex-col justify-center gap-1">
            <span
              className={`block h-0.5 w-full bg-ink transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        // Full-screen sheet. Sits below the header (z-40 vs z-50) so the logo
        // and the Close button stay tappable over it. 100dvh rather than 100vh
        // so mobile browser chrome cannot push the footer out of reach.
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 flex h-[100dvh] flex-col overflow-y-auto bg-paper px-5 pb-10 pt-24 md:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ animationDelay: `${i * 60}ms` }}
                className={`sheet-item display border-b border-ink/10 py-5 text-[clamp(2.75rem,14vw,4.5rem)] ${
                  isActive(link.href) ? "text-flame" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact/"
            style={{ animationDelay: `${links.length * 60}ms` }}
            className="sheet-item label mt-10 rounded-full bg-ink px-6 py-5 text-center text-paper"
          >
            Start a project
          </Link>

          {/* mt-auto pins this to the bottom of the screen. */}
          <div
            className="sheet-item mt-auto pt-12"
            style={{ animationDelay: `${(links.length + 1) * 60}ms` }}
          >
            <p className="label text-ink-soft">Email</p>
            <a href={`mailto:${site.email}`} className="mt-2 block text-lg">
              {site.email}
            </a>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="label text-ink-soft"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
