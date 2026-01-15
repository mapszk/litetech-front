import Link from "next/link"
import { Linkedin, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-accent/20 mt-16">
      <div className="px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <Link href="/" className="flex items-center gap-2 mb-2">
            <span className="text-primary text-xl">✳</span>
            <span className="text-foreground font-semibold text-lg">lite-tech</span>
          </Link>
          <p className="text-muted-foreground text-xs">© Copyright Lite-Tech. All Rights Reserved</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-foreground hover:text-primary transition-colors">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-foreground hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
