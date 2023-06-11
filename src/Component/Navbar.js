import React, { useState } from "react";
import Logo from "../assets/edu1.jpeg";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="logoContainer">
          <img src={Logo} alt="EduCare Logo" className="logoImage" />
          <h1 className="logoText">EduCare</h1>
        </div>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/Cources">Cources</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/Cources">Cources</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
