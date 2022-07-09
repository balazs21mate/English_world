import Cards from "./components/cards/Cards";
import MemoryCards from "./components/cards/memory-cards/MemoryCards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content-container">
        <Cards/>
        <MemoryCards/>
      </div>
    </div>
  );
}

export default App;
