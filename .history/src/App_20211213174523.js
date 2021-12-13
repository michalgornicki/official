import React, { useState } from "react";
import { Helmet } from "react-helmet";
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
import menuClose from "./menu-close.png";

AOS.init({
  mirror: true,
  once: false,
  duration: 1000,
});

window.onscroll = () => {
  if (window.pageYOffset < 100) {
    document.getElementsByClassName("navbar")[0].style.height = "10vh";
    document.getElementsByClassName("navbar")[0].style.backgroundColor =
      "rgb(0, 0, 0, 0)";
  } else if (window.pageYOffset > 800) {
    document.getElementsByClassName("navbar")[0].style.height = "7vh";
    document.getElementsByClassName("navbar")[0].style.backgroundColor =
      "rgb(255, 255, 255, 0.7)";
  }

  let scroll = window.scrollY;
  console.log(scroll);
  document.body.style.backgroundColor = "rgb(" + 700000/scroll + "," + 1500000/scroll + "," + 700000/scroll + ")";
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
            <a href="#container4">
              <div
                className="navbar-item"
                onClick={() => setToogleNavbar(false)}
              >
                Services
              </div>
            </a>
            <a href="#container5">
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
      <Contact />

      <Bottombar />
    </div>
  );
}

export default App;
