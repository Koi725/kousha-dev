'use client';

import React, { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul className="navbar__menu">
          <li className="navbar__item"><a href="#home">Home</a></li>
          <li className="navbar__item"><a href="#about">About Me</a></li>
          <li className="navbar__item"><a href="#skills">Skills</a></li>
          <li className="navbar__item"><a href="#contact">Contact Me</a></li>
        </ul>

        <div className="navbar__lang-wrapper" onClick={() => setShowDropdown(!showDropdown)}>
          <button className="lang-toggle">🌐 Language ▾</button>
          {showDropdown && (
            <div className="lang-dropdown">
              <button className="lang-option">EN</button>
              <button className="lang-option">FA</button>
              <button className="lang-option">PT</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
