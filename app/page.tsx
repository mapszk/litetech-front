import { Header } from "@/components/header"
import { HeroArticle } from "@/components/hero-article"
import { TopicFilters } from "@/components/topic-filters"
import { ArticleGrid } from "@/components/article-grid"
import { NewsletterBanner } from "@/components/newsletter-banner"
import { SecondaryArticles } from "@/components/secondary-articles"
import { FeaturedArticles } from "@/components/featured-articles"
import { LoadMore } from "@/components/load-more"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto">
        <HeroArticle />
        <TopicFilters />
        <ArticleGrid />
        <NewsletterBanner />
        <SecondaryArticles />
        <FeaturedArticles />
        <LoadMore />
      </main>
      <Footer />
    </div>
  )
}
