import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          <NavLink to="/" className="navbar__logo">
            NAINAKRUTHI
          </NavLink>

          <button className="navbar__burger" onClick={() => setOpen(!open)} aria-label="menu">
            <span /><span /><span />
          </button>

          <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
            <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  );
}