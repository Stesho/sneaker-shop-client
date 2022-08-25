import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Collection from './pages/collection/Collection';
import products from './assets/data/products.json';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProductPage from './pages/productPage/ProductPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/newarrivals" element={<HomePage/>} />
        <Route path="/brands" element={<HomePage/>} />
        <Route
          path="/mens"
          element={<Collection title={"Men's collection"} products={products.filter((item) => item.gender === 'male')}/>}
        />
        <Route
          path="/womans"
          element={<Collection title={"Womens's collection"} products={products.filter((item) => item.gender === 'female')}/>}
        />
        <Route
          path="/login"
          element={<Login/>}
        />
        <Route
          path="/register"
          element={<Register/>}
        />
        <Route
          path="/:id"
          element={<ProductPage products={products}/>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
