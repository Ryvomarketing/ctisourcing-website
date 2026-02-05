"use client";

import { motion } from "framer-motion";
import { DollarSign, Factory, Leaf } from "lucide-react";

const valueProps = [
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "Direct origin sourcing with no middlemen. Get premium organic products at origin-level pricing without unnecessary markups.",
  },
  {
    icon: Factory,
    title: "Reliable Supply",
    description:
      "Tanzania's largest processing facility with thousands of hives across protected reserves. Consistent quality and volume you can count on.",
  },
  {
    icon: Leaf,
    title: "Contamination Free",
    description:
      "Sourced from protected forest reserves with no industrial farming, no chemical exposure, and minimal human interference. Pure by nature.",
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
