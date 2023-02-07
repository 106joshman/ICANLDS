import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image1 from "../../assets/Hero-Images/IMG_5069.JPG";
import Image2 from "../../assets/Hero-Images/IMG_4770.JPG";
import Image3 from "../../assets/Hero-Images/IMG_4882.JPG";
import Image4 from "../../assets/Hero-Images/IMG_4929.JPG";
import Image5 from "../../assets/Hero-Images/IMG_5079.JPG";
import Image6 from "../../assets/Hero-Images/IMG_5060.JPG";

const Hero = () => {
  return (
    <section id="home" className="">
      <Carousel showStatus={false} showThumbs={false}>
        <div>
          <img
            src={Image1}
            // src="https://drive.google.com/thumbnail?id=1Ugp819rHnCnMXWZ3zW9mbXeKnhjNvIup"
            className="block w-full items-center h[300px]"
            alt="Camera"
          />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img
            src={Image2}
            // src="https://drive.google.com/thumbnail?id=169vANTWWlaSbJkwsV5YpJS30ht3coDTe"
            className="block w-1/2"
            alt="Camera"
          />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img
            src={Image3}
            // src="https://drive.google.com/thumbnail?id=11fHf2H2Vq9NRt26uny8uqGfSeeXyifgr"
            className="block w-1/2"
            alt="Camera"
          />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img
            src={Image4}
            // src="https://drive.google.com/thumbnail?id=1glv-_WqRrMydLjFS8xRk5KOYuQS1G0fy"
            className="block w-1/2"
            alt="Camera"
          />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img
            src={Image5}
            // src="https://drive.google.com/thumbnail?id=1glv-_WqRrMydLjFS8xRk5KOYuQS1G0fy"
            className="block w-1/2"
            alt="Camera"
          />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img
            src={Image6}
            // src="https://drive.google.com/thumbnail?id=1glv-_WqRrMydLjFS8xRk5KOYuQS1G0fy"
            className="block w-1/2"
            alt="Camera"
          />
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
              className="block w-1/2"
              alt="Wild Landscape"
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              className="block w-1/2"
              alt="Camera"
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              className="block w-1/2"
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
    </section>
  );
};

export default Hero;
