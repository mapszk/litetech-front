import { ArticleCard } from "./article-card";
import { MostViewed } from "./most-viewed";

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
];

export function ArticleGrid() {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <ArticleCard
            title={mainArticles[0].title}
            category={mainArticles[0].category}
            categoryColor="primary"
            image={mainArticles[0].image}
            readTime={mainArticles[0].readTime}
            size="large"
          />
        </div>
        <div className="md:col-span-1 flex flex-col gap-4">
          <ArticleCard
            title={mainArticles[1].title}
            category={mainArticles[1].category}
            categoryColor="primary"
            image={mainArticles[1].image}
            readTime={mainArticles[1].readTime}
            size="small"
          />
          <ArticleCard
            title={mainArticles[2].title}
            category={mainArticles[2].category}
            categoryColor="accent"
            image={mainArticles[2].image}
            readTime={mainArticles[2].readTime}
            size="small"
          />
        </div>
        <div className="md:col-span-1">
          <MostViewed />
        </div>
      </div>
    </section>
  );
}
