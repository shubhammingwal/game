import React from 'react';
import logo from './logo/logo.png';
import './main.css';
import './navbar.css'

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <div className="logoImg">
        <img src={logo} alt="logo" />
        </div>
        <p className="colorWhite">CA</p>
      </div>
      <input type="checkbox" id="checkbox"/>
      <label className="toggleButton" htmlFor="checkbox">
        <div className="toggleBarTop width100"></div>
        <div className="toggleBarMid width100"></div>
        <div className="toggleBarBottom width100"></div>
      </label>
      <div className="nav-items">
        <a href="#home">Home <div></div></a>
        <a href="#about">About <div></div></a>
        <a href="#allGames">All Games <div></div></a>
        <a href="#play">Play <div></div></a>
        <a href="#price">Price <div></div></a>
        <a href="#review">Reviews <div></div></a>
        <a href="#contact">Contact <div></div></a>
      </div>
    </nav>
  );
}

export default Navbar;
