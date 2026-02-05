// Article data - in production this would come from a CMS or database
export const articles: Record<
  string,
  {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
  }
> = {
  "sustainable-beekeeping-tanzania": {
    title:
      "Sustainable Beekeeping in Tanzania: Protecting Forests While Building Livelihoods",
    excerpt:
      "How community-based beekeeping in the Nyahua Forest Reserve creates economic opportunities while preserving one of East Africa's most important ecosystems.",
    date: "February 2026",
    readTime: "6 min read",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=1200&auto=format&fit=crop",
  },
};

export function getArticle(slug: string) {
  return articles[slug] || null;
}

export function getAllSlugs() {
  return Object.keys(articles);
}
