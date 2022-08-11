import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Collection from './pages/collection/Collection';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
