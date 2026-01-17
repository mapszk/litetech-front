"use server";

import { HttpError } from "@/shared/types";
import { getPosts, getPost, getMostViewedPosts } from "./services/posts-api";
import type { SinglePost } from "./types";
import { notFound } from "next/navigation";

export async function fetchPosts(
  page: number = 0,
  pageSize = 10,
): Promise<SinglePost[]> {
  try {
    const data = await getPosts(page, pageSize);
    return data.data;
  } catch (error) {
    if (error instanceof HttpError && error.status === 404) {
      return notFound();
    }
    throw error;
  }
}

export async function fetchMostViewedPosts(limit = 4) {
  try {
    const data = await getMostViewedPosts(limit);
    return data.data;
  } catch (error) {
    if (error instanceof HttpError && error.status === 404) {
      return notFound();
    }
    throw error;
  }
}

export async function fetchPost(id: string): Promise<SinglePost> {
  try {
    const data = await getPost(id);
    return data.data;
  } catch (error) {
    if (error instanceof HttpError && error.status === 404) {
      return notFound();
    }
    throw error;
  }
}
