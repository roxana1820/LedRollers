import { Link } from 'react-router-dom';
import "../styles/MediaGallery.css";

import presentShoes from "../assets/videos/present_shoes.mp4";
import blackShoes from "../assets/black_shoes.png";
import pinkShoes44 from "../assets/pink_shoes44.png";
import whiteShoes4 from "../assets/white_shoes4.png";
import pinkShoes4 from "../assets/pink_shoes4.jpeg";
import blueShoes4 from "../assets/blue_shoes4.jpeg";

const MediaGallery = () => {

    const videoItem = {
        id: 1,
        src: presentShoes,
        text: "Разгледай"
    };

   
    const fourWheelItems = [
        {
            id: 5,
            src: pinkShoes44, 
            alt: "Розови с 4 колелца",
            linkTo: '/product/3',
            text: "Розов модел (4 колелца)"
        },
        {
            id: 6,
            src: whiteShoes4,
            alt: "Бели с 4 колелца",
            linkTo: '/product/1',
            text: "Бял модел (4 колелца)"
        },
        {
            id: 7,
            src: blackShoes,
            alt: "Черни с 4 колелца",
            linkTo: '/product/2',
            text: "Черен модел (4 колелца)"
        },
        {
            id: 8,
            src: pinkShoes4,
            alt: "Нови розови с 4 колелца",
            linkTo: '/product/4',
            text: "Черен модел (4 колелца)"
        },
        {
            id: 9,
            src: blueShoes4,
            alt: "Нови Сини с 4 колелца",
            linkTo: '/product/5',
            text: "Син модел (4 колелца)"
        }

    ];

    return (
      <section className="gallery-section">
        <div className="section-divider"></div>
        <h3 className="gallery-title">Лесна трансформация от обувки към ролери</h3>

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
