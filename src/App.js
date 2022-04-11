import NavBar from "./NavBar";
import 'bulma/css/bulma.min.css';
import Footer from "./Footer";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="App is-family-code" id='app' >
    <NavBar/>
    <Welcome/>
    <Footer/>
    </div>
  );
}

export default App;
