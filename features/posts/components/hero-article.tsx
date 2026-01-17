import Link from "next/link";
import Image from "next/image";
import { FileText, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Media } from "@/shared/types";

interface Props {
  coverImg: Media;
  topic: string;
  title: string;
  readTime: number;
  id: number;
}

export function HeroArticle({ coverImg, topic, title, readTime, id }: Props) {
  const coverImgUrl = coverImg?.data?.attributes?.url
    ? `${process.env.NEXT_PUBLIC_IMAGES_BASE_URL}${coverImg.data.attributes.url}`
    : "/placeholder.svg";

  return (
    <section className="mb-8">
      <p className="text-xl font-bold mb-3 max-md:hidden">Today story</p>
      <div className="relative rounded-xl overflow-hidden h-[380px] md:h-[320px] lg:h-[500px] p-6 flex items-end">
        <Image
          src={coverImgUrl}
          alt={coverImg?.data?.attributes?.alternativeText || "Article hero"}
          fill
          className="object-cover"
        />
        <div className="flex flex-col items-start">
          <div className="relative p-6 pt-5 bg-black pb-0">
            <Badge>{topic}</Badge>
          </div>
          <div className="relative p-6 flex flex-col justify-end bg-black">
            <h1 className="text-foreground text-2xl md:text-3xl font-bold max-w-md leading-tight mb-3 line-clamp-4">
              {title}
            </h1>
            <div className="flex items-center gap-4">
              <Link
                href={`/posts/${id}`}
                className="text-foreground flex items-center gap-1 hover:text-primary transition-colors"
              >
                Read <MoveRight className="w-4 h-4 text-secondary" />
              </Link>
              <span className="text-muted-foreground flex items-center gap-1">
                <FileText className="w-3 h-3" /> {readTime} mins
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
