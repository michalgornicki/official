import React, { useState } from "react";

const Counters = () => {
  return (
    <div id="container5">
      <div className="counter-container d-flex justify-content-evenly w-50 m-auto h-100">
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
          <div>happy clients</div>
          <div>hours spent</div>
        </div>
      </div>
    </div>
  );
};

export default Counters;
