import React from "react";
import html from "../icons/html.png";
import css from "../icons/css.png";
import javascript from "../icons/js.png";
import react from "../icons/react.png";
import atom from "../icons/atom.png";
import visualstudio from "../icons/visualstudio.png";
import git from "../icons/git.png";
import github from "../icons/github.png";
import bootstrap from "../icons/bootstrap.png";
import photoshop from "../icons/photoshop.png";
import redux from "../icons/redux.png";
import sass from "../icons/sass.png";
import responsive from "../icons/responsive.png";

const Skills = () => {
  const scrolling = () => {
    if (document.getElementById("container-skills").getBoundingClientRect().top < 400) {
      document.getElementsByClassName("container-skills__skill-wrapper")[0].style.filter = "opacity(1)";
    } else {
      document.getElementsByClassName("container-skills__skill-wrapper")[0].style.filter = "opacity(0)";
    }
  };

  window.addEventListener("scroll", scrolling);

  return (
    <section id="container-skills" className="section">
        <h2 className="section__header">Current skills</h2>
        <div className="container-skills__skill-wrapper">
          <div className="container-skills__skill-item">
            <abbr title="HTML5 ✰✰✰✰✰">
              <img className="container-skills_image" src={html} alt="" />
            </abbr>
          </div>
          <div className="container-skills__skill-item">
            <abbr title="CSS ✰✰✰✰✰">
              <img className="container-skills_image" src={css} alt="" />
            </abbr>
          </div>
          <div className="container-skills__skill-item">
            <abbr title="Bootstrap ✰✰✰✰">
              <img className="container-skills_image" src={bootstrap} alt="" />
            </abbr>
          </div>
          <div className="container-skills__skill-item">
            <abbr title="Javascript ✰✰✰✰">
              <img className="container-skills_image" src={javascript} alt="" />
            </abbr>
          </div>
          <div className="container-skills__skill-item">
            <abbr title="React JS and React hooks ✰✰✰">
              <img className="container-skills_image" src={react} alt="" />
            </abbr>
          </div>
          <div className="container-skills__skill-item">
            <abbr title="Responsive design ✰✰✰✰">
              <img className="container-skills_image" src={responsive} alt="" />
            </abbr>
          </div>
          <div className="container-skills__skill-item">
            <abbr title="GIT ✰✰✰">
              <img className="container-skills_image" src={git} alt="" />
            </abbr>
          </div>
          <div className="container-skills__skill-item">
            <abbr title="GITHUB ✰✰✰">
              <img className="container-skills_image" src={github} alt="" />
            </abbr>
          </div>

          <div className="container-skills__skill-item">
            <abbr title="Adobe Photoshop ✰✰✰">
              <img className="container-skills_image" src={photoshop} alt="" />
            </abbr>
          </div>
          <div className="container-skills__skill-item">
            <abbr title="ATOM ✰✰✰">
              <img className="container-skills_image" src={atom} alt="" />
            </abbr>
          </div>
          <div className="container-skills__skill-item">
            <abbr title="Visual Studio Code ✰✰✰✰">
              <img className="container-skills_image" src={visualstudio} alt="" />
            </abbr>
          </div>
          <div className="container-skills__skill-item">
            <img className="container-skills_image" src={redux} alt="" />
          </div>
          <div className="container-skills__skill-item">
            <img className="container-skills_image" src={sass} alt="" />
          </div>
        </div>


      
    </section>
  );
};

export default Skills;
