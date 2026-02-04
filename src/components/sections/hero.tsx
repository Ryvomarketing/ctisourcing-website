"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/layout/contact-modal-context";
import Link from "next/link";

export function Hero() {
  const { openModal } = useContactModal();

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-3 bg-black/60 backdrop-blur-sm border border-gold/40 rounded-full text-gold text-sm sm:text-base font-medium tracking-[0.15em] uppercase">
            Exclusive US Partner of QVC Africa
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6"
        >
          <span className="text-gold-gradient">USDA Organic Certified.</span>
          <br />
          <span className="text-cream">Full Traceability.</span>
          <br />
          <span className="text-cream">Bulk Supply.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-cream/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Premium beeswax and honey sourced from Tanzania&apos;s protected
          forests. Delivered from the US.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={openModal}
            className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-6 text-base tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,83,0.3)]"
          >
            Request a Quote
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-gold/50 bg-transparent text-gold hover:bg-gold/10 hover:border-gold font-semibold px-8 py-6 text-base tracking-wide transition-all duration-300"
          >
            <Link href="/products">View Products</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
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

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
