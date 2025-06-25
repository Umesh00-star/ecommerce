import React from 'react';
import logo from '../img/logo.png';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-circle">
          <img src={logo} alt="Naurio Ecommerce Logo" />
        </div>
        <h1 className="navbar-title">
          <span className="multi-color">N</span>
          <span className="multi-color">A</span>
          <span className="multi-color">U</span>
          <span className="multi-color">R</span>
          <span className="multi-color">I</span>
          <span className="multi-color">O</span>{' '}
          <span className="ecommerce-title">Ecommerce</span>
        </h1>
      </div>

      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#age-filter">Shop by Age</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
