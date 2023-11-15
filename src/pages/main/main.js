import "./main.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../../components/about/about"
import Contact from "../../pages/contact/contact"
import { ReactComponent as Location } from "../../icons/location.svg";
import { ReactComponent as Clock } from "../../icons/clock.svg";
import { ReactComponent as Phone } from "../../icons/phone.svg";
import { ReactComponent as Facebook } from "../../icons/facebook.svg";
import { ReactComponent as Instagram } from "../../icons/instagram.svg";
import { ReactComponent as Yelp } from "../../icons/yelp.svg";

export default function Main() {
  return (
    <div className="mainPage">
      <div className="mainPageContainer" id="home">
        <div className="coverTitle">
          <h1>StopJockin</h1>
          <p>
            The most stylish barbershop in New Orleans.
          </p>
          <a href="/contact">
            <button className="startButton">Contact</button>
          </a>
        </div>
        <div className="contentContainer">
          <div className="contentField">
            <div className="contentItem">
              <Location />
              <h1>Address</h1>
              <a>Content Text</a>
              <a>Content Text</a>
            </div>
            <div className="contentItem">
              <Clock />
              <h1>Hours</h1>
              <a>Content Text</a>
              <a>Content Text</a>
            </div>
            <div className="contentItem">
              <Phone />
              <h1>Call</h1>
              <a>Content Text</a>
              <a>Content Text</a>
            </div>
          </div>
          <div className="contentField">
            <div className="contentItem">
              <Facebook />
              <Instagram />
              <Yelp />
            </div>
          </div>
        </div>
        <div className="contentBody">
          <h1 className="buzz">
            Buzz Buzz Buzz
          </h1>
          <p>
          Lorem ipsum dimsum chim sum Lorem ipsum dimsum chim sumLorem ipsum
            dimsum chim sum Lorem ipsum dimsum chim sum
          </p>
        </div>
      </div>
      <About/>
      <Contact/>
    </div>
  );
}
