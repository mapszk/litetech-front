import { HeroArticle } from "@/components/hero-article";
import { TopicFilters } from "@/components/topic-filters";
import { ArticleGrid } from "@/components/article-grid";
import { NewsletterBanner } from "@/components/newsletter-banner";
import { SecondaryArticles } from "@/components/secondary-articles";
import { FeaturedArticles } from "@/components/featured-articles";
import { LoadMore } from "@/components/load-more";

export default function Home() {
  return (
    <main className="container mx-auto">
      <HeroArticle />
      <TopicFilters />
      <ArticleGrid />
      <NewsletterBanner />
      <SecondaryArticles />
      <FeaturedArticles />
      <LoadMore />
    </main>
  );
}
