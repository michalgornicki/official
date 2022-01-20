import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar.component.js";
import Profile from "./components/profile.component.js";
import Counters from "./components/counters.component.js";
import Projects from "./components/projects.component.js";
import Skills from "./components/skills.component.js";
import Services from "./components/services.component.js";
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
      <Profile />
      <Projects />
      <Skills />
      <Services />
      <Counters />
      <Social />
      <Scrollnav />
      <Bottombar />
    </div>
  );
}

export default App;
