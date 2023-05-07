import React, { useRef, useState } from "react";
import image1 from "../assets/gallery/088A4623.JPG";
import image2 from "../assets/gallery/088A4631.JPG";
import image3 from "../assets/gallery/IMG_4754.JPG";
import image4 from "../assets/gallery/IMG_5030.JPG";
import image5 from "../assets/gallery/IMG_5104.JPG";
import { AiOutlineClose } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);

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

  const galleryNews = [
    {
      id: 0,
      image: thumbImages[0].images,
      imageAlt: "Louvre",
      title: "Presidential Visit",
      date: "31.01.2023",
      subTitle: "ICAN 58th President visits ICANLDS",
      show: thumbImages,
    },
    {
      id: 1,
      image: "https://mdbootstrap.com/img/new/standard/city/032.jpg",
      imageAlt: "Louvre",
      title: " FRSC Special marshall corps training",
      date: "12.01.2022",
      subTitle:
        "FRSC trains volunteers of the Ican Lagos and District society Special Marshal Corps",
    },
    {
      id: 2,
      image: "https://mdbootstrap.com/img/new/standard/city/059.jpg",
      imageAlt: "Louvre",
      title: " 2022 CATCH THEM YOUNG (CTY)",
      date: "10.01.2022",
      subTitle:
        "ICANLDS in collaboration with the board of education district 3 host secondary school students to sensitize them on the Accounting profession",
    },
    {
      id: 3,
      image: "https://mdbootstrap.com/img/new/standard/city/018.jpg",
      imageAlt: "Louvre",
      title: "Monthly member General meetings",
      date: "31.01.2023",
      subTitle: "Cross section picture from members general meetings",
    },
    {
      id: 4,
      image: "https://mdbootstrap.com/img/new/standard/city/059.jpg",
      imageAlt: "Louvre",
      title: "Annual Accountanct Conference",
      date: "12.01.2022",
      subTitle:
        "Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam orci, nec ornare metus semper sed. Integer volutpat ornare erat sit amet rutrum.",
    },
    {
      id: 5,
      image: "https://mdbootstrap.com/img/new/standard/city/032.jpg",
      imageAlt: "Louvre",
      title: "International Accounting Day walk",
      date: "10.01.2022",
      subTitle:
        "Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa volutpat feugiat. Donec.",
    },
  ];

  return (
    <section className="bg-white p-5">
      {/* <!-- Container for demo purpose --> */}
      <div class="container mt-24 md:mt-32 mb-24 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section class="mb-32 text-gray-800 text-center md:text-left">
          <h2 class="text-3xl font-bold mb-12 text-center">Picture stories</h2>
          <div className="flex flex-col flex-wrap gap-4 ">
            {galleryNews.map((items, index) => (
              <div
                class="flex flex-wrap mb-6 hover:cursor-pointer"
                onClick={() => setShowModal(!showModal)}
                key={index}
              >
                <div class="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                  <div
                    class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={items.image}
                      class="w-full"
                      alt={items.imageAlt}
                    />
                    <div
                      class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </div>
                </div>

                <div class="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                  <h5 class="text-lg font-bold mb-3">{items.title}</h5>

                  <p class="text-gray-500">
                    <small>
                      Memories Created <u>{items.date}</u>
                    </small>
                  </p>
                  <p class="text-gray-500">{items.subTitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <!--Verically centered modal--> */}
          {showModal && (
            <div
              className="fixed w-screen h-screen z-[100] top-0 left-0 bottom-0 right-0 overflow-x-hidden overflow-y-hidden bg-[black]/50"
              tabIndex="-1"
            >
              <div className="border bg-white rounded-lg w-4/5 lg:w-3/5 relative my-40 lg:my-[112px] mx-auto pointer-eventsnone p-5">
                <div className="">
                  <div className="modal-content">
                    <div className="closeBttn flex justify-end">
                      <button onClick={() => setShowModal(false)}>
                        <AiOutlineClose size={34} color="#5ce1e6" />
                      </button>
                    </div>
                    <div className="">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </section>
  );
};

export default Gallery;
