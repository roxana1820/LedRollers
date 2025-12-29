import { Link } from 'react-router-dom';
import "../styles/MediaGallery.css";

import presentShoes from "../assets/present_shoes.MP4";
import whiteShoes from "../assets/white_shoes2.png";
import pinkShoes from "../assets/pink_shoes2.png";
import blackShoes from "../assets/black_shoes2.png";
import pinkShoes4 from "../assets/pink_shoes44.png";
import whiteShoes4 from "../assets/white_shoes4.png";

const MediaGallery = () => {

    const videoItem = {
        id: 1,
        src: presentShoes,
        text: "Разгледай"
    };

    const twoWheelsItems = [
        {
            id: 2,
            src: whiteShoes,
            alt: "Бял модел с 2 колелца",
            linkTo: '/products/white_shoes2',
            text: "Разгледай модела"
        },
        {
            id: 3,
            src: pinkShoes,
            alt: "Розови модели с 2 колелца",
            linkTo: '/product/pink_shoes2',
            text: "Розов модел (2 колелца)"
        },
        {
            id: 4,
            src: blackShoes,
            alt: "Черни модели с 2 колелца",
            linkTo: '/product/black_shoes2',
            text: "Черен модел (2 колелца)"
        }
    ];
   
    const fourWheelItems = [
        {
            id: 5,
            src: pinkShoes4, 
            alt: "Розови с 4 колелца",
            linkTo: '/product/pink_shoes44',
            text: "Розов модел (4 колелца)"
        },
        {
            id: 6,
            src: whiteShoes4,
            alt: "Бели с 4 колелца",
            linkTo: '/product/white_shoes4',
            text: "Бял модел (4 колелца)"
        }
    ];

    return (
      <section className="gallery-section">
        <div className="section-divider"></div>
        <h3 className="gallery-title">Лесна трансформация от обувки към ролери</h3>

        {/* Video Item */}
        <div className="gallery-item video-item">
            <div className="media-wrapper video-wrapper">
                <video
                src={videoItem.src}
                autoPlay
                loop
                muted
                playsInline
                className="media-content"
                />
                <div className="overlay">
                    <span>{videoItem.text}</span>
                </div>
            </div>
        </div>
         
        {/* Two-Wheel Items */}
        <h4 className="category-title">Модели с 2 колелца</h4>
        <div className="gallery-grid">
            {twoWheelsItems.map((item) => (
                <Link to={item.linkTo} key={item.id} className="gallery-item">
                    <div className="media-wrapper">
                        <img src={item.src} alt={item.alt} className="media-content" />
                        <div className="overlay">
                            <span>{item.text}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

        {/* Four-Wheel Items */}
        <h4 className="category-title">Модели с 4 колелца</h4>

        <div className="gallery-grid">
            {fourWheelItems.map((item) => (
                <Link to={item.linkTo} key={item.id} className="gallery-item">
                    <div className="media-wrapper">
                        <img src={item.src} alt={item.alt} className="media-content" />
                        <div className="overlay">
                            <span>{item.text}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
   
       </section>
    );
};

export default MediaGallery;
