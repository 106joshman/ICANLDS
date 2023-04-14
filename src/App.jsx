// import { Routes, Route } from "react-router-dom";
import Main from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import ChairmanSpeech from "./Components/Body/blog/ChairmanSpeech";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Routes>
        <Route path="/blog/:id" element={<ChairmanSpeech />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
