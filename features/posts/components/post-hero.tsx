import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function PostHero() {
  return (
    <div className="relative flex items-end h-125 md:h-145 lg:h-160 p-6 md:p-14 lg:p-30">
      <Image
        src="/person-working-on-laptop-with-purple-lighting-tech.jpg"
        alt="Article hero"
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
    </div>
  );
}
