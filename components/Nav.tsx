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
        scrolled || open ? "bg-paper/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 md:py-6">
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
        <div
          id="mobile-nav"
          className="border-t border-ink/10 bg-paper px-5 pb-10 pt-6 md:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="display border-b border-ink/10 py-4 text-5xl hover:text-flame"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={`mailto:${site.email}`}
            className="label mt-8 inline-block text-ink-soft"
          >
            {site.email}
          </a>
        </div>
      )}
    </header>
  );
}
