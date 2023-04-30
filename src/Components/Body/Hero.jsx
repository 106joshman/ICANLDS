import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image1 from "../../assets/Hero-Images/IMG_5069.JPG";
import Image2 from "../../assets/Hero-Images/IMG_4770.JPG";
import Image3 from "../../assets/Hero-Images/IMG_4882.JPG";
import Image4 from "../../assets/Hero-Images/IMG_4929.JPG";
import Image5 from "../../assets/Hero-Images/IMG_5079.JPG";
import Image6 from "../../assets/Hero-Images/IMG_5060.JPG";
import ADD from "../../assets/adm.png";
import ChairmanSpeech from "./ChairmanSpeech";
// import HeroImage from "../../assets/Hero.jpg";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="home" className="">
      <div
        className="p-12 md:hidden text-center relative overflow-hidden bg-no-repeat bg rounded-l bg-hero-image h-screen bg-center bg-contain bg-[#233e8c]"
        // style={{
        //   // backgroundImage: "url('../../assets/Hero.jpg')",
        //   height: "100vh",
        // }}
      ></div>
      <Carousel
        className="hidden md:flex"
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
      >
        <div className="grid place-items-center h-[70vh] md:h-auto">
          <img src={ADD} className="block w-full" alt="Camera" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
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

      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-[100vh] lg:h-[110vh] overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <div className="flex justify-center border border-none w-[85%] md:w-[65%] lg:w-[55%] p-5 h-[300px] mx-auto rounded-lg items-center mt-[277px] md:mt-[127px] lg:mt-[277px] bg-[blue]/20">
          <div className="text-white text-center">
            <h2
              data-aos="fade-down"
              data-aos-duration="2000"
              className="font-semibold text-[3rem] md:text-[5rem] text-transparent bg-clip-text bg-white"
            >
              Welcome to <br /> ICANLDS
            </h2>
            <div className="my-4 flex justify-center">
              <button
                type="button"
                className="text-white lg:flex bg-blue-700 uppercase hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-2 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Want to Join us?
              </button>
            </div>
          </div>

          <div
            className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-modal="true"
            role="dialog"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered relative w-auto pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5
                    className="text-xl font-medium leading-normal text-gray-800"
                    id="exampleModalScrollableLabel"
                  >
                    New Members Guide
                  </h5>
                  <button
                    type="button"
                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body relative p-4 text-black text-lg">
                  <p className="text-justify mb-2.5">
                    Dear Professional Colleague,
                  </p>
                  <p className="text-justify mb-2">
                    We are very pleased that you would like to join the Lagos &
                    District Society of The Institute of Chartered Accountants
                    of Nigeria. The Lagos & District Society of ICAN is one of
                    the grassroot arms of the Institute and acts as an interface
                    between the members working or living on Lagos Island,
                    Ikoyi, Victoria Island, Lekki and Ajah.
                  </p>
                  <p className="text-justify mb-4">
                    Our members’ meeting comes up on
                    <strong> second Thursday of every month</strong> at the
                    Study Center of the National Open University of Nigeria,
                    114/116, Ahmadu Bello Way, Victoria Island, Lagos.
                  </p>
                  <p className="text-justify mb-2">
                    {" "}
                    Kindly fill and submit the membership form via this link{" "}
                    <a
                      className="text-blue-500"
                      href="https://forms.gle/RDbhPHPRMHu7eLKe9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      New Members form
                    </a>{" "}
                    and pay the total sum of N10,000 into our Bank account the
                    details of which is as also stated below. (N5,000 for
                    Registration & N5,000 for Annual Subscription), in favour of
                    ICAN Lagos & District Society. Payment can be made at the
                    bank or via transfer into any of the District Accounts.
                  </p>
                  <p className="text-justify mb-2">
                    Please find the account details below: <br />{" "}
                    <strong> First Bank Account No: 2017594673</strong> <br />{" "}
                    <strong> Zenith Bank Account No: 1017471043</strong>. <br />{" "}
                    Also, all members of the District are required to pay
                    <strong> N20,000 as development levy</strong> (one-time
                    payment) in the dedicated building account detailed below.
                    This payment is a requirement to process any application
                    that requires our confirmation. <br />{" "}
                    <strong> ICANLDS Building Project Account</strong> <br />{" "}
                    <strong> Zenith Bank 1017746132 </strong> <br />
                    Should you require help in anyway, please call any of the
                    numbers below on the website. <br />
                    Thank you.
                  </p>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChairmanSpeech />
    </section>
  );
};

export default Hero;
