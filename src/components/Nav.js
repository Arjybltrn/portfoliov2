// Nav.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Nav.css'; // Import the CSS file

export default function Nav() {
  return (
    <div className='navbar'>
      <nav className='navbar'>
        <NavLink to="/" exact activeClassName='active'>
          / home 
        </NavLink>
        <NavLink to="/about" activeClassName='active'>
          bio
        </NavLink>
        <NavLink to="/projects" activeClassName='active'>
          projects
        </NavLink>
        <NavLink to="/experience" activeClassName='active'>
          professional experience
        </NavLink>
      </nav>
    </div>
  );
}
