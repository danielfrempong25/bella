/* eslint-disable jsx-a11y/anchor-is-valid */
// src/components/Hero.js
import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="content max-width">
        <h2>Bella's Grooming Service</h2>
        <div className="search-field">
          <input type="text" placeholder="Search for any service..." />
          <span className="material-symbols-outlined search-btn">search</span>
        </div>
        <div className="popular-tags">
          Popular:
          <ul className="link">
            <li>
              <a href="#">Shower</a>
            </li>
            <li>
              <a href="#">Nail trimming</a>
            </li>
            <li>
              <a href="#">Teeth Brushing</a>
            </li>
            <li>
              <a href="#">Treats</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
