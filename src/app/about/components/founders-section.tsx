"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";

const leadership = [
  {
    name: "Bonaventure Mhonda",
    title: "Co-Founder",
    location: "Tanzania",
    education: "MBA in Finance, University of Utah",
    description:
      "Leads Tanzania-based operations including QVC Africa, overseeing production, business development, quality assurance, and export management at a large-scale honey processing facility. He brings decades of experience in business management, international trade, and supply chain operations.",
    additionalInfo:
      "His leadership ensures operational efficiency, consistent product quality, and sustainable expansion of the company's core activities.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Roger Manzur",
    title: "Co-Founder",
    location: "United States",
    education: "Master's in Marketing, Florida International University",
    description:
      "Leads U.S.-based operations, managing client relationships, logistics, market development, and strategic partnerships. His role ensures that American buyers receive the reliability, responsiveness, and service quality expected from a domestic supplier, while maintaining a seamless international supply chain.",
    additionalInfo:
      "With over 10 years of experience in wealth management—commercializing products and building strong relationships with investors and investment firms—Roger brings a unique perspective to market expansion, client trust, and long-term partnership development. His leadership helps ensure smooth operations and efficient product delivery across North American markets.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Charles Ngatigwa",
    title: "Field Operations Manager & Organic Specialist",
    location: "Tanzania",
    education: "Master's in Environmental Forestry, University of Wales Bangor",
    description:
      "Responsible for field operations, organic compliance, and quality integrity across QVC Africa's production network. He previously served with the Tanzania Forest Service Agency for over 10 years before specializing in organic and sustainable beekeeping, where he has spent another 15 years developing hands-on expertise.",
    additionalInfo:
      "With over 25 years of combined experience in beekeeping, organic production, and sustainable resource management, Charles oversees 30,000+ beehives, manages quality control systems, conducts technical training programs, and ensures full adherence to organic standards and certification requirements. His work guarantees that all products meet premium quality and strict organic integrity.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
];

export function FoundersSection() {
  return (
    <section
      className="relative py-24 bg-black"
      aria-labelledby="leadership-heading"
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
            id="leadership-heading"
            className="font-serif text-3xl sm:text-4xl text-cream mb-4"
          >
            Leadership Team
          </h2>
          <p className="text-cream/60 max-w-2xl mx-auto">
            A partnership bridging two continents—combining American business
            expertise with Tanzanian production excellence.
          </p>
          <div className="section-divider mx-auto mt-6" />
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {leadership.map((leader, index) => (
            <motion.article
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-charcoal/50 border border-gold/10 rounded-lg overflow-hidden"
            >
              <div className="p-6">
                {/* Header with image */}
                <div className="flex flex-col items-center text-center mb-6">
                  {/* Photo */}
                  <div className="relative w-28 h-28 mb-4">
                    <div
                      className="w-full h-full rounded-full bg-cover bg-center border-2 border-gold/20"
                      style={{ backgroundImage: `url('${leader.image}')` }}
                      role="img"
                      aria-label={`Photo of ${leader.name}`}
                    />
                  </div>

                  {/* Name and title */}
                  <h3 className="font-serif text-xl text-cream mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-gold font-medium text-sm">{leader.title}</p>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 mt-2 text-cream/40 text-sm">
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{leader.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-cream/70 text-sm leading-relaxed mb-4">
                  {leader.description}
                </p>

                {/* Additional Info */}
                <p className="text-cream/60 text-sm leading-relaxed mb-4">
                  {leader.additionalInfo}
                </p>

                {/* Education */}
                <div className="pt-4 border-t border-gold/10">
                  <div className="flex items-start gap-2 text-cream/50 text-xs">
                    <GraduationCap className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{leader.education}</span>
                  </div>
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
