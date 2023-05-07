import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/about";
import Excos from "./Pages/Excos";
import Chairman from "./Pages/Chairman";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/gallery";
import Blog from "./Pages/Blog";

function App() {
  return (
    <Router>
      <div className="App bg-white">
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="district/excos" element={<Excos />} />
          <Route path="district/chairman" element={<Chairman />} />
          <Route path="district/resources" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
