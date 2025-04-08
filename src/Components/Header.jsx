import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/vindus_logo.png';
import '../styles/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Vindus Logo" />
      </div>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <NavLink to="/" exact activeClassName="active" onClick={closeMenu}><li>Home</li></NavLink>
          <NavLink to="/services" activeClassName="active" onClick={closeMenu}><li>Services</li></NavLink>
          <NavLink to="/products" activeClassName="active" onClick={closeMenu}><li>Products</li></NavLink>
          <NavLink to="/case-studies" activeClassName="active" onClick={closeMenu}><li>Case Studies</li></NavLink>
          <NavLink to="/career" activeClassName="active" onClick={closeMenu}><li>Career</li></NavLink>
          <NavLink to="/about" activeClassName="active" onClick={closeMenu}><li>About</li></NavLink>
        </ul>
      </div>
      <div className="contact-me">
        <NavLink to="/contact"><button className="contact-btn">Contact Us</button></NavLink>
      </div>
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Header;