import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/edu4.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="Home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 className="learnProgrammingLanguage">
          Learn Programming Languages
        </h1>
        <p className="subtitle">
          Expand your coding skills and explore new languages.
        </p>
        <Link to="/Cources">
          <button className="exploreButton">Explore Cources</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
