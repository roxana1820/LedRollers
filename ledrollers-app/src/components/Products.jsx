import { useState } from 'react';
import "../styles/Products.css";

import whiteShoes from "../assets/white_shoes.png";
import pinkShoes from "../assets/pink_shoes.png";
import blackShoes from "../assets/black_shoes.png";
import pinkShoes4 from "../assets/pink_shoes4.jpeg";
import blueShoes4 from "../assets/blue_shoes4.jpeg";

const products = [
  {
    id: 1,
    name: "Светещи бели ролери",
    price: "38.00 € ",
    oldPrice: "47.00 €",
    image: pinkShoes4,
    isNew: true
  },
  {
    id: 2,
    name: "Светещи бели ролери",
    price: "47.00 € ",
    oldPrice: "55.00 €",
    image:whiteShoes
  },
  {
    id: 3,
    name: "Светещо сини ролери",
    price: "38.00 € ",
    oldPrice: "47.00 €",
    image:blueShoes4,
    isNew: true
  },
  {
    id: 4,
    name: "Светещи розови ролери",
    price: "38.00 € ",
    oldPrice: "47.00 €",
    image:pinkShoes
  },
  {
    id: 5,
    name: "Розови светещи ролери",
    price: "60.00 € ",
    oldPrice: "65.00 €",
    image:blackShoes,
    isNew: true
  }
];

export default function Products() {
  return (
    <div className="shop">
      <div className="shop-container">
        
        <div className="top-bar">
          <button className="filter-btn">Филтри ⬇</button>

          <select className="sort-select">
            <option>Подреди по</option>
            <option>Цена: Ниска към висока</option>
            <option>Цена: Висока към ниска</option>
          </select>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              
              {product.isNew && <span className="badge">Ново</span>}

              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>

              <p className="old-price">{product.oldPrice}</p>
              <p className="price">{product.price}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
