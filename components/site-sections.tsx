import Image from "next/image";
import ContactForm from "@/components/contact-form";
import {
  ABOUT_OVERVIEW,
  ABOUT_MISSION,
  BOARD_MEMBERS,
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
    <section className="hero-main">
      <div className="hero-shell hero-background section-glow">
        <div className="container-rail hero-overlay-content space-y-5 px-8 pb-10 pt-32 sm:px-12 sm:pb-12 sm:pt-36">
          <p className="eyebrow reveal-up">Nonprofit Support Network</p>
          <h1 className="hero-brand reveal-up delay-1">Safa Sanctuary</h1>
          <h2 className="hero-title reveal-up delay-2">{HERO_TITLE}</h2>
          <p className="hero-copy reveal-up delay-3">{HERO_COPY}</p>
          <div className="reveal-up delay-4 flex flex-wrap gap-3">
            <a href="/services" className="cta-chip">
              Explore Services
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-chip"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramSpotlightSection() {
  return (
    <section className="container-rail mt-12">
      <div className="instagram-spotlight section-pane section-glow grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="space-y-4">
          <p className="eyebrow reveal-up">Follow Us on Instagram</p>
          <h2 className="section-title reveal-up delay-1">
            Stay Connected With Safa Sanctuary
          </h2>
          <p className="text-base leading-8 text-[--ink-soft] reveal-up delay-2">
            We share updates, stories, and community resources regularly. Follow
            us to stay informed and connected.
          </p>
          <div className="insta-tags reveal-up delay-3">
            <span>Stories</span>
            <span>Resources</span>
            <span>Events</span>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="insta-pill reveal-up delay-4"
          >
            Follow @safasanctuary
          </a>
        </div>
        <div className="insta-mock reveal-up delay-2">
          <div className="insta-mock-top">
            <span className="insta-dot" />
            <span className="insta-dot" />
            <span className="insta-dot" />
            <p>@safasanctuary</p>
          </div>
          <div className="insta-grid">
            <Image
              src="/images/home-placeholder-1.svg"
              alt="Instagram preview placeholder 1"
              width={800}
              height={560}
              className="insta-cell insta-cell--a"
            />
            <Image
              src="/images/home-placeholder-2.svg"
              alt="Instagram preview placeholder 2"
              width={800}
              height={560}
              className="insta-cell insta-cell--b"
            />
            <Image
              src="/images/home-placeholder-3.svg"
              alt="Instagram preview placeholder 3"
              width={800}
              height={560}
              className="insta-cell insta-cell--c"
            />
          </div>
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
    <section className="container-rail mt-12">
      <div className="section-pane space-y-8 p-8 sm:p-10">
        <div className="space-y-3">
          <p className="eyebrow reveal-up">Visual Placeholders</p>
          <h2 className="section-title reveal-up delay-1">Homepage Image Blocks</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {placeholders.map((item, index) => (
            <article
              key={item.src}
              className={`image-placeholder-card card-lift reveal-up delay-${Math.min(index + 1, 3)}`}
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
    </section>
  );
}

function MissionSection({ mission }: { mission: string }) {
  return (
    <section className="container-rail mt-12">
      <div className="section-pane grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/images/mission.webp"
            alt="Safa Sanctuary mission"
            width={1080}
            height={1350}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="space-y-4">
          <p className="eyebrow reveal-up">Our Mission</p>
          <p className="text-lg leading-8 text-[--ink-soft] reveal-up delay-1">
            {mission}
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutIntroSection() {
  return (
    <section className="container-rail mt-12">
      <div className="section-pane space-y-4 p-8 sm:p-10">
        <p className="eyebrow reveal-up">Who We Are</p>
        <h2 className="section-title reveal-up delay-1">About Safa Sanctuary</h2>
        <p className="text-lg leading-8 text-[--ink-soft] reveal-up delay-2">
          {ABOUT_OVERVIEW}
        </p>
      </div>
    </section>
  );
}

function BoardSection() {
  return (
    <section className="container-rail mt-12">
      <div className="section-pane space-y-8 p-8 sm:p-10">
        <h2 className="section-title">Board of Directors</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {BOARD_MEMBERS.map((member) => (
            <article key={member.name} className="board-card card-lift">
              <Image
                src={member.image}
                alt={member.imageAlt}
                width={1200}
                height={1200}
                className="board-image"
              />
              <p className="board-role">{member.role}</p>
              <h3 className="board-name">{member.name}</h3>
              <p className="board-bio">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesCards({ headingTag = "h2" }: { headingTag?: "h1" | "h2" }) {
  const HeadingTag = headingTag;
  return (
    <section id="services-section" className="container-rail mt-12">
      <div className="section-pane space-y-8 p-6 sm:p-8">
        <HeadingTag className="section-title reveal-up">Services</HeadingTag>
        <div className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <article
              key={service.title}
              className={`service-card card-lift reveal-up delay-${Math.min(index + 1, 3)}`}
            >
              <p className="service-step">0{index + 1}</p>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-copy">{service.description}</p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-[--line]">
                <Image
                  src={service.placeholderImage}
                  alt={`${service.title} placeholder visual`}
                  width={1200}
                  height={780}
                  className="h-44 w-full object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportFormSection({ includeSmsConsent }: { includeSmsConsent: boolean }) {
  return (
    <section className="container-rail mt-12">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div className="section-pane section-glow space-y-4 p-8">
          <p className="eyebrow reveal-up">Support Request</p>
          <h2 className="section-title reveal-up delay-1">{SUPPORT_TITLE}</h2>
          <p className="text-base leading-8 text-[--ink-soft] reveal-up delay-2">
            {SUPPORT_COPY}
          </p>
        </div>
        <ContactForm includeSmsConsent={includeSmsConsent} />
      </div>
    </section>
  );
}

function PolicySection() {
  return (
    <section className="container-rail">
      <div className="section-pane space-y-8 p-7 sm:p-10">
        <h1 className="section-title">Privacy Policy</h1>
        <p className="text-base leading-8 text-[--ink-soft]">{PRIVACY_INTRO}</p>
        <div className="space-y-8">
          {PRIVACY_POLICY.map((section) => (
            <section key={section.heading} className="space-y-3">
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
            </section>
          ))}
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
