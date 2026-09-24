import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';

// inside your routes:


const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Hero />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
    </Router>
    </div>
  )
}

export default App
