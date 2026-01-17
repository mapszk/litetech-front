import { PostHero } from "@/features/posts/components/post-hero";
import { PostContent } from "@/features/posts/components/post-content";
import { RelatedPosts } from "@/features/posts/components/related-posts";
import { PostLayout } from "@/features/posts/components/post-layout";
import { fetchPost } from "@/features/posts/actions";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await fetchPost(id);

  return (
    <PostLayout>
      <PostHero
        coverImg={post.attributes.coverImg}
        author={post.attributes.author}
        title={post.attributes.title}
        readTime={post.attributes.readTime}
      />
      <div className="container bg-white text-black">
        <PostContent body={post.attributes.body} />
        <RelatedPosts />
      </div>
    </PostLayout>
  );
}
