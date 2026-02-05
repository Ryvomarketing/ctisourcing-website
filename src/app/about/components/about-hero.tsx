"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section
      className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20"
      aria-label="About hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(10, 10, 10, 0.6), rgba(10, 10, 10, 0.95)),
              url('/images/tanzania forest.png')
            `,
          }}
          role="img"
          aria-label="Tanzania forest landscape"
        />
        <div className="absolute inset-0 honeycomb-pattern opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center py-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-gold text-sm tracking-[0.2em] uppercase mb-4"
        >
          Our Story
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6"
        >
          Your US Partner for <br />
          <span className="text-gold-gradient">African Bee Products</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cream/70 text-lg max-w-2xl mx-auto"
        >
          Founded to bridge Tanzania&apos;s finest apiaries with American
          manufacturers—bringing you premium quality with domestic convenience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="section-divider mx-auto mt-8"
        />
      </div>
    </section>
  );
}
