import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  category: string;
  image: string;
  readTime: string;
  id?: string;
  className?: string;
}

export function ArticleCard({
  title,
  category,
  image,
  readTime,
  id = "1",
  className,
}: ArticleCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden group p-6 flex flex-col pt-32 min-h-94.5",
        className,
      )}
    >
      <Image
        src={`https://lite-tech-api.litebox.ai${image}`}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="relative mt-auto flex flex-col items-start">
        <div className="pb-0 p-4 pt-4 bg-white">
          <Badge>{category}</Badge>
        </div>
        <div className="relative bg-white text-black inset-0 p-4 flex flex-col justify-end">
          <h3 className="font-medium leading-snug mb-2 line-clamp-4">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <Link
              href={`/post/${id}`}
              className="flex items-center gap-1 hover:text-secondary transition-colors"
            >
              Read <ArrowRight className="w-3 h-3" />
            </Link>
            <span className="text-muted-foreground text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> {readTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
