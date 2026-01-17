import { Footer } from "@/components/ui/footer";
import { PostHero } from "@/features/posts/components/post-hero";
import { PostContent } from "@/features/posts/components/post-content";
import { RelatedPosts } from "@/features/posts/components/related-posts";
import { PostLayout } from "@/features/posts/components/post-layout";
import { fetchPost } from "@/features/posts/actions";
import type { SinglePost } from "@/features/posts/types";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await fetchPost(id);

  if (!post) {
    return notFound();
  }

  return (
    <PostLayout>
      <PostHero post={post} />
      <div className="container bg-white text-black">
        <PostContent post={post} />
        <RelatedPosts />
      </div>
    </PostLayout>
  );
}
