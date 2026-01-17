import Link from "next/link";
import LinkedinIcon from "@/components/ui/linkedin-icon";
import FacebookIcon from "@/components/ui/facebook-icon";
import XIcon from "@/components/ui/x-icon";

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
            <LinkedinIcon className="size-5" />
          </Link>
          <Link
            href="#"
            className="text-black hover:text-secondary transition-colors"
          >
            <FacebookIcon className="size-5" />
          </Link>
          <Link
            href="#"
            className="text-black hover:text-secondary transition-colors"
          >
            <XIcon className="size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
