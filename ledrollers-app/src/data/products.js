import whiteShoes from "../assets/white_shoes.png";
import pinkShoes from "../assets/pink_shoes.png";
import blackShoes from "../assets/black_shoes.png";
import pinkShoes4 from "../assets/pink_shoes4.jpeg";
import blueShoes4 from "../assets/blue_shoes4.jpeg";
import pinkShoes4Front from "../assets/pinkShoes4Front.png";
import pinkShoes4Wheels from "../assets/pinkShoes4Wheels.png";
import whiteShoes4Front from "../assets/whiteShoes4Front.png";
import whiteShoes4Wheels from "../assets/whiteShoes4Wheels.png";

export const products = [
  {
    id: 1,
    name: "Светещи розови ролери",
    price: "38.00 €",
    oldPrice: "47.00 €",
    images: [pinkShoes4],
    isNew: true,
    category: "girl",
  },
  {
    id: 2,
    name: "Светещи бели ролери",
    price: "38.00 €",
    oldPrice: "47.00 €",
    images: [whiteShoes,whiteShoes4Front,whiteShoes4Wheels],
    category: "girl",
  },
  {
    id: 3,
    name: "Светещи сини ролери",
    price: "38.00 €",
    oldPrice: "47.00 €",
    images: [blueShoes4,blackShoes],
    isNew: true,
    category: "boy",
  },
  {
    id: 4,
    name: "Светещи розови ролери",
    price: "38.00 €",
    oldPrice: "47.00 €",
    images: [pinkShoes,pinkShoes4Front,pinkShoes4Wheels],
    category: "girl",
  },
  {
    id: 5,
    name: "Черни светещи ролери",
    price: "60.00 €",
    oldPrice: "65.00 €",
    images: [blackShoes],
    isNew: true,
    category: "boy",
  },
];