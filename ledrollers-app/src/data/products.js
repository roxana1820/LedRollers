import whiteShoes from "../assets/white_shoes.png";
import pinkShoes from "../assets/pink_shoes.png";
import blackShoes from "../assets/black_shoes.png";
import pinkShoes4 from "../assets/pink_shoes4.jpeg";
import blueShoes4 from "../assets/blue_shoes4.jpeg";

export const products = [
  {
    id: 1,
    name: "Светещи розови ролери",
    price: "38.00 €",
    oldPrice: "47.00 €",
    images: [pinkShoes4, blackShoes,pinkShoes],
    isNew: true,
    category: "girl",
  },
  {
    id: 2,
    name: "Светещи бели ролери",
    price: "47.00 €",
    oldPrice: "55.00 €",
    images: [whiteShoes, blackShoes],
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
    images: [pinkShoes,blackShoes],
    category: "girl",
  },
  {
    id: 5,
    name: "Черни светещи ролери",
    price: "60.00 €",
    oldPrice: "65.00 €",
    images: [blackShoes,blackShoes],
    isNew: true,
    category: "boy",
  },
];