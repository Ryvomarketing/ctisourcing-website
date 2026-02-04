"use client";

import { motion } from "framer-motion";
import { TreePine, QrCode, Factory, FlaskConical, Ship } from "lucide-react";

const processSteps = [
  {
    icon: TreePine,
    title: "Sustainable Harvesting",
    description:
      "Beeswax and honey harvested from hives in the Nyahua Forest Reserve—a certified organic zone with wildlife and natural vegetation only.",
  },
  {
    icon: QrCode,
    title: "QR-Coded Traceability",
    description:
      "Every collection is tagged with unique QR codes at the field level, enabling full traceability from hive to your facility.",
  },
  {
    icon: Factory,
    title: "Professional Processing",
    description:
      "Processed at Tanzania's largest honey facility, originally built by the European Union. Stainless steel equipment, controlled temperatures, multi-stage filtration.",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Testing",
    description:
      "Every batch undergoes laboratory testing to verify quality and organic compliance. Certificate of Analysis (COA) provided with each shipment.",
  },
  {
    icon: Ship,
    title: "Export & Delivery",
    description:
      "Products exported to the US and delivered directly to your facility with full documentation and compliance paperwork.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-24 bg-forest overflow-hidden scroll-mt-20"
      aria-labelledby="process-heading"
    >
      {/* Honeycomb pattern */}
      <div className="absolute inset-0 honeycomb-pattern opacity-30" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest/95 to-forest" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase mb-4 block">
            Quality Assurance
          </span>
          <h2
            id="process-heading"
            className="font-serif text-3xl sm:text-4xl text-cream mb-4"
          >
            From Hive to Delivery
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Our rigorous process ensures every product meets the highest
            standards of quality, traceability, and organic compliance.
          </p>
          <div className="section-divider mx-auto mt-6" />
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative lg:flex lg:items-center lg:gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`lg:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <div
                    className={`bg-black/30 backdrop-blur-sm border border-gold/10 rounded-lg p-6 ${
                      index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                    } max-w-md`}
                  >
                    {/* Mobile icon */}
                    <div className="lg:hidden mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold/10 text-gold">
                        <step.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="font-serif text-xl text-cream mb-2">
                      {step.title}
                    </h3>
                    <p className="text-cream/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center icon - hidden on mobile */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-forest border-2 border-gold/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                      <step.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Step number */}
                <div
                  className={`hidden lg:block lg:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "lg:text-left" : "lg:text-right"
                  }`}
                >
                  <span className="text-6xl font-serif text-gold/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-black/30 border border-gold/20 rounded-lg">
            <FlaskConical className="w-5 h-5 text-gold" aria-hidden="true" />
            <span className="text-cream/80 text-sm">
              Certificate of Analysis (COA) provided with every shipment
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
