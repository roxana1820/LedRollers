import {Link} from 'react-router-dom';
import "../styles/Hero.css";

import heroImage from "../assets/light_up_shoes.png";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content-wrapper">
                <div className="hero-text-content">
                    <h1 className="hero-title">
                        Открий магията на <br />
                        <span className="text-highlight">светещите</span> маратонки с колелца!
                    </h1>

                    <div className="hero-image-content">
                    <div className="image-glow"></div>
                    <img src={heroImage} alt="Светещи маратонки с колелца" className="main-image"/>

                    </div>
  
                    <div className="hero-buttons">
                        <Link to="/products" className="btn btn-products">
                           Разгледай нашите модели
                        </Link>
                        <Link to="/about" className="btn btn-about">
                           Научи повече
                        </Link>
                    </div>
                </div>

            </div>
        </section>

    );
}

export default Hero;