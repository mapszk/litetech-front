import { ArticleCard } from "@/features/posts/components/article-card";
import { NewsletterBanner } from "./newsletter-banner";
import { Button } from "@/components/ui/button";
import { SinglePost } from "@/features/posts/types";

interface Props {
  posts: SinglePost[];
}

export async function ArticleGrid({ posts }: Props) {
  const mainArticles = posts.map((post) => ({
    title: post.attributes.title,
    category: post.attributes.topic,
    image: post.attributes.coverImg.data.attributes.url,
    readTime: `${post.attributes.readTime} min`,
    id: post.id,
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
