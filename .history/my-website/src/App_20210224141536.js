import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';
import Container1 from './components/container1.component.js';

AOS.init({
  mirror: true,
  once: false,
  duration: 1000
});

function App() {
  return (
    <div className="App">

      <Container1 />
      
      <div id="container2" data-aos="fade-up">

        <h2 class="header" data-aos="fade">Projects</h2>

        <div className="project-wrapper">

        <div className="project-slide" data-aos="fade-up" data-aos-delay="0">
          <img className="project website0"/>
            <h2 class="medium-slide">My official website.</h2>
            <h3 class="small-slide">HTML, CSS, JS, React.</h3>
          </div>

          <a href="https://michalgornicki.github.io/restaurant/">
        <div className="project-slide"  data-aos="fade-up" data-aos-delay="300">
        <img className="project website1"/>
          <h2 class="medium-slide">Royal Cookery - restaurant website.</h2>
          <h3 class="small-slide">HTML, CSS, JS. Spotlight and AOS libraries.</h3>
        </div>
        </a>

        <a href="https://michalgornicki.github.io/artgallery/">
          <div className="project-slide" data-aos="fade-up" data-aos-delay="600">
            <img className="project website2"/>
            <h2 class="medium-slide">Otherside - art gallery.</h2>
            <h3 class="small-slide">HTML, CSS, JS. AOS library.</h3>
          </div>
          </a>

        <div className="project-slide" data-aos="fade-up" data-aos-delay="900">
          <img className="project website3"/>
            <h2 class="medium-slide">Weather app.</h2>
            <h3 class="small-slide">HTML, CSS, JS, React, Accuweather API.</h3>
          </div>

        <div className="project-slide" data-aos="fade-up" data-aos-delay="1200">
          <img className="project website4"/>
            <h2 class="medium-slide">Virtual pet app.</h2>
            <h3 class="small-slide">HTML, CSS, JS. Object programming. Pseudo states.</h3>
          </div>

        <div className="project-slide" data-aos="fade-up" data-aos-delay="1500">
          <img className="project"/>
            <h2 class="medium-slide">Place for new app.</h2>
            <h3 class="small-slide">Black description.</h3>
          </div>

        </div>

      </div>

      <div id="container3" data-aos="fade-up" data-aos-offset="0">

      <h2 class="header" data-aos="fade">Skills & Techs</h2>

      <div className="skill-wrapper">
      <div className="skill blue" data-aos="zoom-up" data-aos-delay="300"><span class="skill-title">HTML</span> <div className="skill-description">I feel strong in HTML.</div></div>
      <div className="skill violet" data-aos="zoom-up" data-aos-delay="600"><span class="skill-title">CSS</span> <div className="skill-description">I know CSS very well. Styling, positioning, animations are familiar to me. I also used CSS frameworks as Bootstrap and Tailwind. </div></div>
      <div className="skill red" data-aos="zoom-up" data-aos-delay="900"><span class="skill-title">JAVASCRIPT</span> <div className="skill-description">I know javascript pretty well. I practice this language to get used to more advanced concepts.</div></div>
      <div className="skill blue" data-aos="zoom-up" data-aos-delay="600"><span class="skill-title">REACT</span> <div className="skill-description">This is my main focus. I'm now working on React projects.</div></div>
      <div className="skill violet" data-aos="zoom-up" data-aos-delay="300"><span class="skill-title">GIT/GITHUB</span> <div className="skill-description">I'm using simple Github options for maintaining my projects.</div></div>
      <div className="skill red" data-aos="zoom-up" data-aos-delay="300"><span class="skill-title">BOOTSTRAP</span> <div className="skill-description">I used Bootstrap for few projects.</div></div>
      <div className="skill blue" data-aos="zoom-up" data-aos-delay="600"><span class="skill-title">ATOM</span> <div className="skill-description">I worked in Atom editor for about 12 months.</div></div>
      <div className="skill violet" data-aos="zoom-up" data-aos-delay="900"><span class="skill-title">VISUAL STUDIO CODE</span> <div className="skill-description">I switched from Atom and loved VSCode from first sight. My favourite code editor.</div></div>
      <div className="skill red" data-aos="zoom-up" data-aos-delay="600"><span class="skill-title">ADOBE PHOTOSHOP</span> <div className="skill-description">Worked a lot in Photoshop retouching photos.</div></div>
      <div className="skill blue" data-aos="zoom-up" data-aos-delay="300"><span class="skill-title">JS/CSS LIBRARIES</span> <div className="skill-description">I used number of libraries.</div></div>
      </div>

      </div>

      <div id="container4" data-aos="fade-up">

      <h2 class="header header-lower" data-aos="fade">Services</h2>
      
      <div className="focus-wrapper" data-aos="zoom-in">
      <div className="focus">WEB DESIGN</div>
      <div className="focus">UI/UX DESIGN</div>
      <div className="focus">FRONTEND</div>
      <div className="focus-description"><div className="focus-text">Elegant and quality webpages, easy and nice to use.</div> </div>
      <div className="focus-description"><div className="focus-text">Perfect and faultless user experience for all devices.</div></div>
      <div className="focus-description"><div className="focus-text">Clean and simple high-standard frontend code.</div></div>
      </div>

      </div>

      <div id="container5">

      <h2 class="header header-lower" data-aos="fade">Contact</h2>

      <div className="contact-wrapper" data-aos="zoom-out">
      <div className="contact"> <a href="mailto:gornickimichal@gmail.com">Gmail</a></div>
      <div className="contact"> <a href="m.me/micgornicki">Messenger</a></div>
      <div className="contact"> <a href="https://www.facebook.com/micgornicki">Facebook</a></div>
      <div className="contact"> <a href="https://github.com/michalgornicki">Github</a></div>
      </div>

      </div>

      <div className="bottom-bar">
        <h2 className="bottom-bar-text">© 2021 Developed by Michał Górnicki.</h2>
      </div>

    </div>
  );
}

export default App;
