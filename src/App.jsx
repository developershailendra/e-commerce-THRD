import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Buy from './components/Buynow'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Purchasedhistory from './components/Purchasedhistory';
import Login from './components/Login';
import Buynow from './components/Buynow'

const App = () => {
  return (
    <>
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Purchasedhistory" element={<Purchasedhistory />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Buynow" element={<Buynow />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App