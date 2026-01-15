import { Footer } from "@/components/footer";
import { PostHero } from "@/components/post-hero";
import { PostContent } from "@/components/post-content";
import { RelatedPosts } from "@/components/related-posts";
import { PostLayout } from "@/components/post-layout";

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
