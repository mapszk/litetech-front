import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PostHero } from "@/components/post-hero"
import { PostContent } from "@/components/post-content"
import { RelatedPosts } from "@/components/related-posts"

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PostHero />
      <PostContent />
      <RelatedPosts />
      <Footer />
    </div>
  )
}
