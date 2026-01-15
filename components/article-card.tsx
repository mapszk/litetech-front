import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ArticleCardProps {
  title: string
  category: string
  categoryColor?: "accent" | "primary" | "secondary"
  image: string
  readTime: string
  size?: "small" | "medium" | "large"
}

export function ArticleCard({
  title,
  category,
  categoryColor = "accent",
  image,
  readTime,
  size = "medium",
}: ArticleCardProps) {
  const sizeClasses = {
    small: "h-[200px]",
    medium: "h-[280px]",
    large: "h-[400px]",
  }

  const categoryColors = {
    accent: "bg-accent text-accent-foreground",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
  }

  return (
    <div className={`relative rounded-xl overflow-hidden ${sizeClasses[size]} group`}>
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <Badge className={`w-fit mb-2 text-xs ${categoryColors[categoryColor]}`}>{category}</Badge>
        <h3 className="text-foreground text-sm font-medium leading-snug mb-2 line-clamp-3">{title}</h3>
        <div className="flex items-center justify-between">
          <Link
            href="#"
            className="text-foreground text-xs flex items-center gap-1 hover:text-primary transition-colors"
          >
            Read <ArrowRight className="w-3 h-3" />
          </Link>
          <span className="text-muted-foreground text-xs flex items-center gap-1">
            <Clock className="w-3 h-3" /> {readTime}
          </span>
        </div>
      </div>
    </div>
  )
}
