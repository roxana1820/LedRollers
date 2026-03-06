import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { products } from "../data/products";
import { Link } from 'react-router-dom';
import "../styles/ProductDetails.css";

export default function ProductDetails() {

  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const sliderRef = useRef(null);
  const isAutoRoller = product && (product.id === 4 || product.id === 5);

  const [currentImage, setCurrentImage] = useState(0);

  const scrollToImage = (index) => {
    setCurrentImage(index);
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const scrollAmount = slider.clientWidth * index;
      slider.scrollTo({
        left: scrollAmount,
      });
    }
  };


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    size: "",
    quantity: 1,
    note: ""
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!product) return <p>Продуктът не е намерен.</p>;

  const nextImage = () => {
    const nextIndex = currentImage === product.images.length - 1 ? 0 : currentImage + 1;
    scrollToImage(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = currentImage === 0 ? product.images.length - 1 : currentImage - 1;
    scrollToImage(prevIndex);
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const width = sliderRef.current.clientWidth;
      const activeIndex = Math.round(scrollPosition / width);

      if (activeIndex !== currentImage) {
        setCurrentImage(activeIndex);
      }
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    const phoneRegex = /^0[0-9]{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Моля, въведете валиден телефонен номер!";
    }

    if (formData.fullName.trim().split(" ").length < 2) {
      newErrors.fullName = "Моля, въведете поне две имена!";
    }

    if (formData.email && !formData.email.includes("@")) {
      newErrors.email = "Моля, въведете валиден имейл адрес!";
    }

    if (formData.address.trim().length < 6) {
      newErrors.address = "Моля, въведете точен адрес за доставка!";
    }

    if (!formData.size) {
      newErrors.size = "Моля, изберете размер!";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);
    try {
      const response = await fetch(import.meta.env.VITE_SUBMIT_ORDER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          CustomerName: formData.fullName,
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
        setFormData({
          fullName: "",
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
    } finally {
      setIsLoading(false);
    }
  };

  const increaseQty = () => {
    setFormData(prev => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const decreaseQty = () => {
    setFormData(prev => ({ ...prev, quantity: prev.quantity > 1 ? prev.quantity - 1 : 1 }));
  };

  return (
    <div className="product-details">
      <div className="details-media">
        <div className="image-gallery">

          <div className="gallery-frame">
            <button className="arrow-left" onClick={prevImage} type="button">◀</button>

            <div
              className="gallery-slider"
              ref={sliderRef}
              onScroll={handleScroll}
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
                className={`thumbnail ${currentImage === index ? "active" : ""}`}
                onClick={() => scrollToImage(index)}
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
          {product.hasRollers !== false && !isAutoRoller && (
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
              <label htmlFor="fullName" className="about-label">Две имена</label>
              <input
                id="fullName"
                name="fullName"
                autoComplete="name"
                type="text"
                className="about-input"
                placeholder="Име и фамилия"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
              {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </div>

            <div className="about-inputGroup">
              <label htmlFor="email" className="about-label">Имейл (по желание)</label>
              <input
                id="email"
                name="email"
                autoComplete="email"
                type="email"
                className="about-input"
                placeholder="Въведете имейл за потвърждение"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="about-inputGroup">
              <label htmlFor="address" className="about-label">Адрес за доставка</label>
              <input
                id="address"
                name="address"
                autoComplete="street-address"
                type="text"
                className="about-input"
                placeholder="Град, офис или адрес"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
              {errors.address && <span className="error-text">{errors.address}</span>}
            </div>

            <div className="about-inputGroup">
              <label htmlFor="phone" className="about-label">Телефонен номер</label>
              <input
                id="phone"
                name="phone"
                autoComplete="tel"
                type="tel"
                className="about-input"
                placeholder="08XXXXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div className="about-inputGroup">
              <label className="about-label">Изберете размер</label>
              <select
                className="about-input"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              >
                <option value="">-- Изберете размер (стелка в см.) --</option>
                {product.hasRollers === false ? (
                  <>
                    <option value="25">25.5 (15,7 см.)</option>
                    <option value="26">26.5 (16,3 см.)</option>
                    <option value="27">27 (17 см.)</option>
                    <option value="28">28 (17,5 см.)</option>
                    <option value="29">29 (18,3 см.)</option>
                    <option value="30">30 (19 см.)</option>
                    <option value="31">31 (19,5 см.)</option>
                    <option value="32">32 (20,3 см.)</option>
                    <option value="33">33.5 (21 см.)</option>
                    <option value="34">34 (21,5 см.)</option>
                    <option value="35">35 (22 см.)</option>
                    <option value="35.5">35.5 (22,5 см.)</option>
                    <option value="36">36.5 (23 см.)</option>
                  </>
                ) : (
                  <>
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
                </>
                )}
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
            <p className="order-place">📍 Възможност за взимане на поръчки от място.</p>

            <button type="submit" className="about-ctaBtn order-submit-btn"
              disabled={isLoading}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              {isLoading ? (
                <>
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-300 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span>Изпращане...</span>
                </>
              ) : (
                "Поръчай сега"
              )}
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