import Link from "next/link";
import { Linkedin, Facebook, Twitter } from "lucide-react";

export function ShareSidebar({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="md:sticky md:top-30">
        <p className="font-bold mb-4 md:mb-6">Share on</p>
        <div className="flex gap-10">
          <Link
            href="#"
            className="text-black hover:text-secondary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="text-black hover:text-secondary transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="text-black hover:text-secondary transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
