import React, { useState } from "react";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./App.css";
import "./App.css";

import Profile from "./components/profile.component.js";
import Projects from "./components/projects.component.js";
import Skills from "./components/skills.component.js";
import Services from "./components/services.component.js";
import Bottombar from "./components/bottombar.component.js";
import menu from "./menu.png";
import menuClose from "./menu-close.png";


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

  let scroll = window.screen.availWidth > 800 ? window.scrollY/2 : 0;
  document.body.style.backgroundPositionY = scroll/75 + "%";


};

function App() {
  const [toogleNavbar, setToogleNavbar] = useState(false);

  return (
    <div className="App">
              <Helmet>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
          />
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
      </div>
      <Profile 
      />
      <Projects />
      <Skills />
      <Services />
      <Bottombar />
    </div>
  );
}

export default App;
