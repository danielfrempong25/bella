/* eslint-disable jsx-a11y/anchor-is-valid */
// src/components/Header.js
import React from "react";

function Header() {
  return (
    <header className="header">
      <nav className="navbar max-width">
        <ul className="links">
          <li>
            <a href="#">BELLA'S</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li className="language">
            <span className="material-symbols-outlined">Contacts</span>
            <a href="#">English</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li className="btn signin">
            <a href="#">Sign In</a>
          </li>
          <li className="btn join">
            <a href="#">Join</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
