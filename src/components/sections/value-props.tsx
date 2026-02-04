"use client";

import { motion } from "framer-motion";
import { Shield, QrCode, Building2 } from "lucide-react";

const valueProps = [
  {
    icon: Shield,
    title: "USDA Organic Certified",
    description:
      "Verified by Bio.Inspecta Switzerland. Full compliance with NOP standards for handling and processing.",
  },
  {
    icon: QrCode,
    title: "Full Traceability",
    description:
      "QR-coded tracking from hive to delivery. Every batch tested and documented with Certificate of Analysis.",
  },
  {
    icon: Building2,
    title: "US-Based Partner",
    description:
      "American business terms, domestic support. Your trusted point of contact for African sourcing.",
  },
];

export function ValueProps() {
  return (
    <section
      className="relative py-24 bg-black"
      aria-labelledby="value-props-heading"
    >
      {/* Subtle honeycomb pattern */}
      <div className="absolute inset-0 honeycomb-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="value-props-heading"
            className="font-serif text-3xl sm:text-4xl text-cream mb-4"
          >
            Why Choose CTI Sourcing
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="card-glow p-8 rounded-lg h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                    <prop.icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                  {prop.title}
                </h3>
                <p className="text-cream/60 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
