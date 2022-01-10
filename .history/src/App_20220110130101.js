import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/profile.component.js";
import Counters from "./components/counters.component.js";
import Projects from "./components/projects.component.js";
import Skills from "./components/skills.component.js";
import Services from "./components/services.component.js";
import Bottombar from "./components/bottombar.component.js";
import Scrollnav from "./components/bottombar.component.js";
import menu from "./menu.png";
import menuClose from "./menu-close.png";

function App() {
  useEffect(() => {
    document.title = "micdev/official";
  }, []);

  const [toogleNavbar, setToogleNavbar] = useState(false);

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
            <a href="#container3">
              <div
                className="navbar-item"
                onClick={() => setToogleNavbar(false)}
              >
                Projects
              </div>
            </a>
            <a href="#container4">
              <div
                className="navbar-item"
                onClick={() => setToogleNavbar(false)}
              >
                Skills
              </div>
            </a>

            <a href="#container5">
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
    </div>
  );
}

export default App;
