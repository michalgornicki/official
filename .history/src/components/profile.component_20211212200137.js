import React, { useState } from "react";
import profile from "../2light.png";
import scroll from "../scroll.png";


const Profile = () => {

  const [mousePosX, setMousePosX] = useState(0);
  const [mousePosY, setMousePosY] = useState(0);

  const mouseMove = (e) => {
    let X = e.clientX;
    let Y = e.clientY;
    setMousePosX(X/20);
    setMousePosY(Y/400 + 0.2);
    document.getElementsByClassName("body")[0].style.filter = "brightness(" + mousePosY + ") sepia(" + 8/mousePosX + ")";
    document.getElementsByClassName("profile-photo")[0].style.backgroundPosition =  mousePosX + "%";
    document.getElementsByClassName("large")[0].style.backgroundPosition =  (mousePosX*3) + "%";
  };
  
  return (
    <div id="container1">
            <div className="body" onMouseMove={mouseMove}>
        <div className="part part1"></div>
        <div className="part part2"></div>
        <div className="part part3"></div>
        <div className="part part4"></div>
        <div className="part part5"></div>
      </div>
      <div className="photo-wrapper" onMouseMove={mouseMove}>
      <img className="profile-photo" src={profile} alt="profile" />
      </div>
      <div className="text-wrapper">
        <h2 className="medium">MICHAŁ GÓRNICKI</h2>
        <h1 className="large"><div>Web designer </div>& <div>Front-end developer</div></h1>
        <h3 className="small">
          Self-taught, skilled and pro-active front end developer since 2019. Creating projects from templates or from scratch.{" "}
        </h3>
        <a href="https://drive.google.com/file/d/1oxTkBmsz5aZZnFF8eIvr5btOq1I_P7hc/view?usp=sharing" download><h3 className="small more">Check my CV here. </h3></a>
      </div>

      <a href="#header-projects"><img className="scroll" src={scroll} alt="" /></a>


    </div>
  );
};

export default Profile;