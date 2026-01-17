import Link from "next/link";
import LinkedinIcon from "@/components/ui/linkedin-icon";
import FacebookIcon from "@/components/ui/facebook-icon";
import XIcon from "@/components/ui/x-icon";

export function Footer() {
  return (
    <footer className="container mx-auto bg-secondary mt-16 mb-5 md:mb-8 lg:mb-12">
      <div className="py-24 md:px-24 md:pt-28 flex flex-col gap-16 md:gap-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-16 md:items-center">
          <Link href="/" className="block max-md:mx-auto">
            <img src="/logo.svg" alt="lite-tech logo" className="h-8 w-auto" />
          </Link>
          <div className="flex items-center max-md:justify-center gap-4 lg:gap-10">
            <Link
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              <LinkedinIcon className="size-5" />
            </Link>
            <Link
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              <FacebookIcon className="size-5" />
            </Link>
            <Link
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              <XIcon className="size-5" />
            </Link>
          </div>
        </div>
        <p className="max-md:text-center block max-md:px-20">
          © Copyright Lite-Tech. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
