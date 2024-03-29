import React from "react";
import square from "../square.png";

const Scrollnav = () => {

  const scrolling = () => {
    let el1 = document.getElementById("container1").getBoundingClientRect().bottom;
    let el2 = document.getElementById("container3").getBoundingClientRect().top;
    let el3 = document.getElementById("container4").getBoundingClientRect().top;
    let el4 = document.getElementById("container6").getBoundingClientRect().top;

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
    <section className="scroll-container">
      <a href="#container1">
        <img src={square} alt="" className="scroll-button" />
      </a>
      <a href="#container3">
        <img src={square} alt="" className="scroll-button" />
      </a>
      <a href="#container4">
        <img src={square} alt="" className="scroll-button" />
      </a>
      <a href="#container6">
        <img src={square} alt="" className="scroll-button" />
      </a>
    </div>
  );
};

export default Scrollnav;
