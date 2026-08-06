import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        kr<span>it</span>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Services">Services</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>

      

    </nav>
  );
}

export default Navbar;