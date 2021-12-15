import React from "react";
import design from "../service1.jpg";
import experience from "../icons/experience.png";
import code from "../icons/code.png";

const Services = () => {
  return (
    <div id="container4">
      <h2 className="header header-lower">
        Quality websites
      </h2>
      <div className="service-wrapper">
        <div className="service">
          <div className="service-title"><img className="tech-icon" src={design} alt="" /></div>
          <div className="service-description">
            <div className="service-text">
              Elegant and quality webpages, easy and nice to use.
            </div>{" "}
          </div>
        </div>

        <div className="service">
          <div className="service-title"><img className="tech-icon" src={design} alt="" /></div>
          <div className="service-description">
            <div className="service-text">
              Perfect and faultless user experience for all devices.
            </div>
          </div>
        </div>

        <div className="service">
          <div className="service-title"><img className="tech-icon" src={design} alt="" /></div>
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
