import { Link } from 'react-router-dom';
import "../styles/MediaGallery.css";

import presentShoes from "../assets/present_shoes.MP4";
import whiteShoes from "../assets/white_shoes.png";
import pinkShoes from "../assets/pink_shoes.png";
import blackShoes from "../assets/black_shoes.png";

const MediaGallery = () => {

    const mediaItems = [
        {
            id: 1,
            type: 'video',
            src: presentShoes,
            alt: "Розов модел",
            linkTo: '/products'
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
            alt: "Розови обувки",
            linkTo: '/product/pink_shoes'
        },
        {
            id: 4,
            type: 'image',
            src: blackShoes,
            alt: "Черни обувки",
            linkTo: '/product/black_shoes'
        },
    ];

    return (
      <section className="gallery-section">
        <div className="section-divider"></div>
        <h3 className="gallery-title">Светещи маратонки с 2 колелца</h3>

        <div className="gallery-grid">
            {mediaItems.map((item) => (
                <Link 
                    to={item.linkTo || '/products'} 
                    key={item.id} 
                    className={`gallery-item ${item.type === 'video' ? 'video-item' : ''}`}
                >
                    <div className="media-wrapper">
                        {item.type === 'video' ? (
                            <video 
                                src={item.src} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline 
                                className="media-content" 
                            />
                        ) : (
                            <img src={item.src} alt={item.alt} className="media-content" />
                        )}

                        <div className="overlay">
                            <span>{item.type === 'video' ? "Виж видеото" : "Разгледай модела"}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    

      </section>
    );
};

export default MediaGallery;