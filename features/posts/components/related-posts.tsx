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

        <div>
          <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              {posts.map((post) => (
                <CarouselItem
                  key={post.id}
                  className="basis-[85%] md:basis-1/2 lg:basis-1/3"
                >
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
      </div>
    </section>
  );
}
