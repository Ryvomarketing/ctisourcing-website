"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, Leaf, Factory, BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/layout/contact-modal-context";

type BeeswaxType = "organic" | "conventional";

const beeswaxData = {
  organic: {
    title: "Organic Beeswax",
    badge: "USDA Organic Certified",
    description:
      "Premium certified organic beeswax sourced from the Nyahua Forest Reserve in Tanzania. Full hive-level traceability with QR-coded tracking from field to factory.",
    features: [
      "USDA NOP & EU Organic certified",
      "Full hive-level traceability",
      "QR-coded tracking system",
      "Laboratory tested per batch",
      "Certificate of Analysis included",
    ],
    specifications: {
      "CAS Number": "8012-89-3",
      "Melting Point": "61-65°C (142-149°F)",
      Appearance: "Solid, yellow to golden",
      Certifications: "USDA NOP, EU Organic",
      "Available Formats": "Blocks, slabs, pastilles",
      Origin: "Tanzania (Nyahua Forest Reserve)",
    },
    applications: [
      "Cosmetics & personal care",
      "Pharmaceuticals",
      "Food-grade applications",
      "Premium candles",
    ],
  },
  conventional: {
    title: "Conventional Beeswax",
    badge: "Quality Assured",
    description:
      "High-quality conventional beeswax at competitive pricing. Sourced from the same certified beekeepers using organic methods, with processing fully controlled at our facility.",
    features: [
      "Same quality standards as organic",
      "Competitive pricing",
      "No adulteration risk",
      "Processing-level traceability",
      "Certificate of Analysis included",
    ],
    specifications: {
      "CAS Number": "8012-89-3",
      "Melting Point": "61-65°C (142-149°F)",
      Appearance: "Solid, yellow",
      Quality: "Cosmetic & pharmaceutical grade",
      "Available Formats": "Blocks, slabs, pastilles",
      Origin: "Tanzania",
    },
    applications: [
      "Cosmetics & personal care",
      "Candle manufacturing",
      "Industrial applications",
      "Cost-sensitive formulations",
    ],
  },
};

