import { useEffect, useState } from 'react';
import "../styles/Products.css";

import whiteShoes from "../assets/white_shoes.png";
import pinkShoes from "../assets/pink_shoes.png";
import blackShoes from "../assets/black_shoes.png";
import pinkShoes4 from "../assets/pink_shoes4.jpeg";
import blueShoes4 from "../assets/blue_shoes4.jpeg";

const products = [
  {
    id: 1,
    name: "Светещи розови ролери",
    price: "38.00 € ",
    oldPrice: "47.00 €",
    image: pinkShoes4,
    isNew: true,
    category: 'girl' 
  },
  {
    id: 2,
    name: "Светещи бели ролери",
    price: "47.00 € ",
    oldPrice: "55.00 €",
    image: whiteShoes,
    category: 'girl' 
  },
  {
    id: 3,
    name: "Светещи сини ролери",
    price: "38.00 € ",
    oldPrice: "47.00 €",
    image: blueShoes4,
    isNew: true,
    category: 'boy'
  },
  {
    id: 4,
    name: "Светещи розови ролери",
    price: "38.00 € ",
    oldPrice: "47.00 €",
    image: pinkShoes,
    category: 'girl'
  },
  {
    id: 5,
    name: "Черни светещи ролери",
    price: "60.00 € ",
    oldPrice: "65.00 €",
    image: blackShoes,
    isNew: true,
    category: 'boy'
  }
];

export default function Products({ categoryFilter }) {
  const [sortOrder, setSortOrder] = useState('default');
  

  const getInitialProducts = () => {
    if (!categoryFilter) 
      return products; 
    return products.filter(p => p.category === categoryFilter);
  };

  const [sortedProducts, setSortedProducts] = useState(getInitialProducts);


  useEffect(() => {
    setSortedProducts(getInitialProducts());
    setSortOrder('default'); 
  }, [categoryFilter]);


  const handleSort = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    
    let sorted = [...getInitialProducts()];
    
    if (value === 'Цена: Ниска към висока') {
      sorted.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
        return priceA - priceB;
      });
    } else if (value === 'Цена: Висока към ниска') {
      sorted.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
        const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
        return priceB - priceA;
      });
    }
    
    setSortedProducts(sorted);
  };

  useEffect(() => {
    const cards = document.querySelectorAll('.product-card');
    if (!cards || cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [sortedProducts]);

  return (
    <div className="shop">
      <div className="shop-container">
        
        <div className="top-bar">
          <h2 className="models-heading">
            {categoryFilter === 'boy' ? 'Модели за момчета' : 
             categoryFilter === 'girl' ? 'Модели за момичета' : 
             'Всички модели'}
          </h2>

          <div className="sort-container">
            <select 
              className="sort-select" 
              onChange={handleSort}
              value={sortOrder} 
            >
              <option value="default" disabled>Подреди по...</option>
              <option value="Цена: Ниска към висока">Цена: Ниска към висока</option>
              <option value="Цена: Висока към ниска">Цена: Висока към ниска</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-card"
                style={{ '--i': index }}
              >
                {product.isNew && <span className="badge">Ново</span>}
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="old-price">{product.oldPrice}</p>
                <p className="price">{product.price}</p>
              </div>
            ))
          ) : (
            <p className="no-products">Няма намерени продукти в тази категория.</p>
          )}
        </div>
      </div>
    </div>
  );
}