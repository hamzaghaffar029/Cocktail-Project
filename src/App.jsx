import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Details from './Components/Details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar2 from './Components/Navbar2';

function App() {
  return (
    <Router>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/item-details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
