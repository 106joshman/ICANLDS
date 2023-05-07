import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroImage from "../assets/eid.png";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section>
      <div className=" pt28 bg-[#cde7f7] text-black">
        <div className="image">
          <img
            src={HeroImage}
            className="h-screen w-full"
            alt="About image"
            srcset=""
          />
        </div>
        <div className="mx-auto container p-6">
          <div className="absolute top-[180px] md:top-[210px] textwhite lg:top-[270px] pr-6 lg:pr-10">
            <div className="flex flex-col lg:flex-row lg:gap-5 justify-between">
              <div className="left">
                {" "}
                <h1 className="mb-5 text-5xl" data-aos="fade-down">
                  Our story
                </h1>
                <p className="text-justify mb-3" data-aos="fade-up">
                  {" "}
                  Herbert William Bond, FCA was a prominent accountant and one
                  of the founding fathers of the Institute of Chartered
                  Accountants of Nigeria (ICAN). Bond was born in 1893 in the
                  United Kingdom and arrived in Nigeria in 1921, where he began
                  his career as an accountant. He worked for various companies
                  in Nigeria, including John Holt and United Africa Company
                  (UAC), and became a partner in the firm of Akintola Williams &
                  Co. in 1952.
                </p>
              </div>

              <div className="right">
                <p className="text-justify mb-3" data-aos="fade-up">
                  Bond was a member of the Association of Certified and
                  Corporate Accountants (ACCA) and served as its representative
                  in Nigeria. He was also instrumental in the establishment of
                  the West African Society of Accountants (WASA) and served as
                  its first president.
                </p>

                <p className="text-justify mb-3" data-aos="fade-up">
                  {" "}
                  In 1960, Bond was part of a group of accountants who founded
                  the Institute of Chartered Accountants of Nigeria (ICAN). He
                  served as the first president of ICAN from 1965 to 1967 and
                  played a key role in the growth and development of the
                  institute.
                  {/* Bond was also
              a member of the board of directors of several companies in Nigeria
              and contributed significantly to the development of the accounting
              profession in the country.{" "} */}
                </p>
              </div>
              {/* <p className="text-justify mb-3" data-aos="fade-up">
              Bond was awarded the Order of the British Empire (OBE) in 1953 for
              his services to the accounting profession in Nigeria. He passed
              away in 1974, leaving behind a legacy of professionalism,
              integrity, and dedication to the accounting profession in Nigeria.
            </p> */}

              {/* <p className="text-justify mb-3" data-aos="fade-up">
              The Lagos and District Society of the Institute of Chartered
              Accountants of Nigeria (ICAN) is one of the largest and most
              active branches of the organization. It was established in 1967 as
              a local branch of ICAN with the purpose of promoting the
              development of the accounting profession and supporting its
              members in the Lagos area which also makes it the premier district
              of the Institute.
            </p>

            <p className="text-justify mb-3" data-aos="fade-up">
              ICAN Lagos and District Society (ICANLDS) was established by
              Herbert William Bond, FCA. He was part of the group of Accountants
              who founded the Institute of Chartered Accountants of Nigeria
              (ICAN) in 1960. He served as the first eident of ICAN from 1965 to
              1967. He was born in 1893 in the United Kingdom and arrived in
              Nigeria in 1921, where he began his career as an accountant.
            </p>

            <p className="text-justify mb-3" data-aos="fade-up">
              ICANLDS have produced quite a number of impeccable Past Presidents
              of the Institue, and notable council members. it also boast of
              reputable professionals from amongst the top tiers in auditing,
              Oil and Gas, Energy, telecommunication and the Banking sector just
              to mention a few. It also has the Oniru of Iru land HRM KABIYESI
              OBA ABDULWASIU GBOLAHAN AJASA LAWAL as it grand Patron who is also
              supported by six(6) other patrons who are upstanding and
              respectable members of the society.
            </p>

            <p className="text-justify mb-3" data-aos="fade-up">
              Over the years, the Lagos and District Society has played a
              significant role in promoting the goals and objectives of ICAN,
              and in providing support and services to its members. The society
              offers a range of educational and professional development
              programs, including seminars, workshops, and training courses, as
              well as networking opportunities and other events. In addition,
              the Lagos and District Society has been instrumental in raising
              awareness of accounting and financial issues among the general
              public and promoting the importance of good financial management.
              Today, the society continues to play a vital role in supporting
              the development of the accounting profession in Nigeria, and in
              promoting the highest standards of professional conduct and
              competence among its members.
            </p> */}
            </div>
          </div>
          <div className="flex justify-between gap-5 my-8 flex-col lg:flex-row">
            <div
              className="vision mb-5 border md:w-3/5 lg:w-2/5 md:mx-auto border-green-500 shadow-md text-center rounded-lg p-10 hover:bg-[green] hover:text-white"
              data-aos="flip-up"
            >
              <h3 className="text-[#233e8c] hover:text-white text-2xl underline underline-offset-[0.2em] my-2 uppercase">
                our vision
              </h3>

              <p className="text-justif ">
                Becoming the hope of the Institute at the city of excellence.
              </p>
            </div>

            <div
              className="mission mb-5 border md:w-3/5 lg:w-2/5 md:mx-auto border-green-500 shadow-md text-center rounded-lg p-10 hover:bg-[green] hover:text-white"
              data-aos="flip-down"
            >
              <h3 className="text-[#233e8c] hover:text-white text-2xl underline underline-offset-[0.2em] my-2 uppercase">
                mission
              </h3>
              <p className="text-justif ">
                To produce and nature global best Chartered Accountants in all
                walks of life in the interest of humanity.
              </p>
            </div>
          </div>

          <div className="tablee flex flex-col bg-inherit text-black">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-5 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center text-sm font-light">
                    <thead className="border-b bg-gray-500 font-medium text-white dark:border-neutral-500 ark:bg-neutral-900">
                      <tr>
                        <th scope="col" className=" px-3 py-2">
                          #
                        </th>
                        <th scope="col" className="text-start px-6 py-4">
                          Name
                        </th>
                        <th scope="col" className=" text-center px-6 py-4">
                          Position
                        </th>
                        {/* <th scope="col" className=" px-6 py-4">
                          Year
                        </th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          1
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2">
                          Chief Ebenezer F. Oke, FCA (Late)
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          1988 - 1989
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          2
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2">
                          Pastor Demola Somorin, FCA
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          1984 - 1990
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          3
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2">
                          Mr. Emmanuel Ijewere, FCA
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          1996 - 1997
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          4
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2">
                          Chief Bisi Fabusoye, FCA (Late)
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          1996 - 1997
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          5
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2">
                          Prince Adebanjo Babington-Ashaye, FCA (Late)
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2007 - 2008
                        </td> */}
                      </tr>

                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          6
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2 ">
                          Mr. Christopher Keshiro, FCA
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          1997 - 1999
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          7
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2 ">
                          Mr. Wunmi Adetuyi, FCA
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          1999 - 2001
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          8
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2 ">
                          Dr. Remi Folorunsho, FCA
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2001 - 2003
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          9
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2 ">
                          Mr. Hope Osueke, FCA
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2003 - 2005
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          10
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2 ">
                          Mr. Sola Oyetayo, FCA
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2005 - 2007
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          11
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2 ">
                          Mr. Tunde Popoola, FCA
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2007 - 2009
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          12
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2 ">
                          Mr. Dayo Elliot Babatunde, FCA
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2009 - 2011
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          13
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2 ">
                          Chief Patrick Chibo Akujobi, FCA (Late)
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2011 - 2013
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          14
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2 ">
                          Mr. Kola Olaitan, FCA
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2013 - 2015
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          15
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2 ">
                          Mr. Joshua Ohioma, FCA
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2015 - 2016
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          16
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2 ">
                          Lydia H. Ajayi (Mrs), FCA
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2016 - 2018
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          17
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2 ">
                          Omolola Funmi Oke (Mrs), FCA
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2018 - 2020
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          18
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2 ">
                          Constance Nwokejiobi (Mrs), FCA
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2020 - 2021
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          19
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2 ">
                          Mr. John Isesele, FCA
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Immediate Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2021 - 2022
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-3 py-2 font-medium">
                          20
                        </td>
                        <td className="whitespacenowrap text-start px-3 py-2 ">
                          Mr. Alesta Wilcox, FCA
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-center">
                          Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2022 - Present
                        </td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
