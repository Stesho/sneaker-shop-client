import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './store/productsSlice';
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
import ChangePassword from './components/account/changePassword/ChangePassword';
import PrivateRoutes from './services/PrivateRoutes';
import axios from 'axios';
import CartPage from './pages/cart/CartPage';
import BrandsPage from './pages/brands/BrandsPage';

function App() {
  // const [products, setProducts] = useState([]);
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/collection/product');
      // setProducts(response.data);
      dispatch(setProducts(response.data));
    }
    catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  if(products.products.length === 0) {
    // Preloader
    return (
      <div>LOADER</div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage products={products.products}/>} />
        <Route path="/newarrivals" element={<HomePage products={products.products}/>} />
        <Route path="/brands" element={<BrandsPage/>} />
        <Route path="/mens" element={<CollectionPage title={"Men's collection"} products={products.products.filter((item) => item.gender === 'male')}/>} />
        <Route path="/womans" element={<CollectionPage title={"Womens's collection"} products={products.products.filter((item) => item.gender === 'female')}/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/registration" element={<RegisterPage/>} />
        <Route path="/account" element={<AccountPage/>}>
            <Route element={<PrivateRoutes/>}>
              <Route index element={<Navigate to="/account/overview"/>} />
              <Route path="overview" element={<Overview/>} />
              <Route path="my-orders" element={<MyOrders/>} />
              <Route path="change-password" element={<ChangePassword/>} />
            </Route>
        </Route>
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/:id" element={<ProductPage products={products.products}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
