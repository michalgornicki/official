import './App.css';
import profile from './profile.png';

function App() {
  return (
    <div className="App">

      <div className="container1">
        <img className="profile-photo" src={profile} alt="profile" />
        <div className="profile-photo-fade"></div>
        
        <div className="text-wrapper">
        <h2 class="medium">MICHAŁ GÓRNICKI</h2>
        <h1 class="large">Web designer & frontend developer</h1>
        <h3 class="small">Since July 2019 I'm developing web projects and constantly learning new frontend skills. I'm looking forward for new challenges to work and grow. </h3>
        <h3 class="small more">[More about me.] </h3>
        </div>
        

      </div>
      
      <div className="container2">

        <h2 class="header">Projects</h2>

        <div className="project-wrapper">
        <a href="https://michalgornicki.github.io/restaurant/">

        <div className="project-slide">
        <img className="project website1"/>
          <h2 class="medium-slide">Royal Cookery - restaurant website.</h2>
          <h3 class="small-slide">HTML, CSS, JS. Spotlight and AOS libraries.</h3>
        </div></a>

        <a href="https://michalgornicki.github.io/artgallery/">
          <div className="project-slide">
            <img className="project website2"/>
            <h2 class="medium-slide">Otherside - art gallery.</h2>
            <h3 class="small-slide">HTML, CSS, JS. AOS library.</h3>
          </div></a>

        <div className="project-slide">
          <img className="project website3"/>
            <h2 class="medium-slide">Weather app.</h2>
            <h3 class="small-slide">HTML, CSS, JS, React, Accuweather API.</h3>
          </div>

        <div className="project-slide">
          <img className="project website4"/>
            <h2 class="medium-slide">Virtual pet app.</h2>
            <h3 class="small-slide">HTML, CSS, JS. Object programming. Pseudo states.</h3>
          </div>

        <div className="project-slide">
          <img className="project"/>
            <h2 class="medium-slide">Virtual pet app.</h2>
            <h3 class="small-slide">HTML, CSS, JS. Object programming. Pseudo states.</h3>
          </div>
        <div className="project-slide">
          <img className="project"/>
            <h2 class="medium-slide">Virtual pet app.</h2>
            <h3 class="small-slide">HTML, CSS, JS. Object programming. Pseudo states.</h3>
          </div>
        </div>

      </div>

      <div className="container3">
      <div className="container-background"></div>

      <h2 class="header black">Skills & Techs</h2>

      <div className="skill-wrapper">
      <div className="skill">HTML <div className="skill-description">I feel strong in HTML.</div></div>
      <div className="skill">CSS <div className="skill-description">I know CSS very well. Styling, positioning, animations are familiar to me. I also used CSS frameworks as Bootstrap and Tailwind. </div></div>
      <div className="skill">JAVASCRIPT <div className="skill-description">I know javascript pretty well. I practice this language to get used to more advanced concepts.</div></div>
      <div className="skill">REACT <div className="skill-description">This is my main focus. I'm now working on React projects.</div></div>
      <div className="skill">GIT/GITHUB <div className="skill-description">I'm using simple Github options for maintaining my projects.</div></div>
      <div className="skill">BOOTSTRAP <div className="skill-description">I used Bootstrap for few projects.</div></div>
      <div className="skill">ATOM <div className="skill-description">I worked in Atom editor for about 12 months.</div></div>
      <div className="skill">VISUAL STUDIO CODE <div className="skill-description">I switched from Atom and loved VSCode from first sight. My favourite code editor.</div></div>
      <div className="skill">ADOBE PHOTOSHOP <div className="skill-description">Worked a lot in Photoshop retouching photos.</div></div>
      </div>

      </div>

      <div className="container4">

      <h2 class="header">Focus</h2>
      
      <div className="focus-wrapper">
      <div className="focus">WEB DESIGN</div>
      <div className="focus">UI/UX DESIGN</div>
      <div className="focus">FRONTEND</div>
      </div>

      </div>

      <div className="container5">

      <h2 class="header black">Contact</h2>

      </div>

      <div className="bottom-bar">
        <h2 className="bottom-bar-text">© 2021 Developed by Michał Górnicki.</h2>
      </div>

    </div>
  );
}

export default App;
