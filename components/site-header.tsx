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
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClassName = useMemo(
    () =>
      `site-nav ${
        isScrolled ? "scrolled" : ""
      }`,
    [isScrolled],
  );

  return (
    <header className="site-header">
      <div className="contact-alert-bar">
        <div className="container-rail">
          <p className="contact-alert-text">
            To contact us please call{" "}
            <a href="tel:3478993109" className="contact-alert-link">
              (347) 899-3109
            </a>
            . If this is an emergency please call{" "}
            <a href="tel:911" className="contact-alert-link">
              911
            </a>
            .
          </p>
        </div>
      </div>

      <div className={headerClassName}>
        <div className="container-rail flex h-[90px] items-center justify-between gap-6">
          <Link
            href="/"
            className="group -ml-3 inline-flex items-center transition-transform duration-300 hover:scale-[1.01] sm:-ml-4"
          >
            <span className="relative block h-[72px] w-[216px] sm:h-[76px] sm:w-[226px]">
              <Image
                src="/images/logo.webp"
                alt="Safa Sanctuary"
                fill
                priority
                sizes="(max-width: 640px) 216px, 226px"
                className="logo-pop object-contain object-left"
              />
            </span>
            <span className="sr-only">Safa Sanctuary</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {NAV_ITEMS.map((item) => {
              const active = isLinkActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${item.emphasis ? "nav-link--emphasis" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/get-in-touch" className="btn-primary">
              Get In Touch
            </Link>
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
                  className={`rounded-lg px-3 py-3 text-base transition-colors ${
                    active
                      ? "bg-[--color-sage-light] text-[--color-sage-dark] font-semibold"
                      : "text-[--color-cream] hover:bg-[--color-sage-light] hover:text-[--color-sage-dark] font-medium"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <span className={item.emphasis ? "font-bold text-[--color-saffron-light]" : ""}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
            <Link
              href="/get-in-touch"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-3 w-full justify-center"
            >
              Get In Touch
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
