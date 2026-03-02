import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from "../data/products";
import '../styles/FeaturedProducts.css';

const FeaturedProducts = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(1);
    const scrollRef = useRef(null);
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

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, offsetWidth } = scrollRef.current;
            const card = scrollRef.current.querySelector('.featured-products-card');
            if (!card) return;
            
            const itemFullWidth = card.offsetWidth + 16; 
            const index = Math.round(scrollLeft / itemFullWidth);
            
            if (index !== currentIndex) {
                setCurrentIndex(index);
            }
        }
    };

    const scrollTo = (index) => {
        if (scrollRef.current) {
            const card = scrollRef.current.querySelector('.featured-products-card');
            if (!card) return;
            const itemFullWidth = card.offsetWidth + 16;

            scrollRef.current.scrollTo({
                left: index * itemFullWidth,
                behavior: 'smooth'
            });
        }
    };

    const prev = () => {
        const nextIndex = currentIndex <= 0 ? products.length - visible : currentIndex - 1;
        scrollTo(nextIndex);
    };

    const next = () => {
        const nextIndex = currentIndex >= products.length - visible ? 0 : currentIndex + 1;
        scrollTo(nextIndex);
    };

    return (
        <div className="featured-products">
            <h2 className="featured-products-heading">Популярни модели</h2>

            <div className="featured-products-carousel">
                <button onClick={prev} className="featured-products-button">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="3">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                </button>

                <div 
                    className="featured-products-window" 
                    ref={scrollRef} 
                    onScroll={handleScroll}
                >
                    <div className="featured-products-track">
                        {products.map((product) => (
                            <div
                                className="featured-products-card"
                                key={product.id}
                                onClick={() => navigate(`/product/${product.id}`)}
                                style={{ 
                                    flex: `0 0 calc(${100 / visible}% - ${(16 * (visible - 1)) / visible}px)` 
                                }}
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
                    i <= products.length - visible && (
                        <button
                            key={i}
                            onClick={() => scrollTo(i)}
                            className={`featured-products-dot ${i === currentIndex ? 'active' : ''}`}
                        />
                    )
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;