import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChairmanSpeech from "./ChairmanSpeech";

const BlogLinks = () => {
  return (
    <Router>
      <Routes>
        <Route path="blog/:id" element={<ChairmanSpeech />} />
      </Routes>
    </Router>
  );
};

export default BlogLinks;
