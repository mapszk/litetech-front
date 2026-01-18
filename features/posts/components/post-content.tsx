import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MostViewed } from "./most-viewed";
import { ShareSidebar } from "./share-sidebar";
import { postMd } from "../content";

interface PostContentProps {
  postId: number;
}

const components = {
  img: ({ src, alt, ...props }: any) => (
    <Image src={src!} alt={alt || ""} width={800} height={600} {...props} />
  ),
};

export function PostContent({ postId }: PostContentProps) {
  return (
    <div className="py-12 bg-white">
      <div className="flex flex-col md:flex-row gap-6">
        <ShareSidebar
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${postId}`}
          className="md:w-[20%] max-md:order-last"
        />
        <div className="flex-1">
          <article className="text-black">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={components}
                remarkPlugins={[remarkGfm]}
              >
                {postMd}
              </ReactMarkdown>
            </div>
          </article>
        </div>
        <div className="max-lg:hidden sticky top-6 md:w-[25%]">
          <MostViewed light />
        </div>
      </div>
    </div>
  );
}
