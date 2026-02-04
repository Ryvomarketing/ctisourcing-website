import { Metadata } from "next";
import { ProductsHero } from "./components/products-hero";
import { BeeswaxSection } from "./components/beeswax-section";
import { HoneySection } from "./components/honey-section";
import { ProcessSection } from "./components/process-section";
import { SustainabilitySection } from "./components/sustainability-section";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Products | CTI Sourcing - Premium Beeswax & Honey",
  description:
    "Explore our premium organic and conventional beeswax and honey products sourced from Tanzania. Full specifications, certifications, and bulk ordering available.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <BeeswaxSection />
      <HoneySection />
      <ProcessSection />
      <SustainabilitySection />
      <CTABanner />
    </>
  );
}
