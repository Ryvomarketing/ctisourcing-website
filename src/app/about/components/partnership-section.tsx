"use client";

import { motion } from "framer-motion";
import { Shield, Factory, Award, ArrowRight } from "lucide-react";

const partnershipBenefits = [
  {
    icon: Factory,
    title: "Large-Scale Facility",
    description:
      "QVC Africa operates one of Tanzania's largest honey processing facilities with state-of-the-art equipment that ensures consistent quality.",
  },
  {
    icon: Shield,
    title: "Certified Operations",
    description:
      "USDA NOP and EU Organic certified by Bio.Inspecta Switzerland. Full compliance with international organic handling standards.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Years of experience exporting premium bee products to international markets, with established quality control and traceability systems.",
  },
];

export function PartnershipSection() {
  return (
    <section
      className="relative py-24 bg-forest overflow-hidden"
      aria-labelledby="partnership-heading"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 honeycomb-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest/95 to-forest" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm tracking-[0.2em] uppercase mb-4 block">
              Our Partnership
            </span>
            <h2
              id="partnership-heading"
              className="font-serif text-3xl sm:text-4xl text-cream mb-6"
            >
              Partnering with QVC Africa
            </h2>

            <p className="text-cream/70 leading-relaxed mb-8">
              Through our exclusive partnership, CTI Sourcing serves as the direct
              supply bridge connecting North American buyers to QVC Africa&apos;s
              world-class production capabilities. No middlemen, no inefficiencies—just
              direct access to Tanzania&apos;s premier organic bee products.
            </p>

            {/* Benefits */}
            <div className="space-y-6">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                    <benefit.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-cream font-medium mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-cream/60 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Main card */}
            <div className="bg-black/30 backdrop-blur-sm border border-gold/20 rounded-lg p-8">
              <h3 className="font-serif text-2xl text-cream mb-6 text-center">
                Your Point of Contact
              </h3>

              <p className="text-cream/70 text-center mb-8">
                For all North American inquiries, CTI Sourcing is your direct
                point of contact. We handle everything from initial conversation
                to delivery, ensuring a seamless experience.
              </p>

              {/* Visual representation */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-gold/30 flex items-center justify-center mx-auto mb-2">
                    <span className="font-serif text-lg text-gold">CTI</span>
                  </div>
                  <span className="text-cream/60 text-xs">Your Partner</span>
                </div>

                <ArrowRight className="w-6 h-6 text-gold/50" aria-hidden="true" />

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-forest-light/30 bg-forest-light/10 flex items-center justify-center mx-auto mb-2">
                    <span className="font-serif text-lg text-forest-light">QVC</span>
                  </div>
                  <span className="text-cream/60 text-xs">Production</span>
                </div>

                <ArrowRight className="w-6 h-6 text-gold/50" aria-hidden="true" />

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-cream/20 flex items-center justify-center mx-auto mb-2">
                    <span className="font-serif text-lg text-cream">You</span>
                  </div>
                  <span className="text-cream/60 text-xs">Your Facility</span>
                </div>
              </div>

              {/* Certifications - subtle text */}
              <div className="border-t border-gold/10 pt-6">
                <p className="text-xs text-cream/50 text-center">
                  USDA/NOP & EU Organic Certified by Bio.Inspecta
                </p>
              </div>
            </div>

            {/* Note */}
            <p className="mt-6 text-center text-cream/50 text-sm italic">
              &ldquo;Quality, Value, Convenience—the principles that guide
              everything we do.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
