import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="logo">
        CockTails
      </Link>
      <div className="nav-links-container">
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/about" className="nav-links">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
