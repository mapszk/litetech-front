"use client";

import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, file: File | null) => void;
}

export function CreatePostModal({
  isOpen,
  onClose,
  onSubmit,
}: CreatePostModalProps) {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleSubmit = () => {
    onSubmit(title, file);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="lg:max-w-[620px]">
        <div className="flex flex-col items-center gap-5 lg:p-12">
          <DialogHeader className="text-center items-center">
            <DialogTitle className="text-4xl text-black">
              Upload your post
            </DialogTitle>
            <DialogDescription className="text-border text-lg text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse commodo libero.
            </DialogDescription>
          </DialogHeader>
          <Input
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button
            onClick={handleFileButtonClick}
            variant="outline"
            className="w-full"
          >
            Upload image <ArrowUp className="size-5" />
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <Button onClick={handleSubmit} variant="black" className="w-auto">
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
