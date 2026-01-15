import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-primary text-xl">✳</span>
        <span className="text-foreground font-semibold text-lg">lite-tech</span>
      </Link>
      <Link href="#" className="text-foreground text-sm flex items-center gap-1 hover:text-primary transition-colors">
        New post <ArrowRight className="w-4 h-4" />
      </Link>
    </header>
  )
}
