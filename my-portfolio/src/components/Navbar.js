import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './Darklight';
import './Navbar.css';

const Nav = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="nav">
      <div className="logo">NAD<span>AK</span></div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Nav;