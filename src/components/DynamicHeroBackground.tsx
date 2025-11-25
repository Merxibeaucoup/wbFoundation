"use client";

import { useEffect, useState } from "react";

const imageModules = import.meta.glob("/public/gallery/*.{jpg,jpeg,png,webp}", {
  eager: true,
  as: "url",
});
const images = Object.keys(imageModules).map((path) =>
  path.replace("/public", "")
);

// const images = [
//   "/children-studying-in-classroom-ghana.jpg",
//   "/healthcare-clinic-ghana-africa.jpg",
//   "/community-gathering-ghana-village.jpg",
//   "/clean-water-well-ghana-village-celebration.jpg",
//   "/agricultural-training-ghana-farmers.jpg",
//   "/women-empowerment-workshop-ghana.jpg",
//   "/school-supplies-distribution-ghana.jpg",
//   "/solar-panel-installation-ghana-village.jpg",
//   "/youth-skills-training-ghana.jpg",
// ]

export function DynamicHeroBackground() {
  const [currentImage, setCurrentImage] = useState("");
  const [nextImage, setNextImage] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Set initial random image
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);

    const changeImage = () => {
      // Select a random image different from current
      let newIndex = Math.floor(Math.random() * images.length);
      while (images[newIndex] === currentImage && images.length > 1) {
        newIndex = Math.floor(Math.random() * images.length);
      }

      setNextImage(images[newIndex]);
      setIsTransitioning(true);

      // After fade transition, swap images
      setTimeout(() => {
        setCurrentImage(images[newIndex]);
        setIsTransitioning(false);
      }, 1000);
    };

    // Change image every 5 seconds
    const interval = setInterval(changeImage, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <>
      {/* Current Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${currentImage})`,
          opacity: isTransitioning ? 0 : 1,
        }}
      />
      {/* Next Image (for smooth transition) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${nextImage})`,
          opacity: isTransitioning ? 1 : 0,
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
    </>
  );
}
