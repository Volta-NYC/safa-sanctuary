"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { NAV_ITEMS } from "@/lib/site-content";

function isLinkActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/" || pathname === "/home";
  }
  return pathname === href;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClassName = useMemo(
    () =>
      `site-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "site-header--scrolled" : ""
      }`,
    [isScrolled],
  );

  return (
    <header className={headerClassName}>
      <div className="container-rail flex h-[88px] items-center justify-between gap-6">
        <Link
          href="/"
          className="logo-shell group inline-flex items-center gap-3 transition-transform duration-300 hover:scale-[1.01]"
        >
          <Image
            src="/images/logo.webp"
            alt="Safa Sanctuary"
            width={280}
            height={112}
            className="logo-pop -my-7 h-28 w-auto md:-my-9 md:h-32"
            priority
          />
          <span className="sr-only">Safa Sanctuary</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => {
            const active = isLinkActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-[0.95rem] font-medium tracking-wide ${
                  active ? "text-white" : "text-white/92"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <a href="#contact" className="cta-chip">
            Get In Touch
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="menu-toggle inline-flex h-11 w-11 items-center justify-center rounded-xl md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-current transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-current transition-transform duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`mobile-panel overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-rail flex flex-col py-5" aria-label="Mobile">
          {NAV_ITEMS.map((item) => {
            const active = isLinkActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                  active
                    ? "bg-[--sage-600] text-white"
                    : "text-white/90 hover:bg-[--sage-600] hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 cta-chip w-full justify-center"
          >
            Get In Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
