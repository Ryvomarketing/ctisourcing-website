"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Share2, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/layout/contact-modal-context";

// Article data - in a real app this would come from a CMS or database
const articles: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}> = {
  "sustainable-beekeeping-tanzania": {
    title: "Sustainable Beekeeping in Tanzania: Protecting Forests While Building Livelihoods",
    excerpt:
      "How community-based beekeeping in the Nyahua Forest Reserve creates economic opportunities while preserving one of East Africa's most important ecosystems.",
    date: "February 2026",
    readTime: "6 min read",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p class="lead">The Nyahua Forest Reserve, spanning over 130,000 hectares in western Tanzania, represents one of the country's most significant miombo woodland ecosystems. Within this vast expanse of indigenous forest, a quiet revolution in sustainable agriculture has been taking place—one that benefits both local communities and the environment.</p>

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
  },
};

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articles[slug];
  const { openModal } = useContactModal();

  if (!article) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-cream mb-4">Article Not Found</h1>
          <p className="text-cream/70 mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild className="bg-gold hover:bg-gold-light text-black">
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 honeycomb-pattern opacity-5" />

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${article.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to Blog</span>
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-forest/20 text-forest-light text-xs font-medium rounded">
                <Leaf className="w-3.5 h-3.5" aria-hidden="true" />
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 text-cream/50 text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" aria-hidden="true" />
                {article.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-gold max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>

      {/* Share & CTA */}
      <section className="py-12 border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: article.title,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors"
            >
              <Share2 className="w-4 h-4" aria-hidden="true" />
              <span>Share this article</span>
            </button>

            <Button
              onClick={openModal}
              className="bg-gold hover:bg-gold-light text-black font-semibold px-6 py-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,168,83,0.3)]"
            >
              Interested in Our Products?
            </Button>
          </div>
        </div>
      </section>

      {/* Related Reading CTA */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl text-cream mb-4">
            Explore Our Products
          </h2>
          <p className="text-cream/70 mb-8 max-w-2xl mx-auto">
            Discover the premium organic beeswax and honey sourced from the
            sustainable apiaries described in this article.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-6 text-base transition-all duration-300"
            >
              <Link href="/products">View Products</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gold/50 text-gold hover:bg-gold/10 hover:border-gold px-8 py-6 text-base"
            >
              <Link href="/about">About CTI Sourcing</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
