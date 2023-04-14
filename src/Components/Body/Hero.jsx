import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image1 from "../../assets/Hero-Images/IMG_5069.JPG";
import Image2 from "../../assets/Hero-Images/IMG_4770.JPG";
import Image3 from "../../assets/Hero-Images/IMG_4882.JPG";
import Image4 from "../../assets/Hero-Images/IMG_4929.JPG";
import Image5 from "../../assets/Hero-Images/IMG_5079.JPG";
import Image6 from "../../assets/Hero-Images/IMG_5060.JPG";
import Speech from "./Speech";
// import HeroImage from "../../assets/Hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="">
      <div
        className="p-12 md:hidden text-center relative overflow-hidden bg-no-repeat bg rounded-lg bg-hero-image h-screen bg-center bg-contain bg-[#233e8c]"
        style={{
          // backgroundImage: "url('../../assets/Hero.jpg')",
          height: "100vh",
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-white ">
              {/* <h2 className="font-semibold text-7xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#5ce1e6] to-[#233e8c]">
                Welcome
              </h2>
              <h4 className="font-semibold text-4xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                to ICANLDS
              </h4> */}
              {/* <img src={HeroImage} alt="" srcSet="" />  cde7f7, a2dbc7, 5ce1e6, 233e8c*/}
            </div>
          </div>
        </div>
      </div>
      <Carousel
        className="hidden md:flex"
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
      >
        <div className="grid place-items-center h-[70vh] md:h-auto">
          <img src={Image1} className="block w-full" alt="Camera" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div className="grid place-items-center h-[70vh] md:h-auto">
          <img src={Image2} className="block w-full" alt="Camera" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div className="grid place-items-center h-[70vh] md:h-auto">
          <img src={Image3} className="block w-full" alt="Camera" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div className="grid place-items-center h-[70vh] md:h-auto">
          <img src={Image4} className="block w-full" alt="Camera" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div className="grid place-items-center h-[70vh] md:h-auto">
          <img src={Image5} className="block w-full" alt="Camera" />
          {/* <p className="legend">Legend 3</p>*/}
        </div>
        <div className="grid place-items-center h-[70vh] md:h-auto">
          <img src={Image6} className="block w-full" alt="Camera" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>

      {/* <div
        id="carouselExampleIndicators"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              className="block w-full"
              alt="Wild Landscape"
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              className="block w-full"
              alt="Camera"
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              className="block w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      <Speech/>
    </section>
  );
};

export default Hero;
