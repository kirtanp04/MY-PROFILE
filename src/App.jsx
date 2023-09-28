import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Function } from "./Context/Context";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Theams from "./Components/Theams";
import Seo from "./Seo";


function App() {
  return (
    <>
    
        <BrowserRouter>
          <Function>
            <Seo />
            <Navbar />
            <Theams />
            <Routes>
              <Route index element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="portfolio" element={<Portfolio />}></Route>
              <Route path="contact" element={<Contact />}></Route>
            </Routes>
          </Function>
        </BrowserRouter>
   
    </>
  );
}

export default App;
