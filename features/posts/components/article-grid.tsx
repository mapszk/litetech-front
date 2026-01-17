"use client";

import { useState } from "react";
import { ArticleCard } from "@/features/posts/components/article-card";
import { NewsletterBanner } from "../../newsletter/components/newsletter-banner";
import { Button } from "@/components/ui/button";
import { SinglePost } from "@/features/posts/types";

interface Props {
  posts: SinglePost[];
  initialPage: number;
}

const PAGE_SIZE = 10;

export function ArticleGrid({ posts, initialPage }: Props) {
  const [articles, setArticles] = useState<SinglePost[]>(posts);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    setLoading(true);

    const res = await fetch(
      `/api/posts?page=${page + 1}&pageSize=${PAGE_SIZE}`,
    );

    const data = await res.json();
    const newPosts: SinglePost[] = data.data;

    setArticles((prev) => [...prev, ...newPosts]);
    setPage((p) => p + 1);
    setHasMore(newPosts.length === PAGE_SIZE);

    setLoading(false);
  };

  const mainArticles = articles.map((post) => ({
    title: post.attributes.title,
    category: post.attributes.topic,
    image: post.attributes.coverImg.data.attributes.url,
    readTime: `${post.attributes.readTime} min`,
    id: post.id,
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {mainArticles.slice(0, 3).map((art) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {mainArticles.slice(3).map((art) => (
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

      {hasMore && (
        <div className="flex justify-center py-8">
          <Button onClick={loadMore} disabled={loading}>
            {loading ? "Loading..." : "Load more"}
          </Button>
        </div>
      )}
    </div>
  );
}
