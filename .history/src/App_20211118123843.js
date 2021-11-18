import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import Profile from "./components/profile.component.js";
import Projects from "./components/projects.component.js";
import Skills from "./components/skills.component.js";
import Services from "./components/services.component.js";
import Contact from "./components/contact.component.js";
import Bottombar from "./components/bottombar.component.js";

AOS.init({
  mirror: true,
  once: false,
  duration: 1000,
});

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar-item">home</div>
        <div className="navbar-item">projects</div>
        <div className="navbar-item">skills</div>
        <div className="navbar-item">services</div>
        <div className="navbar-item">contact</div>
      </div>
      <Profile />
      <Projects />
      <Skills />
      <Services />
      <Contact />

      <Bottombar />
    </div>
  );
}

export default App;
