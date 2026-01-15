import { Footer } from "@/components/footer";
import { PostHero } from "@/components/post-hero";
import { PostContent } from "@/components/post-content";
import { RelatedPosts } from "@/components/related-posts";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="container bg-white text-black">
      <PostHero />
      <PostContent />
      <RelatedPosts />
    </div>
  );
}
