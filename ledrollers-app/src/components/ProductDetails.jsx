import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from "../data/products";
import "../styles/ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  // Използваме името 'curentImage', както е в твоя код
  const [curentImage, setCurrentImage] = useState(0);

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    size: ""
  });

  if (!product) return <p>Продуктът не е намерен.</p>;

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order:", formData);
    alert("Поръчката е изпратена успешно!");
    setFormData({
      fullName: "",
      address: "",
      phone: "",
      size: ""
    });
  };

  return (
    <div className="product-details">
      <div className="details-media">
        <div className="image-gallery">
          
          <div className="gallery-frame">
            <button className="arrow-left" onClick={prevImage} type="button">◀</button>
        
            <div 
              className="gallery-slider" 
              style={{ transform: `translateX(-${curentImage * 100}%)` }}
            >
              {product.images.map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`${product.name} ${index}`} 
                  className="details-image" 
                />
              ))}
            </div>

            <button className="arrow-right" onClick={nextImage} type="button">▶</button>
          </div>

          <div className="thumbnails">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                className={`thumbnail ${curentImage === index ? "active" : ""}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>

        </div>
      </div>

      <div className="details-content">
        <h1 className="details-title">{product.name}</h1>
        <p className="details-price">{product.price}</p>

        <section className="about-card order-section">
          <h2 className="about-h2">Данни за поръчка</h2>
          <form className="about-form" onSubmit={handleSubmit}>
            
            <div className="about-inputGroup">
              <label className="about-label">Две имена</label>
              <input
                type="text"
                className="about-input"
                placeholder="Име и фамилия"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div className="about-inputGroup">
              <label className="about-label">Адрес за доставка</label>
              <input
                type="text"
                className="about-input"
                placeholder="Град, офис или адрес"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <div className="about-inputGroup">
              <label className="about-label">Телефонен номер</label>
              <input
                type="tel"
                className="about-input"
                placeholder="08XXXXXXXX"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="about-inputGroup">
              <label className="about-label">Изберете размер</label>
              <select
                className="about-input"
                required
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              >
                <option value="">-- Изберете размер --</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
              </select>
            </div>

            <button type="submit" className="about-ctaBtn order-submit-btn">
              Поръчай сега
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}