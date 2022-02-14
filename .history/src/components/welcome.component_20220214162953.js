import React from "react";

const Welcome = () => {


  window.addEventListener("scroll", scrolling);
  window.addEventListener("load", scrolling);

  return (
    <section id="container-welcome" className="section">
      <div className="name-wrapper">
        <h2 className="name-wrapper__medium">Hi, I'm Michal</h2>
        <h1 className="name-wrapper__large">Front-end developer</h1>
        <h3 className="name-wrapper__small">I'm self-taught, skilled, helpful and proactive front-end developer since 2019. I create projects from templates or from scratch.</h3>
      </div>
    </section>
  );
};

export default Welcome;
