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

  const scrolling = () => {
    if (document.getElementById("container3").getBoundingClientRect().top < 200) {
     document.getElementsByClassName("project-wrapper")[0].style.transform="translateY(0%)";
     document.getElementsByClassName("project-wrapper")[0].style.filter="opacity(1)";
  }
   else {document.getElementsByClassName("project-wrapper")[0].style.transform="translateY(50%)";
   document.getElementsByClassName("project-wrapper")[0].style.filter="opacity(0)";}
}

window.addEventListener('scroll', scrolling);


  
  return (
    <div id="container3">
      <h2 className="header " id="header-projects">
        Projects
      </h2>

      <div className="project-wrapper">
        <Carousel variant="dark" fade indicators={false} pause={false} interval="999999">
        <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image11} alt="First slide" />
           
            
            <div className="carousel-text">
            <h4>Lamborghini official website project</h4>
            <p>React js and Bootstrap.</p>
            <a className="carousel-link" href="https://michalgornicki.github.io/lamborghinicars/"><p>Open website.</p></a>
            <a className="carousel-link" href="https://github.com/michalgornicki/lamborghinicars/"><p>Check code on Github.</p></a>
            </div>

          </Carousel.Item>
        <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image10} alt="First slide" />
      
            <div className="carousel-text">
            <h4>Fashion website, commercial website</h4>
                <p>React js and Bootstrap.</p>
            <a className="carousel-link" href="https://michalgornicki.github.io/Impromptu/"><p>Open website.</p></a>
            <a className="carousel-link" href="https://github.com/michalgornicki/Impromptu/"><p>Check code on Github.</p></a>


            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image1} alt="First slide" />
            <div className="carousel-text">
            <h4>Dental office, commercial website</h4>
                <p>React js, Bootstrap, React Router.</p>
            <a className="carousel-link" href="https://michalgornicki.github.io/smile-med/"><p>Open website.</p></a>
            <a className="carousel-link" href="https://github.com/michalgornicki/smile-med/"><p>Check code on Github.</p></a>


            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image2} alt="Second slide" />

            <div className="carousel-text">
            <h4>Smart Home, commercial website</h4>
                <p>React JS.</p>
            <a className="carousel-link" href="https://michalgornicki.github.io/smartify/"><p>Open website.</p></a>
            <a className="carousel-link" href="https://github.com/michalgornicki/smartify/"><p>Check code on Github.</p></a>


            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image3} alt="Third slide" />

            <div className="carousel-text">
            <h4>Electronics shop</h4>
                <p>React JS.</p>
            <a className="carousel-link" href="https://michalgornicki.github.io/electronet/"><p>Open website.</p></a>
            <a className="carousel-link" href="https://github.com/michalgornicki/electronet/"><p>Check code on Github.</p></a>


            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image5} alt="Third slide" />

            <div className="carousel-text">
            <h4>Space X mission explorer</h4>
                <p>React js, React Hooks, GraphQL database.</p>
            <a className="carousel-link" href="https://michalgornicki.github.io/space_x_clone/"><p>Open website.</p></a>
            <a className="carousel-link" href="https://github.com/michalgornicki/space_x_clone/"><p>Check code on Github.</p></a>


            </div>

          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image6} alt="Third slide" />

       
            <div className="carousel-text">
            <h4>Virtual bitcoin buying app</h4>
                <p>React js, React hooks.</p>
            <a className="carousel-link" href="https://michalgornicki.github.io/bitcoin-virtual/"><p>Open website.</p></a>
            <a className="carousel-link" href="https://github.com/michalgornicki/bitcoin-virtual/"><p>Check code on Github.</p></a>


            </div>

          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image7} alt="Third slide" />

            <div className="carousel-text">
            <h4>Todo list app</h4>
                <p>React js, React hooks.</p>
            <a className="carousel-link" href="https://michalgornicki.github.io/insta-note/"><p>Open website.</p></a>
            <a className="carousel-link" href="https://github.com/michalgornicki/insta-note/"><p>Check code on Github.</p></a>


            </div>

          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image8} alt="Third slide" />
            <div className="carousel-text">
            <h4>Weather app</h4>
                <p>React, openweatherapp weather API.</p>
            <a className="carousel-link" href="https://www.youtube.com/watch?v=Xq_YM1_ebq4/"><p>watch website on Youtube.</p></a>


            </div>

          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image d-block w-100" src={Image9} alt="Third slide" />

            <div className="carousel-text">
            <h4>Virtual pet app</h4>
                <p>[HTML, CSS, JS]</p>
                <p>I</p>
            <a className="carousel-link" href="https://michalgornicki.github.io/virtualpet/"><p>Open website.</p></a>
            <a className="carousel-link" href="https://github.com/michalgornicki/virtualpet/"><p>Check code on Github.</p></a>


            </div>

          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
