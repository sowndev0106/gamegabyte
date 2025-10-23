import Image from "next/image";
import { HeroSection } from "@/sections/shared/hero";
import { HERO_BACKGROUNDS } from "@/lib/image-paths";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | GameGabite",
  description: "Stay updated with latest news and insights from GameGabite",
};

/**
 * News Page
 * News listing with reusable hero section
 */
export default function NewsPage() {
  // Mock news data - replace with real data from CMS/API
  const newsArticles = [
    {
      id: "1",
      slug: "new-web-design-trends-2024",
      title: "Top Web Design Trends for 2024",
      excerpt:
        "Discover the latest web design trends that will shape the digital landscape in 2024",
      author: "John Doe",
      date: "2024-01-15",
      category: "Design",
      image: "/images/sections/news/article-1.jpg",
      tags: ["Web Design", "Trends", "UI/UX"],
    },
    {
      id: "2",
      slug: "mobile-first-development",
      title: "Why Mobile-First Development Matters",
      excerpt:
        "Understanding the importance of mobile-first approach in modern web development",
      author: "Jane Smith",
      date: "2024-01-10",
      category: "Development",
      image: "/images/sections/news/article-2.jpg",
      tags: ["Mobile", "Development", "Best Practices"],
    },
    {
      id: "3",
      slug: "case-study-ecommerce-success",
      title: "Case Study: E-commerce Success Story",
      excerpt:
        "How we helped a retail client increase their online sales by 300%",
      author: "Mike Johnson",
      date: "2024-01-05",
      category: "Case Study",
      image: "/images/sections/news/article-3.jpg",
      tags: ["Case Study", "E-commerce", "Success"],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="News & Insights"
        subtitle="Stay Informed"
        description="Latest updates, insights, and stories from our team"
        backgroundImage={HERO_BACKGROUNDS.news}
        variant="compact"
      />

      {/* News Grid Section */}
      <section className="py-20 px-4 bg-light">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                className="group cursor-pointer bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                {/* Article Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary text-dark px-3 py-1 rounded-full text-sm font-bold">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>•</span>
                    <span>{article.author}</span>
                  </div>

                  <h3 className="text-h4 mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-body text-muted-foreground mb-4">
                    {article.excerpt}
                  </p>

                  <a
                    href={`/news/${article.slug}`}
                    className="text-primary font-semibold hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination - placeholder */}
          <div className="mt-12 flex justify-center">
            <div className="text-body text-muted-foreground">
              Showing 1-3 of 3 articles
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections:
      <NewsletterSignupSection />
      <RelatedTopicsSection />
      */}
    </main>
  );
}
