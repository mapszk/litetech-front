"use client";

import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUp, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, file: File | null) => Promise<boolean>;
}

export function CreatePostModal({
  isOpen,
  onClose,
  onSubmit,
}: CreatePostModalProps) {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleSubmit = async () => {
    if (!title || !title.trim()) return toast.error("Title is required");
    if (!file) return toast.error("Image is required");

    setIsSubmitting(true);
    try {
      const success = await onSubmit(title, file);
      if (success) {
        setShowSuccess(true);
      }
    } catch (error) {
      console.error("Error submitting post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setTimeout(() => {
        setShowSuccess(false);
        setTitle("");
        setFile(null);
      }, 300);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="lg:max-w-[620px]">
        {showSuccess ? (
          <div className="flex flex-col items-center gap-5 lg:p-12">
            <DialogTitle className="text-4xl text-black text-center">
              Your post was successfully uploaded! {isSubmitting}
            </DialogTitle>
            <Button onClick={handleClose} variant="black" className="w-auto">
              Done
            </Button>
          </div>
        ) : (
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
              disabled={isSubmitting}
            />
            <Button
              onClick={handleFileButtonClick}
              variant="outline"
              className="w-full"
              disabled={isSubmitting}
            >
              Upload image <ArrowUp className="size-5" />
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              disabled={isSubmitting}
            />
            {file && (
              <p className="text-sm text-gray-600">Selected: {file.name}</p>
            )}
            <Button
              onClick={handleSubmit}
              variant="black"
              className="w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Uploading..." : "Confirm"}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
