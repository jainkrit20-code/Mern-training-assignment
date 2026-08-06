

import React from "react";
import "./About.css";
import Krit from "../images/Krit.jpg";
function About() {
  return (
    <div className="about-section">
      <div className="content-right">
        <p>About Me</p>
        <h1>Hi, I'm Krit</h1>
        <p>
          I'm a passionate web developer with a love for creating beautiful and
          functional websites. Take a look at my work and feel free to reach
          out!
        </p>
      </div>
      <div className="content-left">
        <img src={Krit} alt="Profile" className="profile-image"/>
      </div>
    </div>
  );
}

export default About;