import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Css/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="logo">
        CockTails
      </Link>
      <div className="nav-links-container">
        <NavLink to="/" className="nav-links">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-links">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
