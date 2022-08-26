import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/home/HomePage';
import CollectionPage from './pages/collection/CollectionPage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import ProductPage from './pages/productPage/ProductPage';
import products from './assets/data/products.json';

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
          // element={<Collection title={"Men's collection"} products={products.filter((item) => item.gender === 'male')}/>}
          element={<CollectionPage title={"Men's collection"} products={products}/>}
        />
        <Route
          path="/womans"
          element={<CollectionPage title={"Womens's collection"} products={products.filter((item) => item.gender === 'female')}/>}
        />
        <Route
          path="/login"
          element={<LoginPage/>}
        />
        <Route
          path="/register"
          element={<RegisterPage/>}
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
