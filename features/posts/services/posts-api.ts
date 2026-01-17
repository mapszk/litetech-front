import { ApiPaginatedResponse, ApiResponse, HttpError } from "@/shared/types";
import { SinglePost } from "../types";

const API_BASE_URL = "https://lite-tech-api.litebox.ai/api";

export async function getPosts(): Promise<ApiPaginatedResponse<SinglePost>> {
  const response = await fetch(`${API_BASE_URL}/posts`);
  if (!response.ok) {
    const error: { message?: string } | null = await response
      .json()
      .catch(() => null);
    throw new HttpError(
      error?.message ?? `HTTP ${response.status}`,
      response.status,
    );
  }
  const data = await response.json();
  return data;
}

export async function getPost(id: string): Promise<ApiResponse<SinglePost>> {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`);
  if (!response.ok) {
    const error: { message?: string } | null = await response
      .json()
      .catch(() => null);
    throw new HttpError(
      error?.message ?? `HTTP ${response.status}`,
      response.status,
    );
  }
  const data = await response.json();
  return data;
}
