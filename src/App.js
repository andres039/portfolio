import NavBar from "./NavBar";
import 'bulma/css/bulma.min.css';
import Footer from "./Footer";
import Welcome from "./Welcome";
import Skills from "./Skills";
import Projects from "./Projects";

function App() {
  return (
    <div className="App is-family-code" id='app'>
    <NavBar/>
    <Welcome/>
    <Skills/>
    <Projects/>
    <Footer/>
    </div>
  );
}

export default App;
