import React from "react";
import gmail from "../icons/gmail.png";
import messenger from "../icons/messenger.png";
import facebook from "../icons/facebook.png";
import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";

const Bottombar = () => {
  return (
    <nav className="bottom-bar">
      <div className="contact-wrapper" id="contact-wrapper">
        <div className="contact">
          {" "}
          <a href="mailto:gornickimichal@gmail.com">
            <img className="contact-icon" src={gmail} alt="" />
          </a>
        </div>
        <div className="contact">
          {" "}
          <a href="https://m.me/micgornicki">
            <img className="contact-icon" src={messenger} alt="" />
          </a>
        </div>
        <div className="contact">
          {" "}
          <a href="https://www.facebook.com/micgornicki">
            <img className="contact-icon" src={facebook} alt="" />
          </a>
        </div>
        <div className="contact">
          {" "}
          <a href="https://github.com/michalgornicki">
            <img className="contact-icon" src={github} alt="" />
          </a>
        </div>

        <div className="contact">
          {" "}
          <a href="https://www.linkedin.com/in/michal-gornicki/">
            <img className="contact-icon" src={linkedin} alt="" />
          </a>
        </div>

      <h2 className="bottom-bar-text">phone: 662-047-277</h2>
      <a href="mailto:gornickimichal@gmail.com">
        <h2 className="bottom-bar-text">e-mail: gornickimichal@gmail.com</h2>
      </a>
      <h2 className="bottom-bar-text">
        Designed and built by <span className="text-green">Michał Górnicki</span>
      </h2>
    </nav>
  );
};

export default Bottombar;
