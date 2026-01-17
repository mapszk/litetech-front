"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import { CreatePostModal } from "@/features/posts/components/create-post-modal";
import { toast } from "sonner";
import { createRelatedPostAction } from "@/features/posts/actions";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (title: string, file: File | null) => {
    if (!file) {
      toast.error("La imagen es requerida");
      return;
    }
    const result = await createRelatedPostAction(title, file);
    if (result.success) {
      toast.success("Post creado exitosamente");
    } else {
      toast.error(result.error || "Error al crear el post");
    }
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
            className="cursor-pointer text-foreground md:text-lg flex items-center gap-2 hover:text-primary transition-colors"
          >
            New post <MoveRight className="w-4 h-4 text-primary" />
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
