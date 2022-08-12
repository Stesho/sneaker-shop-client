import React, { PureComponent } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Collection from './pages/collection/Collection';
import products from './assets/data/products.json';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route 
          path="/mens" 
          element={<Collection title={"Men's collection"} products={products.filter((item) => item.gender === 'male')}/>}
        />
        <Route
          path="/womans"
          element={<Collection title={"Womens's collection"} products={products.filter((item) => item.gender === 'female')}/>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
