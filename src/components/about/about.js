import './about.css'
import React from "react";
import  AboutImage from "../../photos/1980.jpg"


export default function About() {
  return (
    <div className="aboutPage" id="about">
      <div className="aboutTitle">
        <h1>About</h1>
      </div>
      <div className="aboutContent">
        <div className="aboutItem">
          <img src={AboutImage} />
        </div>
        <div className="aboutItem">
        <h1>Buzz Buzz</h1>
        <p>BlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurbBlurb</p>
        </div>
      </div>
    </div>
  );
}
