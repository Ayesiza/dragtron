import "./App.css";
import Arrow from "./images/Group 2569.svg";
import Logo from "./images/Dragatron..svg";
import Stepiv from "./components/Stepiv";
import Cards from "./components/Cards";

function App() {
  return (
    <>
    <nav className="header">
        <a href="#Home">
          <img src={Arrow} alt="arrow" />
        </a>

        <a href="#Home">
          <img src={Logo} alt="logosCompa" />
        </a>
      </nav>
    
    <div className="App">
      <div>
      <Stepiv/>
      <Cards/>
      </div>

    </div>
    </>
  );
}

export default App;
