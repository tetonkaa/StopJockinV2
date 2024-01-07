import "./main.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import About from "../../components/about/about";
import Gallery from "../../components/gallery/gallery";
import Contact from "../../pages/contact/contact";
import { ReactComponent as Location } from "../../icons/location.svg";
import { ReactComponent as Clock } from "../../icons/clock.svg";
import { ReactComponent as Phone } from "../../icons/phone.svg";
import { ReactComponent as Facebook } from "../../icons/facebook.svg";
import { ReactComponent as Instagram } from "../../icons/instagram.svg";
import { ReactComponent as Yelp } from "../../icons/yelp.svg";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import Content from '../../data/content.json'

export default function Main() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/contact");
  }

  return (
    <div className="mainPage">
      <div className="mainPageContainer" id="home">
        <div className="coverTitle">
          <h1>StopJockin</h1>
          <p>{Content.slogan}</p>
          <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                aria-current="page"
              >
          <button className="startButton">
            Contact
          </button>
          </Link>
        </div>
        <div className="contentContainer">
          <div className="contentField">
            <div className="contentItem">
              <a href="https://maps.app.goo.gl/rumXfn25Qrih32gXA">
                <Location />
              </a>
              <h1>Address</h1>
              <a>3600 Jumonville Street, 70112</a>
            </div>
            <div className="contentItem locationSvgs">
              <Clock />
              <h1>Hours</h1>
              <a>Tuesday-Saturday: 9am - 6pm</a>
              <a>Sunday: Closed</a>
            </div>
            <div className="contentItem">
              <Phone />
              <h1>Call</h1>
              <a href="tel:+15046137996" tel="+15046137996">
                (504) 613-7996
              </a>
            </div>
          </div>
          <div className="contentField">
            <div className="contentItem">
              <a href="https://www.facebook.com/stopjockinsnoball">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/stopjockinsnoballs/">
                <Instagram />
              </a>
              <a href="https://www.yelp.com/biz/stop-jockin-barbershop-new-orleans">
                <Yelp />
              </a>
            </div>
          </div>
        </div>
        <div className="contentBody">
          <h1 className="buzz">{Content.flairText}</h1>
          <p>
            {Content.flairSubText}
          </p>
        </div>
      </div>
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}
