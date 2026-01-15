import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Clock } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function PostHero() {
  return (
    <div className="relative h-[400px] md:h-[500px]">
      <Image src="/person-working-on-laptop-with-purple-lighting-tech.jpg" alt="Article hero" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      <div className="absolute inset-0 flex flex-col px-6 py-6">
        {/* Back link */}
        <Link href="/" className="text-primary text-sm flex items-center gap-1 hover:underline w-fit">
          <ChevronLeft className="w-4 h-4" />
          Blog
        </Link>

        {/* Content at bottom */}
        <div className="mt-auto max-w-2xl">
          {/* Author */}
          <div className="flex items-center gap-2 mb-4">
            <Avatar className="w-8 h-8 border-2 border-accent">
              <AvatarImage src="/professional-woman-avatar.png" />
              <AvatarFallback>NK</AvatarFallback>
            </Avatar>
            <span className="text-foreground text-sm">By Natsu Kim</span>
          </div>

          {/* Title */}
          <h1 className="text-foreground text-3xl md:text-4xl font-bold leading-tight mb-4 text-balance">
            Your Kid May Already Be Watching AI-Generated Videos on YouTube
          </h1>

          {/* Read time */}
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Clock className="w-4 h-4" />6 mins read
          </div>
        </div>
      </div>
    </div>
  )
}
