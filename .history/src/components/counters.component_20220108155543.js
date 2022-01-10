import React, { useState } from "react";
import hourglass from "../hourglass.png";
import client from "../client.png";
import complete from "../complete.png";

const Counters = () => {

  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    if (document.getElementById("container2").getBoundingClientRect().top < 100) {
      if (scrolled === false) {
        counter();
      }
      setScrolled(true);
    }
  };

  const counter = () => {
    var i = 0;
    var j = 0;
    var k = 0;

    var intervSpeed = setInterval(function () {
      if (i < 3) document.getElementById("counter1").innerHTML = ++i;
      else {
        clearInterval(intervSpeed);
        document.getElementsByClassName("counter-icon")[0].style.filter=
        "drop-shadow(0px 0px 10px rgb(9, 255, 0)) " + "drop-shadow(0px 0px 10px rgb(9, 255, 0)) " + "drop-shadow(0px 0px 10px rgb(9, 255, 0)) "
      };
    }, 1000);

    var intervPower = setInterval(function () {
      if (j < 20) document.getElementById("counter2").innerHTML = ++j + "+";
      else {clearInterval(intervPower);
      }
    }, 200);

    var intervDispl = setInterval(function () {
      if (k < 2369) document.getElementById("counter3").innerHTML = ++k + "+";
      else {clearInterval(intervDispl);
      }
    }, 1);
  };

  return (
    <div id="container2">
      <div className="counter-container d-flex flex-lg-row flex-column justify-content-evenly w-50 m-auto text-center text-white display-6">
        <div className="d-flex flex-column my-3">
          <div>
            <img className="counter-icon w-lg-50 w-25" src={client} alt="" />
          </div>
          <div id="counter1">0</div>
          <div>happy clients</div>
        </div>
        <div className="d-flex flex-column my-3">
          <div>
            <img className="counter-icon w-lg-50 w-25" src={complete} alt="" />
          </div>
          <div id="counter2">0</div>
          <div>projects done</div>
        </div>
        <div className="d-flex flex-column my-3">
          <div>
            <img className="counter-icon w-lg-50 w-25" src={hourglass} alt="" />
          </div>
          <div id="counter3">0</div>
          <div>hours spent</div>
        </div>
      </div>
    </div>
  );
};

export default Counters;
