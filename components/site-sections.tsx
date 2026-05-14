import Image from "next/image";
import ContactForm from "@/components/contact-form";
import TypewriterText from "@/components/typewriter-text";
import {
  ABOUT_OVERVIEW,
  ABOUT_MISSION,
  BOARD_MEMBERS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  HERO_COPY,
  HERO_TITLE,
  HOME_MISSION,
  INSTAGRAM_URL,
  PRIVACY_INTRO,
  PRIVACY_POLICY,
  SERVICES,
  SUPPORT_COPY,
  SUPPORT_TITLE,
} from "@/lib/site-content";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-geometry hero-geometry--left" aria-hidden="true" />
      <div className="hero-geometry hero-geometry--right" aria-hidden="true" />
      <div className="hero-text">
        <p className="hero-eyebrow reveal">Nonprofit Support Network</p>
        <h1 className="reveal reveal-delay-1">Safa Sanctuary</h1>
        <h2 className="hero-title hero-title--typed reveal reveal-delay-2">
          <span className="hero-title-static">Keeping Women from Falling</span>
          <span className="hero-title-dynamic">
            <TypewriterText
              text={HERO_TITLE}
              highlightWord="Crack"
              typingSpeedMs={120}
            />
          </span>
        </h2>
        <p className="hero-desc reveal reveal-delay-3">{HERO_COPY}</p>
        <div className="hero-actions reveal reveal-delay-4">
          <a href="/services" className="btn-primary">
            Explore Services
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Follow Our Instagram
          </a>
        </div>
      </div>
      <div className="hero-image-wrap reveal reveal-delay-2">
        <Image
          src="/images/mission.webp"
          alt="Safa Sanctuary community support"
          width={1040}
          height={1386}
          priority
        />
      </div>
    </section>
  );
}

function InstagramSpotlightSection() {
  return (
    <section className="instagram-section home-pattern-band reveal">
      <div className="instagram-content">
        <div>
          <p className="eyebrow">Follow Us on Instagram</p>
          <h2 className="section-title instagram-title-line">
            Stay Connected With Safa Sanctuary
          </h2>
          <p className="section-copy instagram-copy">
            We share updates, stories, and community resources regularly. Follow
            us to stay informed and connected.
          </p>
          <div className="instagram-tags">
            <span className="instagram-tag">Stories</span>
            <span className="instagram-tag">Resources</span>
            <span className="instagram-tag">Events</span>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Follow @safasanctuary
          </a>
        </div>
        <div className="instagram-preview-grid">
          <Image
            src="/images/home-placeholder-1.svg"
            alt="Instagram preview placeholder 1"
            width={800}
            height={560}
          />
          <Image
            src="/images/home-placeholder-2.svg"
            alt="Instagram preview placeholder 2"
            width={800}
            height={560}
          />
          <Image
            src="/images/home-placeholder-3.svg"
            alt="Instagram preview placeholder 3"
            width={800}
            height={560}
          />
        </div>
      </div>
    </section>
  );
}

