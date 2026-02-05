"use client";

import { motion } from "framer-motion";
import { Factory, FlaskConical, Package, CheckCircle2 } from "lucide-react";

const facilities = [
  {
    icon: Factory,
    title: "Processing Facility",
    description: "Tanzania's largest honey processing facility located in Tabora Sikonge, equipped with state-of-the-art processing equipment.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop",
    alt: "Industrial processing facility",
  },
  {
    icon: FlaskConical,
    title: "Quality Laboratory",
    description: "On-site laboratory for testing purity, moisture content, and compliance with international organic standards.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1200&auto=format&fit=crop",
    alt: "Quality control laboratory",
  },
  {
    icon: Package,
    title: "Export Packaging",
    description: "Dedicated packaging lines for bulk drums, blocks, and custom specifications ready for international shipping.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    alt: "Export packaging and drums",
  },
  {
    icon: CheckCircle2,
    title: "Certification & Compliance",
    description: "Rigorous documentation and batch tracking ensures full traceability from hive to delivery.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    alt: "Documentation and certification process",
  },
];

export function FacilitiesSection() {
  return (
    <section
      className="relative py-24 bg-charcoal overflow-hidden"
      aria-labelledby="facilities-heading"
    >
      {/* Background texture */}
      <div className="absolute inset-0 noise-overlay" />

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
            Production Excellence
          </span>
          <h2
            id="facilities-heading"
            className="font-serif text-3xl sm:text-4xl text-cream mb-4"
          >
            World-Class Facilities
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-cream/60 max-w-2xl mx-auto leading-relaxed">
            QVC Africa operates Tanzania&apos;s premier organic bee products processing
            facility, combining traditional harvesting wisdom with modern technology
            and rigorous quality control.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {facilities.map((facility, index) => (
            <motion.article
              key={facility.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg border border-gold/10 bg-black/40 hover:border-gold/30 transition-all duration-500">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${facility.image}')` }}
                    role="img"
                    aria-label={facility.alt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/90 flex items-center justify-center">
                      <facility.icon className="w-5 h-5 text-black" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                    {facility.title}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom stats/facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "Tabora", label: "Location" },
            { value: "Organic", label: "Certified" },
            { value: "100%", label: "Batch Tested" },
            { value: "QR-Coded", label: "Traceability" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="text-center p-4 bg-black/30 rounded-lg border border-gold/10"
            >
              <p className="font-serif text-xl sm:text-2xl text-gold mb-1">
                {stat.value}
              </p>
              <p className="text-cream/50 text-xs tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
