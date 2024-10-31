import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from "./User/Components/Header";
import Footer from "./User/Components/Footer";
import UserLayout from "./User/Pages/Layout";
import ProductList from "./User/Pages/ProductList";
import ShoppingCart from "./User/Pages/Cart/Cart";
import Contact from "./User/Pages/Contact";
import AboutUs from "./User/Pages/AboutUs";
import ProductDetail from "./User/Pages/ProductDetail";
import Services from "./User/Pages/Services";
import Checkout from "./User/Pages/Checkout";
import Home from './User/Pages/Home';

const App = () => {
  return (
    <BrowserRouter >
     
      <Routes>
      <Route  element={<UserLayout />}>
      <Route path="/" element={<Home />} />

        <Route path="product-list" element={<ProductList />}></Route>
        <Route path="product/:SKU" element={<ProductDetail />}></Route>
        <Route path="shopping-cart" element={<ShoppingCart />}></Route>
        <Route path="contact-us" element={<Contact />}></Route>
        <Route path="about-us" element={<AboutUs />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
        <Route path="services" element={<Services />}></Route>

        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
