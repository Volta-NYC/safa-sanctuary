import type { Metadata } from "next";
import { GetInTouchExperience } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Get In Touch",
  description:
    "Contact Safa Sanctuary for support, referrals, and culturally responsive guidance.",
};

export default function GetInTouchPage() {
  return <GetInTouchExperience />;
}
