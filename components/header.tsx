import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Header() {
  return (
    <header className="h-[80px]">
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="lite-tech logo" className="h-8 w-auto" />
        </Link>
        <Link
          href="#"
          className="text-foreground text-sm flex items-center gap-1 hover:text-primary transition-colors"
        >
          New post <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </header>
  );
}
