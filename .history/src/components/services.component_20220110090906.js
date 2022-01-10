import React from "react";
import design from "../icons/design.png";
import experience from "../icons/experience.png";
import code from "../icons/code.png";

const Services = () => {

  const Skills = () => {

    const scrolling = () => {
      if (document.getElementById("container5").getBoundingClientRect().top < 200) {
       document.getElementsByClassName("service-wrapper")[0].style.transform="translateY(0%)";
    }
     else {document.getElementsByClassName("service-wrapper")[0].style.transform="translateY(50%)";}
  }
  
  window.addEventListener('scroll', scrolling);

  return (
    <div id="container5">
      <h2 className="header header-lower">Quality websites</h2>
      <div className="service-wrapper">
        <div
          className="service"
          onMouseEnter={() => {
              document.getElementsByClassName("service")[0].style.filter =
              "brightness(1)";
            document.getElementsByClassName("service")[1].style.filter =
              "brightness(0.2)";
            document.getElementsByClassName("service")[2].style.filter =
              "brightness(0.2)";
          }}
          onMouseLeave={() => {
            document.getElementsByClassName("service")[0].style.filter =
              "brightness(1)";
              document.getElementsByClassName("service")[1].style.filter =
              "brightness(1)";
            document.getElementsByClassName("service")[2].style.filter =
              "brightness(1)";}}
        >
          <div className="service-title">
            <img className="service-icon" src={design} alt="" />
          </div>
          <div className="service-description">
            <div className="service-text">
              Elegant and quality webpages, easy and nice to use.
            </div>{" "}
          </div>
        </div>

        <div
          className="service"
          onMouseEnter={() => {
            document.getElementsByClassName("service")[0].style.filter =
              "brightness(0.2)";
              document.getElementsByClassName("service")[1].style.filter =
              "brightness(1)";
            document.getElementsByClassName("service")[2].style.filter =
              "brightness(0.2)";
          }}
          onMouseLeave={() => {
            document.getElementsByClassName("service")[0].style.filter =
              "brightness(1)";
              document.getElementsByClassName("service")[1].style.filter =
              "brightness(1)";
            document.getElementsByClassName("service")[2].style.filter =
              "brightness(1)";}}
        >
          <div className="service-title">
            <img className="service-icon" src={experience} alt="" />
          </div>
          <div className="service-description">
            <div className="service-text">
              Perfect and faultless user experience for all devices.
            </div>
          </div>
        </div>

        <div
          className="service"
          onMouseEnter={() => {
            document.getElementsByClassName("service")[0].style.filter =
              "brightness(0.2)";
            document.getElementsByClassName("service")[1].style.filter =
              "brightness(0.2)";
              document.getElementsByClassName("service")[2].style.filter =
              "brightness(1)";
          }}
          onMouseLeave={() => {
            document.getElementsByClassName("service")[0].style.filter =
              "brightness(1)";
              document.getElementsByClassName("service")[1].style.filter =
              "brightness(1)";
            document.getElementsByClassName("service")[2].style.filter =
              "brightness(1)";}}
        >
          <div className="service-title">
            <img className="service-icon" src={code} alt="" />
          </div>
          <div className="service-description">
            <div className="service-text">
              Clean and simple high-standard frontend code.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
