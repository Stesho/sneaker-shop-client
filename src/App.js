import React from 'react';
import { Routes, Route, Redirect, Navigate } from "react-router-dom";
import axios from 'axios';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/home/HomePage';
import CollectionPage from './pages/collection/CollectionPage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/registration/RegisterPage';
import ProductPage from './pages/product/ProductPage';
import AccountPage from './pages/account/AccountPage';
import Overview from './components/account/overview/Overview';
import MyOrders from './components/account/myOrders/MyOrders';
import products from './assets/data/products.json';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/newarrivals" element={<HomePage/>} />
        <Route path="/brands" element={<HomePage/>} />
        {/* element={<Collection title={"Men's collection"} products={products.filter((item) => item.gender === 'male')}/>} */}
        <Route path="/mens" element={<CollectionPage title={"Men's collection"} products={products}/>} />
        <Route path="/womans" element={<CollectionPage title={"Womens's collection"} products={products.filter((item) => item.gender === 'female')}/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/registration" element={<RegisterPage/>} />
        <Route path="/account" element={<AccountPage/>}>
          <Route element={<PrivateRoutes/>}>
            <Route path="overview" element={<Overview/>} />
            <Route path="my-orders" element={<MyOrders/>} />
          </Route>
        </Route>
        <Route path="/:id" element={<ProductPage products={products}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
