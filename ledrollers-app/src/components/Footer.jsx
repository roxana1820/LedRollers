import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contacts" className="site-footer">
      <div className="copyright-block">
        <p className="copyright">© LedRollers {year}</p>
        <p className="rights">All rights reserved</p>
        <p className="contact">Контакти: 0888335992 / 0878345320</p>
        <div className="footer-policies">
          <Link to="/privacy-policy">Политика за поверителност</Link>
          <span> | </span>
          <Link to="/terms">Общи условия и правила</Link>
        </div>
      </div>
      <div className="socials">
        <a href="https://www.facebook.com/p/%D0%BC%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%BD%D0%BA%D0%B8-%D1%81-%D0%BA%D0%BE%D0%BB%D0%B5%D0%BB%D1%86%D0%B0-61557975543887/"
          target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="-1 -1 26 26" fill="#1877F2">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/rollers_shoes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="25" height="25" viewBox="-1 -1 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="ig-glyph-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f09433" />
                <stop offset="25%" stopColor="#e6683c" />
                <stop offset="50%" stopColor="#dc2743" />
                <stop offset="75%" stopColor="#cc2366" />
                <stop offset="100%" stopColor="#bc1888" />
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C8.741 2 8.333 2.014 7.053 2.072 2.695 2.272.273 4.69.073 9.047.014 10.327 0 10.735 0 13.994s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668 2.014 15.259 2 12 2zm0 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 7.735a6.259 6.259 0 100 12.518 6.259 6.259 0 000-12.518zm0 10.355a4.096 4.096 0 110-8.192 4.096 4.096 0 010 8.192zm6.512-10.455a1.464 1.464 0 11-2.928 0 1.464 1.464 0 012.928 0z"
              fill="url(#ig-glyph-gradient)"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
