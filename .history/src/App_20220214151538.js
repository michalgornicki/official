import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar.component.js";
import Welcome from "./components/welcome.component.js";
import Projects from "./components/projects.component.js";
import Skills from "./components/skills.component.js";
import Social from "./components/social.component.js";
import Bottombar from "./components/bottombar.component.js";
import Scrollnav from "./components/scrollnav.component.js";

function App() {
  useEffect(() => {
    document.title = "micdev/official";
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Projects />
      <Skills />
      <Social />
      <Scrollnav />
      <Bottombar />
    </div>
  );
}

export default App;
