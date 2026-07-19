import whiteShoes from "../assets/white_shoes.png";
import pinkShoes from "../assets/pink_shoes.png";
import blackShoes from "../assets/black_shoes.png";
import blackShoes4 from  "../assets/blackShoes4.png";
import blackShoesSide from "../assets/blackShoesSide.png";
import pinkShoes4 from "../assets/pink_shoes4.jpeg";
import blueShoes4 from "../assets/blue_shoes4.jpeg";
import pinkShoes4Front from "../assets/pinkShoes4Front.png";
import pinkShoes4Wheels from "../assets/pinkShoes4Wheels.png";
import pinkShoes4New from "../assets/pinkShoes4New.png";
import whiteShoes4Front from "../assets/whiteShoes4Front.png";
import whiteShoes4Wheels from "../assets/whiteShoes4Wheels.png";
import pinkShoes60 from "../assets/pinkShoes60.jpeg";
import pinkShoes602 from "../assets/pinkShoes602.jpeg";
import blueShoes60 from "../assets/blueShoes60.jpeg";
import newPinkNike from "../assets/newPinkModel.png";
import newBlackNike from "../assets/newBlackModel.png";

import lightGirlShoes1 from "../assets/LedShoesWithoutRollers/lightGirlShoes1.png";
import lightGirlShoes2 from "../assets/LedShoesWithoutRollers/lightGirlShoes2.jpeg";
import lightGirlShoes3 from "../assets/LedShoesWithoutRollers/lightGirlShoes3.jpeg";
import lightShoesBoy1 from "../assets/LedShoesWithoutRollers/lightShoesBoy1.jpeg";
import lightShoesBoy2 from "../assets/LedShoesWithoutRollers/lightShoesBoy2.jpeg";
import lightShoesBoy3 from "../assets/LedShoesWithoutRollers/lightShoesBoy3.jpeg";
import lightShoesBoy4 from "../assets/LedShoesWithoutRollers/lightShoesBoy4.jpeg";

export const products = [
  {
    id: 1,
    name: "Светещи бели ролери",
    price: "38.00 €",
    oldPrice: "55.00 €",
    images: [whiteShoes4Front,whiteShoes4Wheels,whiteShoes],
    category: "girl",
  },
  {
    id: 2,
    name: "Черни светещи ролери",
    price: "38.00 €",
    oldPrice: "55.00 €",
    images: [blackShoes4,blackShoesSide,blackShoes],
    isNew: true,
    category: "boy",
  },
  {
    id: 3,
    name: "Светещи розови ролери с 4 колелца",
    price: "38.00 €",
    oldPrice: "55.00 €",
    images: [pinkShoes4Front,pinkShoes4Wheels,pinkShoes],
    category: "girl",
  },
  {
    id: 4,
    name: "Светещи розови ролери",
    price: "60.00 €",
    oldPrice: "80.00 €",
    images: [pinkShoes4,pinkShoes60,pinkShoes602,pinkShoes4New],
    isNew: true,
    category: "girl",
  },
  {
    id: 5,
    name: "Светещи сини ролери",
    price: "60.00 €",
    oldPrice: "80.00 €",
    images: [blueShoes4,blueShoes60],
    isNew: true,
    category: "boy",
  },
  {
    id: 6,
    name: "Светещи ролери с 4 колелца",
    price: "38.00 €",
    oldPrice: "55.00 €",
    images: [newPinkNike],
    category: "girl",
    isNew: true,
  },
  {
    id: 7,
    name: "Светещи черни ролери с 4 колелца",
    price: "38.00 €",
    oldPrice: "55.00 €",
    images: [newBlackNike],
    category: "boy",
    isNew: true,
  },
  {
    id: 8,
    name: "Светещи маратонки за момичета",
    price: "23.00 €",
    oldPrice: "38.00 €",
    images: [lightGirlShoes1,lightGirlShoes2,lightGirlShoes3],
    category: "girl",
    isNew: true,
    hasRollers: false,
  },
  
  {
    id: 9,
    name: "Светещи маратонки за момчета",
    price: "23.00 €",
    oldPrice: "38.00 €",
    images: [lightShoesBoy1,lightShoesBoy2,lightShoesBoy3,lightShoesBoy4],
    category: "boy",
    isNew: true,
    hasRollers: false,
  }
];