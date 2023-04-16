import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import BlogLinks from "./Components/Body/blog/Articles";
import Speech from "./Components/Body/blog/Speech";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/blog/new-electoral-committee" element={<BlogLinks />} />
          <Route path="/blog/ican-58-president-visit" element={<Speech />} />
          <Route path="/blog/icanlds-frsc-special-corps" element={<BlogLinks />} />
          <Route path="/blog/catch-them-young-2022" element={<BlogLinks />} />
          <Route path="/blog/change-of-office" element={<BlogLinks />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
