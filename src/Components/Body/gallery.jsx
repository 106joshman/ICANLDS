import React, { useRef } from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// // import { Options } from "@splidejs/splide";
// import "@splidejs/react-splide/css";
import image1 from "../../assets/gallery/088A4623.JPG";
import image2 from "../../assets/gallery/088A4631.JPG";
import image3 from "../../assets/gallery/IMG_4754.JPG";
import image4 from "../../assets/gallery/IMG_5030.JPG";
import image5 from "../../assets/gallery/IMG_5104.JPG";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
  const thumbImages = [
    { images: image1, alt: "image one" },
    { images: image2, alt: "image one" },
    { images: image3, alt: "image one" },
    { images: image4, alt: "image one" },
    { images: image5, alt: "image one" },
    { images: image2, alt: "image one" },
    { images: image3, alt: "image one" },
    { images: image4, alt: "image one" },
    { images: image5, alt: "image one" },
    { images: image2, alt: "image one" },
    { images: image3, alt: "image one" },
    { images: image4, alt: "image one" },
    { images: image5, alt: "image one" },
  ];

  return (
    <section id="gallery" className="bg-white">
      <p className="my-4 p-3">Capture memories and events in billion colours ✨</p>
      <div className="gallery">
        <Carousel
          autoPlay={true}
          showIndicators={false}
          infiniteLoop={true}
          showStatus={false}
          thumbWidth={130}
        >
          {thumbImages.map((items, index) => (
            <div className=" max-w-4xl mx-auto" key={index}>
              <img
                className="object-cover h-auto w-full rounded-md"
                src={items.images}
                alt={items.alt}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
