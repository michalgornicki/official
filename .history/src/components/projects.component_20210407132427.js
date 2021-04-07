import React from "react";

const Projects = () => {
  return (
    <div id="container2" data-aos="fade-up">
      <h2 class="header" data-aos="fade">
        Projects
      </h2>

      <div className="project-wrapper">
        <div className="project-slide" data-aos="fade-up" data-aos-delay="0">
          <img className="project website5" />
          <h2 class="medium-slide">Electronics shop.</h2>
          <h3 class="small-slide">HTML, CSS, JS, React.</h3>
        </div>

        <div className="project-slide" data-aos="fade-up" data-aos-delay="0">
          <img className="project website0" />
          <h2 class="medium-slide">My official website.</h2>
          <h3 class="small-slide">HTML, CSS, JS, React.</h3>
        </div>

        <a href="https://michalgornicki.github.io/restaurant/">
          <div className="project-slide" data-aos="fade-up" data-aos-delay="0">
            <img className="project website1" />
            <h2 class="medium-slide">Royal Cookery - restaurant.</h2>
            <h3 class="small-slide">
              HTML, CSS, JS. Spotlight and AOS libraries.
            </h3>
          </div>
        </a>

        <a href="https://michalgornicki.github.io/artgallery/">
          <div className="project-slide" data-aos="fade-up" data-aos-delay="0">
            <img className="project website2" />
            <h2 class="medium-slide">Otherside - art gallery.</h2>
            <h3 class="small-slide">HTML, CSS, JS. AOS library.</h3>
          </div>
        </a>

        <div className="project-slide" data-aos="fade-up" data-aos-delay="0">
          <img className="project website3" />
          <h2 class="medium-slide">Weather app.</h2>
          <h3 class="small-slide">HTML, CSS, JS, React, Accuweather API.</h3>
        </div>

        <div className="project-slide" data-aos="fade-up" data-aos-delay="0">
          <img className="project website4" />
          <h2 class="medium-slide">Virtual pet app.</h2>
          <h3 class="small-slide">
            HTML, CSS, JS. Object programming. Pseudo states.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;
