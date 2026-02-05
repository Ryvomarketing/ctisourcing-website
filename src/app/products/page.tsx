import { Metadata } from "next";
import { ProductsHero } from "./components/products-hero";
import { BeeswaxSection } from "./components/beeswax-section";
import { HoneySection } from "./components/honey-section";
import { ProcessSection } from "./components/process-section";
import { CTABanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Products - Premium Beeswax & Honey",
  description:
    "Explore our premium organic beeswax and honey products sourced from Tanzania. USDA/NOP certified, full specifications, and bulk ordering available.",
  openGraph: {
    title: "Products | CTI Sourcing - Premium Beeswax & Honey",
    description:
      "Premium organic beeswax and honey from Tanzania. USDA/NOP certified, bulk quantities available.",
  },
};

// JSON-LD for Products
const productsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Organic Beeswax",
        description:
          "USDA/NOP Organic certified beeswax sourced from Tanzania's Nyahua Forest Reserve. Available in blocks, slabs, and pastilles.",
        brand: {
          "@type": "Brand",
          name: "CTI Sourcing",
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "CAS Number",
            value: "8012-89-3",
          },
          {
            "@type": "PropertyValue",
            name: "Melting Point",
            value: "61-65°C (142-149°F)",
          },
          {
            "@type": "PropertyValue",
            name: "Certification",
            value: "USDA/NOP, EU Organic",
          },
        ],
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Organic Honey",
        description:
          "100% natural, USDA/NOP Organic certified honey with unique Tanzanian floral profile. Bulk drums available.",
        brand: {
          "@type": "Brand",
          name: "CTI Sourcing",
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
        },
      },
    },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
      <ProductsHero />
      <BeeswaxSection />
      <HoneySection />
      <ProcessSection />
      <CTABanner />
    </>
  );
}
