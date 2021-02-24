import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';
import Profile from './components/container1.component.js';
import Projects from './components/container2.component.js';
import Skills from './components/container3.component.js';
import Services from './components/container4.component.js';
import Contact from './components/container5.component.js';
import Bottombar from './components/bottombar.component.js';

AOS.init({
  mirror: true,
  once: false,
  duration: 1000
});

function App() {
  return (
    <div className="App">

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
