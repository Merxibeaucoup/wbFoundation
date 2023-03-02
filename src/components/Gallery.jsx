import React from "react";
import ImageGallery from "react-image-gallery";
import { images } from "../data/gallery-image";
import Aos from "aos";
import "aos/dist/aos.css";

// const images = [
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/",
//   },
// ];

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="container">
        <h2
          className="gallery__header"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          Gallery
        </h2>
        <div
          className="gallery__image__wrapper
        "
        >
          <ImageGallery items={images} showBullets={true} lazyLoad={true} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
