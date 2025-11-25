"use client";

import type React from "react";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryCarouselProps {
  isOpen: boolean;
  onClose: () => void;
}
const imageModules = import.meta.glob("/public/gallery/*.{jpg,jpeg,png,webp}", {
  eager: true,
  as: "url",
});

// Convert dynamic images to gallery items with generic titles
const dynamicGalleryItems = Object.keys(imageModules).map((path, index) => ({
  src: path.replace("/public", ""),
  title: `Gallery Image ${index + 1}`,
  description: `Photo from our work in Ghana`,
}));

const galleryImages = [
  ...dynamicGalleryItems,
  {
    src: "/children-studying-in-classroom-ghana.jpg",
    title: "Education Programs",
    description: "Supporting quality education for children",
  },
  {
    src: "/healthcare-clinic-ghana-africa.jpg",
    title: "Healthcare Access",
    description: "Providing essential medical services",
  },
  {
    src: "/community-gathering-ghana-village.jpg",
    title: "Community Building",
    description: "Strengthening community bonds",
  },
  {
    src: "/clean-water-well-ghana-village-celebration.jpg",
    title: "Clean Water Projects",
    description: "Bringing clean water to villages",
  },
  {
    src: "/agricultural-training-ghana-farmers.jpg",
    title: "Agricultural Support",
    description: "Empowering local farmers",
  },
  {
    src: "/women-empowerment-workshop-ghana.jpg",
    title: "Women Empowerment",
    description: "Training and skills development for women",
  },
  {
    src: "/school-supplies-distribution-ghana.jpg",
    title: "School Supplies",
    description: "Providing essential learning materials",
  },
  {
    src: "/solar-panel-installation-ghana-village.jpg",
    title: "Solar Energy Projects",
    description: "Clean energy for rural communities",
  },
  {
    src: "/youth-skills-training-ghana.jpg",
    title: "Youth Skills Training",
    description: "Building skills for the future",
  },
  //
  {
    src: "/w1.jpg",
    title: "Education Programs",
    description: "Supporting quality education for children",
  },
  {
    src: "/w2.jpg",
    title: "Healthcare Access",
    description: "Providing essential medical services",
  },
  {
    src: "/w3.jpg",
    title: "Community Building",
    description: "Strengthening community bonds",
  },
  {
    src: "/w4.jpg",
    title: "Clean Water Projects",
    description: "Bringing clean water to villages",
  },
  {
    src: "/w5.jpg",
    title: "Agricultural Support",
    description: "Empowering local farmers",
  },
  {
    src: "/w6.jpg",
    title: "Women Empowerment",
    description: "Training and skills development for women",
  },
  {
    src: "/w7.png",
    title: "School Supplies",
    description: "Providing essential learning materials",
  },
  {
    src: "/w8.png",
    title: "Solar Energy Projects",
    description: "Clean energy for rural communities",
  },
  {
    src: "/w9.jpeg",
    title: "Youth Skills Training",
    description: "Building skills for the future",
  },
  {
    src: "/w10.jpeg",
    title: "Education Programs",
    description: "Supporting quality education for children",
  },
  {
    src: "/w11.jpeg",
    title: "Healthcare Access",
    description: "Providing essential medical services",
  },
  {
    src: "/w12.jpeg",
    title: "Community Building",
    description: "Strengthening community bonds",
  },
  {
    src: "/w13.jpeg",
    title: "Clean Water Projects",
    description: "Bringing clean water to villages",
  },
  {
    src: "/w14.jpg",
    title: "Agricultural Support",
    description: "Empowering local farmers",
  },
  {
    src: "/w15.jpeg",
    title: "Women Empowerment",
    description: "Training and skills development for women",
  },
];

export function GalleryCarousel({ isOpen, onClose }: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={handleBackdropClick}
    >
      <button
        className="absolute right-4 top-4 rounded-lg p-2 text-white hover:bg-white/20"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </button>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-lg p-2 text-white hover:bg-white/20"
        onClick={handlePrevious}
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <div className="relative mx-auto max-w-4xl">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <img
            src={galleryImages[currentIndex].src || "/placeholder.svg"}
            alt={galleryImages[currentIndex].title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-4 text-center text-white">
          <h3 className="text-xl font-semibold">
            {galleryImages[currentIndex].title}
          </h3>
          <p className="mt-2 text-white/80">
            {galleryImages[currentIndex].description}
          </p>
          <p className="mt-2 text-sm text-white/60">
            {currentIndex + 1} / {galleryImages.length}
          </p>
        </div>
      </div>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-2 text-white hover:bg-white/20"
        onClick={handleNext}
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  );
}

// "use client";

// import type React from "react";

// import { useState } from "react";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";

// interface GalleryCarouselProps {
//   isOpen: boolean;
//   onClose: () => void;
//   images: string[]; // Now accepts array of image paths
// }

// export function GalleryCarousel({
//   isOpen,
//   onClose,
//   images,
// }: GalleryCarouselProps) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   if (!isOpen) return null;

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
//       onClick={handleBackdropClick}
//     >
//       <button
//         className="absolute right-4 top-4 rounded-lg p-2 text-white hover:bg-white/20"
//         onClick={onClose}
//       >
//         <X className="h-6 w-6" />
//       </button>

//       <button
//         className="absolute left-4 top-1/2 -translate-y-1/2 rounded-lg p-2 text-white hover:bg-white/20"
//         onClick={handlePrevious}
//       >
//         <ChevronLeft className="h-8 w-8" />
//       </button>

//       <div className="relative mx-auto max-w-4xl">
//         <div className="relative aspect-video overflow-hidden rounded-lg">
//           <img
//             src={images[currentIndex] || "/placeholder.svg"}
//             alt={`Gallery image ${currentIndex + 1}`}
//             className="h-full w-full object-cover"
//           />
//         </div>
//         <div className="mt-4 text-center text-white">
//           <p className="text-sm text-white/80">
//             {currentIndex + 1} / {images.length}
//           </p>
//         </div>
//       </div>

//       <button
//         className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-2 text-white hover:bg-white/20"
//         onClick={handleNext}
//       >
//         <ChevronRight className="h-8 w-8" />
//       </button>
//     </div>
//   );
// }
