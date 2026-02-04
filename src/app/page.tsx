import { Hero } from "@/components/sections/hero";
import { ValueProps } from "@/components/sections/value-props";
import { ProductPreview } from "@/components/sections/product-preview";
import { CTABanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <ProductPreview />
      <CTABanner />
    </>
  );
}
