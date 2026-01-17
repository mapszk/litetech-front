import { HeroArticle } from "@/features/posts/components/hero-article";
import { ArticleGrid } from "@/features/posts/components/article-grid";
import { MostViewed } from "@/features/posts/components/most-viewed";
import { TopicFilters } from "@/features/posts/components/topic-filters";
import { fetchPosts } from "@/features/posts/actions";

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <main className="container mx-auto pt-[80px]">
      <HeroArticle
        coverImg={posts[0].attributes.coverImg}
        topic={posts[0].attributes.topic}
        title={posts[0].attributes.title}
        readTime={posts[0].attributes.readTime}
        id={posts[0].id}
      />
      <TopicFilters />
      <div className="flex flex-col gap-6 md:flex-row md:items-start w-full relative">
        <div className="w-full">
          <ArticleGrid initialPage={0} posts={posts.slice(1)} />
        </div>
        <MostViewed className="w-[30%] shrink-0 max-md:hidden sticky top-24" />
      </div>
    </main>
  );
}
