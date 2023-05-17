import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import byeLaw from '../assets/Resources/SIGNED DS BYE LAW.pdf'

const Blog = () => {
  const [show, setshow] = useState(false);

  const resourceLink = [
    { title: "ICAN Byelaws", path: byeLaw },
    { title: "ICAN Byelaws", path: byeLaw },
    { title: "ICAN Byelaws", path: byeLaw },
    { title: "ICAN Byelaws", path: byeLaw },
    { title: "ICAN Byelaws", path: byeLaw },
    { title: "ICAN Byelaws", path: byeLaw },
  ];

  const linkTitle = [
    {
      id: 0,
      title:
        "Newly appointed Electoral Committe ahead of the 2023 district election",
      content:
        "<p>New Electoral committee members were appointed to supervise and oversee the election of the 2023/2024 Executive Commitee members. <br/> <br/> The following persons were selected as members of the committee; Nwokejiobi, Constance Ngozi, FCA as the Chairman of the committee, Benson Idugboi, FCA as committee Secretary, Babatunde Samuel Olanipekun, FCA, Adeleke Adeniyi, FCA, and Daniel Ogochukwu, FCA as member.</p>",
    },
    {
      id: 1,
      title:
        "ICAN President visits ICANLDS for a one day courtesy visit and Patron Investiture",
      content:
        "ICAN 58th President Mallam Tijjani Musa ISA BSc. MIoD visited the ICAN Lagos and District Society for a one day courtesy visit/Dinner/ Award night to honor and recognise outstanding members of the district who were invested as Patrons of the district. During the course of the visit, the President visited the grand patron of the district in person of the Oniru of Iru land HRM KABIYESI OBA ABDULWASIU GBOLAHAN AJASA LAWAL, as well as board of Directors of Cornerstone Insurance company.",
    },
    {
      id: 2,
      title:
        "ICANLDS members inagurated as members of the FRSC special marshal Corps in Lagos.",
      content: "",
    },
    {
      id: 3,
      title: "ICANLDS 2022 CTY",
      content: "",
    },
    {
      id: 4,
      title: "ICANLDS 2023 AGM (Ease-In-Out as baton changes hand)",
      content:
        "After the just concluded election of the ICAN Lagos and District society, Madam Toyin Ogunlowo, FCA has emerged as the 21st Chairman of the district. <br/> The AGM will hold the 25th of May, 2023. More informationon on this will be disclosed soon.",
    },
  ];

  return (
    // <!-- Container Start -->
    <div className="">
      <div id="blog" className="sm:ontainer pt-32 mx-auto px-6">
        {/* <!-- Section: Design Block --> */}
        <section className="mb32 text-gray-800">
          <div className=" text-cener">
            <h2 className="text-3xl font-bold py-4 text-[#1b8450] text-ceter">
              District Publication
            </h2>
          </div>
          <div className="newsList flex justify-between">
            <ul className="newsItem w-full flex flex-col">
              {linkTitle.map((items, index) => {
                return (
                  <li className="py-2 w-full md:w-[70%] " key={index}>
                    <div className="accordion">
                      <div
                        className="accordion_title rounded-tl-xl rounded-tr-xl items-center p-2 flex justify-between bg-[green] hover:cursor-pointer select-none text-white"
                        onClick={() => setshow(show === index ? null : index)}
                      >
                        <span> {items.title}</span>
                        <span className="text-3xl font-bold">
                          {show === index ? <FaMinus /> : <FaPlus />}
                        </span>
                      </div>
                      {show === index ? (
                        <div
                          className="accrodion_content p-2 bg-[#a2dbc7]"
                          dangerouslySetInnerHTML={{ __html: items.content }}
                        />
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <div className="updates py-5">
          <marquee
            behavior=""
            direction="left"
            scrollamount="5"
          >
            <ul className="flex flex-row">
              {resourceLink.map((items, index) => (
                <li className="mx-4" key={index}>
                  <a
                    href={items.path}
                    className="hover:underline hover:underline-offset-[0.3em]"
                    download
                  >
                    {items.title}
                  </a>
                </li>
              ))}
            </ul>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Blog;
