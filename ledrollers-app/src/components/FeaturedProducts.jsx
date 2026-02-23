import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from "../data/products";
import '../styles/FeaturedProducts.css';

const FeaturedProducts = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(1);

    const navigate = useNavigate();

    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth >= 900) setVisible(3);
            else if (window.innerWidth >= 600) setVisible(2);
            else setVisible(1);
        };
        updateVisible();
        window.addEventListener('resize', updateVisible);
        return () => window.removeEventListener('resize', updateVisible);
    }, []);

    const prev = () => setCurrentIndex(i => i === 0 ? products.length - visible : i - 1);
    const next = () => setCurrentIndex(i => i >= products.length - visible ? 0 : i + 1);

    const cardWidth = `calc(${100 / visible}% - ${16 * (visible - 1) / visible}px)`;
    const trackOffset = `calc(-${currentIndex} * (${100 / visible}% + ${16 / visible * (visible - 1) / (visible)}px))`;

    return (
        <div className="featured-products">
            <h2 className="featured-products-heading">Популярни модели</h2>

            <div className="featured-products-carousel">
                <button onClick={prev} className="featured-products-button">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="3">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                </button>

                <div className="featured-products-window">
                    <div
                        className="featured-products-track"
                        style={{
                            transform: `translateX(calc(-${currentIndex} * (100% / ${visible} + ${16 / visible}px)))`
                        }}
                    >
                        {products.map((product) => (
                            <div
                                className="featured-products-card"
                                key={product.id}
                                onClick={() => navigate(`/product/${product.id}`)}
                                style={{ cursor: "pointer",flex: `0 0 calc(${100 / visible}% - ${16 * (visible - 1) / visible}px)` }}
                            >
                                {product.isNew && <span className="featured-products-badge">Ново</span>}
                                <div className="featured-products-image-wrapper">
                                    <img src={product.images[0]} alt={product.name} />
                                </div>
                                <h3 className="featured-products-title">{product.name}</h3>
                                <p className="featured-products-old-price">{product.oldPrice}</p>
                                <p className="featured-products-price">{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={next} className="featured-products-button">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="3">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </button>
            </div>

            <div className="featured-products-dots">
                {products.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(Math.min(i, products.length - visible))}
                        className={`featured-products-dot ${i === currentIndex ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;