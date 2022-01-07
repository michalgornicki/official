import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from "../1.png";
import Image2 from "../2.png";
import Image3 from "../3.png";
import Image4 from "../4.png";
import Image5 from "../5.png";
import Image6 from "../6.png";
import Image7 from "../7.png";
import Image8 from "../8.png";
import Image9 from "../9.png";


const Projects = () => {


  return (
    <div id="container2">
      <h2 className="header " id="header-projects">
        Projects
      </h2>

      <div className="project-wrapper">



      <Carousel variant="dark" indicators={false}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image1}
      alt="First slide"
    />
    <Carousel.Caption className="bg-white w-50 m-auto black shadow shadow">
      <h3>Dental office, commercial website</h3>
      <p>React js, Bootstrap, React Router.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image2}
      alt="Second slide"
    />

    <Carousel.Caption className="bg-white w-50 m-auto black shadow">
      <h3>Smart Home, commercial website</h3>
      <p>React JS.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image3}
      alt="Third slide"
    />

    <Carousel.Caption className="bg-white w-50 m-auto black shadow">
      <h3>Electronics shop</h3>
      <p>React JS.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image4}
      alt="Third slide"
    />

    <Carousel.Caption className="bg-white w-50 m-auto black shadow">
      <h3>Wordpress blog</h3>
      <p>Html, CSS, Wordpress.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image5}
      alt="Third slide"
    />

    <Carousel.Caption className="bg-white w-50 m-auto black shadow">
      <h3>Space X mission explorer</h3>
      <p>React js, React Hooks, GraphQL database.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image6}
      alt="Third slide"
    />

    <Carousel.Caption className="bg-white w-50 m-auto black shadow">
      <h3>Virtual bitcoin buying app</h3>
      <p>React js, React hooks.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image7}
      alt="Third slide"
    />

    <Carousel.Caption className="bg-white w-50 m-auto black shadow">
      <h3>Todo list</h3>
      <p>React, Rea.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image8}
      alt="Third slide"
    />

    <Carousel.Caption className="bg-white w-50 m-auto black shadow">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image9}
      alt="Third slide"
    />

    <Carousel.Caption className="bg-white w-50 m-auto black shadow">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>



            </div>
        </div>
  );
};

export default Projects;