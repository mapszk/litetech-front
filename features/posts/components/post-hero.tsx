import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, FileText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { SinglePost } from "../types";
import { Media } from "@/shared/types";

interface PostHeroProps {
  coverImg: Media;
  author: string;
  title: string;
  readTime: number;
}

export function PostHero({ coverImg, author, title, readTime }: PostHeroProps) {
  const coverImgUrl = coverImg?.data?.attributes?.url
    ? `${process.env.NEXT_PUBLIC_API_BASE_URL || "https://lite-tech-api.litebox.ai"}${coverImg.data.attributes.url}`
    : "/person-working-on-laptop-with-purple-lighting-tech.jpg";

  return (
    <div className="relative flex items-end h-125 md:h-145 lg:h-160 p-6 md:p-14 lg:p-30">
      <Image
        src={coverImgUrl}
        alt={coverImg?.data?.attributes?.alternativeText || "Article hero"}
        fill
        className="object-cover"
      />
      <div className="container !w-full">
        <div className="w-full relative flex flex-col items-start">
          <Link
            href="/"
            className="text-white font-bold flex items-center gap-2 hover:underline w-fit mb-4"
          >
            <ChevronLeft className="size-5" />
            Blog
          </Link>
          <div className="bg-white pb-0 p-5">
            <div className="flex items-center gap-2">
              <Avatar className="size-10">
                <AvatarFallback>
                  {author.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="text-border">By {author}</span>
            </div>
          </div>
          <div className="bg-white text-black flex flex-col px-6 py-6">
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-balance">
                {title}
              </h1>
              <div className="flex items-center gap-2 text-input">
                <FileText className="w-4 h-4" />
                {readTime} mins read
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
