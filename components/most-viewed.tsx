import Link from "next/link"
import Image from "next/image"

const articles = [
  {
    title: "Your TV Sounds Awful. These Soundbars Can Fix That",
    image: "/soundbar-speaker-audio.jpg",
  },
  {
    title: "The Small Company at the Center of 'Gamergate 2.0'",
    image: "/gaming-computer-screen.jpg",
  },
  {
    title: "Craig Wright Is Not Bitcoin Creator Satoshi Nakamoto, Judge Declares",
    image: "/bitcoin-cryptocurrency-man.jpg",
  },
  {
    title: "Robert F. Kennedy Jr. Targets a Generation of Politically Disaffected, Extremely Online Men",
    image: "/politician-man-speaking.jpg",
  },
]

export function MostViewed() {
  return (
    <div className="bg-card rounded-xl p-4">
      <h3 className="text-primary text-sm font-medium mb-4">Most viewed</h3>
      <div className="space-y-4">
        {articles.map((article, index) => (
          <Link key={index} href="#" className="flex gap-3 group">
            <div className="flex-1">
              <p className="text-foreground text-xs leading-snug group-hover:text-primary transition-colors line-clamp-3">
                {article.title}
              </p>
            </div>
            <div className="relative w-16 h-12 rounded-md overflow-hidden flex-shrink-0">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
