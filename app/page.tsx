import { HeroArticle } from "@/components/hero-article";
import { TopicFilters } from "@/components/topic-filters";
import { ArticleGrid } from "@/components/article-grid";
import { LoadMore } from "@/components/load-more";
import { MostViewed } from "@/components/most-viewed";

export default function Home() {
  return (
    <main className="container mx-auto">
      <HeroArticle />
      <TopicFilters />
      <div className="flex flex-col gap-6 md:flex-row w-full">
        <div className="w-full">
          <ArticleGrid />
        </div>
        <MostViewed className="w-[30%] shrink-0" />
      </div>
    </main>
  );
}
