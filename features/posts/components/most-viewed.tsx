import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { fetchMostViewedPosts } from "@/features/posts/actions";
import { Media } from "@/shared/types";

export async function MostViewed({
  className,
  light,
}: {
  className?: string;
  light?: boolean;
}) {
  const articles = await fetchMostViewedPosts(4);

  const getCoverImg = (coverImg: Media) => {
    return coverImg?.data?.attributes?.url
      ? `${process.env.NEXT_PUBLIC_API_BASE_URL || "https://lite-tech-api.litebox.ai"}${coverImg.data.attributes.url}`
      : "/person-working-on-laptop-with-purple-lighting-tech.jpg";
  };

  return (
    <div className={className}>
      <h3 className="text-lg font-medium mb-4">Most viewed</h3>
      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/posts/${article.id}`}
            className={cn("flex gap-3 group border-b-2 pb-4", {
              "border-muted": light,
            })}
          >
            <div className="flex-1">
              <p
                className={cn(
                  "text-muted leading-snug font-bold line-clamp-3 transition-colors",
                  {
                    "group-hover:text-white": !light,
                    "group-hover:text-secondary": light,
                  },
                )}
              >
                {article.attributes.title}
              </p>
            </div>
            <div className="relative size-24 rounded-md overflow-hidden shrink-0">
              <Image
                src={getCoverImg(article.attributes.coverImg)}
                alt={
                  article.attributes.coverImg?.data?.attributes
                    ?.alternativeText || "Article hero"
                }
                fill
                className="object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
