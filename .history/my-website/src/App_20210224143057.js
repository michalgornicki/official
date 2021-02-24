import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';
import Container1 from './components/container1.component.js';
import Container2 from './components/container2.component.js';
import Container3 from './components/container3.component.js';
import Container4 from './components/container4.component.js';
import Container5 from './components/container5.component.js';

AOS.init({
  mirror: true,
  once: false,
  duration: 1000
});

function App() {
  return (
    <div className="App">

      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />

      

      

      

      <div className="bottom-bar">
        <h2 className="bottom-bar-text">© 2021 Developed by Michał Górnicki.</h2>
      </div>

    </div>
  );
}

export default App;
