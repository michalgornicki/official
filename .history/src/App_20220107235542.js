import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/profile.component.js";
import Counters from "./components/counters.component.js";
import Projects from "./components/projects.component.js";
import Skills from "./components/skills.component.js";
import Services from "./components/services.component.js";
import Bottombar from "./components/bottombar.component.js";
import menu from "./menu.png";
import menuClose from "./menu-close.png";
import square from "./square.png";

function App() {
  const [toogleNavbar, setToogleNavbar] = useState(false);

  const scrolling = () => {
    console.log("hello")
    let el1 = document.getElementById("container1")
    let el2 = document.getElementById("container1")
    let el3 = document.getElementById("container1")
    let el4 = document.getElementById("container1")
    let el5 = document.getElementById("container1")
    let bottom = el.getBoundingClientRect().bottom
    console.log(bottom)
    if (bottom < 0) {document.getElementsByClassName("scroll-button")[0].style.filter="opacity(0.5)"}
    else if

  }

  window.addEventListener('scroll', scrolling);

  return (
    <div className="App">
      <div
        className="navbar"
        onMouseEnter={() =>
          (document.getElementsByClassName("wallpaper")[0].style.filter =
            "blur(5px)")
        }
      >
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
            <a href="#container2">
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

            <a href="#container4">
              <div
                className="navbar-item"
                onClick={() => setToogleNavbar(false)}
              >
                More
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
      </div>
      <Profile />
      <Counters />
      <Projects />
      <Skills />
      <Services />
      <Bottombar />

      <div className="scroll-container">
        <a href="#container1">
          <img src={square} alt="" className="scroll-button" />
        </a>
        <a href="#container5">
          <img src={square} alt="" className="scroll-button" />
        </a>
        <a href="#container2">
          <img src={square} alt="" className="scroll-button" />
        </a>
        <a href="#container3">
          <img src={square} alt="" className="scroll-button" />
        </a>
        <a href="#container4">
          <img src={square} alt="" className="scroll-button" />
        </a>
      </div>
    </div>
  );
}

export default App;
