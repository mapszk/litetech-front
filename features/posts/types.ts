import { Media } from "@/shared/types";

export interface SinglePost {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    topic: string;
    author: string;
    readTime: number;
    coverImg: Media;
    body: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface RelatedPost {
  id: number;
  title: string;
  image: string;
  createdAt: string;
  author: string;
  readTime: number;
}

export interface CreateRelatedPostResult {
  success: boolean;
  data?: RelatedPost;
  error?: string;
}
