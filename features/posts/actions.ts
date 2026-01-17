"use server";

import { getPosts, getPost } from "./services/posts-api";
import type { SinglePost } from "./types";

export async function fetchPosts(): Promise<SinglePost[]> {
  try {
    const response = await getPosts();
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function fetchPost(id: string): Promise<SinglePost | null> {
  try {
    const data = await getPost(id);
    return data.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
