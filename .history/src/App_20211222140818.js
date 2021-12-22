import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/profile.component.js";
import Projects from "./components/projects.component.js";
import Skills from "./components/skills.component.js";
import Services from "./components/services.component.js";
import Bottombar from "./components/bottombar.component.js";
import menu from "./menu.png";
import menuClose from "./menu-close.png";
import square from "./square.png";



function App() {

  const [toogleNavbar, setToogleNavbar] = useState(false);


  window.onscroll = () => {
    if (window.pageYOffset < 100) {
      document.getElementsByClassName("navbar")[0].style.height = "8vh";
      document.getElementsByClassName("navbar")[0].style.backgroundColor =
        "rgba(0, 0, 0, 1)";
    } else if (window.pageYOffset > 800) {
      document.getElementsByClassName("navbar")[0].style.height = "5vh";
      document.getElementsByClassName("navbar")[0].style.backgroundColor =
        "rgba(0, 0, 0, 0.5)";
    }
  
    let scroll = window.screen.availWidth > 800 ? window.scrollY / 2 : 0;
    document.body.style.backgroundPositionY = scroll / 75 + "%";


    console.log(window.pageYOffset)

    if (window.pageYOffset < 700) {
      document.getElementsByClassName("scroll-button")[0].style.transform="scale(1.2)"
      document.getElementsByClassName("scroll-button")[1].style.transform="scale(1)"
      document.getElementsByClassName("scroll-button")[2].style.transform="scale(1)"
      document.getElementsByClassName("scroll-button")[3].style.transform="scale(1)"

    }
    else if (window.pageYOffset > 700 && window.pageYOffset < 1500) {
      document.getElementsByClassName("scroll-button")[0].style.transform="scale(1)"
      document.getElementsByClassName("scroll-button")[1].style.transform="scale(1.2)"
    }
    else if (window.pageYOffset > 1500 && window.pageYOffset < 2150) {
      document.getElementsByClassName("scroll-button")[0].style.transform="scale(1)"
      document.getElementsByClassName("scroll-button")[1].style.transform="scale(1)"
      document.getElementsByClassName("scroll-button")[2].style.transform="scale(1.2)"
      document.getElementsByClassName("scroll-button")[3].style.transform="scale(1)"
    }
    else if (window.pageYOffset > 2150) {
      document.getElementsByClassName("scroll-button")[0].style.transform="scale(1)"
      document.getElementsByClassName("scroll-button")[1].style.transform="scale(1)"
      document.getElementsByClassName("scroll-button")[2].style.transform="scale(1)"
      document.getElementsByClassName("scroll-button")[3].style.transform="scale(1.2)"
    }

  };


  return (
    <div className="App">
      <Helmet>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <title>Michał Górnicki - official website</title>
      </Helmet>

      <div className="navbar">
        {toogleNavbar || window.innerWidth > 800 ? (
          <div className="navbar-items">
            <a href="#top">
              <div
                className="navbar-item"
                onClick={() => setToogleNavbar(false)}
              >
                Home
              </div>
            </a>
            <a href="#header-projects">
              <div
                className="navbar-item"
                onClick={() => setToogleNavbar(false)}
              >
                Projects
              </div>
            </a>
            <a href="#container3">
              <div
                className="navbar-item"
                onClick={() => setToogleNavbar(false)}
              >
                Skills
              </div>
            </a>

            <a href="#contact-wrapper">
              <div
                className="navbar-item"
                onClick={() => setToogleNavbar(false)}
              >
                Contact
              </div>
            </a>
          </div>
        ) : (
          ""
        )}
        {toogleNavbar ? (
          <img
            className="navbar-icon"
            src={menuClose}
            onClick={() => setToogleNavbar(false)}
            alt=""
          />
        ) : (
          <img
            className="navbar-icon"
            src={menu}
            onClick={() => setToogleNavbar(true)}
            alt=""
          />
        )}

        <div className="scroll-container">
          <a href="#container1"><img src={square} alt="" className="scroll-button"/></a>
          <a href="#container2"><img src={square} alt=""  className="scroll-button"/></a>
          <a href="#container3"><img src={square} alt=""  className="scroll-button"/></a>
          <a href="#container4"><img src={square} alt=""  className="scroll-button"/></a>
        </div>
      </div>
      <Profile />
      <Projects />
      <Skills />
      <Services />
      <Bottombar />


    </div>
  );
}

export default App;
