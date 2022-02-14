import React from "react";
import gmail from "../icons/gmail.png";
import messenger from "../icons/messenger.png";
import facebook from "../icons/facebook.png";
import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";

const Bottombar = () => {
  return (
    <nav className="bottom-bar">
      <div className="bottom-bar__contact-wrapper">
        <div className="bottom-bar__contact-item">
          {" "}
          <a href="mailto:gornickimichal@gmail.com">
            <img className="bottom-bar__image" src={gmail} alt="" />
          </a>
        </div>
        <div className="bottom-bar__contact-item">
          {" "}
          <a href="https://m.me/micgornicki">
            <img className="bottom-bar__image" src={messenger} alt="" />
          </a>
        </div>
        <div className="bottom-bar__contact-item">
          {" "}
          <a href="https://www.facebook.com/micgornicki">
            <img className="bottom-bar__image" src={facebook} alt="" />
          </a>
        </div>
        <div className="bottom-bar__contact-item">
          {" "}
          <a href="https://github.com/michalgornicki">
            <img className="bottom-bar__image" src={github} alt="" />
          </a>
        </div>

        <div className="bottom-bar__contact-item">
          {" "}
          <a href="https://www.linkedin.com/in/michal-gornicki/">
            <img className="bottom-bar__image" src={linkedin} alt="" />
          </a>
        </div>
      </div>

      <h2 className="bottom-bar__text-item">phone: 662-047-277</h2>
      <a href="mailto:gornickimichal@gmail.com">
        <h2 className="bottom-bar__text-item">e-mail: gornickimichal@gmail.com</h2>
      </a>
      <h2 className="bottom-bar__text-item">
        Designed and built by <span className="text-green">Michał Górnicki</span>
      </h2>
    </nav>
  );
};

export default Bottombar;
