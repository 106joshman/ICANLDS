import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image1 from "../assets/Hero-Images/IMG_5069.JPG";
import Image2 from "../assets/Hero-Images/IMG_4770.JPG";
import Image3 from "../assets/Hero-Images/IMG_4882.JPG";
import Image4 from "../assets/Hero-Images/IMG_4929.JPG";
import Image5 from "../assets/Hero-Images/IMG_5079.JPG";
import Image6 from "../assets/Hero-Images/IMG_5060.JPG";
import Payment from "../assets/pay.png";
import ADD from "../assets/adm.png";
// import HeroImage from "../../assets/Hero.jpg";

const Home = () => {
  const imageSLide = [ADD, Image1, Image2, Image3, Image4, Image5, Image6];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  setInterval(() => {
    if (current === 6) {
      setCurrent(0);
    } else {
      setCurrent(current+1);
    }
    // setCurrent(current);
  }, 5000);

  return (
    <section className="">
      <div className="pt-[88px] md:pt-[120px] lg:pt-[88px]  bg-[#5ce1e6]"></div>

      {/* HERO */}

      {/* <!-- Container for demo purpose --> */}
      <div class="conainer my24 h-screen px6 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section class="mb-32">
          <div
            class="relative overflow-hidden bg-no-repeat bg-cover"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url(${imageSLide[current]})`,
              // "url('https://mdbcdn.b-cdn.net/img/new/slides/006.webp')",
              height: "100vh",
            }}
          >
            <div
              class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.75) " }}
            >
              <div class="flex justify-center items-center h-full">
                <div class="text-center text-white px-6 md:px-12 flex flex-col lg:flex-row justify-between gap-5">
                  <div
                    data-aos="fade-down"
                    data-aos-duration="2000"
                    class="block rounded-lg text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                  >
                    <div class="p-10 h-300px] bg-[blue]/10 flex flex-col items-center text-center">
                      <h5 class="my-5 text-4xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Welcome to ICAN Lagos & District Society
                      </h5>
                      <p class="my-5 text-3xl text-neutral-600 dark:text-neutral-200">
                        The <strong className="">Premier District</strong>
                      </p>
                    </div>
                  </div>

                  {/* <div class="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="p-6 w-300px]">
                      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Special title treatment
                      </h5>
                      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>

      <div className="procedure container mx-auto p-2">
        <h1 className="text-center text-2xl my-5 font-semibold">
          Lagos & District Society New members Guide:
        </h1>

        <div className="cardInfo flex flex-col md:flex-row justify-center flex-wrap gap-10 p-3">
          <div className="flex flex-col justify-between gap-4 w-[300px]">
            <div className="border border-gray-400 shadow-lg shadow-slate-600 h-[160px] text-center items-center rounded-md p-4 hover:animate-bounce">
              <p className="">
                Pay the sum of <strong className="">#10,000</strong>.
              </p>
              <p className="">
                Registration fee of
                <strong className=""> #5,000</strong>.
              </p>
              <p className="">
                Annual Subscription of
                <strong className=""> #5,000</strong>
              </p>
              <p>
                into any of the account details below at the bank or via bank
                transfer.
              </p>
            </div>
            <div className="">
              Account Name: ICAN Lagos & District Society
              <strong className="">First Bank Account No: 2017594673 </strong>
              <br /> OR <br />
              <strong className="">Zenith Bank Account No: 1017471043</strong>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 w-[300px]">
            <div className="border flex flex-col border-gray-400 shadow-lg shadow-slate-600 h-[160px] text-center items-center rounded-md p-4 hover:animate-bounce">
              Memebrs are also required to pay
              <strong className="">#20,000</strong> as Development Levy
              (one-time payment) in the dedicated building account detailed
              below.
            </div>
            <div className="">
              <p className="mb-4">
                Account Name: ICAN Lagos & District Society Building Project
              </p>
              <br />
              <strong> Zenith Bank 1017746132 </strong> <br />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 w-[300px]">
            <div className="border border-gray-400 flex shadow-lg shadow-slate-600 h-[160px] text-center items-center rounded-md p-4 hover:animate-bounce">
              Fill District membership Google form
            </div>
            <div className="my-2 items-center justify-center flex">
              <a
                className="bg-blue-500 w-full text-center text-white rounded-lg py-4 px-6"
                href="https://forms.gle/RDbhPHPRMHu7eLKe9"
                target="_blank"
                rel="noopener noreferrer"
              >
                New Member Form
              </a>
            </div>
          </div>

          <div className="border border-gray-400 text-xl flex shadow-lg shadow-slate-600 max-w-5xl w[300px] h-160px] textcenter items-center rounded-md p-4 hover:animate-bounce">
            Members will thereafter be admittee into the District memebrs
            directory and be added to the District WhatsApp group.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
