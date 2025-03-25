import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home  from "./components/Home";
import About from "./components/About";
import  Component  from "./components/Component";
import  Contact  from "./components/Contact";


function App() {
  return (
    <Router>  
      <div className="max-w-[100vw]">
        <Navbar />
        <div className="bg-black max-w-[100vw] overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/components" element={<Component />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
