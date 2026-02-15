import {Link} from 'react-router-dom';
import { SidebarTrigger } from "@/components/ui/sidebar"
import "../styles/Header.css";

const Header = () => {
    return (
        <header className="header">
            
            <Link to="/" className="ledrollers-logo">LedRollers</Link>
            {/* <nav className="nav">
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

                    <li>
                        <div className="navLink" onClick={toggleSubMenu}>
                            Продукти
                            <span className={`arrow ${isSubMenuOpen ? "down" : "right"}`}></span>
                        </div>
                        <ul className={`subMenu ${isSubMenuOpen ? "open" : ""}`}>
                            <li>
                                <div className="subNavLink" onClick={toggleSubSubMenu}>
                                    Светещи маратонки с 4 колелца
                                    <span className={`arrow ${isSubSubMenuOpen ? "down" : "right"}`}></span>
                                </div>
                                <ul className={`subSubMenu ${isSubSubMenuOpen ? "open" : ""}`}>
                                    <li><Link to="/boys" className="subSubNavLink" onClick={toggleMenu}>За момчета</Link></li>
                                    <li><Link to="/girls" className="subSubNavLink" onClick={toggleMenu}>За момичета</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/non-light-shoes" className="subNavLink" onClick={toggleMenu}>Несветещи маратонки</Link></li>
                        </ul>
                    </li>

                    <li><Link to="/about" className="navLink" onClick={toggleMenu}>За нас</Link></li>
                    <li><Link to="/contacts" className="navLink" onClick={toggleMenu}>Контакти</Link></li>
                </ul>
            </nav> */}
        </header>
    );
};

export default Header;