function HomePlaceholdersSection() {
  const placeholders = [
    {
      src: "/images/home-placeholder-1.svg",
      title: "Community Gathering Placeholder",
    },
    {
      src: "/images/home-placeholder-2.svg",
      title: "Client Advocacy Placeholder",
    },
    {
      src: "/images/home-placeholder-3.svg",
      title: "Education Workshop Placeholder",
    },
  ];

  return (
    <section className="home-gallery-section">
      <div className="container-rail">
        <div className="section-pane space-y-8 p-8 sm:p-10">
          <div className="space-y-3">
            <p className="eyebrow reveal">Visual Placeholders</p>
            <h2 className="section-title reveal reveal-delay-1">Homepage Image Blocks</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {placeholders.map((item, index) => (
              <article
                key={item.src}
                className={`image-placeholder-card card-lift reveal reveal-delay-${Math.min(index + 1, 3)}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={1200}
                  height={780}
                  className="h-44 w-full rounded-2xl object-cover"
                />
                <p className="mt-3 text-sm font-semibold tracking-wide text-[--ink-soft]">
                  {item.title}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection({ mission }: { mission: string }) {
  return (
    <section className="mission-section">
      <div className="mission-image-col">
        <Image
          src="/images/mission.webp"
          alt="Safa Sanctuary mission"
          width={1080}
          height={1350}
        />
      </div>
      <div className="mission-text-col reveal">
        <p className="mission-label">Our Mission</p>
        <p className="mission-quote">{mission}</p>
      </div>
    </section>
  );
}

function AboutIntroSection() {
  return (
    <section>
      <div className="container-rail">
        <div className="section-pane space-y-4 p-8 sm:p-10">
          <p className="eyebrow reveal">Who We Are</p>
          <h2 className="section-title reveal reveal-delay-1">About Safa Sanctuary</h2>
          <p className="section-copy reveal reveal-delay-2">
            {ABOUT_OVERVIEW}
          </p>
        </div>
      </div>
    </section>
  );
}

function BoardSection() {
  return (
    <section>
      <div className="container-rail">
        <div className="section-pane space-y-8 p-8 sm:p-10">
          <h2 className="section-title">Board of Directors</h2>
          <div className="board-grid">
            {BOARD_MEMBERS.map((member, index) => (
              <article
                key={member.name}
                className={`board-card reveal reveal-delay-${Math.min(index + 1, 4)}`}
              >
                <div className="board-photo-wrap">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    width={1200}
                    height={1200}
                  />
                </div>
                <div className="board-info">
                  <p className="board-role">{member.role}</p>
                  <h3 className="board-name">{member.name}</h3>
                  <p className="board-bio">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesCards({ headingTag = "h2" }: { headingTag?: "h1" | "h2" }) {
  const HeadingTag = headingTag;
  return (
    <section id="services-section" className="services-section">
      <div className="container-rail">
        <div className="section-pane space-y-8 p-6 sm:p-8">
          <HeadingTag className="section-title reveal">Services</HeadingTag>
          <div className="services-grid">
            {SERVICES.map((service, index) => (
              <article
                key={service.title}
                className={`service-card reveal reveal-delay-${Math.min(index + 1, 4)}`}
              >
                {service.title === "Client Navigation & Accompaniment" ? (
                  <h3 className="service-title service-title-tight">
                    Client Navigation &amp;
                    <br />
                    Accompaniment
                  </h3>
                ) : (
                  <h3 className="service-title">{service.title}</h3>
                )}
                <p className="service-copy">{service.description}</p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-[--line]">
                  <Image
                    src={service.placeholderImage}
                    alt={`${service.title} placeholder visual`}
                    width={1200}
                    height={780}
                    className="h-36 w-full object-cover"
                  />
                </div>
                <span className="card-arrow">Learn more -&gt;</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportFormSection({ includeSmsConsent }: { includeSmsConsent: boolean }) {
  return (
    <section className="support-section">
      <div className="container-rail">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="section-pane section-glow space-y-4 p-8 reveal">
            <p className="eyebrow">Support Request</p>
            <h2 className="section-title">{SUPPORT_TITLE}</h2>
            <p className="section-copy">
              {SUPPORT_COPY}
            </p>
          </div>
          <ContactForm includeSmsConsent={includeSmsConsent} />
        </div>
      </div>
    </section>
  );
}

function PolicySection() {
  return (
    <section className="policy-section">
      <div className="container-rail">
        <div className="section-pane space-y-8 p-7 sm:p-10">
          <h1 className="section-title">Privacy Policy</h1>
          <p className="text-base leading-8 text-[--ink-soft]">{PRIVACY_INTRO}</p>
          <div className="space-y-8">
            {PRIVACY_POLICY.map((section) => (
              <div key={section.heading} className="space-y-3">
                <h2 className="text-xl font-semibold text-[--ink-strong]">
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-[--ink-soft]">
                    {paragraph}
                  </p>
                ))}
                {section.bullets?.length ? (
                  <ul className="space-y-2 text-base leading-8 text-[--ink-soft]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[--accent-strong]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GetInTouchSection() {
  return (
    <section className="contact-page-shell">
      <div className="container-rail">
        <div className="contact-page-grid">
          <div className="section-pane contact-page-intro reveal">
            <p className="eyebrow">Get In Touch</p>
            <h1 className="section-title">Let&apos;s Connect</h1>
            <p className="section-copy">
              Our team responds within 24-48 hours. You can contact us for yourself
              or on behalf of another person. We handle all shared information with
              care and discretion.
            </p>

            <div className="contact-methods">
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact-method">
                <span className="contact-method-label">Email</span>
                <span className="contact-method-value">{CONTACT_EMAIL}</span>
              </a>
              <a href={`tel:${CONTACT_PHONE}`} className="contact-method">
                <span className="contact-method-label">Phone</span>
                <span className="contact-method-value">{CONTACT_PHONE}</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <span className="contact-method-label">Instagram</span>
                <span className="contact-method-value">@safasanctuary</span>
              </a>
            </div>
          </div>
          <ContactForm includeSmsConsent={true} />
        </div>
      </div>
    </section>
  );
}

export function HomeExperience() {
  return (
    <>
      <HeroSection />
      <HomePlaceholdersSection />
      <InstagramSpotlightSection />
      <MissionSection mission={HOME_MISSION} />
      <ServicesCards />
      <SupportFormSection includeSmsConsent={false} />
    </>
  );
}

export function AboutExperience() {
  return (
    <>
      <AboutIntroSection />
      <MissionSection mission={ABOUT_MISSION} />
      <BoardSection />
    </>
  );
}

export function ServicesExperience() {
  return (
    <>
      <ServicesCards headingTag="h1" />
      <SupportFormSection includeSmsConsent={true} />
    </>
  );
}

export function PrivacyExperience() {
  return <PolicySection />;
}

export function GetInTouchExperience() {
  return <GetInTouchSection />;
}

export function DonateExperience() {
  return (
    <section className="donate-shell">
      <div className="container-rail">
        <div className="section-pane donate-pane reveal">
          <p className="eyebrow">Donate</p>
          <h1 className="section-title">Support Safa Sanctuary</h1>
          <p className="section-copy">
            Your contribution helps us continue providing culturally responsive,
            community-based support for women navigating complex systems across
            Brooklyn and Queens.
          </p>
          <p className="section-copy">
            To make a donation, please contact us and our team will follow up with
            giving options. Safa Sanctuary is a 501(c)(3) nonprofit organization,
            and donations may be tax-deductible as allowed by law.
          </p>
          <div className="donate-actions">
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-primary">
              Email Us to Donate
            </a>
            <a href={`tel:${CONTACT_PHONE}`} className="btn-secondary">
              Call {CONTACT_PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
