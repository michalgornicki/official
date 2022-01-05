import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../1.png";
import Image2 from "../2.png";
import Image3 from "../3.png";
import Image4 from "../4.png";
import Image5 from "../5.png";
import Image6 from "../6.png";
import Image7 from "../7.png";
import Image8 from "../8.png";
import Image9 from "../9.png";
import Image10 from "../10.png";
import Image11 from "../11.png";

const Projects = () => {
  return (
    <div id="container2">
      <h2 className="header " id="header-projects">
        Projects
      </h2>

      <div className="project-wrapper">
        <Carousel variant="dark" fade indicators={false} pause={false} interval="2500">
        <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image11} alt="First slide" />
            <a href="https://michalgornicki.github.io/lamborghinicars/">
              {" "}
              <Carousel.Caption className="carousel-caption w-50 m-auto">
                <h4>Lamborghini official website project</h4>
                <p>React js and Bootstrap.</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
        <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image10} alt="First slide" />
            <a href="https://michalgornicki.github.io/Impromptu/">
              {" "}
              <Carousel.Caption className="carousel-caption w-50 m-auto">
                <h4>Fashion website, commercial website</h4>
                <p>React js and Bootstrap.</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image1} alt="First slide" />
            <a href="https://michalgornicki.github.io/smile-med/">
              {" "}
              <Carousel.Caption className="carousel-caption w-50 m-auto">
                <h4>Dental office, commercial website</h4>
                <p>React js, Bootstrap, React Router.</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image2} alt="Second slide" />

            <a href="https://michalgornicki.github.io/smartify/">
              <Carousel.Caption className="carousel-caption w-50 m-auto shadow">
                <h4>Smart Home, commercial website</h4>
                <p>React JS.</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image3} alt="Third slide" />

            <a href="https://michalgornicki.github.io/electronet/">
              <Carousel.Caption className="carousel-caption w-50 m-auto shadow">
                <h4>Electronics shop</h4>
                <p>React JS.</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image4} alt="Third slide" />

            <a href="http://fantasyblog.mywebcommunity.org">
              <Carousel.Caption className="carousel-caption w-50 m-auto shadow">
                <h4>Wordpress blog</h4>
                <p>Html, CSS, Wordpress.</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image5} alt="Third slide" />

            <a href="https://michalgornicki.github.io/space_x_clone">
              <Carousel.Caption className="carousel-caption w-50 m-auto shadow">
                <h4>Space X mission explorer</h4>
                <p>React js, React Hooks, GraphQL database.</p>
                <p>(Currently GraphQL database is down).</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image6} alt="Third slide" />

            <a href="https://michalgornicki.github.io/bitcoin-virtual">
              <Carousel.Caption className="carousel-caption w-50 m-auto shadow">
                <h4>Virtual bitcoin buying app</h4>
                <p>React js, React hooks.</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image7} alt="Third slide" />

            <a href="https://michalgornicki.github.io/insta-note">
              <Carousel.Caption className="carousel-caption w-50 m-auto shadow">
                <h4>Todo list app</h4>
                <p>React js, React hooks.</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image8} alt="Third slide" />

            <a href="https://www.youtube.com/watch?v=Xq_YM1_ebq4">
              {" "}
              <Carousel.Caption className="carousel-caption w-50 m-auto shadow">
                <h4>Weather app</h4>
                <p>React, openweatherapp weather API.</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image9} alt="Third slide" />

            <a href="https://michalgornicki.github.io/virtualpet">
              <Carousel.Caption className="carousel-caption w-50 m-auto shadow">
                <h4>Virtual pet app</h4>
                <p>HTML, CSS, JS.</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
