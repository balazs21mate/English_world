import React from "react";
import Cards from "./components/cards/Cards";
import Grammar from "./components/cards/grammar/Grammar";
import MemoryGame from "./components/cards/memory-cards/MemoryGame";
import Navbar from "./components/Navbar";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
  <Router>
    <div className="App">
      <Navbar/>
      <div className="mt-[11rem] sm:mt-[8rem]">
        <Routes>
          <Route path="/" element={<Cards/>} />
          <Route path="/grammar" element={<Grammar/>} />
          <Route path="/memory_game" element={<MemoryGame/>} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
