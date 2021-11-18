import React, { useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import Profile from "./components/profile.component.js";
import Projects from "./components/projects.component.js";
import Skills from "./components/skills.component.js";
import Services from "./components/services.component.js";
import Contact from "./components/contact.component.js";
import Bottombar from "./components/bottombar.component.js";
import menu from "./menu.png";


AOS.init({
  mirror: true,
  once: false,
  duration: 1000,
});

var prevPosition = window.pageYOffset;
window.onscroll = function () {
  var currentPosition = window.pageYOffset;
  if (prevPosition > currentPosition) {
    document.getElementsByClassName("navbar")[0].style.top = "0";
  } else if (window.pageYOffset > 800) {
    document.getElementsByClassName("navbar")[0].style.top = "-80px";
  }
  prevPosition = currentPosition;
};

function App() {

  const [toogleNavbar, setToogleNavbar] = useState(true);

  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar-items">
          <a href="#container1">
            <div className="navbar-item">Home</div>
          </a>
          <a href="#container2">
            <div className="navbar-item">Projects</div>
          </a>
          <a href="#container3">
            <div className="navbar-item">Skills</div>
          </a>
          <a href="#container4">
            <div className="navbar-item">Services</div>
          </a>
          <a href="#container5">
            <div className="navbar-item">Contact</div>
          </a>
        </div>
        <img className="navbar-icon" src={menu} alt="" />
      </div>
      <Profile />
      <Projects />
      <Skills />
      <Services />
      <Contact />

      <Bottombar />
    </div>
  );
}

export default App;
