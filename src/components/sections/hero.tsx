"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/layout/contact-modal-context";
import { trackCTA } from "@/lib/analytics";
import Link from "next/link";

export function Hero() {
  const { openModal } = useContactModal();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder gradient - replace with actual image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 0.8)),
              url('https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=2070&auto=format&fit=crop')
            `,
          }}
          role="img"
          aria-label="Honeycomb and bees in Tanzania"
        />
        {/* Honeycomb pattern overlay */}
        <div className="absolute inset-0 honeycomb-pattern opacity-30" />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6"
        >
          <span className="text-cream">Premium</span>{" "}
          <span className="text-gold-gradient">Organic Beeswax</span>
          <br />
          <span className="text-cream">&amp; Honey from Tanzania</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-cream/90 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Direct sourcing from protected forest reserves. Certified organic,
          fully traceable, competitively priced. Your trusted supply partner.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={() => {
              trackCTA({ cta_location: "hero", cta_text: "Get in Touch", cta_action: "open_modal" });
              openModal();
            }}
            className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-6 text-base tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,83,0.3)]"
          >
            Get in Touch
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-gold/50 bg-transparent text-gold hover:bg-gold/10 hover:border-gold font-semibold px-8 py-6 text-base tracking-wide transition-all duration-300"
          >
            <Link
              href="/products"
              onClick={() => trackCTA({ cta_location: "hero", cta_text: "View Products", cta_action: "navigate" })}
            >
              View Products
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-cream/70"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" aria-hidden="true" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
