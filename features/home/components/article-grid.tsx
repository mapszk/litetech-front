import { ArticleCard } from "@/features/posts/components/article-card";
import { NewsletterBanner } from "./newsletter-banner";
import { Button } from "@/components/ui/button";

const mainArticles = [
  {
    title:
      "The first rule of the extreme dishwasher loading facebook group is...",
    category: "Tech companies",
    image: "/yellow-abstract-swirl-pattern-art.jpg",
    readTime: "8 min",
  },
  {
    title:
      "Binance's Top Crypto Crime Investigator Is Being Detained in Nigeria",
    category: "Crypto",
    image: "/nigeria-flag-green-white.jpg",
    readTime: "8 min",
  },
  {
    title: "A Global Police Operation Just Took Down the Notorious LockBit",
    category: "Security",
    image: "/circuit-board-green-technology.jpg",
    readTime: "6 min",
  },
  {
    title:
      "The first rule of the extreme dishwasher loading facebook group is...",
    category: "Tech companies",
    image: "/yellow-abstract-swirl-pattern-art.jpg",
    readTime: "8 min",
  },
  {
    title:
      "Binance's Top Crypto Crime Investigator Is Being Detained in Nigeria",
    category: "Crypto",
    image: "/nigeria-flag-green-white.jpg",
    readTime: "8 min",
  },
  {
    title: "A Global Police Operation Just Took Down the Notorious LockBit",
    category: "Security",
    image: "/circuit-board-green-technology.jpg",
    readTime: "6 min",
  },
  {
    title:
      "The first rule of the extreme dishwasher loading facebook group is...",
    category: "Tech companies",
    image: "/yellow-abstract-swirl-pattern-art.jpg",
    readTime: "8 min",
  },
  {
    title:
      "Binance's Top Crypto Crime Investigator Is Being Detained in Nigeria",
    category: "Crypto",
    image: "/nigeria-flag-green-white.jpg",
    readTime: "8 min",
  },
  {
    title: "A Global Police Operation Just Took Down the Notorious LockBit",
    category: "Security",
    image: "/circuit-board-green-technology.jpg",
    readTime: "6 min",
  },
];

export function ArticleGrid() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mainArticles.slice(0, 3).map((art, index) => (
          <ArticleCard
            key={art.title}
            title={art.title}
            category={art.category}
            image={art.image}
            readTime={art.readTime}
          />
        ))}
      </div>
      <NewsletterBanner />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mainArticles.slice(3).map((art, index) => (
          <ArticleCard
            key={art.title}
            title={art.title}
            category={art.category}
            image={art.image}
            readTime={art.readTime}
          />
        ))}
      </div>
      <div className="flex justify-center py-8">
        <Button size="lg">Load more</Button>
      </div>
    </div>
  );
}
