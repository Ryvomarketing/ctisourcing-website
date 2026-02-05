import { Metadata } from "next";
import { AboutHero } from "./components/about-hero";
import { StorySection } from "./components/story-section";
import { FoundersSection } from "./components/founders-section";
import { PartnershipSection } from "./components/partnership-section";
import { FacilitiesSection } from "./components/facilities-section";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "About Us | CTI Sourcing - Your US Partner for African Bee Products",
  description:
    "Learn about CTI Sourcing, founded by Roger Manzur and Bonaventure Mhonda. We're the exclusive US partner of QVC Africa, bringing premium Tanzanian beeswax and honey to American manufacturers.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <FoundersSection />
      <PartnershipSection />
      <FacilitiesSection />
      <CTABanner />
    </>
  );
}
