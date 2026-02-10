"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/layout/contact-modal-context";
import { trackCTA } from "@/lib/analytics";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  const { openModal } = useContactModal();

  return (
    <section
      className="relative py-24 bg-forest overflow-hidden"
      aria-label="Call to action"
    >
      {/* Honeycomb pattern overlay */}
      <div className="absolute inset-0 honeycomb-pattern opacity-40" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/95 to-forest" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream mb-6 leading-tight">
            Let&apos;s talk about your{" "}
            <span className="text-gold">sourcing needs</span>
          </h2>
          <p className="text-cream/90 text-lg mb-8 max-w-2xl mx-auto">
            Every partnership starts with a conversation. Tell us what you&apos;re looking
            for and we&apos;ll find the right solution together.
          </p>
          <Button
            onClick={() => {
              trackCTA({ cta_location: "cta_banner", cta_text: "Start a Conversation", cta_action: "open_modal" });
              openModal();
            }}
            className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-6 text-base tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,83,0.3)] group"
          >
            Start a Conversation
            <ArrowRight
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              aria-hidden="true"
            />
          </Button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
    </section>
  );
}
