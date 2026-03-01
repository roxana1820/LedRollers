import { useEffect, useState} from "react"
import { Link } from "react-router-dom"
import "../styles/About.css"


import pinkShoesVideo from "../assets/videos/pink_shoes.MP4"
import blackShoesVideo from "../assets/videos/blackGreen_shoes.mp4"
import wheels from "../assets/putting_wheels.jpeg"
import firstStep from "../assets/steps/1_step.jpeg"
import secondStep from "../assets/steps/2_step.jpeg"
import thirdStep from "../assets/steps/3_step.jpeg"
import fifthStep from "../assets/steps/5_step.jpeg"

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [])

   const [formData, setFormData] = useState({ name: "", email: "",message: ""});

   const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(import.meta.process.env.VITE_CONTACT_US, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Благодарим ви! Съобщението е изпратено успешно.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert(data.message);
    }

  } catch (error) {
    alert("Сървърът не отговаря. За поръчка, моля свържете се с нас на телефон: 088 833 5992.");
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
      description:"Използвайте малката лопатка от комплекта, за да подхванете и извадите колелцата.",
      imgSrc: thirdStep,
      imgAlt: "Стъпка 3: Свалете предните колелца"
    },
    {
      id: 4,
      title: "4. Приберете задните колелца",
      description:"Натиснете бутона, едновременно с това притиснете колелцето навътре и плъзнете предпазният капак.",
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
          <Link to="/products/1" className="about-ctaBtn">
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
            onChange={(e) => setFormData({...formData, name: e.target.value})}
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
            onChange={(e) => setFormData({...formData, email: e.target.value})}
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
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
          </div>

          <button type="submit" className="about-ctaBtn">Изпрати запитване</button>
        </form>
      </section>
    </main>
  )
}

