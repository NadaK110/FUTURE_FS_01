import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">NAD<span>AK</span></div>
      <div className="nav-links">
        <Link to="/"><span className="nav-dot"></span>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;