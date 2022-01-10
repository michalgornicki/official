import React, { useState } from "react";
import menu from "../menu.png";
import menuClose from "../menu-close.png";


const Navbar = () => {

  const [toogleNavbar, setToogleNavbar] = useState(false);


    return(

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
    )
}

export default Navbar;