import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/About.css"


import pinkShoesVideo from "../assets/videos/pink_shoes.MP4"
import blackShoesVideo from "../assets/videos/blackGreen_shoes.mp4"
import wheels from "../assets/putting_wheels.jpeg"
import firstStep from "../assets/steps/1_step.jpeg"
import secondStep from "../assets/steps/2_step.jpeg"
import thirdStep from "../assets/steps/3_step.jpeg"
import fifthStep from "../assets/steps/5_step.jpeg"

export default function About() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contacts') {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch(import.meta.env.VITE_CONTACT_US, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(data.message);
      }

    } catch (error) {
      alert("Сървърът не отговаря. За поръчка, моля свържете се с нас на телефон: 088 833 5992.");
    } finally {
      setIsLoading(false);
    }
  };

  const steps = [
    {
      id: 1,
      title: "1. Поставете предните колелца",
      description: "Предните колелца се намират в комплекта. При щракване, те са готови за използване.",
      imgSrc: firstStep,
      imgAlt: "Стъпка 1: Поставете предните колелца",
    },
    {
      id: 2,
      title: "2. Натиснете бутона за задните колелца",
      description: "Бутонът е  разположен в задната част на маратонките. Колелцата изкачат мигновено.",
      imgSrc: secondStep,
      imgAlt: "Стъпка 2: Натиснете бутона",
    },
    {
      id: 3,
      title: "3. Свалете предните колелца",
      description: "Използвайте малката лопатка от комплекта, за да подхванете и извадите колелцата.",
      imgSrc: thirdStep,
      imgAlt: "Стъпка 3: Свалете предните колелца"
    },
    {
      id: 4,
      title: "4. Приберете задните колелца",
      description: "Натиснете бутона, едновременно с това притиснете колелцето навътре и плъзнете предпазният капак.",
      imgSrc: wheels,
      imgAlt: "Стъпка 4: Приберете задните колелца"
    },
    {
      id: 5,
      title: "5. Носете маратонките без колелца",
      description: "Вече можете да изпозлвате обувките като обикновени маратонки.",
      imgSrc: fifthStep,
      imgAlt: "Стъпка 5. Носете ги като обикновени маратонки"
    }

  ]

  return (
    <main className="about-page">
      <header className="about-header">
        <h1 className="about-title">Научи повече за нас</h1>
      </header>

      <section className="about-card about-media">
        <div className="about-videoWrap">
          <video
            className="about-video"
            src={pinkShoesVideo}
            controls
            preload="metadata"
            playsInline
          />
        </div>
        <p className="about-caption">Виж как LedRollers оживяват!</p>
      </section>

      <section className="about-section about-split">
        <div className="about-card about-textCard">
          <h2 className="about-h2">За нас</h2>
          <p className="about-p">
            Ние в LedRollers се стремим да създаваме обувки,
            които носят радост и усмивки, комбинирайки удобство и безопасност.
          </p>
          <p className="about-p">
            Предлагаме модели в различни цветове, <strong>със</strong> и <strong>без колелца</strong>. Като тези с колелца могат да се носят и
            като ежедневни маратонки, а с натискане на бутона се превръщат в ролери.
            Идеални са за игра навън или просто нормална разходка.
          </p>
        </div>

        <div className="about-card about-imageCard">
          <video
            className="about-video"
            src={blackShoesVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>

      <section className="about-card about-how">
        <h2 className="about-h2">Лесно поставяне и сваляне на колелцата в 5 стъпки</h2>

        <div className="about-howGrid">
          {steps.map((step) => (
            <div key={step.id} className="about-step">
              <div className="about-stepMedia">
                <img
                  className="about-stepImg"
                  src={step.imgSrc}
                  alt={step.imgAlt}
                  loading="lazy"
                />
              </div>
              <div className="about-stepText">
                <p className="about-stepTitle">{step.title}</p>
                <p className="about-stepDesc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="about-ctaRow">
          <Link to="/products" className="about-ctaBtn">
            Разгледай всички модели
          </Link>
        </div>
      </section>

      <section className="about-card about-note">
        <h2 className="about-h2">За LedRollers</h2>
        <p className="about-p">
          В комплекта са включени <strong>две колелца</strong>, <strong>лопатка</strong> и <strong>USB кабел</strong>, с който се зареждат маратонките.
          Светят в 9 различни режима като цветът се сменя с лесно натискане на бутона.
          При интерес или нужда от допълнителна информация, можете да се свържете с нас.
        </p>
        <div className="about-noteActions">
          <a className="about-link" href="#contacts">
            Към контакти
          </a>
        </div>
      </section>

      <section id="contacts" className="about-card about-contactSection">
        <h2 className="about-h2">Свържете се с нас</h2>
        <form className="about-form" onSubmit={handleSubmit}>
          <div className="about-inputGroup">
            <label className="about-label">Две имена</label>
            <input
              type="text"
              className="about-input"
              placeholder="Име и фамилия"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="about-inputGroup">
            <label className="about-label">Имейл адрес</label>
            <input
              type="email"
              className="about-input"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="about-inputGroup">
            <label className="about-label">Съобщение</label>
            <textarea
              className="about-input about-textarea"
              placeholder="Напишете вашето съобщение тук..."
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="about-ctaBtn"
            disabled={isLoading}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
          >
            {isLoading ? (
              <>
                <svg aria-hidden="true" style={{ width: '24px', height: '24px' }} className="text-gray-300 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span>Изпращане...</span>
              </>
            ) : (
              "Изпрати запитване"
            )}
          </button>
        </form>
        
        {showSuccess && (
          <div className="success-overlay">
              <div className="success-modal">
                  <h2>✅ Запитването е изпратено успешно!</h2>
                  <p>Ще се свържем с вас възможно най-скоро.</p>
                  <button className="about-ctaBtn"
                  onClick={() => setShowSuccess(false)}
                  >Затвори</button>
              </div>
          </div>
        )}

      </section>
    </main>
  )
}

