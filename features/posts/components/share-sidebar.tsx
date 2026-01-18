"use client";
import LinkedinIcon from "@/components/ui/linkedin-icon";
import FacebookIcon from "@/components/ui/facebook-icon";
import XIcon from "@/components/ui/x-icon";

interface ShareSidebarProps {
  className?: string;
  url: string;
}

export function ShareSidebar({ className, url }: ShareSidebarProps) {
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}`,
  };

  const handleShare = (platform: string, shareUrl: string) => {
    window.open(
      shareUrl,
      `share-${platform}`,
      "width=600,height=400,location=no,menubar=no,status=no,toolbar=no",
    );
  };

  return (
    <div className={className}>
      <div className="md:sticky md:top-30">
        <p className="font-bold mb-4 md:mb-6">Share on</p>
        <div className="flex gap-10">
          <button
            onClick={() => handleShare("linkedin", shareLinks.linkedin)}
            className="text-black hover:text-blue-600 transition-colors"
            aria-label="Share on LinkedIn"
          >
            <LinkedinIcon className="size-5" />
          </button>
          <button
            onClick={() => handleShare("facebook", shareLinks.facebook)}
            className="text-black hover:text-blue-700 transition-colors"
            aria-label="Share on Facebook"
          >
            <FacebookIcon className="size-5" />
          </button>
          <button
            onClick={() => handleShare("twitter", shareLinks.twitter)}
            className="text-black hover:text-gray-700 transition-colors"
            aria-label="Share on X (Twitter)"
          >
            <XIcon className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
