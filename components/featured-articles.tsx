import { ArticleCard } from "./article-card";

const leftArticle = {
  title:
    "How the Pentagon Learned to Use Targeted Ads to Find Its Targets—and Vladimir Putin",
  category: "Security",
  image: "/thermal-heat-vision-purple-orange-abstract.jpg",
  readTime: "8 min",
};

const rightArticles = [
  {
    title: "A Mysterious Leak Exposed Chinese Hacking Secrets",
    category: "Leaks",
    image: "/black-white-photographic-dark-mysterious.jpg",
    readTime: "8 min",
  },
  {
    title: "Apple's iMessage Is Getting Future-Resistant Encryption",
    category: "Tech companies",
    image: "/apple-logo-technology-minimal.jpg",
    readTime: "8 min",
  },
];

export function FeaturedArticles() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <ArticleCard
            title={leftArticle.title}
            category={leftArticle.category}
            categoryColor="accent"
            image={leftArticle.image}
            readTime={leftArticle.readTime}
            size="large"
          />
        </div>
        <div className="flex flex-col gap-4">
          {rightArticles.map((article, index) => (
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
      </div>
    </section>
  );
}
