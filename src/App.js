import React, { useEffect } from 'react';
import './style.css';
import Menu from './components/Menu';
import Store from './components/Store';
import Market from './components/Market';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider, useGameContext } from './GameContext';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GameProvider>
        <div className="App">
          <Menu />
          <div className="">
            <Routes>
              <Route path="components/store" element={<Store />} />
              <Route path="components/market" element={<Market />} />
            </Routes>
          </div>
        </div>
      </GameProvider>
    </Router>

  );
}

export default App;
