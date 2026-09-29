import React, { useState, useEffect } from 'react';
import './css/style.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav aria-label="Main" className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Brand Logo */}
        <a href="#home" className="navbar__logo" onClick={closeMenu} aria-label="Fintilla home">
          <img src="/logofin.png" alt="Fintilla logo" width={206} height={181} className="logofin" />
          <span className="navbar__brand">Fintilla</span>
        </a>

        {/* Desktop Links */}
        <div className="navbar__links">
          <a href="#home" className="navbar__link">Home</a>
          <a href="#about" className="navbar__link">About</a>
          <a href="#contact" className="navbar__link">Contact</a>
        </div>

        {/* Right Section */}
        <div className="navbar__right">
          <a href="mailto:sherrey@fintilla.com" className="navbar__contact magnetic">
            <span>Get in touch</span>
            {/* <span className="navbar__arrow">↗</span> */}
          </a>

          {/* Hamburger / Close Icon */}
          <button
            className={`navbar__menu ${isOpen ? 'is-active' : ''}`}
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__links">
          <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu} className="mobile-menu__cta">Contact Us</a>
        </div>

  
      </div>
    </nav>
  );
};

export default Navbar;