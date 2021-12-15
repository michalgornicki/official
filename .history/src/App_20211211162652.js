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

window.onscroll = function () {
  if (window.pageYOffset < 100) {
    document.getElementsByClassName("navbar")[0].style.height = "10vh";
    document.getElementsByClassName("navbar")[0].style.backgroundColor =
      "rgb(0, 0, 0)";
  } else if (window.pageYOffset > 800) {
    document.getElementsByClassName("navbar")[0].style.height = "7vh";
    document.getElementsByClassName("navbar")[0].style.backgroundColor =
      "rgb(0, 0, 0, 0.2)";
  }
};

function App() {
  const [toogleNavbar, setToogleNavbar] = useState(false);
  const [mousePosY, setMousePosY] = useState(0);

  
  const mouseMove = (e) => {
    let X = e.clientX;
    let Y = e.clientY;
    setMousePosX(X + 50);
    setMousePosY(Y/400 + 0.2);
    console.log(mousePosX);
    document.getElementsByClassName("body")[0].style.filter = "brightness(" + mousePosY + ")";
  };

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
          mouseEffect={this.stmouseEffectate}
          cartBackToBasket={this.cartBackToBasket}
          orderAccept={this.orderAccept}


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