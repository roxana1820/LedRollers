import {Link} from 'react-router-dom';
import { SidebarTrigger } from "@/components/ui/sidebar"
import "../styles/Header.css";

const Header = () => {
    return (
        <header className="header">
            <a href="/" className="ledrollers-logo"onClick={(e) => {
             e.preventDefault();
            window.location.assign("/"); 
            }}>LedRollers </a> 
        </header>
    );
};

export default Header;