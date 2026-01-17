import { HttpError } from "@/shared/types";
import { RelatedPost } from "../types";

const RELATED_POSTS_API_URL =
  process.env.NEXT_PUBLIC_RELATED_POSTS_API_BASE_URL || "http://localhost:3001";

export async function createRelatedPost(
  title: string,
  image: File,
): Promise<RelatedPost> {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("image", image);
  formData.append("author", "Litetech");
  formData.append("readTime", "5");

  const response = await fetch(`${RELATED_POSTS_API_URL}/api/posts/related`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    const error: { message?: string } | null = await response
      .json()
      .catch(() => null);
    throw new HttpError(
      error?.message ?? `HTTP ${response.status}`,
      response.status,
    );
  }
  return response.json();
}

export async function getRelatedPosts(): Promise<RelatedPost[]> {
  const response = await fetch(`${RELATED_POSTS_API_URL}/api/posts/related`, {
    cache: "no-store",
  });
  if (!response.ok) {
    const error: { message?: string } | null = await response
      .json()
      .catch(() => null);
    throw new HttpError(
      error?.message ?? `HTTP ${response.status}`,
      response.status,
    );
  }
  return response.json();
}
