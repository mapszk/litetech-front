import { SinglePost, PaginatedResponse } from "../types";

const API_BASE_URL = "https://lite-tech-api.litebox.ai/api";

export async function getPosts(): Promise<PaginatedResponse<SinglePost>> {
  const response = await fetch(`${API_BASE_URL}/posts`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await response.json();
  return data;
}

export async function getPost(id: string): Promise<SinglePost> {
  const response = await fetch(`${API_BASE_URL}/post/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  const data = await response.json();
  return data;
}
