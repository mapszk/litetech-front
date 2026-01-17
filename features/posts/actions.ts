"use server";

import { HttpError } from "@/shared/types";
import { getPosts, getPost, getMostViewedPosts } from "./services/posts-api";
import type { SinglePost } from "./types";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  createRelatedPost,
  getRelatedPosts,
} from "./services/related-posts-api";
import { CreateRelatedPostResult, RelatedPost } from "./types";

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

export async function createRelatedPostAction(
  title: string,
  image: File,
): Promise<CreateRelatedPostResult> {
  try {
    if (!title || title.trim().length === 0) {
      return {
        success: false,
        error: "El título es requerido",
      };
    }
    if (!image || image.size === 0) {
      return {
        success: false,
        error: "La imagen es requerida",
      };
    }
    if (!image.type.startsWith("image/")) {
      return {
        success: false,
        error: "Solo se permiten archivos de imagen",
      };
    }
    // Validar tamaño (5MB)
    if (image.size > 3 * 1024 * 1024) {
      return {
        success: false,
        error: "La imagen no debe superar los 5MB",
      };
    }

    const result = await createRelatedPost(title, image);

    // Revalidar las rutas que muestran posts relacionados
    revalidatePath("/posts/[id]", "page");
    revalidatePath("/");

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error("Error creating related post:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Error desconocido",
    };
  }
}

export async function getRelatedPostsAction(): Promise<RelatedPost[]> {
  try {
    return await getRelatedPosts();
  } catch (error) {
    console.error("Error fetching related posts:", error);
    return [];
  }
}
