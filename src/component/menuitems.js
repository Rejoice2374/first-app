import noodles from "../assets/chinese noodles.jpg";
import Hamburger from "../assets/burger2.jpg";
import nativerice from "../assets/nativeRice.jpg";
import pizza from "../assets/pizza.jpg";
import wine from "../assets/wine.69152ca75463a2cde525.jpg";
import smoothies from "../assets/smoothies.f294f117fee527f0930a.jpg";
import cocktail from "../assets/cocktail.54e8142562d826c2f3c1.jpg";
import sauceRice from "../assets/sauceRice.1a00c175bc5c9557c93c.jpg";
import jollofRice from "../assets/sauceRice2.fda2dc2ccb503d04c2ad.jpg";

const menuData = [
  {
    name: "Noodles",
    price: 500,
    Image: noodles,
    category: "International dish",
    id: 1,
  },
  {
    name: "Hamburger",
    price: 1000,
    Image: Hamburger,
    category: "International Dish",
    id: 2,
  },
  {
    name: "Native Rice",
    price: 1500,
    Image: nativerice,
    category: "local dish",
    id: 3,
  },
  {
    name: "Pizza",
    price: 1100,
    Image: pizza,
    category: "International Dish",
    id: 4,
  },
  { name: "Wine", price: 2000, Image: wine, category: "Drinks", id: 5 },
  {
    name: "Smoothies",
    price: 1050,
    Image: smoothies,
    category: "Drinks",
    id: 6,
  },
  {
    name: "Cocktail",
    price: 1250,
    Image: cocktail,
    category: "Drinks",
    id: 7,
  },
  {
    name: "Sauce Rice",
    price: 1600,
    Image: sauceRice,
    category: "local dish",
    id: 8,
  },
  {
    name: "Jollof Rice",
    price: 2200,
    Image: jollofRice,
    category: "local dish",
    id: 9,
  },
];

export default menuData;
