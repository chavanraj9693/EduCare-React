import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./pages/Home";
import Cources from "./pages/Cources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/
EduCare-React
>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/Cources" element={<Cources />} />
          <Route exact path="/About" element={<About/>} />
          <Route exact path="/Contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
