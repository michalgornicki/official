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
        <a href="https://michalgornicki.github.io/restaurant/"><img className="project website1"/></a>
        <a href="https://michalgornicki.github.io/artgallery/"><img className="project website2"/></a>
        <img className="project website3"/>
        <img className="project website4"/>
        <img className="project"/>
        <img className="project"/>
        </div>

      </div>

      <div className="container3">

      <h2 class="header black">Skills & Techs</h2>

      <div className="skill-wrapper">
      <div className="skill">HTML <div className="skill-description">I feel strong in HTML.</div></div>
      <div className="skill">CSS <div className="skill-description">I feel strong in HTML.</div></div>
      <div className="skill">JAVASCRIPT <div className="skill-description">I feel strong in HTML.</div></div>
      <div className="skill">REACT <div className="skill-description">I feel strong in HTML.</div></div>
      <div className="skill">GIT/GITHUB <div className="skill-description">I feel strong in HTML.</div></div>
      <div className="skill">BOOTSTRAP <div className="skill-description">I feel strong in HTML.</div></div>
      <div className="skill">ATOM <div className="skill-description">I feel strong in HTML.</div></div>
      <div className="skill">VISUAL STUDIO CODE <div className="skill-description">I feel strong in HTML.</div></div>
      <div className="skill">ADOBE PHOTOSHOP <div className="skill-description">I feel strong in HTML.</div></div>
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
