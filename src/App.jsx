import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import BlogLinks from "./Components/Body/blog/Articles";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="blog/:id" element={<BlogLinks />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
