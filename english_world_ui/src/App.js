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

import {FetchProvider} from "./components/context/Fetch";

function App() {
  return (
  <Router>
    <FetchProvider>
      <div className="App">
        <Navbar/>
        <div className="mt-[8rem]">
          <Routes>
            <Route path="/" element={<Cards/>} />
            <Route path="/grammar" element={<Grammar/>} />
            <Route path="/memory_game" element={<MemoryGame/>} />
          </Routes>
        </div>
      </div>
    </FetchProvider>
  </Router>
  );
}

export default App;
