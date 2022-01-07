import React, { useState } from "react";

const Profile = () => {
  const [mousePosY, setMousePosY] = useState(0);

  const mouseMove = (e) => {
    let Y = e.clientY;
    setMousePosY(Y);
    document.getElementsByClassName("wallpaper")[0].style.filter =
      "brightness(" + parseFloat(mousePosY / 1200 + 0.7) + ")";
  };

  
    var text =
      "Self-taught, skilled, helpful and pro-active front end developer since 2019. Creating projects from templates or from scratch.";
    var i = 0;
    typewriter();
    function typewriter() {
      if (i < text.length) {
        document.getElementsByClassName("small")[0].innerHTML += text.charAt(i);
        i++;
        setTimeout(typewriter, 50);
      }
    }
  };

  return (
    <div id="container1">
      <div className="wallpaper" onMouseMove={mouseMove}>
        <div className="part part1"></div>
        <div className="part part2"></div>
        <div className="part part3"></div>
        <div className="part part4"></div>
        <div className="part part5"></div>
      </div>

      <div className="text-wrapper" onMouseMove={mouseMove}>
        <h2 className="medium">Michał Górnicki</h2>
        <h1 className="large">Front-end developer</h1>
        <h3 className="small"> </h3>
      </div>
    </div>
  );
};

export default Profile;