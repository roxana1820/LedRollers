import { useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/About.css"

import presentShoes from "../assets/present_shoes.MP4"
import heroImage from "../assets/light_up_shoes.png"
import pinkShoes4 from "../assets/pink_shoes4.jpeg"
import pinkShoesVideo from "../assets/pink_shoes.MP4"

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [])

  const steps = [
    {
      id: 1,
      title: "1. Поставете предните колелца",
      description: "Предните колелца се намират в комплекта. При щракване, те са готови за използване.",
      imgSrc: heroImage,
      imgAlt: "Стъпка 1: Поставете предните колелца",
    },
    {
      id: 2,
      title: "2. Натиснете бутона за задните колелца",
      description: "Бутонът е  разположен в задната част на маратонките. Колелцата изкачат мигновено.",
      imgSrc: heroImage,
      imgAlt: "Стъпка 2: Натиснете бутона",
    },
    {
      id: 3,
      title: "3. Свалете предните колелца",
      description:"Използвайте малката лопатка от комплекта, за да подхванете и извадите колелцата.",
      imgSrc: heroImage,
      imgAlt: "Стъпка 3: Свалете предните колелца"
    },
    {
      id: 4,
      title: "4. Приберете задните колелца",
      description:"Натиснете бутона, едновременно с това притиснете колелцето навътре и плъзнете предпазният капак.",
      imgSrc: heroImage,
      imgAlt: "Стъпка 4: Приберете задните колелца"
    },
    {
      id: 5,
      title: "5. Носете маратонките без колелца",
      description: "Вече можете да изпозлвате обувките като обикновени маратонки.",
      imgSrc: heroImage,
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
          <h2 className="about-h2">Нашият опит</h2>
          <p className="about-p">
            Повече от десетилетие в LedRollers се стремим да създаваме обувки,
            които носят радост и движение. Комбинираме удобство, безопасност и
            впечатляващ ефект със светлини, за да превърнем всяка разходка в
            приключение.
          </p>
          <p className="about-p">
            Моделите ни могат да се носят като ежедневни маратонки, а с едно
            движение се превръщат в ролери. Идеални са за игра навън, за
            споделени моменти и за много усмивки.
          </p>
        </div>

        <div className="about-card about-imageCard">
          <img
            className="about-image"
            src={heroImage}
            alt="Светещи маратонки с колелца"
            loading="lazy"
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
          Светлинните режими добавят стил, а стабилната конструкция дава увереност при всяко движение.
           Ако имате нужда от помощ с избора на размер или допълнителна информация, нашият екип е на ваше разположение. 
        </p>
        <div className="about-noteActions">
          <a className="about-link" href="#contacts">
            Към контакти
          </a>
        </div>
      </section>
    </main>
  )
}

