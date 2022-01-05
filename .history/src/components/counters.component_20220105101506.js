import React, { useState } from "react";
import hourglass from "./hourglass.png"
import hourglass from "./hourglass.png"
import hourglass from "./hourglass.png"

const Counters = () => {
  return (
    <div id="container5">
      <div className="counter-container d-flex justify-content-evenly w-50 m-auto h-100 text-center text-white display-6">
        <div className="d-flex flex-column">
          <div>happy clients</div>
          <div>0</div>
          <div>happy clients</div>
        </div>
        <div className="d-flex flex-column">
          <div>happy clients</div>
          <div>0</div>
          <div>projects done</div>
        </div>
        <div className="d-flex flex-column">
          <div>happy clients</div>
          <div>0</div>
          <div>hours spent</div>
        </div>
      </div>
    </div>
  );
};

export default Counters;
