import './about.css'
import React from "react";
import  AboutImage from "../../photos/haircut1.jpg"
import Content from '../../data/content.json'


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
        <h1>{Content.aboutHeader}</h1>
        <p>{Content.about}</p>
        </div>
      </div>
    </div>
  );
}
