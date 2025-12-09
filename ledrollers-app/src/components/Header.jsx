import {Link} from 'react-router-dom';
import {useState} from 'react';
import "../styles/Header.css";


const Header = () => {
    
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };


    return (
     <header className="header">
        <nav className="nav">

            <div className="menu-icon" onClick={toggleMenu}>
                <span className={isMenuOpen ? "bar active" : "bar"}></span>
                <span className={isMenuOpen ? "bar active" : "bar"}></span>
                <span className={isMenuOpen ? "bar active" : "bar"}></span>
            </div>

            <Link to="/" className="ledrollers-logo">LedRollers</Link>

            <div
                className={`overlay ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}>
            </div>

            <ul className={`navList ${isMenuOpen ? "open" : ""}`}>
               
               <li className="menu-header">Меню</li>
        

                <li><Link to="/" className="navLink" onClick={toggleMenu}>Продукти</Link></li>
                <li><Link to="/" className="navLink" onClick={toggleMenu}>За нас</Link></li>
                <li><Link to="/" className="navLink" onClick={toggleMenu}>Контакти</Link></li>
            </ul>
        </nav>
     </header>
    );
};

export default Header;