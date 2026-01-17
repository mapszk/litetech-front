"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { CreatePostModal } from "./create-post-modal";
import { createRelatedPostAction } from "../actions";
import { toast } from "sonner";

export function CreatePostButton() {
  const [isOpen, setIsOpen] = useState(false);

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
