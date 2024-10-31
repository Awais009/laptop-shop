import { HashRouter  as Router, Routes, Route, Link,  } from 'react-router-dom';
import './App.css';
import UserLayout from "./User/Pages/Layout";
import ProductList from "./User/Pages/Product/ProductList";
import ShoppingCart from "./User/Pages/Cart/Cart";
import Contact from "./User/Pages/Contact";
import AboutUs from "./User/Pages/AboutUs";
import ProductDetail from "./User/Pages/Product/ProductDetail";
import Services from "./User/Pages/Services";
import Checkout from "./User/Pages/Checkout";
import Home from './User/Pages/Home';

const App = () => {
  return (
    <Router >
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
    </Router >
  );
}

export default App;
