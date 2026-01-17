import { Post, SinglePost } from "../types";

const API_BASE_URL = "https://lite-tech-api.litebox.ai";

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(`${API_BASE_URL}/posts`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await response.json();
  return data.data; // assuming data.data is Post[]
}

export async function getPost(id: string): Promise<SinglePost> {
  const response = await fetch(`${API_BASE_URL}/post/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  const data = await response.json();
  return data.data; // data.data is SinglePost
}
