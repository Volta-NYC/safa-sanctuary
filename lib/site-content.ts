export type NavItem = {
  href: string;
  label: string;
  emphasis?: boolean;
};

export type ServiceItem = {
  title: string;
  description: string;
  placeholderImage: string;
};

export type PolicySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BoardMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/donate", label: "Donate", emphasis: true },
];

export const SITE_TITLE = "Safa Sanctuary";

export const INSTAGRAM_URL = "https://www.instagram.com/safasanctuary/";

export const CONTACT_EMAIL = "info@safasanctuary.org";
export const CONTACT_PHONE = "(347) 899-3109";
export const NONPROFIT_DETAILS = [
  "Safa Sanctuary Inc.",
  "New York Registered Nonprofit Organization",
  "NY Charities Organization ID: 51-63-51",
  "367 Chestnut St, Brooklyn, NY 11208",
];

export const HERO_TITLE = "Falling Through The Crack";
export const HERO_COPY =
  "In New York City, services exist - but navigating them without language access or support can be overwhelming. Safa Sanctuary bridges that gap.";

export const ABOUT_MISSION =
  "The mission of Safa Sanctuary Inc. is to support, empower, educate, and guide women from marginalized communities in Brooklyn and Queens. We serve as community navigators, bridging the gap between women's needs and available systems of support, and partner with community-based organizations to help women heal, grow, and thrive.";

export const ABOUT_OVERVIEW =
  "Safa Sanctuary Inc. is a nonprofit dedicated to helping women access care, advocacy, and culturally responsive guidance. We work at the intersection of trust, language access, and community systems so women can move forward with clarity, dignity, and support.";

export const BOARD_MEMBERS: BoardMember[] = [
  {
    name: "Salma Salim",
    role: "Founder & Secretary",
    bio: "Salma Salim, LMSW, is the founder of Safa Sanctuary Inc. With nine years of nonprofit experience, she built this organization to close the gap in culturally and linguistically safe mental health services for women across Brooklyn and Queens.",
    image: "/images/board/salma-salim.png",
    imageAlt: "Portrait of Salma Salim",
  },
  {
    name: "Hector Mercado",
    role: "President",
    bio: "Hector Mercado brings 20 years of nonprofit leadership across program development, staff training, compliance, quality improvement, and grant management. He helps ensure Safa Sanctuary delivers mission-driven services with strong operational accountability.",
    image: "/images/board/hector-mercado.png",
    imageAlt: "Portrait of Hector Mercado",
  },
  {
    name: "Catherine Genao",
    role: "Treasurer",
    bio: "Catherine Genao brings 10 years of nonprofit experience in program development, counseling, fundraising, and outcomes reporting. She is known for translating community voices into practical, effective programs.",
    image: "/images/board/catherine-genao.jpg",
    imageAlt: "Portrait of Catherine Genao",
  },
  {
    name: "Ratha Ali",
    role: "Board Member",
    bio: "Ratha Ali brings five years of nonprofit experience in counseling, housing support, program development, and fundraising. She is recognized for turning ideas into action with energy and care.",
    image: "/images/board/ratha-ali.png",
    imageAlt: "Portrait of Ratha Ali",
  },
];

export const HOME_MISSION =
  "The mission of Safa Sanctuary Inc. is to support, empower, educate, and guide women from AMEMSA, BIPOC, and other marginalized communities in Brooklyn and Queens. We serve as community navigators, bridging the gap between women's needs and available systems of support, and partner with community-based organizations to help women heal, grow, and thrive.";

export const SERVICES: ServiceItem[] = [
  {
    title: "Community Support Line",
    description:
      "A confidential first point of contact for women seeking guidance, clarity, or support. We listen, assess needs, and help callers understand their options for navigating legal, medical, housing, and community services - without pressure or judgment.",
    placeholderImage: "/images/events/soft-launch-rooftop-mingling.jpg",
  },
  {
    title: "Case Management & Advocacy",
    description:
      "Ongoing one-on-one support to help women navigate systems that are often confusing or inaccessible. We help coordinate care, communicate with service providers, and advocate for clients' needs with dignity and cultural understanding.",
    placeholderImage: "/images/events/soft-launch-guest-duo.jpg",
  },
  {
    title: "Client Navigation & Accompaniment",
    description:
      "Hands-on support to navigate healthcare, legal, housing, and public benefit systems. We accompany clients to appointments, assist with forms, and help each person understand their options and next steps.",
    placeholderImage: "/images/events/soft-launch-indoor-gathering.jpg",
  },
  {
    title: "Culturally Responsive Education & Empowerment",
    description:
      "Education and skill-building rooted in cultural understanding and lived experience. Safa provides workshops, resources, and one-on-one guidance that help clients understand their rights, options, and systems impacting their lives, so they can make informed decisions with confidence.",
    placeholderImage: "/images/events/soft-launch-craft-activity.jpg",
  },
];

