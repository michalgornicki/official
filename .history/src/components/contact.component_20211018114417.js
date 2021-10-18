import React from "react";

const Contact = () => {
  return (
    <div id="container5">
      <h2 className="header header-lower" data-aos="fade">
        Contact
      </h2>
      <div className="contact-wrapper" data-aos="zoom-out">
        <div className="contact">
          {" "}
          <a href="mailto:gornickimichal@gmail.com">Gmail</a>
        </div>
        <div className="contact contact-right">
          {" "}
          <a href="m.me/micgornicki">Messenger</a>
        </div>
        <div className="contact">
          {" "}
          <a href="https://www.facebook.com/micgornicki">Facebook</a>
        </div>
        <div className="contact contact-right">
          {" "}
          <a href="https://github.com/michalgornicki">Github</a>
        </div>

        <div className="contact contact-right">
          {" "}
          <a href="https://www.linkedin.com/in/michal-gornicki/">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
