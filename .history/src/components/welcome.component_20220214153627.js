import React from "react";

const Welcome = () => {
  const scrolling = () => {
    let el = document.getElementsByClassName("large")[0];
    let top = el.getBoundingClientRect().top;
    if (window.innerWidth > 800 && document.getElementById("container1").getBoundingClientRect().bottom > 500) {
      document.getElementsByClassName("large")[0].style.transform = "translate(" + (top / 20 - 17) + "%)";
      document.getElementsByClassName("medium")[0].style.transform = "translate(" + (-top / 20 + 17) + "%)";
      document.getElementsByClassName("small")[0].style.transform = "translate(" + (-top / 20 + 17) + "%)";
    } else if (window.innerWidth < 800 && document.getElementById("container1").getBoundingClientRect().bottom > 500) {
      document.getElementsByClassName("large")[0].style.transform = "translate(" + (top / 20 - 12) + "%)";
      document.getElementsByClassName("medium")[0].style.transform = "translate(" + (-top / 20 + 12) + "%)";
      document.getElementsByClassName("small")[0].style.transform = "translate(" + (-top / 20 + 12) + "%)";
    }
  };

  window.addEventListener("scroll", scrolling);
  window.addEventListener("load", scrolling);

  return (
    <section id="container1">
      <div className="name-wrapper">
        <h2 className="name-wrapper_medium">Hi, I'm Michal</h2>
        <h1
          className="large"
        >
          Front-end developer
        </h1>
        <h3 className="small">
          I'm self-taught, skilled, helpful and proactive front-end developer since 2019. I create projects from templates or from scratch.
        </h3>
      </div>
    </section>
  );
};

export default Welcome;
