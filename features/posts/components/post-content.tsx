import Image from "next/image";
import { MostViewed } from "./most-viewed";
import { ShareSidebar } from "./share-sidebar";
import type { SinglePost } from "../types";

interface PostContentProps {
  post: SinglePost;
}

export function PostContent({ post }: PostContentProps) {
  const { attributes } = post;

  return (
    <div className="py-12 bg-white">
      <div className="flex flex-col md:flex-row gap-6">
        <ShareSidebar className="md:w-[20%] max-md:order-last" />

        {/* Main content */}
        <div className="flex-1">
          <article className="text-black">
            {/* Body content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: attributes.body }}
            />
          </article>
        </div>

        <div className="max-lg:hidden sticky top-6 md:w-[25%]">
          <MostViewed light />
        </div>
      </div>
    </div>
  );
}
