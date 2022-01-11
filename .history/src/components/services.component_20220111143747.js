import React from "react";
import design from "../icons/design.png";
import experience from "../icons/experience.png";
import code from "../icons/code.png";

const Services = () => {

  const scrolling = () => {
    if (document.getElementById("container5").getBoundingClientRect().top < 300) {
     document.getElementsByClassName("service-wrapper")[0].style.transform="translateY(0%)";
     document.getElementsByClassName("service-wrapper")[0].style.filter="opacity(1)";
  }
   else {document.getElementsByClassName("service-wrapper")[0].style.transform="translateY(50%)";
        document.getElementsByClassName("service-wrapper")[0].style.filter="opacity(0)";}
}

window.addEventListener('scroll', scrolling);


  return (
    <div id="container5">
      <h2 className="header header-lower">About my co</h2>
      <div className="service-wrapper">
        <div
          className="service"
          
          
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
