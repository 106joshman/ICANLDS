import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../Body/blog/article.json";

const Blog = () => {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   const fetchArticle = () => {
  //     fetch("./article.json")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setData(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  //   fetchArticle();
  // }, []);

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
              {data.map((items, index) => {
                return (
                  <li className="py-2" key={index}>
                    <Link
                      to={`/blog/${items.id}`}
                      className="block px-5 border-gray-500 hover:underline pb-2 items-center"
                    >
                      {items.linkTitle}
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
