import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/Calculator" element={<Calculator />} />
        <Route exact path="/Quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
