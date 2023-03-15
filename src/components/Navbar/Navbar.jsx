import React from 'react'
import './Navbar.css'
import { useState } from 'react';

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleClass = () => {
    setNavActive(!navActive);
  };

  return (
    <>
      <div className={`${navActive ? 'nav-active' : ''}`}>
      <header className="cd-header">
        <div className="header-wrapper">
          <div className="logo-wrap">
            <a href="#" className="hover-target">
              <span>your</span>logo
            </a>
          </div>
          <div className="nav-but-wrap">
            <div className="menu-icon hover-target" onClick={toggleClass}>
              <span className="menu-icon__line menu-icon__line-left"></span>
              <span className="menu-icon__line"></span>
              <span className="menu-icon__line menu-icon__line-right"></span>
            </div>
          </div>
        </div>
      </header>

      <div className="nav">
        <div className="nav__content">
        <ul className="nav__list">
          <li className="nav__list-item active-nav"><a href="#" className="hover-target">home</a></li>
          <li className="nav__list-item"><a href="#" className="hover-target">studio</a></li>
          <li className="nav__list-item"><a href="#" className="hover-target">news</a></li>
          <li className="nav__list-item"><a href="#" className="hover-target">contact</a></li>
			  </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;