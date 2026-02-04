"use client";

import { motion } from "framer-motion";
import { Users, Heart, TreePine, Shield } from "lucide-react";

const impactStats = [
  {
    number: "1,000+",
    label: "Local Beekeepers",
    description: "Supporting livelihoods across rural Tanzania",
  },
  {
    number: "100+",
    label: "Farmer Associations",
    description: "Building sustainable partnerships",
  },
  {
    number: "40%",
    label: "Women in Workforce",
    description: "Empowering women in rural communities",
  },
];

const sustainabilityPillars = [
  {
    icon: TreePine,
    title: "Protected Forest Sourcing",
    description:
      "Our hives are located in the Nyahua Forest Game Reserve—a certified organic zone restricted exclusively to wildlife and natural vegetation. No industrial farming, no chemical exposure.",
  },
  {
    icon: Users,
    title: "Community Employment",
    description:
      "We employ rural populations directly, providing stable income through hive maintenance, harvesting commissions, and factory positions with monthly salaries and performance bonuses.",
  },
  {
    icon: Heart,
    title: "Women Empowerment",
    description:
      "A significant portion of our workforce comprises women from local communities, providing economic independence and strengthening families and communities.",
  },
  {
    icon: Shield,
    title: "Sustainable Practices",
    description:
      "Our beekeepers are trained in organic methods and sustainable harvesting practices, ensuring the health of bee populations and the long-term viability of our ecosystem.",
  },
];

export function SustainabilitySection() {
  return (
    <section
      id="sustainability"
      className="relative py-24 bg-black overflow-hidden scroll-mt-20"
      aria-labelledby="sustainability-heading"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2070&auto=format&fit=crop')`,
          }}
          role="img"
          aria-label="African landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

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
            Impact & Responsibility
          </span>
          <h2
            id="sustainability-heading"
            className="font-serif text-3xl sm:text-4xl text-cream mb-4"
          >
            Sourcing That Makes a Difference
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            When you choose CTI Sourcing, you&apos;re not just getting premium
            products—you&apos;re supporting sustainable livelihoods and protected
            ecosystems in Tanzania.
          </p>
          <div className="section-divider mx-auto mt-6" />
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 bg-charcoal/50 border border-gold/10 rounded-lg"
            >
              <div className="text-4xl sm:text-5xl font-serif text-gold mb-2">
                {stat.number}
              </div>
              <div className="text-cream font-medium mb-1">{stat.label}</div>
              <div className="text-cream/50 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sustainability Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sustainabilityPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 bg-forest/10 border border-forest/20 rounded-lg hover:border-forest/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-forest/20 flex items-center justify-center text-forest-light flex-shrink-0 group-hover:bg-forest/30 transition-colors duration-300">
                  <pillar.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-cream mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-serif text-xl sm:text-2xl text-cream/90 italic leading-relaxed">
              &ldquo;We are not just organic certified—we live organically.
              Our commitment to quality, community, and sustainability is
              at the heart of everything we do.&rdquo;
            </p>
            <footer className="mt-6">
              <cite className="not-italic">
                <span className="text-gold font-medium">QVC Africa</span>
                <span className="text-cream/50 mx-2">•</span>
                <span className="text-cream/60">Tanzania</span>
              </cite>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
