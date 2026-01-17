"use server";

import { getPosts, getPost } from "./services/posts-api";
import type { Post, SinglePost } from "./types";

export async function fetchPosts(): Promise<Post[]> {
  try {
    return await getPosts();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function fetchPost(id: string): Promise<SinglePost | null> {
  try {
    return await getPost(id);
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
