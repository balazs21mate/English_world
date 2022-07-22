import React from "react";
import Cards from "./components/pages/cards/Cards";
import Grammar from "./components/pages/grammar/Grammar";
import MemoryGame from "./components/pages/memory-cards/MemoryGame";
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
        <div className="mt-[9rem]">
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
