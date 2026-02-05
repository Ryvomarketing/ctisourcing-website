"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Beeswax",
    description:
      "Premium organic beeswax sourced from Tanzania's Nyahua Forest Reserve. Available in blocks for bulk orders.",
    specs: ["Melting Point: 61-65°C", "CAS: 8012-89-3", "Bulk Available"],
    image: "/images/raw beeswax.png",
    href: "/products#beeswax",
  },
  {
    title: "Honey",
    description:
      "100% natural, additive-free organic honey with unique Tanzanian floral profile. Bulk quantities available in drums.",
    specs: ["Unique Floral Profile", "Multifloral", "Bulk Drums Available"],
    image:
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=1200&auto=format&fit=crop",
    href: "/products#honey",
  },
];

export function ProductPreview() {
  return (
    <section
      className="relative py-24 bg-charcoal overflow-hidden"
      aria-labelledby="products-heading"
    >
      {/* Background texture */}
      <div className="absolute inset-0 noise-overlay" />

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
            Our Products
          </span>
          <h2
            id="products-heading"
            className="font-serif text-3xl sm:text-4xl text-cream mb-4"
          >
            Premium African Bee Products
          </h2>
          <div className="section-divider mx-auto" />
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <Link href={product.href} className="block">
                <div className="relative overflow-hidden rounded-lg border border-gold/10 bg-black/50 hover:border-gold/30 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${product.image}')` }}
                      role="img"
                      aria-label={product.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold/90 text-black text-xs font-medium tracking-wide rounded">
                        Organic
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-cream/60 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Specs */}
                    <ul className="flex flex-wrap gap-2 mb-4">
                      {product.specs.map((spec) => (
                        <li
                          key={spec}
                          className="px-2 py-1 bg-forest/20 text-forest-light text-xs rounded"
                        >
                          {spec}
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
