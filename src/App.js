import "./App.css";
import Arrow from "./images/Group 2569.svg";
import Stepiv from "./components/Stepiv";
import Cards from "./components/Cards";

function App() {
  return (
    <>
    <div className="header">
        <a href="#Home">
          
          <img src={Arrow} alt="arrow" />
        </a>

        <a href="#Home">
        <h2>Dragatron.</h2>
        </a>
      </div>
    
    <div className="App">
      <div >
      <Stepiv/>
      <Cards/>
      </div>

    </div>
    </>
  );
}

export default App;
