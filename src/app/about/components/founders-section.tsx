"use client";

import { motion } from "framer-motion";
import { MapPin, Building2 } from "lucide-react";

const founders = [
  {
    name: "Roger Manzur",
    title: "Co-Founder",
    location: "United States",
    role: "US Operations",
    description:
      "Roger leads CTI Sourcing's North American operations, managing client relationships, logistics, and business development. His focus is ensuring American buyers receive the premium service and reliability they expect from a domestic partner.",
    responsibilities: [
      "Client relationship management",
      "US logistics coordination",
      "Business development",
      "Quality assurance oversight",
    ],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Bonaventure Mhonda",
    title: "Co-Founder",
    subtitle: "Founder, QVC Africa",
    location: "Tanzania",
    role: "Tanzania Operations",
    description:
      "Bonaventure is the founder of QVC Africa and brings decades of experience in Tanzanian beekeeping and agricultural exports. He oversees all sourcing, production, and quality control operations at Tanzania's largest honey processing facility.",
    responsibilities: [
      "Sourcing & production oversight",
      "Quality control management",
      "Beekeeper network coordination",
      "Organic certification compliance",
    ],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
  },
];

export function FoundersSection() {
  return (
    <section
      className="relative py-24 bg-black"
      aria-labelledby="founders-heading"
    >
      <div className="absolute inset-0 honeycomb-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="founders-heading"
            className="font-serif text-3xl sm:text-4xl text-cream mb-4"
          >
            Meet the Founders
          </h2>
          <p className="text-cream/60 max-w-2xl mx-auto">
            A partnership bridging two continents—combining American business
            expertise with Tanzanian production excellence.
          </p>
          <div className="section-divider mx-auto mt-6" />
        </motion.div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {founders.map((founder, index) => (
            <motion.article
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-charcoal/50 border border-gold/10 rounded-lg overflow-hidden"
            >
              <div className="p-8">
                {/* Header with image */}
                <div className="flex items-start gap-6 mb-6">
                  {/* Photo placeholder */}
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <div
                      className="w-full h-full rounded-lg bg-cover bg-center border-2 border-gold/20"
                      style={{ backgroundImage: `url('${founder.image}')` }}
                      role="img"
                      aria-label={`Photo of ${founder.name}`}
                    />
                    {/* Location badge */}
                    <div className="absolute -bottom-2 -right-2 bg-forest text-cream text-xs px-2 py-1 rounded flex items-center gap-1">
                      <MapPin className="w-3 h-3" aria-hidden="true" />
                      <span>{founder.location}</span>
                    </div>
                  </div>

                  {/* Name and title */}
                  <div>
                    <h3 className="font-serif text-2xl text-cream mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-gold font-medium">{founder.title}</p>
                    {founder.subtitle && (
                      <p className="text-cream/50 text-sm">{founder.subtitle}</p>
                    )}
                    <div className="flex items-center gap-2 mt-2 text-cream/40 text-sm">
                      <Building2 className="w-4 h-4" aria-hidden="true" />
                      <span>{founder.role}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-cream/70 leading-relaxed mb-6">
                  {founder.description}
                </p>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-xs text-gold tracking-wide uppercase mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {founder.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="text-cream/60 text-sm flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Partnership note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-forest/20 border border-forest/30 rounded-lg">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-xs text-gold">
                US
              </div>
              <div className="w-8 h-8 rounded-full bg-forest/40 border border-forest/50 flex items-center justify-center text-xs text-cream">
                TZ
              </div>
            </div>
            <p className="text-cream/70 text-sm">
              United in partnership to bring you premium African bee products
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
