"use client";

import { Dialog, DialogContent } from "./ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface AlbumViewerProps {
  isOpen: boolean;
  onClose: () => void;
  albumTitle: string;
  images: string[];
}

export default function AlbumViewer({
  isOpen,
  onClose,
  albumTitle,
  images,
}: AlbumViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl p-0 bg-black border-none">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative flex items-center justify-center bg-black">
            <button
              onClick={goToPrevious}
              className="absolute left-4 z-10 rounded-full bg-black/50 p-3 text-white hover:bg-black/70"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <img
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`${albumTitle} ${currentIndex + 1}`}
              className="max-h-[80vh] w-full object-contain"
            />

            <button
              onClick={goToNext}
              className="absolute right-4 z-10 rounded-full bg-black/50 p-3 text-white hover:bg-black/70"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="bg-black p-4 text-center">
            <h3 className="text-lg font-semibold text-white">{albumTitle}</h3>
            <p className="text-sm text-white/70">
              {currentIndex + 1} / {images.length}
            </p>
          </div>

          <div className="flex gap-2 overflow-x-auto bg-black p-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                  index === currentIndex
                    ? "border-primary scale-110"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-20 w-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
