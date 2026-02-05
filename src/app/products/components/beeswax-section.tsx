"use client";

import { motion } from "framer-motion";
import { Check, Leaf, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/layout/contact-modal-context";

const beeswaxData = {
  title: "Organic Beeswax",
  badge: "Organic",
  description:
    "Premium certified organic beeswax sourced from the Nyahua Forest Reserve in Tanzania. Full hive-level traceability with QR-coded tracking from field to factory.",
  features: [
    "Full hive-level traceability",
    "QR-coded tracking system",
    "Laboratory tested per batch",
    "Certificate of Analysis included",
  ],
  specifications: {
    "CAS Number": "8012-89-3",
    "Melting Point": "61-65°C (142-149°F)",
    Appearance: "Solid, yellow to golden",
    Certifications: "USDA/NOP, EU Organic",
    "Available Formats": "Blocks, slabs, pastilles",
    Origin: "Tanzania (Nyahua Forest Reserve)",
  },
  applications: [
    "Cosmetics & personal care",
    "Pharmaceuticals",
    "Food-grade applications",
    "Premium candles",
  ],
};

export function BeeswaxSection() {
  const { openModal } = useContactModal();

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

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden border-2 border-gold/20">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/raw beeswax.png')`,
                }}
                role="img"
                aria-label={beeswaxData.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold text-black text-xs font-semibold tracking-wide rounded">
                  <Leaf className="w-3.5 h-3.5" aria-hidden="true" />
                  {beeswaxData.badge}
                </span>
              </div>

              {/* Bottom stripe */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
            </div>

            {/* Applications */}
            <div className="mt-6 p-6 bg-charcoal rounded-lg border border-gold/10">
              <h4 className="text-sm text-gold tracking-wide uppercase mb-4">
                Applications
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {beeswaxData.applications.map((app) => (
                  <div
                    key={app}
                    className="flex items-center gap-2 text-cream/70 text-sm"
                  >
                    <Check
                      className="w-4 h-4 text-gold flex-shrink-0"
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl sm:text-3xl text-cream mb-4">
              {beeswaxData.title}
            </h3>
            <p className="text-cream/70 leading-relaxed mb-8">
              {beeswaxData.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-sm text-gold tracking-wide uppercase mb-4">
                Key Features
              </h4>
              <ul className="space-y-3">
                {beeswaxData.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" aria-hidden="true" />
                    </div>
                    <span className="text-cream/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h4 className="text-sm text-gold tracking-wide uppercase mb-4">
                Specifications
              </h4>
              <div className="bg-charcoal rounded-lg border border-gold/10 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(beeswaxData.specifications).map(
                      ([key, value], index) => (
                        <tr
                          key={key}
                          className={index !== 0 ? "border-t border-gold/10" : ""}
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

            {/* CTA */}
            <Button
              onClick={openModal}
              className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-6 text-base transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,168,83,0.3)]"
            >
              Inquire About Beeswax
            </Button>
          </motion.div>
        </div>

        {/* Other Wax Products Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-charcoal/50 border border-cream/10 rounded-lg">
            <MessageCircle className="w-5 h-5 text-cream/50" aria-hidden="true" />
            <span className="text-cream/60 text-sm">
              Looking for other wax products or specifications?{" "}
              <button
                onClick={openModal}
                className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors"
              >
                Contact us
              </button>{" "}
              to discuss your requirements.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
