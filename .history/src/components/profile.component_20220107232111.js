import React from "react";

const Profile = () => {

  window.onscroll = () =>{
    if
  }

  return (
    <div id="container1">
      <div className="wallpaper"onMouseEnter={() => document.getElementsByClassName("wallpaper")[0].style.filter="blur(0px)"}>
        <div className="part part1"></div>
        <div className="part part2"></div>
        <div className="part part3"></div>
        <div className="part part4"></div>
        <div className="part part5"></div>
      </div>

      <div className="text-wrapper" onMouseEnter={() => document.getElementsByClassName("wallpaper")[0].style.filter="blur(5px)"} >
        <h2 className="medium">Michał Górnicki</h2>
        <h1 className="large" onClick={() => document.getElementsByClassName("large")[0].style.filter= "hue-rotate(" + Math.floor(Math.random() * 1000) + "deg)"}>Front-end developer</h1>
        <h3 className="small">Self-taught, skilled, helpful and proactive front-end developer since 2019. Creating projects from templates or from scratch.</h3>
      </div>
    </div>
  );
};

export default Profile;
