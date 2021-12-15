import React from "react";
import gmail from "../icons/gmail.png";
import messenger from "../icons/messenger.png";
import facebook from "../icons/facebook.png";
import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";

const Contact = () => {
  return (
    <div id="container5">
      <h2 className="header header-lower">
        Contact
      </h2>
      <div className="contact-wrapper" >
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
    </div>
  );
};

export default Contact;
