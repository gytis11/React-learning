import React from "react";
import AirbnbLogo from "../images/Airbnb.png";
import "../style.css";

export default function Navbar() {
  return (
    <nav>
      <img className="navbar--img" src={AirbnbLogo}></img>
    </nav>
  );
}
