"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Direct origin sourcing with no middlemen",
  "Competitive origin pricing",
  "Reliable logistics and smooth transactions",
  "Full transparency and business integrity",
  "Consistent quality assurance and supply",
];

export function StorySection() {
  return (
    <section
      className="relative py-24 bg-cream"
      aria-labelledby="story-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2
              id="story-heading"
              className="font-serif text-3xl sm:text-4xl text-charcoal mb-6"
            >
              Bridging Africa and America
            </h2>

            <div className="space-y-6 text-charcoal/70 leading-relaxed">
              <p>
                QVC Africa identified a strong unmet need: bridging sourcing
                between Africa and the United States—enabling direct access to
                high-quality African raw materials without inefficiencies or
                unnecessary intermediaries.
              </p>

              <p>
                To address this gap,{" "}
                <strong className="text-charcoal">
                  QVC Africa formed an exclusive partnership with CTI Sourcing
                </strong>
                , creating a reliable and transparent supply bridge that
                connects U.S.-based manufacturers, suppliers, and buyers
                directly to pure, organic African products at origin-level
                pricing.
              </p>

              <p>
                This strategic collaboration allows partners to source products
                thousands of miles away with confidence.
              </p>
            </div>

            {/* Benefits list */}
            <div className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-forest" aria-hidden="true" />
                  </div>
                  <span className="text-charcoal/80 text-sm">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/images/about-us-image.png')`,
                  }}
                  role="img"
                  aria-label="Tanzanian landscape"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-forest text-cream p-6 rounded-lg shadow-xl">
                <p className="text-sm text-cream/60 mb-1">Importing from</p>
                <p className="font-serif text-2xl">Tanzania</p>
                <p className="text-gold text-sm mt-1">East Africa</p>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-lg" />
            </div>

            {/* Mission statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 p-6 bg-charcoal/5 rounded-lg border-l-4 border-gold"
            >
              <p className="text-charcoal/80 text-sm italic leading-relaxed">
                &ldquo;Our mission is to make ethical, efficient, and
                high-quality African sourcing simple, secure, and commercially
                competitive for the global market.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
