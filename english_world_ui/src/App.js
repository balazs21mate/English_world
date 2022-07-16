import Cards from "./components/cards/Cards";
import MemoryCards from "./components/cards/memory-cards/MemoryCards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="mt-[11rem] sm:mt-[8rem] grid grid-cols-1 lg:grid-cols-2">
        <Cards/>
        <MemoryCards/>
      </div>
    </div>
  );
}

export default App;
