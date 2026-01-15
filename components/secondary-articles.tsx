import { ArticleCard } from "./article-card";

const leftArticles = [
  {
    title:
      "Dictators Used Sandvine Tech to Censor the Internet. The US Finally Did Something About It",
    category: "Global",
    image: "/hands-reaching-abstract-art.jpg",
    readTime: "8 min",
  },
  {
    title: "Here Come the AI Worms",
    category: "Crypto",
    image: "/green-hand-technology-cyber.jpg",
    readTime: "8 min",
  },
];

const rightArticle = {
  title: "How to avoid candidate ghosting & keep talent interested",
  category: "Security",
  image: "/circuit-board-blue-technology-close-up.jpg",
  readTime: "8 min",
};

export function SecondaryArticles() {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          {leftArticles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              category={article.category}
              categoryColor={index === 0 ? "primary" : "accent"}
              image={article.image}
              readTime={article.readTime}
              size="small"
            />
          ))}
        </div>
        <div>
          <ArticleCard
            title={rightArticle.title}
            category={rightArticle.category}
            categoryColor="accent"
            image={rightArticle.image}
            readTime={rightArticle.readTime}
            size="large"
          />
        </div>
      </div>
    </section>
  );
}
