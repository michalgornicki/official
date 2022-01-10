import React from "react";
import square from "../square.png";


const Scrollnav = () => {

    const scrolling = () => {
        let el1 = document
          .getElementById("container1")
          .getBoundingClientRect().bottom;
        let el2 = document
          .getElementById("container2")
          .getBoundingClientRect().bottom;
        let el3 = document
          .getElementById("container3")
          .getBoundingClientRect().bottom;
        let el4 = document
          .getElementById("container4")
          .getBoundingClientRect().bottom;
        let el5 = document
          .getElementById("container5")
          .getBoundingClientRect().bottom;
        if (el1 > 100) {
          document.getElementsByClassName("scroll-button")[0].style.filter =
            "opacity(1)";

          document.getElementsByClassName("scroll-button")[1].style.filter =
            "opacity(0.5)";
          document.getElementsByClassName("scroll-button")[2].style.filter =
            "opacity(0.5)";
          document.getElementsByClassName("scroll-button")[4].style.filter =
            "opacity(0.5)";
        } 
        else if (el2 < 100 && el3 > 100) {
          document.getElementsByClassName("scroll-button")[0].style.filter =
            "opacity(0.5)";
          document.getElementsByClassName("scroll-button")[2].style.filter =
            "opacity(1)";
          document.getElementsByClassName("scroll-button")[3].style.filter =
            "opacity(0.5)";
          document.getElementsByClassName("scroll-button")[4].style.filter =
            "opacity(0.5)";
        } else if (el3 < 100 && el4 > 100) {
          document.getElementsByClassName("scroll-button")[0].style.filter =
            "opacity(0.5)";
          document.getElementsByClassName("scroll-button")[2].style.filter =
            "opacity(0.5)";
          document.getElementsByClassName("scroll-button")[3].style.filter =
            "opacity(1)";
          document.getElementsByClassName("scroll-button")[4].style.filter =
            "opacity(0.5)";
        } else if (el4 < 100 && el5 > 100) {
          document.getElementsByClassName("scroll-button")[0].style.filter =
            "opacity(0.5)";
          document.getElementsByClassName("scroll-button")[2].style.filter =
            "opacity(0.5)";
          document.getElementsByClassName("scroll-button")[3].style.filter =
            "opacity(0.5)";
          document.getElementsByClassName("scroll-button")[4].style.filter =
            "opacity(1)";
        }
      };
    
      window.addEventListener("scroll", scrolling);

    return(

        <div className="scroll-container">
        <a href="#container1">
          <img src={square} alt="" className="scroll-button" />
        </a>
        <a href="#container3">
          <img src={square} alt="" className="scroll-button" />
        </a>
        <a href="#container4">
          <img src={square} alt="" className="scroll-button" />
        </a>
        <a href="#container5">
          <img src={square} alt="" className="scroll-button" />
        </a>
      </div>
    )
}

export default Scrollnav;