import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function HeroArticle() {
  return (
    <section className="mb-8">
      <p className="text-xl font-bold mb-3 max-md:hidden">Today story</p>
      <div className="relative rounded-xl overflow-hidden h-[380px] md:h-[320px] lg:h-[500px] p-6 flex items-end">
        <Image
          src="/purple-abstract-technology-digital-art.jpg"
          alt="AI Generated Videos"
          fill
          className="object-cover"
        />
        <div className="flex flex-col items-start">
          <div className="relative p-6 bg-black pb-0">
            <Badge>Diversity & Inclusion</Badge>
          </div>
          <div className="relative p-6 flex flex-col justify-end bg-black">
            <h1 className="text-foreground text-2xl md:text-3xl font-bold max-w-md leading-tight mb-3 line-clamp-4">
              Your Kid May Already Be Watching AI-Generated Videos on YouTube
            </h1>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-foreground flex items-center gap-1 hover:text-primary transition-colors"
              >
                Read <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" /> 8 mins
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
