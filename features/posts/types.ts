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
