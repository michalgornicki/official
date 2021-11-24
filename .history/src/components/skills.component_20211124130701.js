import React from "react";
import html from "../icons/html.png";



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
        <img className="tech-icon" src={html} alt="" />
        </div>
        <div className="skill">
        <img className="tech-icon" src={html} alt="" />
        </div>
        <div className="skill">
        <img className="tech-icon" src={html} alt="" />
        </div>
        <div className="skill">
        <img className="tech-icon" src={html} alt="" />
        </div>
        <div className="skill">
        <img className="tech-icon" src={html} alt="" />
        </div>
        <div className="skill">
          <span className="skill-title">BOOTSTRAP</span>{" "}
          <div className="skill-description">
            I used Bootstrap for few projects. I prefer working without this kind of libraries, because they are a little limiting.
          </div>
        </div>
        <div className="skill">
          <span className="skill-title">ATOM</span>{" "}
          <div className="skill-description">
            I worked in Atom editor for about 12 months.
          </div>
        </div>
        <div className="skill">
          <span className="skill-title">VISUAL STUDIO CODE</span>{" "}
          <div className="skill-description">
            I switched from Atom and loved VSCode from first sight. My favourite
            code editor.
          </div>
        </div>
        <div className="skill">
          <span className="skill-title">ADOBE PHOTOSHOP</span>{" "}
          <div className="skill-description">
            I worked a lot in Photoshop for retouching photos and images.
          </div>
        </div>
        <div className="skill">
          <span className="skill-title">LESS (CSS)</span>{" "}
          <div className="skill-description">Recently I started using LESS and it is wonderfully useful. </div>
        </div>
        <div className="skill">
          <span className="skill-title">JS/CSS LIBRARIES</span>{" "}
          <div className="skill-description">I have no problems with applying libraries for projects. </div>
        </div>
        <div className="skill">
          <span className="skill-title">REDUX</span>{" "}
          <div className="skill-description">Learning in progress...</div>
        </div>
 
        <div className="skill">
          <span className="skill-title">TYPESCRIPT</span>{" "}
          <div className="skill-description">In queue for learning...</div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
