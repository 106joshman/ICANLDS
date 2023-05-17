import React, { useEffect } from "react";
import ChairMan from "../assets/Exco/ToyinOgunlowo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Chairman = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className=" mx-auto sm:container pt-32">
        {/* Chairman's Speech */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-center">
          <div className="image" data-aos="zoom-in-up">
            <img
              src={ChairMan}
              className="w-full md:w-35 lg:w-full m-auto h-"
              // loading="lazy"
              alt=""
              srcSet=""
            />
            <p className="flex flex-col px-2 lg:left-0 -top-20 ml-2.5 w-[350px] text-white relative">
              <span className="text-3xl font-semibold">
                Toyin Ogunlowo, FCA
              </span>
              <span className="text-base font-bold">21st Chairman</span>
            </p>
          </div>
          <div
            className="text wfull px-8 md:w-3/4 mx-auto"
            data-aos="zoom-in-up"
            // data-aos-duration="2000"
          >
            <h3 className="text-3xl mb-4">
              Welcome to ICAN Lagos & District Society
            </h3>

            <p className="text-justify mb-2.5" data-aos="fade-down">
              Toyin Ogunlowo Partner, Energy & Natural Resources Audit Group
              KPMG in Nigeria
            </p>
            <p className="text-justify mb-2.5 " data-aos="fade-up">
              Toyin is a Partner in the Energy & Natural Resources Audit
              Division of KPMG Nigeria. She has more than 16 years working
              experience in providing professional services to various clients.
              She was the engagement Leader on the audits of indigenous and
              multinational Energy and Natural Resources Companies. She has led
              Joint Venture (JV) audits within the oil and gas sector which
              comprised a review of the JV operations in line with the
              individual Joint Operations Agreements between partners and was
              able to provide evidential support to the JV partners for monetary
              recoveries.
            </p>
            <p className="text-justify mb-2.5" data-aos="fade-down">
              She was also an integral part of a Canadian Internal Controls over
              Financial Reporting (CSOX) project carried out for an
              International Oil Company in Nigeria. The company was assisted in
              documenting their business processes and ensuring it met best
              practice standards. Toyin has advised various clients on potential
              improvements to processes & controls and has also worked with the
              Ministry of Petroleum Resources on a special project to determine
              government revenues from the oil and gas industry in Nigeria.
            </p>
            <p className="text-justify mb-2.5" data-aos="fade-up">
              She has worked in various capacities on various engagements - her
              extensive oil and gas industry experience includes leading special
              purpose engagements (capital markets transactions (Assurance),
              contract reviews, business process reviews etc.) and other
              Accounting/Financial Reporting related projects.
            </p>
            {/* <p className="text-justify mb-2.5" data-aos="fade-up"></p> */}
            {/* <p className="text-justify mb-2.5" data-aos="fade-down"></p> */}
            <p className="text-justify mb-2.5">
              Once again, thank you all for coming, and thank you for your
              attention.
            </p>
            <h5 className="flex flex-col font-bold mb-5" data-aos="fade-up">
              <span>Toyin Ogunlowo, FCA</span>
              <span>21st Chairman, ICANLDS</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chairman;
