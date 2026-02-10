"use client";

import { motion } from "framer-motion";
import { Check, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/layout/contact-modal-context";
import { trackCTA } from "@/lib/analytics";

const honeyData = {
  title: "Organic Honey",
  badge: "Organic",
  description:
    "Pure, additive-free organic honey with a unique Tanzanian floral profile. Sourced from the same sustainable apiaries in the Nyahua Forest Reserve, our honey offers distinctive flavor notes and lab-verified purity.",
  features: [
    "100% natural, no additives",
    "Unique Tanzanian floral profile",
    "Full batch traceability",
    "Laboratory tested for purity",
    "Bulk drums available",
  ],
  specifications: {
    Type: "Multifloral honey",
    Certification: "USDA/NOP, EU Organic",
    Color: "Light to medium amber",
    Packaging: "Bulk drums (various sizes)",
    Origin: "Tanzania (Nyahua Forest Reserve)",
    "Shelf Life": "Indefinite (when stored properly)",
  },
  applications: [
    "Food manufacturing",
    "Beverage industry",
    "Natural sweetener",
    "Health & wellness products",
  ],
};

export function HoneySection() {
  const { openModal } = useContactModal();

  return (
    <section
      id="honey"
      className="relative py-24 bg-charcoal scroll-mt-20"
      aria-labelledby="honey-heading"
    >
      <div className="absolute inset-0 noise-overlay" />

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
            id="honey-heading"
            className="font-serif text-3xl sm:text-4xl text-cream mb-4"
          >
            Honey
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Content Grid - Reversed layout for visual variety */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Details - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-forest/20 text-forest-light text-xs font-medium rounded mb-4">
              <Leaf className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{honeyData.badge}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-cream mb-4">
              {honeyData.title}
            </h3>
            <p className="text-cream/70 leading-relaxed mb-8">
              {honeyData.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-sm text-gold tracking-wide uppercase mb-4">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {honeyData.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" aria-hidden="true" />
                    </div>
                    <span className="text-cream/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h4 className="text-sm text-gold tracking-wide uppercase mb-4">
                Specifications
              </h4>
              <div className="bg-black/50 rounded-lg border border-gold/10 overflow-hidden">
                <table className="w-full text-sm">
                  <caption className="sr-only">Honey Specifications</caption>
                  <tbody>
                    {Object.entries(honeyData.specifications).map(
                      ([key, value], index) => (
                        <tr
                          key={key}
                          className={index !== 0 ? "border-t border-gold/10" : ""}
                        >
                          <td className="px-4 py-3 text-cream/70 font-medium">
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

            {/* CTA */}
            <Button
              onClick={() => {
                trackCTA({ cta_location: "product_section", cta_text: "Inquire About Honey", cta_action: "open_modal" });
                openModal();
              }}
              className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-6 text-base transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,168,83,0.3)]"
            >
              Inquire About Honey
            </Button>
          </motion.div>

          {/* Image - Right side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:order-2"
          >
            <div className="relative rounded-lg overflow-hidden border border-gold/10">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=1200&auto=format&fit=crop')`,
                }}
                role="img"
                aria-label="Golden honey"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 bg-gold text-black text-xs font-semibold tracking-wide rounded">
                  Organic
                </span>
              </div>
            </div>

            {/* Applications */}
            <div className="mt-6 p-6 bg-black/50 rounded-lg border border-gold/10">
              <h4 className="text-sm text-gold tracking-wide uppercase mb-4">
                Applications
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {honeyData.applications.map((app) => (
                  <div key={app} className="flex items-center gap-2 text-cream/70 text-sm">
                    <Check className="w-4 h-4 text-forest-light flex-shrink-0" aria-hidden="true" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Unique selling point */}
            <div className="mt-6 p-6 bg-forest/10 rounded-lg border border-forest/20">
              <p className="text-cream/80 text-sm italic">
                &ldquo;Our honey&apos;s unique Tanzanian floral profile comes from the
                diverse wildflowers of the Nyahua Forest Reserve—a taste you
                won&apos;t find anywhere else.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
