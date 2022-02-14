import React from "react";
import square from "../square.png";

const Scrollnav = () => {

  const scrolling = () => {
    let el1 = document.getElementById("container-welcome").getBoundingClientRect().bottom;
    let el2 = document.getElementById("container-projects").getBoundingClientRect().top;
    let el3 = document.getElementById("container-skills").getBoundingClientRect().top;
    let el4 = document.getElementById("container-social").getBoundingClientRect().top;

    if (el1 > 100) {
      document.getElementsByClassName("scroll-button")[0].style.filter = "opacity(1)";

      document.getElementsByClassName("scroll-button")[1].style.filter = "opacity(0.5)";
      document.getElementsByClassName("scroll-button")[2].style.filter = "opacity(0.5)";
      document.getElementsByClassName("scroll-button")[3].style.filter = "opacity(0.5)";
    } else if (el2 < 100 && el3 > 100) {
      document.getElementsByClassName("scroll-button")[0].style.filter = "opacity(0.5)";
      document.getElementsByClassName("scroll-button")[1].style.filter = "opacity(1)";
      document.getElementsByClassName("scroll-button")[2].style.filter = "opacity(0.5)";
      document.getElementsByClassName("scroll-button")[3].style.filter = "opacity(0.5)";
    } else if (el3 < 100 && el4 > 100) {
      document.getElementsByClassName("scroll-button")[0].style.filter = "opacity(0.5)";
      document.getElementsByClassName("scroll-button")[1].style.filter = "opacity(0.5)";
      document.getElementsByClassName("scroll-button")[2].style.filter = "opacity(1)";
      document.getElementsByClassName("scroll-button")[3].style.filter = "opacity(0.5)";
    } else if (el4 < 100) {
      document.getElementsByClassName("scroll-button")[0].style.filter = "opacity(0.5)";
      document.getElementsByClassName("scroll-button")[1].style.filter = "opacity(0.5)";
      document.getElementsByClassName("scroll-button")[2].style.filter = "opacity(0.5)";
      document.getElementsByClassName("scroll-button")[3].style.filter = "opacity(1)";
    }
  };

  window.addEventListener("scroll", scrolling);


  return (
    <section className="container-scroll">
      <a href="#container-welcome">
        <img src={square} alt="" className="container-scroll__button" />
      </a>
      <a href="#container-projects">
        <img src={square} alt="" className="container-scroll__button" />
      </a>
      <a href="#container-skills">
        <img src={square} alt="" className="container-scroll__button" />
      </a>
      <a href="#container-social">
        <img src={square} alt="" className="container-scroll__button" />
      </a>
    </section>
  );
};

export default Scrollnav;
