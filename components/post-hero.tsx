import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function PostHero() {
  return (
    <div className="relative flex items-end md:items-center h-100 md:h-125 lg:h-140 p-6 lg:p-14">
      <Image
        src="/person-working-on-laptop-with-purple-lighting-tech.jpg"
        alt="Article hero"
        fill
        className="object-cover"
      />

      <div className="relative flex flex-col items-start">
        <Link
          href="/"
          className="text-white flex items-center gap-1 hover:underline w-fit mb-4"
        >
          <ChevronLeft className="w-4 h-4" />
          Blog
        </Link>
        <div className="bg-white pb-0 p-5">
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8 border-2 border-accent">
              <AvatarImage src="/professional-woman-avatar.png" />
              <AvatarFallback>NK</AvatarFallback>
            </Avatar>
            <span className="">By Natsu Kim</span>
          </div>
        </div>
        <div className="bg-white text-black flex flex-col px-6 py-6">
          <div className="max-w-lg">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-balance">
              Your Kid May Already Be Watching AI-Generated Videos on YouTube
            </h1>
            <div className="flex items-center gap-2 text-input">
              <Clock className="w-4 h-4" />6 mins read
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
