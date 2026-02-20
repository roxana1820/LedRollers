import { useState } from 'react';
import "../styles/FeaturedProducts.css";

import whiteShoes from "../assets/white_shoes.png";
import pinkShoes from "../assets/pink_shoes.png";
import blackShoes from "../assets/black_shoes.png";
import pinkShoes4 from "../assets/pink_shoes4.jpeg";
import blueShoes4 from "../assets/blue_shoes4.jpeg";

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            image: whiteShoes,
            name: "Светещи бели ролери",
            oldPrice: "47.00 €.",
            price: "38.00 €"
        },
        {
            id: 2,
            image: pinkShoes,
            name: "Светещи розови ролери",
            oldPrice: "47.00 €.",
            price: "38.00 €"
        },
        {
            id: 3,
            image: blackShoes,
            name: "Светещи черни ролери",
            oldPrice: "47.00 €.",
            price: "38.00 €"
        },
        {
            id: 4,
            image: pinkShoes4,
            name: "Светещи розови ролери - нов модел",
            oldPrice: "65.00 €.",
            price: "60.00 €"
        },
        {
            id: 5,
            image: blueShoes4,
            name: "Светещи сини ролери - нов модел",
            oldPrice: "65.00 €.",
            price: "60.00 €"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const previousProduct = () => {
       
        if (currentIndex === 0) {
           setCurrentIndex(products.length - 1);
        }
        else {
            setCurrentIndex(currentIndex - 1);
        }
    }

   const nextProduct = () => {
        if (currentIndex === products.length - 1) {
            setCurrentIndex(0); 
        } else {
            setCurrentIndex(currentIndex + 1); 
        }
    }

    return (
        <section className="featured-section">
            <h2 className="featured-title">Популярни модели</h2>

            <div className="featured-container">
                
                <button className="arrow-btn left-arrow" onClick={previousProduct}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" 
                    strokeLinejoin="round" className="arrow-icon">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <div className="slider-window">
                    <div
                        className="slider-track"
                        style={{
                             width: `${products.length * 100}%`,
                             transform: `translateX(-${currentIndex * (100 / products.length)}%)`
                        }}
                    >
                        {products.map((product) => (
                            <div className="product-card" key={product.id}>
                                <div className="product-img-wrapper">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="product-image"
                                    />
                                    <div className="heart-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="product-info">
                                    <h3 className="product-name">{product.name}</h3>
                                    <div className="price-box">
                                        <span className="old-price">{product.oldPrice}</span>
                                        <span className="price">{product.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="arrow-btn right-arrow" onClick={nextProduct}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>

            </div>
        </section>
    );
};

export default FeaturedProducts;