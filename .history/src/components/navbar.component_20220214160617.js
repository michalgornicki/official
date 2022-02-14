import React, { useState } from "react";
import menu from "../menu.png";
import menuClose from "../menu-close.png";

const Navbar = () => {
  const [toogleNavbar, setToogleNavbar] = useState(false);

  return (
    <nav className="navbar">
      {toogleNavbar || window.innerWidth > 800 ? (
        <div className="navbar__items">
          <a href="#top">
            <div className="navbar__link" onClick={() => setToogleNavbar(false)}>
              Home
            </div>
          </a>
          <a href="#container-projects">
            <div className="navbar__link" onClick={() => setToogleNavbar(false)}>
              Projects
            </div>
          </a>
          <a href="#container-skills">
            <div className="navbar__link" onClick={() => setToogleNavbar(false)}>
              Skills
            </div>
          </a>

          <a href="#container-social">
            <div className="navbar__link" onClick={() => setToogleNavbar(false)}>
              Social
            </div>
          </a>
        </div>
      ) : (
        ""
      )}

      {toogleNavbar ? (
        <img className="navbar-icon" src={menuClose} onClick={() => setToogleNavbar(false)} alt="" />
      ) : (
        <img className="navbar-icon" src={menu} onClick={() => setToogleNavbar(true)} alt="" />
      )}
    </nav>
  );
};

export default Navbar;
