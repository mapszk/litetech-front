import { PostHero } from "@/features/posts/components/post-hero";
import { PostContent } from "@/features/posts/components/post-content";
import { RelatedPosts } from "@/features/posts/components/related-posts";
import { fetchPost } from "@/features/posts/actions";
import type { Metadata } from "next";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await fetchPost(id);

  return {
    title: post.attributes.title,
    description: post.attributes.subtitle,
    openGraph: {
      title: post.attributes.title,
      description: post.attributes.subtitle,
      images: post.attributes.coverImg.data
        ? [
            {
              url: post.attributes.coverImg.data.attributes.url,
              alt: post.attributes.coverImg.data.attributes.alternativeText,
            },
          ]
        : [],
      type: "article",
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await fetchPost(id);

  return (
    <div className="bg-white pb-5 lg:pb-10">
      <Header />
      <PostHero
        coverImg={post.attributes.coverImg}
        author={post.attributes.author}
        title={post.attributes.title}
        readTime={post.attributes.readTime}
      />
      <div className="container bg-white text-black">
        <PostContent postId={post.id} />
        <RelatedPosts />
      </div>
      <Footer />
    </div>
  );
}
