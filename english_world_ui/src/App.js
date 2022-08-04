import React from "react";

import Cards from "./components/pages/cards/Cards";
import Grammar from "./components/pages/grammar/Grammar";
import MemoryGame from "./components/pages/memory-cards/MemoryGame";
import Navbar from "./components/Navbar";
import CreateCard from "./components/pages/create_cards/CreateCard";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {FetchProvider} from "./components/context/Fetch";
import {CreateListProvider} from "./components/context/CreateList";

function App() {

  return (
  <Router>
    <FetchProvider>
      <div className="App">
        <Navbar/>
        <div className='mt-[7rem] md:mt-[8rem] lg:mt-[9rem]'>
        <CreateListProvider>
            <Routes>
              <Route path="/" element={<Cards/>} />
              <Route path="/grammar" element={<Grammar/>} />
              <Route path="/memory_game" element={<MemoryGame/>} />
              <Route  path='/create' element={<CreateCard/>}/>
            </Routes>
          </CreateListProvider>
        </div>
      </div>
    </FetchProvider>
  </Router>
  );
}

export default App;
