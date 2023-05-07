import React from "react";
import ChairMan from "../assets/Exco/ToyinOgunlowo.jpg";
import GenSec from "../assets/Exco/Martin.jpg";
import Vice from "../assets/Exco/AdedejiOlumide.jpg";
import Ipc from "../assets/Exco/AlestaWIlcox.jpg";
import FinSec from "../assets/Exco/AdedejiOlumide.jpg";
import Seun from "../assets/Exco/Seun.jpeg";
import Technical from "../assets/Exco/Ifeanyi.jpg";
import Exco2 from "../assets/Exco/Oduwaye.jpg";
import Social from "../assets/Exco/Shola.jpg";
import Dvice from "../assets/Exco/Bukunola.jpg";
import Membership from "../assets/Exco/Kikelomo.jpg";
import Treasurer from "../assets/Exco/Martin.jpg";
import Exco1 from "../assets/Exco/ChristopherEhiogie.jpg";
import HeroImage from "../assets/eid.png";

const Excos = () => {
  return (
    <div className="bg-[#cde7f7] pt-28">
      <div className="continer px-6 mx-auto ">
        {/* <div className="image">
          <img
            src={HeroImage}
            className="h-screen w-full"
            alt="About image"
            srcset=""
          />
        </div> */}
        {/* <!-- Section: Design Block --> */}
        <section className="pt-16 pb-5 text-center">
          <h2 className="text-3xl text-black font-bold mb-12">
            Meet the <u className="text-[#1b8450]">EXCO'S</u>
          </h2>

          <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-x-6 lg:gap-xl-12">
            <div className="mb-12">
              <img
                src={ChairMan}
                // src="https://mdbootstrap.com/img/new/avatars/5.jpg"
                className="rounded-full mx-auto shadow-lg mb-4"
                alt=""
                style={{ maxWidth: "60%", height: 215 }}
                // loading="lazy"
              />

              <p className="font-bold mb-1 text-black">Toyin Ogunlowo, FCA</p>
              <p className="text-gray-500">Chairman</p>
            </div>

            <div className="mb-12">
              <img
                src={Vice}
                className="rounded-full mx-auto shadow-lg mb-4"
                alt=""
                style={{ maxWidth: "60%", height: 215 }}
                // loading="lazy"
              />

              <p className="font-bold mb-1 text-black">
                Dr. Olumide Adedeji, FCA
              </p>
              <p className="text-gray-500">Vice Chairman</p>
            </div>

            <div className="mb-12">
              <img
                src={Dvice}
                className="rounded-full mx-auto shadow-lg mb-4"
                alt=""
                style={{ maxWidth: "60%", height: 215 }}
                // loading="lazy"
              />
              <p className="font-bold mb-1 text-black">
                Bukunola Akinmoladun, FCA
              </p>
              <p className="text-gray-500">Deputy Vice-Chaiman</p>
            </div>
            <div className="mb-12">
              <img
                src={GenSec}
                className="rounded-full mx-auto shadow-lg mb-4 lg:w-[37%]"
                alt=""
                style={{ width: "60%", height: 215 }}
              />
              <p className="font-bold mb-1 text-black">
                {" "}
                Dr. Martin Ikpehai, ACA
              </p>
              <p className="text-gray-500">General Secretary</p>
            </div>

            <div className="mb-12">
              <img
                src={Treasurer}
                className="rounded-full mx-auto shadow-lg mb-4 lg:w-[37%]"
                alt=""
                style={{ maxWidth: "60%", height: 215 }}
                // loading="lazy"
              />
              <p className="font-bold mb-1 text-black"></p>
              <p className="text-gray-500">Treasurer</p>
            </div>

            <div className="mb-12">
              <img
                src={FinSec}
                className="rounded-full mx-auto shadow-lg mb-4"
                alt=""
                style={{ maxWidth: "60%", height: 215 }}
                // loading="lazy"
              />
              <p className="font-bold mb-1 text-black">XYZ ABC, FCA</p>
              <p className="text-gray-500">Financial Secretary</p>
            </div>

            <div className="mb-12">
              <img
                src={Technical}
                className="rounded-full mx-auto shadow-lg mb-4"
                alt=""
                style={{ maxWidth: "60%", height: 215 }}
                // loading="lazy"
              />
              <p className="font-bold mb-1 text-black">Ifeanyi Ugbomode, ACA</p>
              <p className="text-gray-500">Technical Secretary</p>
            </div>

            <div className="mb-12">
              <img
                src={Membership}
                className="rounded-full mx-auto items-center shadow-lg mb-4"
                alt=""
                style={{ maxWidth: "60%", height: 215 }}
                // loading="lazy"
              />
              <p className="font-bold mb-1 text-black">Kikelomo Abikele, FCA</p>
              <p className="text-gray-500">Membership Secretary</p>
            </div>

            <div className="mb-12">
              <img
                src={Social}
                className="rounded-full mx-auto shadow-lg mb-4"
                alt=""
                style={{ maxWidth: "60%", height: 215 }}
                // loading="lazy"
              />
              <p className="font-bold mb-1 text-black">Olusola Adegbite, FCA</p>
              <p className="text-gray-500">Social & Publicity Secretary</p>
            </div>

            <div className="mb-12">
              <img
                src={Seun}
                className="rounded-full mx-auto shadow-lg mb-4"
                alt=""
                style={{ maxWidth: "60%", height: 215 }}
                // loading="lazy"
              />
              <p className="font-bold mb-1 text-black">
                Oluwaseun Ileola-Olaseni, FCA
              </p>
              <p className="text-gray-500">Asst. General Secretary</p>
            </div>

            <div className="mb-12">
              <img
                src={Exco2}
                className="rounded-full mx-auto shadow-lg mb-4"
                alt=""
                style={{ maxWidth: "60%", height: 215 }}
                // loading="lazy"
              />
              <p className="font-bold mb-1 text-black">
                Oluwafunmilayo Oduwaye, FCA
              </p>
              <p className="text-gray-500">EX- Officio - I</p>
            </div>

            <div className="mb-12">
              <img
                src={Exco1}
                className="rounded-full mx-auto shadow-lg mb-4"
                alt=""
                style={{ maxWidth: "60%", height: 215 }}
                // loading="lazy"
              />
              <p className="font-bold mb-1 text-black">
                Christopher Ehiogie, FCA
              </p>
              <p className="text-gray-500">EX-Officio - II</p>
            </div>

            <div className="mb-12">
              <img
                src={Ipc}
                className="rounded-full mx-auto shadow-lg mb-4"
                alt=""
                style={{ maxWidth: "60%" }}
                // loading="lazy"
              />
              <p className="font-bold mb-1 text-black">JAlesta Wilcox, FCA</p>
              <p className="text-gray-500">Immediate Past Chairman (IPC)</p>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
    </div>
  );
};

export default Excos;
