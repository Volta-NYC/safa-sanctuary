import type { Metadata } from "next";
import { DonateExperience } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Safa Sanctuary's mission through community-centered giving.",
};

export default function DonatePage() {
  return <DonateExperience />;
}
