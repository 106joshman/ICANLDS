import React from "react";

const Blog = () => {
  return (
    // <!-- Container Start -->
    <div className="bg-[#a2dbc7]">
      <div id="blog" className="container px-6 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section className="mb32 text-gray-800">
          <div className=" text-center">
            <h2 className="text-3xl font-bold py-4 text-[#1b8450] text-center">
              District Publication
            </h2>
          </div>
          <div className="newsList flex justify-between">
            <ul className="newsItem w-full flex flex-col">
              <li className="py-2">
                <a
                  href="/blog/newly-elected-electoral-committee"
                  className="block px-5 border-gray-500 hover:underline pb-2 items-center"
                >
                  Newly appointed Electoral Committe ahead of the 2023 distrcit
                  election
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="block px-5 border-gray-500 hover:underline pb-2 items-center"
                >
                  ICAN President visits ICANLDS for a one day courtesy visit and
                  Patron Investiture.
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="block px-5 border-gray-500 hover:underline pb-2 items-center"
                >
                  ICANLDS members inagurated as members of the FRSC special
                  marshal Corps in Lagos.
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="block px-5 border-gray-500 hover:underline pb-2 items-center"
                >
                  ICANLDS organizes a one day event to sensitize students of the
                  Accounting profession to schools in its host community.
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="block px-5 border-gray-500 hover:underline pb-2 items-center"
                >
                  Photo story of the 2022 Investiture Ceremony of the 20th
                  Chairman of ICAN Lagos and District Society.
                </a>
              </li>

              <li className="py-2">
                <a
                  href="chairman-speech"
                  className="block px-5 border-gray-500 hover:underline pb-2 items-center"
                >
                  ICANLDS 20th Chairman speech.
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="block px-5 border-gray-500 hover:underline pb-2 items-center"
                >
                  ICANLDS 2022 AGM (Ease-In-Out as baton changes hand)
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="block px-5 border-gray-500 hover:underline pb-2 items-center"
                >
                  ICANLDS 2022 Executive committee members meets with PwC
                  partners to build partnership.
                </a>
              </li>
            </ul>
          </div>
        </section>

        <div className="updates py-5">
          <marquee behavior="" direction="left">
            <ul className="flex flex-row">
              <li className="mx-4"><a href="#" className=" hover:underline">Lorem Ipsum</a></li>
              <li className="mx-4"><a href="#" className=" hover:underline">Lorem Ipsum</a></li>
              <li className="mx-4"><a href="#" className=" hover:underline">Lorem Ipsum</a></li>
              <li className="mx-4"><a href="#" className=" hover:underline">Lorem Ipsum</a></li>
              <li className="mx-4"><a href="#" className=" hover:underline">Lorem Ipsum</a></li>
            </ul>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Blog;
