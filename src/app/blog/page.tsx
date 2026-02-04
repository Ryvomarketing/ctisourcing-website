"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredArticle = {
  slug: "sustainable-beekeeping-tanzania",
  title: "Sustainable Beekeeping in Tanzania: Protecting Forests While Building Livelihoods",
  excerpt:
    "How community-based beekeeping in the Nyahua Forest Reserve creates economic opportunities while preserving one of East Africa's most important ecosystems.",
  date: "February 2026",
  readTime: "6 min read",
  category: "Sustainability",
  image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=1200&auto=format&fit=crop",
  content: `
    <p>The Nyahua Forest Reserve, spanning over 130,000 hectares in western Tanzania, represents one of the country's most significant miombo woodland ecosystems. Within this vast expanse of indigenous forest, a quiet revolution in sustainable agriculture has been taking place—one that benefits both local communities and the environment.</p>

    <h2>The Challenge of Forest Conservation</h2>
    <p>For decades, Tanzania's forests faced mounting pressure from deforestation, charcoal production, and agricultural expansion. Traditional approaches to conservation often placed protected areas in conflict with local communities who depended on forest resources for their livelihoods. This created a challenging dynamic where conservation efforts could inadvertently increase poverty among forest-adjacent communities.</p>

    <h2>Beekeeping as a Conservation Strategy</h2>
    <p>Beekeeping offers an elegant solution to this challenge. Unlike many agricultural activities, apiculture requires intact forest ecosystems to thrive. Bees depend on diverse flowering plants throughout the year, which means beekeepers have a direct economic incentive to protect and maintain forest cover. When communities can earn meaningful income from healthy forests, the calculus around land use changes dramatically.</p>

    <p>In the Nyahua region, beekeeping has become a cornerstone of community-based natural resource management. Hundreds of families now maintain hives in designated forest zones, harvesting honey and beeswax during specific seasons that align with natural bee cycles.</p>

    <h2>The Miombo Advantage</h2>
    <p>Tanzania's miombo woodlands provide exceptional conditions for beekeeping. The diverse tree species—including Brachystegia, Julbernardia, and Isoberlinia—produce abundant nectar flows throughout much of the year. This creates honey with distinctive flavor profiles that reflect the region's unique botanical diversity.</p>

    <p>The beeswax produced in these forests is equally exceptional. With minimal exposure to agricultural chemicals and abundant natural forage, Tanzanian beeswax meets the stringent requirements for organic certification while maintaining the physical properties that cosmetic and pharmaceutical manufacturers value.</p>

    <h2>Economic Impact on Communities</h2>
    <p>The economic benefits of sustainable beekeeping extend throughout rural communities. Beyond the direct income from honey and beeswax sales, the industry creates opportunities in processing, transportation, and equipment manufacturing. Women and youth, who often have limited access to land for traditional agriculture, can participate fully in beekeeping operations.</p>

    <p>Perhaps most importantly, beekeeping income arrives during seasons when other agricultural activities generate little revenue. This diversification helps families weather economic shocks and reduces pressure on forest resources during lean times.</p>

    <h2>Looking Forward</h2>
    <p>The success of community-based beekeeping in Tanzania offers lessons for conservation efforts worldwide. By aligning economic incentives with environmental protection, it's possible to create durable solutions that benefit both people and ecosystems.</p>

    <p>As demand for sustainably-sourced natural products continues to grow globally, Tanzanian beekeepers are well-positioned to meet this market while maintaining the practices that make their products exceptional. The challenge now is scaling these successes while maintaining the quality and sustainability that define them.</p>
  `,
};

const comingSoonArticles = [
  {
    title: "The Science of Beeswax: Properties That Make It Irreplaceable",
    category: "Education",
    description: "Exploring the unique chemical and physical properties that make beeswax essential for cosmetics, pharmaceuticals, and food applications.",
  },
  {
    title: "From Hive to Factory: Understanding Beeswax Traceability",
    category: "Quality",
    description: "How modern traceability systems ensure product integrity from individual apiaries to finished products.",
  },
  {
    title: "Organic Certification: What It Really Means for Bee Products",
    category: "Certification",
    description: "Breaking down the requirements and processes behind USDA and EU organic certifications for honey and beeswax.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-charcoal to-black">
        <div className="absolute inset-0 honeycomb-pattern opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-gold text-sm tracking-[0.2em] uppercase mb-4 block">
              Insights & Knowledge
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
              The CTI Blog
            </h1>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto">
              Exploring sustainable sourcing, the science of bee products, and
              the communities behind our supply chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm tracking-[0.2em] uppercase mb-8 block">
              Featured Article
            </span>

            <Link href={`/blog/${featuredArticle.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg border border-gold/20 group-hover:border-gold/40 transition-colors duration-300">
                  <div
                    className="aspect-[16/10] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${featuredArticle.image}')` }}
                    role="img"
                    aria-label={featuredArticle.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-gold text-black text-xs font-semibold tracking-wide rounded">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-cream/50 text-sm mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cream mb-4 group-hover:text-gold transition-colors duration-300">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-cream/70 leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-gold font-medium group-hover:gap-3 transition-all duration-300">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Articles */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-gold text-sm tracking-[0.2em] uppercase mb-2 block">
                  More Articles
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-cream">
                  Coming Soon
                </h2>
              </div>
              <div className="flex items-center gap-2 text-cream/50 text-sm">
                <Bell className="w-4 h-4" aria-hidden="true" />
                <span>New articles published regularly</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comingSoonArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 bg-black/50 border border-gold/10 rounded-lg"
              >
                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] rounded-lg flex items-center justify-center z-10">
                  <span className="px-4 py-2 bg-charcoal border border-gold/30 rounded-full text-gold text-sm font-medium">
                    Coming Soon
                  </span>
                </div>

                {/* Card Content (slightly visible behind overlay) */}
                <div className="opacity-60">
                  <span className="text-forest-light text-xs font-medium tracking-wide uppercase mb-3 block">
                    {article.category}
                  </span>
                  <h3 className="font-serif text-xl text-cream mb-3">
                    {article.title}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-cream mb-4">
              Stay Informed
            </h2>
            <p className="text-cream/70 mb-8">
              Want to be notified when new articles are published? Get in touch
              and we&apos;ll keep you updated on industry insights and company news.
            </p>
            <Button
              asChild
              className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-6 text-base transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,168,83,0.3)]"
            >
              <Link href="/">Return to Home</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
