import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from "../data/products";
import { Link} from 'react-router-dom';
import "../styles/ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  const isAutoRoller = product && (product.id === 1 || product.id === 3); 

  const [curentImage, setCurrentImage] = useState(0);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    size: "",
    quantity: 1,
    note: ""
  });

  const[errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

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


const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = {};

  const phoneRegex = /^0[0-9]{9}$/;
  if(!phoneRegex.test(formData.phone)) {
    newErrors.phone = "Моля, въведете валиден телефонен номер!";
  }

  if(formData.fullName.trim().split(" ").length < 2) {
     newErrors.fullName = "Моля, въведете поне две имена!";
  }

  if(formData.email && !formData.email.includes("@")) {
    newErrors.email = "Моля, въведете валиден имейл адрес!";
  }

  if(formData.address.trim().length < 6) {
     newErrors.address = "Моля, въведете точен адрес за доставка!";
  }

   if (!formData.size) {
    newErrors.size = "Моля, изберете размер!";
  }

  if(Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setErrors({});

  try {
    const response = await fetch(import.meta.env.VITE_SUBMIT_ORDER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        CustomerName : formData.fullName,
        CustomerEmail: formData.email,
        Address: formData.address,
        PhoneNumber: formData.phone,
        ItemSize: formData.size,
        Quantity: formData.quantity,
        AdditionalNotes: formData.note,
        Item: product.name,
        OrderDate: new Date().toISOString()
      }),
    });

    if (response.ok) {
      setShowSuccess(true);
      setFormData ({
       fullName:"",
       email: "",
       address: "",
       phone: "",
       size: "",
       quantity: 1,
       note: ""
      });
    } else {
      alert("Сървърът не отговаря. За поръчка, моля свържете се с нас на телефон: 088 833 5992.");
    }

  } catch (error) {
    alert("Сървърът не отговаря. За поръчка, моля свържете с нас на телефон: 088 833 5992.");
  }
};

  const increaseQty = () => {
   setFormData(prev => ({ ...prev,quantity: prev.quantity + 1}));
  };

  const decreaseQty = () => {
   setFormData(prev => ({...prev,quantity: prev.quantity > 1 ? prev.quantity - 1 : 1}));
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
         <p className="old-price">{product.oldPrice}</p>
        <p className="details-price">{product.price}</p>

        <div className="details-description">
          <p className="description-text">
              {product.description ||
               "Светещите маратонки с колелца са перфектната комбинация между стилни спортни обувки и ролери за деца."}
            </p>
           {product.hasRollers !== false && !isAutoRoller &&(
    <>
           <p className="list-title"><strong>Комплектът включва:</strong></p>
             <ul>
               <li>🔸 USB кабел за зареждане на маратонките</li>
               <li>🔸 2 бр. колелца</li>
               <li>🔸 2 бр. предпазни тапички (за ползване без колелца)</li>
               <li>🔸 1 бр. специална лопатка за изваждане на колелцата</li>
             </ul>
           <p className="list-title"><strong>Защо да изберете този модел?</strong></p>
             <ul>
               <li>🔸 Високо качество на изработка</li>
               <li>🔸 Лесно зареждане с USB кабел</li>
               <li>🔸 Удобни за ежедневно носене като стандартни маратонки</li>
               <li>🔸 Модерен и стилен дизайн</li>
             </ul>

            <p className="learn-more-link">
             💡 За въпроси относно поставяне на колелцата, можете да посетите секция <Link to="/about">"Научи повече"</Link>.
            </p>
            </>
           )}

            {isAutoRoller && (
              <>
               <p className="list-title"><strong>Характеристики на модела:</strong></p>
              <ul>
                <li>🔸 Бърз механизъм – колелцата се показват и прибират лесно само със завъртане и натискане на копчето</li>
                <li>🔸 Лесно зареждане с USB кабел</li>
                <li>🔸 Високо качество на изработка</li>
                <li>🔸 Удобни за ежедневно носене като стандартни маратонки</li>
                <li>🔸 Модерен и стилен дизайн</li>
              </ul>
              </>
            )}
          

           {product.hasRollers === false && (
            <>
              <p className="list-title"><strong>Светещи маратонки без колелца</strong></p>
                <ul>
                    <li>🔸 Високо качество на изработка</li>
                    <li>🔸 Лесно зареждане с USB кабел</li>
                    <li>🔸 Удобни за ежедневно носене</li>
                    <li>🔸 Модерен и стилен дизайн</li>
                </ul>
            </>
           )}

        </div>

        <section className="about-card order-section">
          <h2 className="about-h2">Данни за поръчка</h2>
          <form className="about-form" onSubmit={handleSubmit}>
            
            <div className="about-inputGroup">
              <label className="about-label">Две имена</label>
              <input
                type="text"
                className="about-input"
                placeholder="Име и фамилия"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
              {errors.fullName && (
                <span className="error-text">{errors.fullName}</span>
              )}
            </div>

            <div className="about-inputGroup">
              <label className="about-label">Имейл (по желание)</label>
              <input
                type="email"
                className="about-input"
                placeholder="Въведете имейл за потвърждение"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>

            <div className="about-inputGroup">
              <label className="about-label">Адрес за доставка</label>
              <input
                type="text"
                className="about-input"
                placeholder="Град, офис или адрес"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
              {errors.address && (
                <span className="error-text">{errors.address}</span>
              )}
            </div>

            <div className="about-inputGroup">
              <label className="about-label">Телефонен номер</label>
              <input
                type="tel"
                className="about-input"
                placeholder="08XXXXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              {errors.phone && (
                 <span className="error-text">{errors.phone}</span>
               )}
            </div>

            <div className="about-inputGroup">
              <label className="about-label">Изберете размер</label>
              <select
                className="about-input"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              >
                <option value="">-- Изберете размер (стелка в см.) --</option>
                <option value="30">30 (19 см.)</option>
                <option value="31">31 (19,5 см.)</option>
                <option value="32">32 (20 см.)</option>
                <option value="33">33 (20,5 см.)</option>
                <option value="34">34 (21 см.)</option>
                <option value="35">35 (21,5 см.)</option>
                <option value="36">36 (22 см.)</option>
                <option value="37">37 (23 см.)</option>
                <option value="38">38 (24 см.)</option>
                <option value="39">39 (25 см.)</option>
                <option value="40">40 (26 см.)</option>
              </select>
              {errors.size && (
                <span className="error-text">{errors.size}</span>
              )}
            </div>

            <div className="about-inputGroup">
                <label className="about-label">Брой</label>
                <div className="quantity-selector">
                    <button type="button" className="qty-btn" onClick={decreaseQty}>-</button>
                    <div className="qty-number">{formData.quantity}</div>
                    <button type="button" className="qty-btn" onClick={increaseQty}>+</button>
                </div>
            </div>

            <div className="about-inputGroup">
                 <label className="about-label">Бележка за поръчката</label>
                 <textarea
                 className="about-input"
                placeholder="Например: Специална доставка, поръчка на различни модели..."
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
               />
            </div>

            <p className="order-details">📦 Изпращаме поръчките <strong>с преглед и тест.</strong></p>
            <p className="order-place">(Възможност за взимане на поръчки от място.)</p>

            <button type="submit" className="about-ctaBtn order-submit-btn">
              Поръчай сега
            </button>
          </form>

          {showSuccess && (
            <div className="success-overlay">
                <div className="success-modal">
                    <h2>✅ Поръчката е изпратена успешно!</h2>
                    <p>Ще се свържем с вас възможно най-скоро.</p>
                    <button className="about-ctaBtn"
                    onClick={() => setShowSuccess(false)}
                    >Затвори</button>
                </div>
            </div>
          )}

        <div className="quick-order-container">
            <div className="quick-order-divider">
                <span>Или</span>
            </div>
            <h3 className="quick-order-title">
                <span className="phone-icon">📞</span> Бърза поръчка чрез телефон
            </h3>

            <div className="phone-links">
                 <a href="tel:+359888335992" className="phone-number">0888335992</a>
                <a href="tel:+359878345320" className="phone-number">0878345320</a>
            </div>
            <p className="quick-order-note">Работно време:
                Понеделник - Неделя (09:00ч. - 21:00ч.)
            </p>
        </div>
        
          
        </section>
      </div>
    </div>
  );
}