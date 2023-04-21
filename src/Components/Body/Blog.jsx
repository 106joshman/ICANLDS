import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
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
      title:
        "ICANLDS organizes a one day event to sensitize students of the Accounting profession to schools in its host community",
      href: "blog/catch-them-young-2022",
    },
    {
      id: 4,
      title: "ICANLDS 2022 AGM (Ease-In-Out as baton changes hand)",
      href: "blog/change-of-office",
    },
  ];
  return (
    // <!-- Container Start -->
    <div className="bg-[#a2dbc7]">
      <div id="blog" className="contaier px-6 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section className="mb32 text-gray-800">
          <div className=" text-center">
            <h2 className="text-3xl font-bold py-4 text-[#1b8450] text-center">
              District Publication
            </h2>
          </div>
          <div className="newsList flex justify-between">
            <ul className="newsItem w-full flex flex-col">
              {linkTitle.map((items, index) => {
                return (
                  <li className="py-2" key={index}>
                    <Link
                      to={items.href}
                      className="block px-5 border-gray-500 hover:underline hover:underline-offset-[0.3em] pb-2 items-center"
                    >
                      {items.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <div className="updates py-5">
          <marquee behavior="" direction="left">
            <ul className="flex flex-row">
              <li className="mx-4">
                <a
                  href="#"
                  className="hover:underline hover:underline-offset-[0.3em]"
                >
                  Lorem Ipsum
                </a>
              </li>
              <li className="mx-4">
                <a href="#" className=" hover:underline">
                  Lorem Ipsum
                </a>
              </li>
              <li className="mx-4">
                <a href="#" className=" hover:underline">
                  Lorem Ipsum
                </a>
              </li>
              <li className="mx-4">
                <a href="#" className=" hover:underline">
                  Lorem Ipsum
                </a>
              </li>
              <li className="mx-4">
                <a href="#" className=" hover:underline">
                  Lorem Ipsum
                </a>
              </li>
            </ul>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Blog;
