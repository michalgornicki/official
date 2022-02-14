import React from "react";
import Twitter from "../twitter.png";
import Devto from "../devto.png";

const Social = () => {
  return (
    <section id="container-social" className="section">
      <div className="section__header">Visit my microblog and blog</div>
      <div className="d-flex flex-column flex-lg-row m-auto w-75 pt-5">
        <div className="w-50 wm-100">
          <a href="https://twitter.com/Michal_FrontEnd">
            <img className="container-social_item" src={Twitter} alt="" />
          </a>
        </div>
        <div className="w-50 wm-100">
          <a href="https://dev.to/michalgornicki">
            <img className="twitter" src={Devto} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Social;
