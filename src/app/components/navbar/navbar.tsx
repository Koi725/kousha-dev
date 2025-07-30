// src/components/navbar/navbar.tsx

import React from "react";
import { NavItem } from "./navbar.types";
// import "../../tailwind/components/navbar/navbar.css";

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact Me ", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h1 className="navbar__logo">Kousha.Dev</h1>
        <ul className="navbar__menu">
          {navItems.map((item) => (
            <li key={item.href} className="navbar__item">
              <a href={item.href} className="navbar__link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
