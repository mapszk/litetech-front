import { ArticleCard } from "./article-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getRelatedPostsAction } from "@/features/posts/actions";
import { CreatePostButton } from "./create-post-button";

export async function RelatedPosts() {
  const posts = await getRelatedPostsAction();

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Related posts</h2>
          <CreatePostButton />
        </div>

        <div className="md:hidden">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              {posts.map((post) => (
                <CarouselItem key={post.id} className="basis-[85%]">
                  <ArticleCard
                    title={post.title}
                    category="Related"
                    image={post.image}
                    readTime={post.readTime}
                    id={post.id}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <ArticleCard
                key={post.id}
                title={post.title}
                category="Related"
                image={post.image}
                readTime={post.readTime}
                id={post.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
