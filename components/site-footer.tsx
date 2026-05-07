import Image from "next/image";
import Link from "next/link";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  INSTAGRAM_URL,
  NAV_ITEMS,
  SITE_TITLE,
} from "@/lib/site-content";

const footerLinks = NAV_ITEMS.filter((item) => item.href !== "/home");

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="site-footer">
      <div className="container-rail">
        <div className="footer-grid">
          <div className="space-y-4 reveal">
            <Image
              src="/images/logo.webp"
              alt="Safa Sanctuary logo"
              width={170}
              height={68}
              className="h-16 w-auto"
            />
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {SITE_TITLE}
            </h3>
            <p className="max-w-xs text-sm leading-7 text-white/95">
              Empowering women through advocacy, navigation, and culturally
              responsive support across Brooklyn and Queens.
            </p>
          </div>

          <div className="space-y-4 reveal reveal-delay-1">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/95">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 reveal reveal-delay-2">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm text-white/95">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="footer-link">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_PHONE}`} className="footer-link">
                  {CONTACT_PHONE}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 reveal reveal-delay-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Follow Us
            </h4>
            <ul className="space-y-2 text-sm text-white/95">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link footer-insta"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />
        <div className="footer-bottom">
          <p>&copy; {year} {SITE_TITLE}. All rights reserved.</p>
          <p>Built with care for safer pathways and stronger communities.</p>
        </div>
      </div>
    </footer>
  );
}
