import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ArticleCard } from "@/components/article-card"

const relatedArticles = [
  {
    title: "The first rule of the extreme dishwasher loading facebook group is...",
    category: "Tech companies",
    categoryColor: "accent" as const,
    image: "/abstract-colorful-3d-shapes-yellow-orange.jpg",
    readTime: "6 mins",
  },
  {
    title: "Binance's Top Crypto Crime Investigator Is Being Detained in Nigeria",
    category: "Crypto",
    categoryColor: "primary" as const,
    image: "/abstract-geometric-art-colorful-nigeria-flag.jpg",
    readTime: "6 mins",
  },
  {
    title: "A Global Police Operation Just Took Down the Notorious LockBit",
    category: "Security",
    categoryColor: "accent" as const,
    image: "/old-television-screen-with-static-glitch.jpg",
    readTime: "6 mins",
  },
]

export function RelatedPosts() {
  return (
    <section className="px-6 py-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-foreground text-2xl font-bold">Related posts</h2>
          <Link
            href="#"
            className="text-foreground text-sm flex items-center gap-1 hover:text-primary transition-colors"
          >
            New post <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((article, index) => (
            <ArticleCard key={index} {...article} size="medium" />
          ))}
        </div>
      </div>
    </section>
  )
}
