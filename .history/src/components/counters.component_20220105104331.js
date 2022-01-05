import React, { useState } from "react";
import hourglass from "../hourglass.png";
import client from "../client.png";
import complete from "../complete.png";

const Counters = () => {
  const [scrolled, setScrolled] = useState(false);


        counter();
        window.onload = 

  const counter = () => {
    var i = 0;
    var j = 0;
    var k = 0;

    var intervSpeed = setInterval(function () {
      if (i < 5) document.getElementById("counter1").innerHTML = ++i;
      else clearInterval(intervSpeed);
    }, 15);

    var intervPower = setInterval(function () {
      if (k < 20) document.getElementById("counter2").innerHTML = ++k;
      else clearInterval(intervPower);
    }, 5);

    var intervDispl = setInterval(function () {
      if (j < 2367) document.getElementById("counter3").innerHTML = ++j;
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
