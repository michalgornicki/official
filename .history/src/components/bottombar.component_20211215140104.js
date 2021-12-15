import React from "react";

const Bottombar = () => {
  return (
    <div className="bottom-bar">
      <h2 className="bottom-bar-text">© 2021 Developed by Michał Górnicki.</h2>

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

export default Bottombar;
