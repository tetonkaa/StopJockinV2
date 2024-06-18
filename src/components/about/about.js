import "./about.css";
import React from "react";
import Carousel from "../carousel/Carousel";
import Content from "../../data/content.json";

export default function About() {
  return (
    <div className="aboutPage" id="about">
      <div className="aboutContent">
        <div className="aboutItem">
          <Carousel />
        </div>
        <div className="aboutItem">
          <h1>{Content.aboutHeader}</h1>
          <p>{Content.about}</p>
        </div>
      </div>
    </div>
  );
}
