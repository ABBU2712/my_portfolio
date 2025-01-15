import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import avatar from './assets/download.jpeg'; // Replace with the correct path to your avatar/logo

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src={avatar}
          alt="Avatar"
          className="navbar-avatar"
        />
        <span>My Portfolio</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
