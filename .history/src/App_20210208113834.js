import './App.css';
import profile from './profile.png';

function App() {
  return (
    <div className="App">

      <div className="container1">
        <img className="profile-photo" src={profile} alt="profile" />
        <div className="profile-photo-fade"></div>

        <h2 class="medium">Michał Górnicki</h2>
        <h1 class="large">Web designer & web developer</h1>
        <h3></h3>

        

      </div>
      
      <div className="container2">

      </div>

      <div className="container3">

      </div>

      <div className="container4">

      </div>

    </div>
  );
}

export default App;
