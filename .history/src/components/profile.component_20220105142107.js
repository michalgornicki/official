import React, { useState } from "react";
import Typewriter from 'typewriter-effect/dist/core';


const Profile = () => {

  const [mousePosY, setMousePosY] = useState(0);

  const mouseMove = (e) => {
    let X = e.clientX;
    let Y = e.clientY;
    setMousePosY(Y);
    document.getElementsByClassName("wallpaper")[0].style.filter = "brightness(" + parseFloat(mousePosY/1200 + 0.7) + ")";
  };

  new Typewriter('#typewriter', {
    strings: ['Hello', 'World'],
    autoStart: true,
  });

  return (
    <div id="container1">
            <div className="wallpaper"  onMouseMove={mouseMove}>
        <div className="part part1"></div>
        <div className="part part2"></div>
        <div className="part part3"></div>
        <div className="part part4"></div>
        <div className="part part5"></div>
      </div>
      
      <div className="text-wrapper" onMouseMove={mouseMove}>
        <h2 className="medium">Michał Górnicki</h2>
        <h1 className="large">Front-end developer</h1>
        <h3 className="small" id="small">
          Self-taught, skilled, helpful and pro-active front end developer since 2019. Creating projects from templates or from scratch.{" "}
        </h3>
      </div>

    </div>
  );
};

export default Profile;
