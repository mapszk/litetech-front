import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function HeroArticle() {
  return (
    <section className="px-6 mb-8">
      <p className="text-muted-foreground text-sm mb-3">Today story</p>
      <div className="relative rounded-xl overflow-hidden h-[280px] md:h-[320px]">
        <Image src="/purple-abstract-technology-digital-art.jpg" alt="AI Generated Videos" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <Badge className="bg-accent text-accent-foreground w-fit mb-3 text-xs">Diversity & Inclusion</Badge>
          <h1 className="text-foreground text-2xl md:text-3xl font-bold max-w-md leading-tight mb-3">
            Your Kid May Already Be Watching AI-Generated Videos on YouTube
          </h1>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-foreground text-sm flex items-center gap-1 hover:text-primary transition-colors"
            >
              Read <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-muted-foreground text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> 8 mins
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
