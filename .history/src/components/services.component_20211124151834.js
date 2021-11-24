import React from "react";

const Services = () => {
  return (
    <div id="container4" data-aos="fade-up">
      <h2 className="header header-lower" data-aos="fade">
        Services
      </h2>
      <div className="service-wrapper" data-aos="zoom-in">
        <div className="service">
          <div className="service-title"><img className="tech-icon" src={design} alt="" /></div>
          <div className="service-description">
            <div className="service-text">
              Elegant and quality webpages, easy and nice to use.
            </div>{" "}
          </div>
        </div>

        <div className="service">
          <div className="service-title">UI/UX DESIGN</div>
          <div className="service-description">
            <div className="service-text">
              Perfect and faultless user experience for all devices.
            </div>
          </div>
        </div>

        <div className="service">
          <div className="service-title">FRONTEND</div>
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
