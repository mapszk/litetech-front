"use client";

import { Fragment, useState } from "react";
import { ArticleCard } from "@/features/posts/components/article-card";
import { NewsletterBanner } from "../../newsletter/components/newsletter-banner";
import { Button } from "@/components/ui/button";
import { SinglePost } from "@/features/posts/types";
import { cn } from "@/lib/utils";

interface Props {
  posts: SinglePost[];
  initialPage: number;
}

const PAGE_SIZE = 10;

function chunk<T>(arr: T[], size: number): T[][] {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}

export function ArticleGrid({ posts, initialPage }: Props) {
  const [articles, setArticles] = useState(posts);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    setLoading(true);
    const res = await fetch(
      `/api/posts?page=${page + 1}&pageSize=${PAGE_SIZE}`,
    );
    const data = await res.json();

    setArticles((prev) => [...prev, ...data.data]);
    setPage((p) => p + 1);
    setHasMore(data.data.length === PAGE_SIZE);
    setLoading(false);
  };

  const mapped = articles.map((post) => ({
    id: post.id,
    title: post.attributes.title,
    category: post.attributes.topic,
    image: post.attributes.coverImg.data.attributes.url,
    readTime: post.attributes.readTime,
  }));

  const groups = chunk(mapped, 3);

  return (
    <div className="space-y-10">
      {groups.map((group, groupIndex) => {
        const isEven = groupIndex % 2 === 0;
        return (
          <Fragment key={groupIndex}>
            <div
              className={cn(
                "grid grid-cols-1 gap-6",
                "lg:grid-rows-2",
                isEven
                  ? "lg:grid-cols-[1.08fr_1fr]"
                  : "lg:grid-cols-[1fr_1.08fr]",
              )}
            >
              {group.map((article, index) => {
                const isTall =
                  (isEven && index === 0) ||
                  (!isEven && index === group.length - 2);
                return (
                  <ArticleCard
                    key={article.id}
                    {...article}
                    className={cn("h-full", isTall && "lg:row-span-2")}
                  />
                );
              })}
            </div>
            {groupIndex === 0 && <NewsletterBanner />}
          </Fragment>
        );
      })}
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
