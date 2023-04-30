import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="about">
      <div className="mx-ato conainer bg-[#cde7f7] text-black">
        <div className=" p-6">
          <h3 className="mb-5 text-5xl" data-aos="fade-down">
            About Us
          </h3>

          <p className="text-justify mb-3" data-aos="fade-up">
            The Lagos and District Society of the Institute of Chartered
            Accountants of Nigeria (ICAN) is one of the largest and most active
            branches of the organization. It was established in 1967 as a local
            branch of ICAN with the purpose of promoting the development of the
            accounting profession and supporting its members in the Lagos area
            which also makes it the premier district of the Institute.
          </p>

          <p className="text-justify mb-3" data-aos="fade-up">
            ICAN Lagos and District Society (ICANLDS) was established by Herbert
            William Bond, FCA. He was part of the group of Accountants who
            founded the Institute of Chartered Accountants of Nigeria (ICAN) in
            1960. He served as the first eident of ICAN from 1965 to 1967. He
            was born in 1893 in the United Kingdom and arrived in Nigeria in
            1921, where he began his career as an accountant.
          </p>

          <p className="text-justify mb-3" data-aos="fade-up">
            ICANLDS have produced quite a number of impeccable Past Presidents
            of the Institue, and notable council members. it also boast of
            reputable professionals from amongst the top tiers in auditing, Oil
            and Gas, Energy, telecommunication and the Banking sector just to
            mention a few. It also has the Oniru of Iru land HRM KABIYESI OBA
            ABDULWASIU GBOLAHAN AJASA LAWAL as it grand Patron who is also
            supported by six(6) other patrons who are upstanding and respectable
            members of the society.
          </p>

          <p className="text-justify mb-3" data-aos="fade-up">
            Over the years, the Lagos and District Society has played a
            significant role in promoting the goals and objectives of ICAN, and
            in providing support and services to its members. The society offers
            a range of educational and professional development programs,
            including seminars, workshops, and training courses, as well as
            networking opportunities and other events. In addition, the Lagos
            and District Society has been instrumental in raising awareness of
            accounting and financial issues among the general public and
            promoting the importance of good financial management. Today, the
            society continues to play a vital role in supporting the development
            of the accounting profession in Nigeria, and in promoting the
            highest standards of professional conduct and competence among its
            members.
          </p>

          <div className="vision mb-3" data-aos="fade-down">
            <h3 className="text-[#233e8c] text-2xl underline underline-offset-[0.2em] my-2 uppercase">
              our vision
            </h3>

            <p className="text-justify ">
              Becoming the hope of the Institute at the city of excellence.
            </p>
          </div>

          <div className="mission mb-5" data-aos="fade-down">
            <h3 className="text-[#233e8c] text-2xl underline underline-offset-[0.2em] my-2 uppercase">
              mission
            </h3>
            <p className="text-justify ">
              To produce and nature global best Chartered Accountants in all
              walks of life in the interest of humanity.
            </p>
          </div>

          <div className="tablee flex flex-col bg-inherit text-black">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-5 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center text-sm font-light">
                    <thead className="border-b bg-gray-500 font-medium text-white dark:border-neutral-500 ark:bg-neutral-900">
                      <tr>
                        <th scope="col" className=" px-6 py-4">
                          #
                        </th>
                        <th scope="col" className="text-start px-6 py-4">
                          Name
                        </th>
                        <th scope="col" className=" text-start px-6 py-4">
                          Position
                        </th>
                        {/* <th scope="col" className=" px-6 py-4">
                          Year
                        </th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          1
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4">
                          Chief Ebenezer F. Oke, FCA (Late)
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          1988 - 1989
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          2
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4">
                          Pastor Demola Somorin, FCA
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          1984 - 1990
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          3
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4">
                          Mr. Emmanuel Ijewere, FCA
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          1996 - 1997
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          4
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4">
                          Chief Bisi Fabusoye, FCA (Late)
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          1996 - 1997
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          5
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4">
                          Prince Adebanjo Babington-Ashaye, FCA (Late)
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2007 - 2008
                        </td> */}
                      </tr>

                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          6
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4 ">
                          Mr. Christopher Keshiro, FCA
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          1997 - 1999
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          7
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4 ">
                          Mr. Wunmi Adetuyi, FCA
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          1999 - 2001
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          8
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4 ">
                          Dr. Remi Folorunsho, FCA
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2001 - 2003
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          9
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4 ">
                          Mr. Hope Osueke, FCA
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2003 - 2005
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          10
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4 ">
                          Mr. Sola Oyetayo, FCA
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2005 - 2007
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          11
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4 ">
                          Mr. Tunde Popoola, FCA
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2007 - 2009
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          12
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4 ">
                          Mr. Dayo Elliot Babatunde, FCA
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2009 - 2011
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          13
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4 ">
                          Chief Patrick Chibo Akujobi, FCA (Late)
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2011 - 2013
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          14
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4 ">
                          Mr. Kola Olaitan, FCA
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2013 - 2015
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          15
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4 ">
                          Mr. Joshua Ohioma, FCA
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2015 - 2016
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          16
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4 ">
                          Lydia H. Ajayi (Mrs), FCA
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2016 - 2018
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          17
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4 ">
                          Omolola Funmi Oke (Mrs), FCA
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2018 - 2020
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          18
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4 ">
                          Constance Nwokejiobi (Mrs), FCA
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2020 - 2021
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          19
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4 ">
                          Mr. John Isesele, FCA
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
                          Immediate Past Chairman
                        </td>
                        {/* <td className="whitespace-nowrap  px-6 py-4">
                          2021 - 2022
                        </td> */}
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          20
                        </td>
                        <td className="whitespace-nowrap text-start px-6 py-4 ">
                          Mr. Alesta Wilcox, FCA
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-start">
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
