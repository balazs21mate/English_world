import Cards from "./components/cards/Cards";
import Grammar from "./components/cards/grammar/Grammar";
import MemoryCards from "./components/cards/memory-cards/MemoryCards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="mt-[11rem] sm:mt-[8rem]">
        <Cards/>
        <MemoryCards/>
        <Grammar/>
      </div>
    </div>
  );
}

export default App;
