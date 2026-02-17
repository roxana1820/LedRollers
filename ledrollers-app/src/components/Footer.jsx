import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contacts" className="site-footer">
      <div className="footer-left">
        <div className="copyright-block">
          <p className="copyright">© LedRollers {year}</p>
          <p className="rights">All rights reserved.</p>
          <p className="contact">Контакти: 0888335992 / 0878345320</p>
        </div>
      </div>

      <div className="footer-right">
        <div className="socials">
          <a href="https://www.facebook.com/p/%D0%BC%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%BD%D0%BA%D0%B8-%D1%81-%D0%BA%D0%BE%D0%BB%D0%B5%D0%BB%D1%86%D0%B0-61557975543887/" 
          target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
          <a href="#" aria-label="Instagram">IG</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
