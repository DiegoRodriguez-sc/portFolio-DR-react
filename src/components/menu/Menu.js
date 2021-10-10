import React from "react";

//styles
import "./menu.css";

const Menu = ( {toggleMenu, menuShow} ) => {
  return (
    <div className={`menu-container ${menuShow}`}>
      <div className="overlay" />
      <div className="menu-items">
        <ul>
          <li>
            <a href="#welcome-section" onClick={toggleMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
