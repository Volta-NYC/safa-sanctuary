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
      <div className="hero-text">
        <h1 className="reveal reveal-delay-1">Safa Sanctuary</h1>
        <h2 className="hero-title hero-title--typed reveal reveal-delay-2">
          <span className="hero-title-static">Keeping Women from</span>
          <span className="hero-title-dynamic hero-title-dynamic--sentence">
            <TypewriterText
              text={HERO_TITLE}
              highlightWord="Crack"
              typingSpeedMs={185}
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
            src="/images/events/soft-launch-cupcakes.jpg"
            alt="Cupcakes from Safa Sanctuary's soft launch"
            width={800}
            height={560}
          />
          <Image
            src="/images/events/soft-launch-community-totes.jpg"
            alt="Guests holding tote bags at Safa Sanctuary's soft launch"
            width={800}
            height={560}
          />
          <Image
            src="/images/events/soft-launch-guests-indoors.jpg"
            alt="Guests indoors during Safa Sanctuary's soft launch"
            width={800}
            height={560}
          />
        </div>
      </div>
    </section>
  );
}

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
};

function ImageGallerySection({
  images,
}: {
  images: GalleryImage[];
}) {
  return (
    <section className="home-gallery-section">
      <div className="container-rail">
        <div className="section-pane p-8 sm:p-10">
          <div className="gallery-grid">
            {images.map((item, index) => (
              <article
                key={item.src}
                className={`image-placeholder-card card-lift reveal reveal-delay-${Math.min(index + 1, 4)}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={780}
                  className="gallery-card-image"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const HOME_SERVICE_GALLERY: GalleryImage[] = [
  {
    src: "/images/events/home-gallery-01.jpg",
    alt: "Guests gathering on the rooftop at the Safa Sanctuary soft launch",
    title: "Rooftop Gathering",
  },
  {
    src: "/images/events/home-gallery-02.jpg",
    alt: "Story display and guests during the Safa Sanctuary soft launch",
    title: "Community Story",
  },
  {
    src: "/images/events/home-gallery-03.jpg",
    alt: "Speakers sharing during the Safa Sanctuary soft launch",
    title: "Shared Voices",
  },
  {
    src: "/images/events/home-gallery-04.jpg",
    alt: "Community members gathered outdoors at the Safa Sanctuary soft launch",
    title: "Gathered Outdoors",
  },
  {
    src: "/images/events/home-gallery-05.jpg",
    alt: "Food table details from the Safa Sanctuary soft launch",
    title: "Shared Table",
  },
  {
    src: "/images/events/home-gallery-06.jpg",
    alt: "Guests seated near a Safa Sanctuary service poster",
    title: "Community Support",
  },
];

const SERVICES_GALLERY: GalleryImage[] = [
  {
    src: "/images/events/services-gallery-01.jpg",
    alt: "Community members applauding during the Safa Sanctuary soft launch",
    title: "Community Support",
  },
  {
    src: "/images/events/services-gallery-02.jpg",
    alt: "Safa Sanctuary team members standing together on a rooftop",
    title: "Team Support",
  },
  {
    src: "/images/events/services-gallery-03.jpg",
    alt: "Community members participating in a hands-on activity",
    title: "Hands-On Activity",
  },
  {
    src: "/images/events/services-gallery-04.jpg",
    alt: "Child participating in an activity at the Safa Sanctuary soft launch",
    title: "Family Welcome",
  },
  {
    src: "/images/events/services-gallery-05.jpg",
    alt: "Decorated candle and activity materials from the Safa Sanctuary soft launch",
    title: "Creative Materials",
  },
  {
    src: "/images/events/services-gallery-06.jpg",
    alt: "Guest holding a decorated candle at the Safa Sanctuary soft launch",
    title: "Community Joy",
  },
];

function MissionSection({
  mission,
  imageSrc = "/images/events/soft-launch-rooftop-mingling.jpg",
  imageAlt = "Community gathering during Safa Sanctuary's soft launch",
}: {
  mission: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="mission-section">
      <div className="mission-image-col">
        <Image
          src={imageSrc}
          alt={imageAlt}
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
                <div className="service-copy-block">
                  <h3
                    className={`service-title ${
                      service.title.length > 34 ? "service-title-compact" : ""
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="service-copy">{service.description}</p>
                </div>
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
      <InstagramSpotlightSection />
      <MissionSection
        mission={HOME_MISSION}
        imageSrc="/images/events/home-mission-community-table.jpg"
        imageAlt="Community members gathered around a workshop table"
      />
      <ServicesCards />
      <ImageGallerySection
        images={HOME_SERVICE_GALLERY}
      />
      <SupportFormSection includeSmsConsent={false} />
    </>
  );
}

export function AboutExperience() {
  return (
    <>
      <AboutIntroSection />
      <MissionSection
        mission={ABOUT_MISSION}
        imageSrc="/images/events/about-mission-board-rooftop.jpg"
        imageAlt="Safa Sanctuary team members standing together on a rooftop"
      />
      <BoardSection />
    </>
  );
}

export function ServicesExperience() {
  return (
    <>
      <ServicesCards headingTag="h1" />
      <ImageGallerySection
        images={SERVICES_GALLERY}
      />
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
            Safa Sanctuary is a 501(c)(3) nonprofit organization, and donations
            may be tax-deductible as allowed by law. You can support the work
            directly through Zelle or through the secure online payment link
            below.
          </p>
          <div className="donate-methods">
            <div className="donate-method-card">
              <p className="donate-method-label">Zelle</p>
              <h2 className="donate-method-title">board@safasanctuary.org</h2>
              <p className="donate-method-copy">
                Send your donation by Zelle using the email above.
              </p>
              <a href="mailto:board@safasanctuary.org" className="btn-secondary">
                Email the Zelle Address
              </a>
            </div>
            <div className="donate-method-card donate-method-card--accent">
              <p className="donate-method-label">Online Payment</p>
              <h2 className="donate-method-title">Pay Securely Online</h2>
              <p className="donate-method-copy">
                Use Safa Sanctuary&apos;s Autobooks payment page if you prefer to
                donate online.
              </p>
              <div className="donate-actions">
                <a
                  href="https://app.autobooks.co/pay/safa-sanctuary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Open Donation Page
                </a>
                <a href={`tel:${CONTACT_PHONE}`} className="btn-secondary">
                  Call {CONTACT_PHONE}
                </a>
              </div>
            </div>
          </div>
          <div className="donate-qr">
            <div className="donate-qr-card">
              <div className="donate-qr-image-wrap">
                <Image
                  src="/images/donate-qr-code.png"
                  alt="QR code for Safa Sanctuary donation payment page"
                  width={256}
                  height={256}
                />
              </div>
              <div className="donate-qr-copy">
                <p className="donate-method-label">Scan to Donate</p>
                <p className="section-copy">
                  Scan this QR code to open the Safa Sanctuary payment page on
                  your phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
