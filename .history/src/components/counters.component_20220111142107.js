import React from "react";
import hourglass from "../hourglass.png";
import client from "../client.png";
import complete from "../complete.png";

const Counters = () => {


  const scrolling = () => {
    if (document.getElementById("container2").getBoundingClientRect().top < 400) {
      counter();
    window.removeEventListener('scroll', scrolling);
    }

  };

  const containerShow = () => {
    if (document.getElementById("container2").getBoundingClientRect().top < 400) {
      document.getElementById("container2").style.filter="opacity(1)"
    }
    else {
    document.getElementById("container2").style.filter="opacity(0)";
    }
  };

  window.addEventListener('scroll', scrolling);
  window.addEventListener('scroll', containerShow);

  const counter = () => {
    var j = 0;
    var k = 0;

    var intervSpeed = setInterval(function () {

    var intervPower = setInterval(function () {
      if (j < 20) document.getElementById("counter2").innerHTML = ++j + "+";
      else {clearInterval(intervPower);
        document.getElementsByClassName("counter-icon")[1].style.filter=
        "drop-shadow(0px 0px 10px rgb(9, 255, 0)) drop-shadow(0px 0px 10px rgb(9, 255, 0)) drop-shadow(0px 0px 10px rgb(9, 255, 0))"
      }
    }, 300);

    var intervDispl = setInterval(function () {
      if (k < 2369) document.getElementById("counter3").innerHTML = ++k + "+";
      else {clearInterval(intervDispl);
        document.getElementsByClassName("counter-icon")[2].style.filter=
        "drop-shadow(0px 0px 10px rgb(9, 255, 0)) drop-shadow(0px 0px 10px rgb(9, 255, 0)) drop-shadow(0px 0px 10px rgb(9, 255, 0))"
      }
    }, 1);
  }

  return (
    <div id="container2">
      <div className="counter-container d-flex flex-lg-row flex-column justify-content-evenly w-50 m-auto text-center text-white display-6">

        <div className="d-flex flex-column my-3">
          <div>
            <img className="counter-icon w-25" src={complete} alt="" />
          </div>
          <div id="counter2">0</div>
          <div>projects done</div>
        </div>
        <div className="d-flex flex-column my-3">
          <div>
            <img className="counter-icon w-25" src={hourglass} alt="" />
          </div>
          <div id="counter3">0</div>
          <div>hours spent</div>
        </div>
      </div>
    </div>
  );
};

export default Counters;