export function BeeswaxSection() {
  const [activeType, setActiveType] = useState<BeeswaxType>("organic");
  const { openModal } = useContactModal();
  const data = beeswaxData[activeType];
  const isConventional = activeType === "conventional";

  return (
    <section
      id="beeswax"
      className="relative py-24 bg-black scroll-mt-20"
      aria-labelledby="beeswax-heading"
    >
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="beeswax-heading"
            className="font-serif text-3xl sm:text-4xl text-cream mb-4"
          >
            Beeswax
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Type Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          {/* Toggle Buttons */}
          <div className="inline-flex rounded-xl bg-charcoal/80 p-1.5 border border-gold/10">
            <button
              onClick={() => setActiveType("organic")}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeType === "organic"
                  ? "bg-gold text-black shadow-lg shadow-gold/20"
                  : "text-cream/60 hover:text-cream"
              }`}
              aria-pressed={activeType === "organic"}
            >
              <Leaf className="w-4 h-4" aria-hidden="true" />
              <span>Organic</span>
            </button>
            <button
              onClick={() => setActiveType("conventional")}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeType === "conventional"
                  ? "bg-forest text-cream shadow-lg shadow-forest/20"
                  : "text-cream/60 hover:text-cream"
              }`}
              aria-pressed={activeType === "conventional"}
            >
              <Factory className="w-4 h-4" aria-hidden="true" />
              <span>Conventional</span>
            </button>
          </div>
        </motion.div>

        {/* Currently Viewing Indicator Banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeType}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className={`mb-8 p-4 rounded-lg border ${
              isConventional
                ? "bg-forest/20 border-forest/40"
                : "bg-gold/10 border-gold/30"
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
              <div
                className={`flex items-center gap-2 ${
                  isConventional ? "text-cream" : "text-gold"
                }`}
              >
                {isConventional ? (
                  <Factory className="w-5 h-5 text-forest-light" aria-hidden="true" />
                ) : (
                  <Leaf className="w-5 h-5" aria-hidden="true" />
                )}
                <span className="font-semibold text-lg">
                  {isConventional ? "Conventional Beeswax" : "Organic Beeswax"}
                </span>
              </div>
              {isConventional && (
                <div className="flex items-center gap-2 px-3 py-1 bg-forest/30 rounded-full">
                  <BadgePercent className="w-4 h-4 text-forest-light" aria-hidden="true" />
                  <span className="text-forest-light text-sm font-medium">
                    Competitive Pricing
                  </span>
                </div>
              )}
              {!isConventional && (
                <div className="flex items-center gap-2 px-3 py-1 bg-gold/20 rounded-full">
                  <Check className="w-4 h-4 text-gold" aria-hidden="true" />
                  <span className="text-gold text-sm font-medium">
                    USDA Certified
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div
            key={`image-${activeType}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div
              className={`relative rounded-lg overflow-hidden border-2 transition-colors duration-300 ${
                isConventional ? "border-forest/40" : "border-gold/20"
              }`}
            >
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1200&auto=format&fit=crop')`,
                }}
                role="img"
                aria-label={data.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1.5 text-xs font-semibold tracking-wide rounded ${
                    isConventional
                      ? "bg-forest text-cream"
                      : "bg-gold text-black"
                  }`}
                >
                  {data.badge}
                </span>
              </div>

              {/* Type indicator stripe */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 ${
                  isConventional ? "bg-forest-light" : "bg-gold"
                }`}
              />
            </div>

            {/* Applications */}
            <div
              className={`mt-6 p-6 bg-charcoal rounded-lg border transition-colors duration-300 ${
                isConventional ? "border-forest/30" : "border-gold/10"
              }`}
            >
              <h4
                className={`text-sm tracking-wide uppercase mb-4 ${
                  isConventional ? "text-forest-light" : "text-gold"
                }`}
              >
                Applications
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {data.applications.map((app) => (
                  <div
                    key={app}
                    className="flex items-center gap-2 text-cream/70 text-sm"
                  >
                    <Check
                      className={`w-4 h-4 flex-shrink-0 ${
                        isConventional ? "text-forest-light" : "text-gold"
                      }`}
                      aria-hidden="true"
                    />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            key={`details-${activeType}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-cream">
                {data.title}
              </h3>
              {isConventional && (
                <span className="px-2 py-1 bg-forest/30 text-forest-light text-xs font-medium rounded">
                  Best Value
                </span>
              )}
            </div>
            <p className="text-cream/70 leading-relaxed mb-8">
              {data.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h4
                className={`text-sm tracking-wide uppercase mb-4 ${
                  isConventional ? "text-forest-light" : "text-gold"
                }`}
              >
                Key Features
              </h4>
              <ul className="space-y-3">
                {data.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isConventional ? "bg-forest/30" : "bg-gold/10"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          isConventional ? "text-forest-light" : "text-gold"
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-cream/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h4
                className={`text-sm tracking-wide uppercase mb-4 ${
                  isConventional ? "text-forest-light" : "text-gold"
                }`}
              >
                Specifications
              </h4>
              <div
                className={`bg-charcoal rounded-lg border overflow-hidden transition-colors duration-300 ${
                  isConventional ? "border-forest/30" : "border-gold/10"
                }`}
              >
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(data.specifications).map(
                      ([key, value], index) => (
                        <tr
                          key={key}
                          className={
                            index !== 0
                              ? `border-t ${
                                  isConventional
                                    ? "border-forest/20"
                                    : "border-gold/10"
                                }`
                              : ""
                          }
                        >
                          <td className="px-4 py-3 text-cream/50 font-medium">
                            {key}
                          </td>
                          <td className="px-4 py-3 text-cream">{value}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA - Keep gold for both to maintain brand consistency on CTAs */}
            <Button
              onClick={openModal}
              className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-6 text-base transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,168,83,0.3)]"
            >
              Request Quote for {data.title}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
