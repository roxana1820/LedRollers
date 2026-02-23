import {Link} from 'react-router-dom';
import { SidebarTrigger } from "@/components/ui/sidebar"
import "../styles/Header.css";

const Header = () => {
    return (
        <header className="header">
            
            <Link to="/" className="ledrollers-logo">LedRollers</Link>
           
        </header>
    );
};

export default Header;