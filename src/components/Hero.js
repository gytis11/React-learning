import React from "react";
import "../style.css";
import Collage from "../images/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero--img" src={Collage}></img>
      <h1 className="hero--h1">Online Experiences</h1>
      <p className="hero--par">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
}
