import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import data from "./article.json";

const BlogLinks = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  const getArticle = () => {
    fetch("https://github.com/106joshman/ICANLDS/blob/main/article.json" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getArticle();
  }, [id]);

  return (
    <section className="h-[100vh]">
      Top district stories
      <h3 className="text-gray-100">{data.title}</h3>
      <p className="text-gray-100">{data.body}</p>
    </section>
  );
};

export default BlogLinks;
