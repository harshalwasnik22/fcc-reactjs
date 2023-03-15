import React from 'react'
import './Navbar.css'
import './Navbar1'
// const Navbar = () => {
//   return (
//     <>
//     <header class="cd-header">
// 		<div class="header-wrapper">
// 			<div class="logo-wrap">
// 				<a href="#" class="hover-target"><span>your</span>logo</a>
// 			</div>
// 			<div class="nav-but-wrap">
// 				<div class="menu-icon hover-target">
// 					<span class="menu-icon__line menu-icon__line-left"></span>
// 					<span class="menu-icon__line"></span>
// 					<span class="menu-icon__line menu-icon__line-right"></span>
// 				</div>					
// 			</div>					
// 		</div>				
// 	</header>

// 	<div class="nav">
// 		<div class="nav__content">
// 			<ul class="nav__list">
// 				<li class="nav__list-item active-nav"><a href="#" class="hover-target">home</a></li>
// 				<li class="nav__list-item"><a href="#" class="hover-target">studio</a></li>
// 				<li class="nav__list-item"><a href="#" class="hover-target">news</a></li>
// 				<li class="nav__list-item"><a href="#" class="hover-target">contact</a></li>
// 			</ul>
// 		</div>
// 	</div>		
//     </>
//   )
// }

// export default Navbar


import { useState } from 'react';

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleClass = () => {
    setNavActive(!navActive);
  };

  return (
    <>
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

      <div className={`nav ${navActive ? 'nav-active' : ''}`}>
        <div className="nav__content">
        <ul class="nav__list">
          <li class="nav__list-item active-nav"><a href="#" class="hover-target">home</a></li>
          <li class="nav__list-item"><a href="#" class="hover-target">studio</a></li>
          <li class="nav__list-item"><a href="#" class="hover-target">news</a></li>
          <li class="nav__list-item"><a href="#" class="hover-target">contact</a></li>
			</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;