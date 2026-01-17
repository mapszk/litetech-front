import { NextResponse } from "next/server";
import { getPosts } from "@/features/posts/services/posts-api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = Number(searchParams.get("page") ?? 1);
  const pageSize = Number(searchParams.get("pageSize") ?? 10);

  try {
    const response = await getPosts(page, pageSize);
    return NextResponse.json(response);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 },
    );
  }
}
