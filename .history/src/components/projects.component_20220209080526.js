import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../1.png";
import Image2 from "../2.png";
import Image3 from "../3.png";
import Image5 from "../5.png";
import Image6 from "../6.png";
import Image7 from "../7.png";
import Image8 from "../8.png";
import Image9 from "../9.png";
import Image10 from "../10.png";
import Image11 from "../11.png";
import Image12 from "../12.png";
import Image13 from "../13.png";
import Image14 from "../14.png";
import Image15 from "../14.png";

const Projects = () => {
  const scrolling = () => {
    if (document.getElementById("container3").getBoundingClientRect().top < 400) {
      document.getElementsByClassName("project-wrapper")[0].style.transform = "translateY(0%)";
      document.getElementsByClassName("project-wrapper")[0].style.filter = "opacity(1)";
    } else {
      document.getElementsByClassName("project-wrapper")[0].style.transform = "translateY(50%)";
      document.getElementsByClassName("project-wrapper")[0].style.filter = "opacity(0)";
    }
  };

  window.addEventListener("scroll", scrolling);

  const projects = [
    {
      title: "Cat adoption website",
      techs: "Figma, React js, React Router, Bootstrap, Auth0 authentication",
      image: Image12,
      description:
        "On this website you can browse cat adoption announcements, search for specific cat, create your account, follow informations about selected pets and add your own announcements about cats looking for new home. I created design for this project in Figma. Page is currently under development.",
      github: "https://github.com/michalgornicki/cats/",
      demo: "https://michalgornicki.github.io/cats/",
    },
    {
      title: "Javascript repeat course",
      techs: "React js, React Router, Bootstrap",
      image: Image14,
      description:
        "This project was created to help people learn and repeat most essential Javascript knowledge.",
      github: "https://github.com/michalgornicki/javascript/",
      demo: "https://michalgornicki.github.io/javascript/",
    },
    {
      title: "React repeat course",
      techs: "React js, React Router, Bootstrap",
      image: Image13,
      description:
        "This project was created to help people learn and repeat most essential React knowledge.",
      github: "https://github.com/michalgornicki/react/",
      demo: "https://michalgornicki.github.io/react/",
    },
    {
      title: "Lamborghini website design project",
      techs: "React js and Bootstrap",
      image: Image11,
      description: "This is project to train my design and styling skills.",
      github: "https://github.com/michalgornicki/lamborghinicars/",
      demo: "https://michalgornicki.github.io/lamborghinicars/",
    },
    {
      title: "Fashion website design project",
      techs: "React js and Bootstrap",
      image: Image10,
      description: "This is project to train my design and styling skills.",
      github: "https://github.com/michalgornicki/Impromptu/",
      demo: "https://michalgornicki.github.io/Impromptu/",
    },
    {
      title: "Dental office website design project",
      techs: "React js, Bootstrap, React Router",
      image: Image1,
      description:
        "In this project I started using regularly Bootstrap, which is such a great help in styling. Purpose of this project was to strengthen styling skills and developing using Bootstrap. I started here using React router which is also wonderful tool.",
      github: "https://github.com/michalgornicki/smile-med/",
      demo: "https://michalgornicki.github.io/smile-med",
    },
    {
      title: "Smart Home website design project",
      techs: "React JS",
      image: Image2,
      description: "I have created this website to train my design and styling skills.",
      github: "https://github.com/michalgornicki/smartify/",
      demo: "https://michalgornicki.github.io/smartify/",
    },
    {
      title: "Electronics shop",
      techs: "React JS",
      image: Image3,
      description:
        "In this project I have recreated website of electronics shop. There are lot of possibilities: you can find items through search, sort them by price, by category, add items to basket. There is also form with validation.",
      github: "https://github.com/michalgornicki/electronet/",
      demo: "https://michalgornicki.github.io/electronet/",
    },
    {
      title: "Space X mission explorer",
      techs: "React js, React Hooks, GraphQL SpaceX database",
      image: Image5,
      description:
        " have created this project to train my skills with using larger database. It is a bit rough for now, but is very informative.",
      github: "https://github.com/michalgornicki/space_x_clone/",
      demo: "https://michalgornicki.github.io/space_x_clone/",
    },
    {
      title: "Virtual bitcoin buying app",
      techs: "React js, React hooks",
      image: Image6,
      description:
        " It is interesting app where you can find out if you can earn money with cryptocurrency trading. I wrote simple algorythm to change value of two cryptocurrencies and save them in React state hooks. Account balance of PLN, BTC and ETH is also saved in state hook.",
      github: "https://github.com/michalgornicki/bitcoin-virtual/",
      demo: "https://michalgornicki.github.io/bitcoin-virtual/",
    },
    {
      title: "Todo list app",
      techs: "React js, React hooks",
      image: Image7,
      description:
        "There it is, classic Todo app created in React js with using of state hooks. I have created this app to have a little training with manipulating arrays.",
      github: "https://github.com/michalgornicki/insta-note/",
      demo: "https://michalgornicki.github.io/insta-note/",
    },
    {
      title: "Weather app",
      techs: "React js, openweatherapp weather API",
      image: Image8,
      description:
        "There it is, classic Todo app created in React js with using of state hooks. I have created this app to have a little training with manipulating arrays.",
      github: "https://github.com/michalgornicki/weather-app/",
      demo: "https://www.youtube.com/watch?v=Xq_YM1_ebq4/",
    },
    {
      title: "Virtual pet app",
      techs: "HTML, CSS, JS",
      image: Image9,
      description:
        "I have created this project to develop objects with different properties in Javascript. You can choose animal which would you like to pet. Each animal have different needs, so you must feed, drink and play with them.",
      github: "https://github.com/michalgornicki/virtualpet/",
      demo: "https://michalgornicki.github.io/virtualpet/",
    },
  ];

  return (
    <div id="container3">
      <h2 className="header " id="header-projects">
        Projects
      </h2>

      <div className="project-wrapper">
        <Carousel variant="dark" fade indicators={false} pause={false} interval="999999">
          {projects.map((item) => (
            <Carousel.Item>
              <img className="carousel-image d-block w-100" src={item.image} alt="First slide" />

              <div className="carousel-text">
                <h4>{item.title}</h4>
                <p>{item.techs}</p>
                <p>{item.description}</p>
                <a className="carousel-link" href={item.demo}>
                  <p>Open website.</p>
                </a>
                <a className="carousel-link" href={item.github}>
                  <p>Check code on Github.</p>
                </a>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
