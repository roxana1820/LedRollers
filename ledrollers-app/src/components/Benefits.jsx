import shoeImage1 from "../assets/benefit_shoe.png";  
import safetyImage from "../assets/benefit_safety.png";
import chargingImage from "../assets/benefit_charge.png";
import '../styles/Benefits.css';
const Benefits = () => {

        const benefits = [
            {
                id: 1,
                title: "Светят в 9 различни режима",
                image: shoeImage1,
                alt: "Светещи маратонки"
            },
            {
                id: 2,
                title: "Безопасни и удобни за носене без колелца",
                image: safetyImage,
                alt: "Безопасност"
            },
            {
                id: 3,
                title: "Лесни за употреба и зареждане",
                image: chargingImage,
                alt: "Зареждане"
            }
        ];
    
    return (
    
        <section className="benefits-section">
            <h2 className="benefits-title">
                Защо да избереш LedRollers?
            </h2>
            <div className="benefits-content-wrapper">
                {benefits.map((item) => (

                <div key={item.id} className="benefit-item">
                    <div className="img-wrapper">
                        <img src={item.image} alt={item.alt} className="benefit-icon"/>
                    </div>
                
                <p className="benefit-text">
                    {item.title.split('\n').map((line, index) => (
                                <span key={index}>
                                    {line}
                                    {index === 0 && <br />}
                                </span>))}
                </p>
            </div>
            ))}
            </div>
        </section>
    );
}

export default Benefits;