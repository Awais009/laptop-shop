import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import UserLayout from './User/Pages/Layout';
import Home from './User/Pages/Home';
import ProductList from './User/Pages/Product/ProductList';
import ProductDetail from './User/Pages/Product/ProductDetail';
import ShoppingCart from './User/Pages/Cart/Cart';
import Contact from './User/Pages/Contact';
import AboutUs from './User/Pages/AboutUs';
import Services from './User/Pages/Services';
import Checkout from './User/Pages/Checkout';
import { useEffect } from 'react';
import $ from 'jquery'

const App = () => {
  const Protected = ({ children }) => {
    useEffect(() => {
      if (!sessionStorage.getItem('token')) {
        console.log($('#login'))
        setTimeout(() => {
          $('.open-popup').trigger('click');
        }, 1000);
      }
    }, [sessionStorage.getItem('token')])
    if (!sessionStorage.getItem('token')) {
      return <Navigate to="/"  replace />;
    }
    return (
      <div>{children}</div>
    )
  }
  return (
      <Router>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path=":nav/product-list" element={<ProductList />} />
            <Route path=":nav/:nav_item/product-list" element={<ProductList />} />
            <Route path="product/:SKU" element={<ProductDetail />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route
            path="shopping-cart"
            element={
              <Protected>
                <ShoppingCart />
              </Protected>
            }
          />
          <Route
            path="checkout"
            element={
              <Protected>
                <Checkout />
              </Protected>
            }
          />
            <Route path="services" element={<Services />} />
          </Route>
        </Routes>
      </Router>
  );
};

export default App;