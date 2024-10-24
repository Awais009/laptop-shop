import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import ProductList from "./Component/ProductList";
import ShoppingCart from "./Component/Cart";
import Contact from "./Component/Contact";
import AboutUs from "./Component/AboutUs";
import ProductDetail from "./Component/ProductDetail";
import Services from "./Component/Services";
import Checkout from "./Component/Checkout";
import ScrollToTop from "./Component/ScrollToTop";

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/product-list" element={<ProductList />}></Route>
        <Route path="/product" element={<ProductDetail />}></Route>
        <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
