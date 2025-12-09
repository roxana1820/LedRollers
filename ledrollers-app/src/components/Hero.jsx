import {Link} from 'react-router-dom';
import "../styles/Hero.css";

import heroImage from "../assets/hero-image.jpeg";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-background"></div>

            <div className="hero-content-wrapper">
                <div className="hero-text-content">
                    <h1 className="hero-title">
                        Открий магията на светещите маратонки!
                    </h1>
                    <p className="hero-description">
                        Най-новите светещи маратонки с колелца са тук, за да осветят всяка твоя стъпка. 
                    </p>
                    <div className="hero-buttons">
                        <Link to="/products" className="btn btn-primary">
                           Разгледай нашите модели
                        </Link>
                        <Link to="/about" className="btn btn-secondary">
                           Научи повече за нас
                        </Link>
                    </div>
                </div>

                <div className="hero-image-content">
                    <div className="image-glow"></div>
                    <img src={heroImage} alt="Светещи маратонки с колелца" className="main-image"/>

                    <div className="image-mask"></div>
                </div>
            </div>
        </section>

    );
}

export default Hero;