import React, { useState } from "react";
import hourglass from "../hourglass.png";
import client from "../client.png";
import complete from "../complete.png";

const Counters = () => {
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = console.log(scrolled);

  if (scrolled === false) {
    window.onscroll = () => {
      if (window.pageYOffset > 1350) {
        document.getElementById("car-container").className += " " + "car-move";
        document.getElementById("wheel1").className += " " + "wheel-move";
        document.getElementById("wheel2").className += " " + "wheel-move";
        setScrolled(true);
        counter();
      }
    };
  }

  const counter = () => {
    var i = 0;
    var j = 5800;

    var intervSpeed = setInterval(function () {
      if (i < 355) document.getElementById("counter1").innerHTML = ++i;
      else clearInterval(intervSpeed);
    }, 15);

    var intervPower = setInterval(function () {
      if (i < 780) document.getElementById("counter2").innerHTML = ++i;
      else clearInterval(intervPower);
    }, 5);

    var intervDispl = setInterval(function () {
      if (j < 6498) document.getElementById("counter1").innerHTML = ++j;
      else clearInterval(intervDispl);
    }, 1);
  };

  return (
    <div id="container5">
      <div className="counter-container d-flex justify-content-evenly w-50 m-auto h-100 text-center text-white display-6">
        <div className="d-flex flex-column">
          <div>
            <img className="w-50" src={client} alt="" />
          </div>
          <div id="counter1">0</div>
          <div>happy clients</div>
        </div>
        <div className="d-flex flex-column">
          <div>
            <img className="w-50" src={complete} alt="" />
          </div>
          <div id="counter2">0</div>
          <div>projects done</div>
        </div>
        <div className="d-flex flex-column">
          <div>
            <img className="w-50" src={hourglass} alt="" />
          </div>
          <div id="counter3">0</div>
          <div>hours spent</div>
        </div>
      </div>
    </div>
  );
};

export default Counters;
