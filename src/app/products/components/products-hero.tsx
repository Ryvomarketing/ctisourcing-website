"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ProductsHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Products hero section"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.8)),
              url('/images/honey and honeycomb.png')
            `,
          }}
          role="img"
          aria-label="Fresh honeycomb with honey"
        />
        {/* Honeycomb pattern overlay */}
        <div className="absolute inset-0 honeycomb-pattern opacity-30" />
        {/* Gradient overlay for smooth transition to content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-6 py-3 bg-black/60 backdrop-blur-sm border border-gold/40 rounded-full text-gold text-sm sm:text-base font-medium tracking-[0.15em] uppercase mb-6"
        >
          Premium African Bee Products
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6"
        >
          Our Products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cream/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Organic and conventional options. Bulk quantities. Full documentation
          and traceability with every order.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="section-divider mx-auto mt-8"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-cream/40"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" aria-hidden="true" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