export const SUPPORT_TITLE = "Do You or Someone You Know Need Support?";
export const SUPPORT_COPY =
  "Please complete this form and a member of our team will follow up within 24-48 hours. You can contact us for yourself or on behalf of another person. We handle all shared information with care and discretion.";

export const PRIVACY_INTRO =
  'Safa Sanctuary Inc ("Safa Sanctuary," "we," "our," or "us") is committed to protecting your privacy and handling your personal information with care, transparency, and respect. This Privacy Policy explains what information we collect, how we use it, and how we protect it, including information collected through phone calls, SMS/text messaging, online forms, and other communications facilitated through RingCentral.';

export const PRIVACY_POLICY: PolicySection[] = [
  {
    heading: "1. Information We Collect",
    paragraphs: [
      "We may collect the following categories of personal information:",
      "We only collect personal information that is necessary to provide services, respond to inquiries, and support our mission.",
    ],
    bullets: [
      "Contact Information: Name, phone number, email address, mailing address.",
      "Communication Information: Call records, voicemail messages, SMS/text messages, and other communications exchanged with us via RingCentral.",
      "Form Submissions: Information you provide when completing intake forms, contact forms, or service requests on our website.",
      "Technical Information: IP address, device type, browser type, and basic usage data when you interact with our website or communication platforms.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    paragraphs: [
      "We use the personal information we collect for the following purposes:",
      "We do not use your information for commercial advertising or unrelated marketing purposes.",
    ],
    bullets: [
      "To communicate with you regarding services, resources, referrals, or inquiries.",
      "To provide client navigation, support services, and follow-up care.",
      "To send appointment reminders, service-related updates, and relevant organizational communications.",
      "To improve our programs, services, and website functionality.",
      "To comply with legal, regulatory, and reporting obligations.",
    ],
  },
  {
    heading: "3. SMS/Text Messaging and Mobile Opt-In (SMS Terms of Service)",
    paragraphs: [
      "By providing your mobile phone number and opting in, you consent to receive SMS/text messages from Safa Sanctuary Inc. Consent may be provided by submitting a web form, requesting services, or initiating a text conversation with us. These messages are conversational and informational only and may include:",
      "If you consent to receive conversational and informational SMS from Safa Sanctuary Inc, you agree to receive such messages for the purposes listed above.",
      "No mobile opt-in or text message consent will be shared with third parties or affiliates.",
      "Your SMS consent is used solely for direct communication between you and Safa Sanctuary and is not sold, rented, or disclosed for marketing or promotional purposes.",
      "SMS messaging is not monitored 24/7 and should not be used for emergencies. While we take reasonable steps to protect your information, SMS/text messaging is not a fully secure communication method.",
    ],
    bullets: [
      "Responses to your inquiries",
      "Service-related updates",
      "Appointment reminders",
      "Follow-up communication related to support, navigation, or referrals",
      "Reply STOP to opt out of SMS communications at any time.",
      "Reply HELP for support or additional information.",
      "Message and data rates may apply.",
      "Messaging frequency may vary and messages are sent only as needed in response to your inquiry or services. We do not send recurring marketing campaigns.",
    ],
  },
  {
    heading: "4. Sharing of Information",
    paragraphs: [
      "We do not sell, rent, or trade personal information. We may share limited personal information only in the following circumstances:",
    ],
    bullets: [
      "With trusted service providers (such as RingCentral) who assist us in operating our communications and services, and who are contractually required to protect your information.",
      "When required by law, court order, or legal process.",
      "To protect the rights, safety, or property of Safa Sanctuary, our clients, or others.",
    ],
  },
  {
    heading: "5. Data Security",
    paragraphs: [
      "We implement reasonable administrative, technical, and physical safeguards to protect personal information from unauthorized access, disclosure, or misuse. Access to sensitive information is limited to authorized staff and volunteers who require it to perform their duties.",
    ],
  },
  {
    heading: "6. Your Rights and Choices",
    paragraphs: [
      "You have the right to:",
      "Requests can be made by contacting us using the information below.",
    ],
    bullets: [
      "Request access to or correction of your personal information.",
      "Withdraw consent for communications, including SMS/text messages.",
      "Ask questions about how your information is handled.",
    ],
  },
  {
    heading: "7. Updates to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.",
    ],
  },
  {
    heading: "8. Contact Us",
    paragraphs: [
      "If you have questions or concerns about this Privacy Policy or our privacy practices, please contact:",
      "Safa Sanctuary Inc",
      "Email: info@safasanctuary.org",
      "Accessibility Notice: This Privacy Policy is prominently displayed on our website, linked on all relevant web forms, and available in the footer of every page to ensure easy access.",
    ],
  },
];
