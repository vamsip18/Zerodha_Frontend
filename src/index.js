import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import HomePage from './Landing_page/Home/HomePage';
import Signup from './Landing_page/Signup/Signup';
import About from './Landing_page/About/AboutPage';
import Pricing from './Landing_page/Pricing/PricingPage';
import Products from './Landing_page/Products/ProductsPage';
import Support from './Landing_page/Support/SupportPage';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import NotFound from './Landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing  />} />
        <Route path="/products" element={<Products />} />
        <Route path="/support" element={<Support />} />
        <Route path='*' element={<NotFound />} />
      </Routes> 
      <Footer />
    </BrowserRouter>
);

