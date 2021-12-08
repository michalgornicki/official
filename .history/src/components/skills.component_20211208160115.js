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
import wordpress from "../icons/wordpress.png";



const Skills = () => {
  return (
    <div id="container3">
      <h2 className="header">
        Skills & Techs
      </h2>
      <div className="skill-wrapper">
        <div className="skill">
          <abbr title="HTML5 ✰✰✰✰✰" ><img className="tech-icon" src={html} alt="" /></abbr>
        </div>
        <div className="skill">
        <abbr title="CSS and LESS ✰✰✰✰✰"><img className="tech-icon" src={css} alt="" /></abbr>
        </div>
        <div className="skill">
        <abbr title="Javascript ✰✰✰✰"><img className="tech-icon" src={javascript} alt="" /></abbr>
        </div>
        <div className="skill">
        <abbr title="React JS and React hooks ✰✰✰"><img className="tech-icon" src={react} alt="" /></abbr>
        </div>
        <div className="skill">
        <abbr title="GIT ✰✰✰"><img className="tech-icon" src={git} alt="" /></abbr>
        </div>
        <div className="skill">
        <abbr title="GITHUB ✰✰✰"><img className="tech-icon" src={github} alt="" /></abbr>
        </div>
        <div className="skill">
        <abbr title="Bootstrap ✰✰"><img className="tech-icon" src={bootstrap} alt="" /></abbr>
        </div>
        <div className="skill">
        <abbr title="Adobe Photoshop ✰✰✰"><img className="tech-icon" src={photoshop} alt="" /></abbr>
        </div>
        <div className="skill">
        <abbr title="ATOM ✰✰✰"><img className="tech-icon" src={atom} alt="" /></abbr>
        </div>
        <div className="skill">
        <abbr title="Visual Studio Code ✰✰✰✰"><img className="tech-icon" src={visualstudio} alt="" /></abbr>
        </div>
        <div className="skill">
        <abbr title="Wordpress ✰✰✰✰"><img className="tech-icon" src={visualstudio} alt="" /></abbr>
        </div>

      </div>
    </div>
  );
};

export default Skills;
