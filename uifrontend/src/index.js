import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './landing_pag/home/HomePage';
import Signup from './landing_pag/signup/Singup';
import AboutPage from './landing_pag/about/AboutPage';
import ProductPage from './landing_pag/products/ProductPage';
import PricingPage from './landing_pag/pricing/PricingPage';
import SupportPage from './landing_pag/support/SupportPage';

import Navbar from './landing_pag/Navbar';
import Footer from './landing_pag/Footer';
import NotFound from './landing_pag/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  <Footer/>
  </BrowserRouter>
);
