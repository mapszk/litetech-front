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
      ? `${process.env.NEXT_PUBLIC_IMAGES_BASE_URL}${coverImg.data.attributes.url}`
      : "/placeholder.svg";
  };

  return (
    <div className={className}>
      <h3 className="text-lg font-semibold mb-4">Most viewed</h3>
      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/posts/${article.id}`}
            className={cn(
              "flex gap-3 group border-b-2 pb-4 hover:border-white transition-colors duration-500 ease-out",
              {
                "border-muted hover:border-black": light,
              },
            )}
          >
            <div className="flex-1">
              <p
                className={cn(
                  "text-muted leading-snug font-semibold line-clamp-3 transition-colors",
                  {
                    "group-hover:text-white": !light,
                    "group-hover:text-black": light,
                  },
                )}
              >
                {article.attributes.title}
              </p>
            </div>
            <div className="relative size-24 rounded-md overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-500 ease-out">
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
