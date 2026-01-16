import { HeroArticle } from "@/features/home/components/hero-article";
import { ArticleGrid } from "@/features/home/components/article-grid";
import { MostViewed } from "@/features/posts/components/most-viewed";
import { TopicFilters } from "@/features/home/components/topic-filters";

export default function Home() {
  return (
    <main className="container mx-auto pt-[80px]">
      <HeroArticle />
      <TopicFilters />
      <div className="flex flex-col gap-6 md:flex-row md:items-start w-full relative">
        <div className="w-full">
          <ArticleGrid />
        </div>
        <MostViewed className="w-[30%] shrink-0 max-md:hidden sticky top-24" />
      </div>
    </main>
  );
}
