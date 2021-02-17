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
        <h3 class="small">Web designer & frontend developer</h3>
        </div>
        

      </div>
      
      <div className="container2">

        <h2 class="header">Projects</h2>
      

      </div>

      <div className="container3">

      <h2 class="header">Contact me</h2>

      </div>

      <div className="container4">

      </div>

    </div>
  );
}

export default App;
