import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Mapas from './pages/Mapas';

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/mapas" element={<Mapas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
