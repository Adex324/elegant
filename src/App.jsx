import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Hero />}  />
        </Routes>
    </Router>
    </div>
  )
}

export default App
