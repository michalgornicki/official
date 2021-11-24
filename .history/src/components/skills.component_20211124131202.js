import React from "react";
import html from "../icons/html.png";
import css from "../icons/css.png";
import javascript from "../icons/javascript.png";
import react from "../icons/react.png";
import atom from "../icons/atom.png";
import visualstudio from "../icons/visualstudio.png";
import git from "../icons/git.png";
import github from "../icons/github.png";
import bootstrap from "../icons/bootstrap.png";
import redux from "../icons/redux.png";
import typescript from "../icons/typescript.png";
import photoshop from "../icons/photoshop.png";



const Skills = () => {
  return (
    <div id="container3">
      <h2 className="header">
        Skills & Techs
      </h2>
      <div className="skill-wrapper">
        <div className="skill">
          <img className="tech-icon" src={html} alt="" />
        </div>
        <div className="skill">
        <img className="tech-icon" src={css} alt="" />
        </div>
        <div className="skill">
        <img className="tech-icon" src={javascript} alt="" />
        </div>
        <div className="skill">
        <img className="tech-icon" src={react} alt="" />
        </div>
        <div className="skill">
        <img className="tech-icon" src={git} alt="" />
        </div>
        <div className="skill">
        <img className="tech-icon" src={github} alt="" />
        </div>
        <div className="skill">
        <img className="tech-icon" src={bootstrap} alt="" />
        </div>
        <div className="skill">
        <img className="tech-icon" src={photoshop} alt="" />
        </div>
        <div className="skill">
        <img className="tech-icon" src={atom} alt="" />
        </div>
        <div className="skill">
        <img className="tech-icon" src={visualstudio} alt="" />
        </div>
        <div className="skill">
        <img className="tech-icon" src={html} alt="" />
        </div>
        <div className="skill">
        <img className="tech-icon" src={typescript} alt="" />
        </div>
        <div className="skill">
        <img className="tech-icon" src={redux} alt="" />
        </div>
 
        <div className="skill">
        <img className="tech-icon" src={html} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Skills;
