import React from 'react';
import { Link } from 'react-router-dom';
import NavbarCSS from '../css-modules/Navbar.module.css';

function Navbar() {
  return (
    <nav className={NavbarCSS.flex}>
      <div className={NavbarCSS.logo}>Math Magicians</div>
      <ul className={NavbarCSS.navlist}>
        <li>
          <Link className={NavbarCSS.navLink} to="/">Home</Link>
        </li>
        <li>
          <Link className={NavbarCSS.navLink} to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link className={NavbarCSS.navLink} to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
