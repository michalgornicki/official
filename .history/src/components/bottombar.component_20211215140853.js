import React from "react";
import gmail from "../icons/gmail.png";
import messenger from "../icons/messenger.png";
import facebook from "../icons/facebook.png";
import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";

const Bottombar = () => {
  return (
    <div className="bottom-bar">

      <div className="contact-wrapper" id="contact-wrapper">
        <div className="contact">
          {" "}
          <a href="mailto:gornickimichal@gmail.com"><img className="contact-icon" src={gmail} alt="" /></a>
        </div>
        <div className="contact">
          {" "}
          <a href="https://m.me/micgornicki"><img className="contact-icon" src={messenger} alt="" /></a>
        </div>
        <div className="contact">
          {" "}
          <a href="https://www.facebook.com/micgornicki"><img className="contact-icon" src={facebook} alt="" /></a>
        </div>
        <div className="contact">
          {" "}
          <a href="https://github.com/michalgornicki"><img className="contact-icon" src={github} alt="" /></a>
        </div>

        <div className="contact">
          {" "}
          <a href="https://www.linkedin.com/in/michal-gornicki/"><img className="contact-icon" src={linkedin} alt="" /></a>
        </div>
      </div>

      <h2 className="bottom-bar-text">telefon: 662-047-277</h2>
      <h2 className="bottom-bar-text">e-mail: gornickimichal@gmail.com</h2>
      <h2 className="bottom-bar-text">© 2021 Developed by Michał Górnicki.</h2>

    </div>
  );
};

export default Bottombar;
