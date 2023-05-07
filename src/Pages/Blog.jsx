import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";

const Blog = () => {
  const [show, setshow] = useState(false);

  const resourceLink = [
    { title: "ICAN Byelaws", path: "" },
    { title: "ICAN Byelaws", path: "" },
    { title: "ICAN Byelaws", path: "" },
    { title: "ICAN Byelaws", path: "" },
    { title: "ICAN Byelaws", path: "" },
    { title: "ICAN Byelaws", path: "" },
  ];

  const linkTitle = [
    {
      id: 0,
      title:
        "Newly appointed Electoral Committe ahead of the 2023 district election",
      href: "/blog/new-electoral-committee",
    },
    {
      id: 1,
      title:
        "ICAN President visits ICANLDS for a one day courtesy visit and Patron Investiture",
      href: "blog/ican-58-president-visit",
    },
    {
      id: 2,
      title:
        "ICANLDS members inagurated as members of the FRSC special marshal Corps in Lagos.",
      href: "blog/icanlds-frsc-special-corps",
    },
    {
      id: 3,
      title: "ICANLDS 2022 CTY",
      href: "blog/catch-them-young-2022",
    },
    {
      id: 4,
      title: "ICANLDS 2023 AGM (Ease-In-Out as baton changes hand)",
      href: "blog/change-of-office",
    },
  ];

  return (
    // <!-- Container Start -->
    <div className="">
      <div id="blog" className="container pt-32 mx-auto">
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
                  <li className="py-2 w-3/5" key={index}>
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
                        <div className="accrodion_content p-2 bg-[#a2dbc7]">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Veniam, porro sapiente? Inventore excepturi odio
                          dolore quam, nulla repudiandae? Eaque ad fuga
                          asperiores corporis nesciunt quisquam maiores
                          consequatur exercitationem, sunt eos ullam,
                          repudiandae fugit a? Repudiandae deleniti consequuntur
                          expedita. Consequatur vitae assumenda, facere
                          recusandae ab veritatis ex beatae vel repellat magni.
                        </div>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <div className="updates py-5">
          <marquee behavior="" direction="left">
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
