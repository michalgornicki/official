import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from "./website14.png";


const Projects = () => {


  return (
    <div id="container2">
      <h2 className="header " id="header-projects">
        Projects
      </h2>

      <div className="project-wrapper">



      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>




      <div className="project-hover">
          <a href="https://michalgornicki.github.io/smile-med/">
            <div
              className="project-slide"

            >
              <img className="project website14" alt="" />
              <div className="project-text">
              <h2 className="slide-header">Dental office - commercial website.</h2>
              <h3 className="slide-footer">React JS, React Router, Bootstrap.</h3>
              </div>
            </div>
          </a>
        </div>

      <div className="project-hover">
          <a href="https://michalgornicki.github.io/smartify/">
            <div
              className="project-slide"

            >
              <img className="project website8" alt="" />
              <div className="project-text">
              <h2 className="slide-header">Smart home app website.</h2>
              <h3 className="slide-footer">JSX/CSS, React JS.</h3>
              </div>
            </div>
          </a>
        </div>

        <div className="project-hover">
          <a href="https://michalgornicki.github.io/electronet/">
            <div
              className="project-slide"

            >
              <img className="project website5" alt="" />
              <h2 className="slide-header">Electronics shop.</h2>
              <h3 className="slide-footer">JSX/CSS, JS, React.</h3>
            </div>
          </a>
        </div>

      <div className="project-hover">
          <a href="http://fantasyblog.mywebcommunity.org">
            <div
              className="project-slide"

            >
              <img className="project website13" alt="" />
              <h2 className="slide-header">Personal Wordpress blog.</h2>
              <h3 className="slide-footer">
                HTML, CSS, JS, Wordpress.
              </h3>
            </div>
          </a>
        </div>

        <div className="project-hover">
          <a href="https://michalgornicki.github.io/space_x_clone/">
            <div
              className="project-slide"

            >
              <img className="project website6" alt="" />
              <h2 className="slide-header">Space X mission explorer.</h2>
              <h3 className="slide-footer">
                JSX/CSS, React, React hooks, GraphQL.
              </h3>
            </div>
          </a>
        </div>

      <div className="project-hover">
          <a href="https://michalgornicki.github.io/bitcoin-virtual/">
            <div
              className="project-slide"

            >
              <img className="project website12" alt="" />
              <h2 className="slide-header">Bitcoin virtual seller.</h2>
              <h3 className="slide-footer">
                JSX/CSS, React, React hooks.
              </h3>
            </div>
          </a>
        </div>





        <div className="project-hover">
          <a href="https://michalgornicki.github.io/poland-covid/">
            <div
              className="project-slide"

            >
              <img className="project website10" alt="" />
              <h2 className="slide-header">Live Poland Covid-19 stats.</h2>
              <h3 className="slide-footer">JSX/CSS, JS, React.</h3>
            </div>
          </a>
        </div>

        

        <div className="project-hover">
          <a href="https://michalgornicki.github.io/number-generator/">
            <div
              className="project-slide"

            >
              <img className="project website9" alt="" />
              <h2 className="slide-header">Random number generator.</h2>
              <h3 className="slide-footer">JSX/CSS, JS, React.</h3>
            </div>
          </a>
        </div>

        <div className="project-hover">
          <a href="https://michalgornicki.github.io/insta-note/">
            <div
              className="project-slide"

            >
              <img className="project website11" alt="" />
              <h2 className="slide-header">Note creator.</h2>
              <h3 className="slide-footer">JSX/CSS, JS, React.</h3>
            </div>
          </a>
        </div>

        <div className="project-hover">
          <a href="https://michalgornicki.github.io/findings/">
            <div
              className="project-slide"

            >
              <img className="project website7" alt="" />
              <h2 className="slide-header">Best art findings.</h2>
              <h3 className="slide-footer"> JSX/CSS, React, React hooks.</h3>
            </div>
          </a>
        </div>


        <div className="project-hover">
          <div className="project-slide" data-aos="fade-up" data-aos-delay="0">
            <img className="project website0" alt="" />
            <h2 className="slide-header">My official website.</h2>
            <h3 className="slide-footer">JSX/CSS, JS, React.</h3>
          </div>
        </div>



        <div className="project-hover">
          <a href="https://youtu.be/Xq_YM1_ebq4">
            <div
              className="project-slide"

            >
              <img className="project website3" alt="" />
              <h2 className="slide-header">Weather app.</h2>
              <h3 className="slide-footer">
                HTML/CSS, React, Accuweather API.
              </h3>
            </div>
          </a>
        </div>

        <div className="project-hover">
          <a href="https://michalgornicki.github.io/virtualpet">
            <div
              className="project-slide"

            >
              <img className="project website4" alt="" />
              <h2 className="slide-header">Virtual pet app.</h2>
              <h3 className="slide-footer">
                Experimental project with object programming.
              </h3>
            </div>
          </a>
        </div>

        <div className="project-hover">
          <a href="https://michalgornicki.github.io/restaurant/">
            <div
              className="project-slide"

            >
              <img className="project website1" alt="" />
              <h2 className="slide-header">Royal Cookery - restaurant.</h2>
              <h3 className="slide-footer">
                HTML/CSS, JS. Spotlight and AOS libraries.
              </h3>
            </div>
          </a>
        </div>

        <div className="project-hover">
          <a href="https://michalgornicki.github.io/artgallery-new/">
            <div
              className="project-slide"

            >
              <img className="project website2" alt="" />
              <h2 className="slide-header">Otherside - art gallery.</h2>
              <h3 className="slide-footer">HTML/CSS, JS. AOS library.</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
