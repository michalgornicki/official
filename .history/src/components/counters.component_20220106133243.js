import React, { useState } from "react";
import hourglass from "../hourglass.png";
import client from "../client.png";
import complete from "../complete.png";

const Counters = () => {

  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
        setScrolled(true);
        counter();
  }
  
  window.onscroll = () => console.log(window.pageYOffset)
  
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
      if (j < 6498) document.getElementById("counter3").innerHTML = ++j;
      else clearInterval(intervDispl);
    }, 1);
  };


  return (
    <div id="container5">
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
