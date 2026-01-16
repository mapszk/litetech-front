"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { CreatePostModal } from "@/features/posts/components/create-post-modal";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (title: string, file: File | null) => {
    // TODO: Handle post creation
    console.log("Creating post:", { title, file });
  };

  return (
    <>
      <header className="h-[80px] fixed w-full top-0 z-50 bg-black/60 backdrop-blur-2xl">
        <div className="container mx-auto flex items-center justify-between h-full">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="lite-tech logo" className="h-8 w-auto" />
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer text-foreground md:text-lg flex items-center gap-1 hover:text-primary transition-colors"
          >
            New post <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>
      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
}
