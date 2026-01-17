import { ArticleCard } from "@/features/posts/components/article-card";
import { NewsletterBanner } from "./newsletter-banner";
import { Button } from "@/components/ui/button";
import { fetchPosts } from "@/features/posts/actions";

export async function ArticleGrid() {
  const posts = await fetchPosts();
  console.log(posts);
  const mainArticles = posts.map((post) => ({
    title: post.attributes.title,
    category: post.attributes.topic,
    image: post.attributes.coverImg.data.attributes.url,
    readTime: `${post.attributes.readTime} min`,
    id: post.id.toString(),
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mainArticles.slice(0, 3).map((art, index) => (
          <ArticleCard
            key={art.id}
            title={art.title}
            category={art.category}
            image={art.image}
            readTime={art.readTime}
            id={art.id}
          />
        ))}
      </div>
      <NewsletterBanner />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mainArticles.slice(3).map((art, index) => (
          <ArticleCard
            key={art.id}
            title={art.title}
            category={art.category}
            image={art.image}
            readTime={art.readTime}
            id={art.id}
          />
        ))}
      </div>
      <div className="flex justify-center py-8">
        <Button>Load more</Button>
      </div>
    </div>
  );
}
