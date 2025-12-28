import { Link } from 'react-router-dom';
import "../styles/MediaGallery.css";

import presentShoes from "../assets/present_shoes.MP4";
import whiteShoes from "../assets/white_shoes2.png";
import pinkShoes from "../assets/pink_shoes2.png";
import blackShoes from "../assets/black_shoes2.png";

const MediaGallery = () => {

    const mediaItems = [
        {
            id: 1,
            type: 'video',
            src: presentShoes,
            alt: "Розов модел"
        },
        {
            id: 2,
            type: 'image',
            src: whiteShoes,
            alt: "Бели модели",
            linkTo: '/product/white_shoes'
        },
        {
            id: 3,
            type: 'image',
            src: pinkShoes,
            linkTo: '/product/pink_shoes'
        },
        {
            id: 4,
            type: 'image',
            src: blackShoes,
            linkTo: '/product/black_shoes'
        },
    ];

    return (
      <section className="gallery-section">
        <div className="section-divider"></div>
        <h3 className="gallery-title">Лесна трансформация от обувки към ролери</h3>

        <div className="gallery-grid">
            {mediaItems.map((item) => {
                if (item.type === 'video') {
                    return (
                        <div 
                           key={item.id}
                           className="gallery-item video-item"
                        >
                            <div className="media-wrapper">
                                <video 
                                    src={item.src} 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline 
                                    className="media-content" 
                                />

                                <div className="overlay">
                                    <span>Вижте как се поставят колелцата</span>
                                </div>

                                <div className="play-button">▶</div>
                            </div>
                        </div>
                    );
                } else {
                    return (
                      <Link to={item.linkTo} key={item.id} className="gallery-item">
                        <div className="media-wrapper">
                            <img src={item.src} alt={item.alt} className="media-content" />
                            <div className="overlay">
                                <span>Разгледай модела</span>
                            </div>
                        </div>
                      </Link>
                    );
                }
            })}
        </div>
      </section>
    );
};

export default MediaGallery;
