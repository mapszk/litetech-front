import Link from "next/link";
import Image from "next/image";
import { FileText, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  category: string;
  image?: string;
  readTime: number;
  id: number;
  className?: string;
}

export function ArticleCard({
  title,
  category,
  image,
  readTime,
  id,
  className,
}: ArticleCardProps) {
  const imageSrc = image
    ? /^https?:\/\//.test(image)
      ? image
      : `${process.env.NEXT_PUBLIC_IMAGES_BASE_URL}${image}`
    : "/placeholder.svg";

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden group p-6 flex flex-col pt-32 min-h-94.5",
        className,
      )}
    >
      <Link href={`/posts/${id}`}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          unoptimized={imageSrc.includes("localhost")}
          className="object-cover transition-transform ease-out duration-500 group-hover:scale-110"
        />
      </Link>
      <div className="relative mt-auto flex flex-col items-start">
        <div className="pb-0 p-4 pt-4 bg-white">
          <Badge>{category}</Badge>
        </div>
        <div className="relative bg-white text-black inset-0 p-4 flex flex-col justify-end min-w-[250px]">
          <h3 className="font-bold leading-snug mb-2 md:text-lg line-clamp-4">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <Link
              href={`/posts/${id}`}
              className="flex items-center gap-1.5 hover:text-secondary transition-colors"
            >
              Read <MoveRight className="size-3 text-secondary" />
            </Link>
            <span className="text-muted-foreground text-xs flex items-center gap-1">
              <FileText className="size-4" /> {readTime} mins
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
