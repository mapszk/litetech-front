import { Footer } from "@/components/ui/footer";
import { PostHero } from "@/features/posts/components/post-hero";
import { PostContent } from "@/features/posts/components/post-content";
import { RelatedPosts } from "@/features/posts/components/related-posts";
import { PostLayout } from "@/features/posts/components/post-layout";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <PostLayout>
      <PostHero />
      <div className="container bg-white text-black">
        <PostContent />
        <RelatedPosts />
      </div>
    </PostLayout>
  );
}
