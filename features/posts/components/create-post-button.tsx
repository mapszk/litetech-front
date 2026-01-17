"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { CreatePostModal } from "./create-post-modal";

export function CreatePostButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (title: string, file: File | null) => {
    console.log("Creating post:", { title, file });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer flex items-center gap-1 hover:text-primary transition-colors font-bold"
      >
        New post <ArrowRight className="w-4 h-4" />
      </button>
      <CreatePostModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
}
