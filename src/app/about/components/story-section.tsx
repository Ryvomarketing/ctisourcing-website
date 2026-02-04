"use client";

import { motion } from "framer-motion";
import { Globe, Handshake, CheckCircle } from "lucide-react";

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
              The CTI Sourcing Story
            </h2>

            <div className="space-y-6 text-charcoal/70 leading-relaxed">
              <p>
                Tanzania produces some of the world&apos;s finest beeswax and
                honey—sourced from pristine forest reserves, processed with
                care, and certified to the highest organic standards. But for
                American manufacturers, accessing these products has always
                meant navigating international complexities.
              </p>

              <p>
                <strong className="text-charcoal">CTI Sourcing was founded to change that.</strong>{" "}
                We recognized that US buyers want premium African products but
                prefer working with a domestic partner—someone who understands
                American business practices, speaks the language of compliance,
                and provides the reliability they expect.
              </p>

              <p>
                By bringing together Tanzanian production excellence with
                American business infrastructure, we&apos;ve created a seamless
                sourcing experience. You get the quality of African origin with
                the convenience of a US-based relationship.
              </p>
            </div>

            {/* Key benefits */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Globe, text: "African Origin" },
                { icon: Handshake, text: "US Partnership" },
                { icon: CheckCircle, text: "Seamless Experience" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gold/20"
                >
                  <item.icon className="w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
                  <span className="text-charcoal text-sm font-medium">
                    {item.text}
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
                    backgroundImage: `url('https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=1200&auto=format&fit=crop')`,
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
