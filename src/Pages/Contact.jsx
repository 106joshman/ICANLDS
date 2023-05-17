import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiMapPin2Fill, RiMailFill } from "react-icons/ri";

const Contact = () => {
  return (
    // <!-- Container for demo purpose -->
    <div class="cntainer pt-32 px-6 mx-auto">
      {/* <!-- Section: Design Block --> */}
      <section class="mb-32 text-gray-800">
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover bg-center h-[500px]"
          style={{
            backgroundImage:
              "url('https://mdbootstrap.com/img/new/textures/full/284.jpg')",
            height: "500px",
          }}
        >
          {" "}
          <h2
            className="textwhite font-bold text-center flex absolute
           top-[25%] left-[30%] md:left-[40%] text-gray-300 text-3xl"
          >
            Contact Us
          </h2>
        </div>
        <div className="sm:cntainer mx-auto">
          <div
            class="block rounded-lg shadow-lg bg-white px-4 cntainer mx-auto"
            style={{
              marginTop: "-100px",
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div class="flex flex-wrap items-center">
              <div class="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                <div class="map-container-2 w-full">
                  <iframe
                    src="https://maps.google.com/maps?q=obalende&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                <div class="flex flex-wrap pt-12 lg:pt-0">
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                    <div class="flex items-start hover:bg-[#cde7f7]">
                      <div class="shrink-0">
                        <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <FaGlobeAfrica color="white" className="w-8 h-8" />
                        </div>
                      </div>
                      <div class="grow ml-3">
                        <p class="font-bold my-3 text-gray-500">
                          Lagos, Nigeria
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                    <div class="flex items-start hover:bg-[#cde7f7]">
                      <div class="shrink-0">
                        <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <RiMapPin2Fill color="white" className="w-8 h-8" />
                        </div>
                      </div>
                      <div class="grow ml-3">
                        <p class="font-bold my-1 text-gray-500">
                          106/110, Lewis strt,Obalende, Lagos Island
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                    <div
                      class="flex align-start hover:bg-[#cde7f7]
 "
                    >
                      <div class="shrink-0">
                        <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <a
                            href="mailto:"
                            rel="noopener noreferrer"
                            title="WhatsApp icon link"
                            alt="WhatsApp icon"
                            target="_blank"
                          >
                            <IoLogoWhatsapp color="white" className="w-8 h-8" />
                          </a>
                        </div>
                      </div>
                      <div class="grow ml-3">
                        <p class="font-bold my-3 text-gray-500">
                          +234-814-0400-000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-12 lg:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                    <div class="flex align-start hover:bg-[#cde7f7]">
                      <div class="shrink-0">
                        <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <RiMailFill color="white" className="w-8 h-8" />
                        </div>
                      </div>
                      <div class="grow ml-3">
                        <p class="font-bold my-3 text-gray-500">
                          icanlagosanddistrict@yahoo.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
      {/* <!-- Section: Design Block --> */}
    </div>
    // {/* <!-- Container for demo purpose --> */}
  );
};

export default Contact;

// a2dbc7, a2dbc7, 5ce1e6, 233e8c, 1b8450, 476692
