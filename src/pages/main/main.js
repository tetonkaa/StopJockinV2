import "./main.css";
import React from "react";
import { ReactComponent as Location } from "../../icons/location.svg";
import { ReactComponent as Clock } from "../../icons/clock.svg";
import { ReactComponent as Phone } from "../../icons/phone.svg";
import { ReactComponent as Facebook } from "../../icons/facebook.svg";
import { ReactComponent as Instagram } from "../../icons/instagram.svg";
import { ReactComponent as Yelp } from "../../icons/yelp.svg";

export default function Main() {
  return (
    <div className="mainPage">
      <a href="/contact">
        <button className="startButton">Contact</button>
      </a>
      <div className="coverTitle">
        <h1>Add title</h1>
        <p>
          Lorem ipsum dimsum chim sum Lorem ipsum dimsum chim sumLorem ipsum
          dimsum chim sum Lorem ipsum dimsum chim sum
        </p>
      </div>
      <img src="../images/1920.jpg" className="coverImage"></img>
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
            <Facebook/>
            <Instagram/>
            <Yelp/>
          </div>
        </div>
      </div>
    </div>
  );
}
