
import React from "react";
import "./HOME.css";
import Krit from "../images/Krit.jpg"
import Navbar from "../Navbar/Navbar";
import About from "../About/About";

function Home() {
  return (
    <div className="home-container">
  <div className="home-left">
    <span className="tag">AVAILABLE FOR WORK</span>
    <h1>
      Hi, I'm <span>Krit</span>
    </h1>
    <p>
      Freelance UI/UX Designer & Frontend Developer.
      I design and build digital products that people love to use — fast, clean, and accessible.
    </p>
    <div className="buttons">
      <button className="primary-btn">View My Work</button>
      <button className="secondary-btn">Contact Me</button>
    </div>
    <div className="stats">
      <div className="score">
        <h2>34+</h2>
        <p>Projects Done</p>
      </div>
      <div className="score">
        <h2>5+</h2>
        <p>Experience</p>
      </div>

      <div className="score">
        <h2>10+</h2>
        <p>Happy Clients</p>
      </div>

    </div>
  </div>

  <div className="home-right">
    <img src={Krit} alt="" className="profile-image"/>
    <div className="work-tag">
      Open to Work
    </div>
  </div>
</div>
  );
}

export default Home;