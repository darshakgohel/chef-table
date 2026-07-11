import tandooriPlatter from "../assets/dishes/real-tandoori-platter.jpg";
import paneerButterMasala from "../assets/dishes/real-paneer-butter-masala.jpg";
import dalFryButter from "../assets/dishes/real-dal-fry-butter.jpg";
import vegManchurian from "../assets/dishes/real-veg-manchurian.jpg";
import hakkaNoodles from "../assets/dishes/real-hakka-noodles.jpg";
import kathiyawadiThali from "../assets/dishes/dish-3.svg";

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: "Chef's Choice" | "Bestseller" | "Fiery";
  cuisine: "Tandoor" | "Punjabi" | "Chinese" | "Kathiyawadi";
};

// Prices and items below are taken directly from Chef's Table's printed menu.
export const SIGNATURE_DISHES: Dish[] = [
  {
    id: "tandoori-platter",
    name: "Tandoori Platter",
    description:
      "Paneer tikka, hariyali tikka and harabhara kabab, straight off the live coals with mint chutney.",
    price: "₹240",
    image: tandooriPlatter,
    tag: "Chef's Choice",
    cuisine: "Tandoor",
  },
  {
    id: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    description:
      "Fresh cottage cheese simmered in a velvet tomato-butter gravy — the table's most-ordered curry.",
    price: "₹190",
    image: paneerButterMasala,
    tag: "Bestseller",
    cuisine: "Punjabi",
  },
  {
    id: "kathiyawadi-fix-thali",
    name: "Kathiyawadi Fix Thali",
    description:
      "Undhiyu, four Kathiyawadi shaak, kadhi-khichdi, chaash, sweet, salad and papad — the full Saurashtra spread.",
    price: "₹150",
    image: kathiyawadiThali,
    tag: "Chef's Choice",
    cuisine: "Kathiyawadi",
  },
  {
    id: "veg-manchurian-gravy",
    name: "Veg Manchurian Gravy",
    description:
      "Crisp vegetable dumplings tossed through a fiery, wok-hot Indo-Chinese Manchurian sauce.",
    price: "₹130",
    image: vegManchurian,
    tag: "Fiery",
    cuisine: "Chinese",
  },
  {
    id: "veg-hakka-noodles",
    name: "Veg Hakka Noodles",
    description:
      "Wok-tossed noodles with garden vegetables and a light soy-garlic finish.",
    price: "₹140",
    image: hakkaNoodles,
    tag: "Bestseller",
    cuisine: "Chinese",
  },
  {
    id: "dal-fry-butter",
    name: "Dal Fry Butter",
    description:
      "Slow-cooked yellow dal, tempered twice and finished with a generous knob of butter.",
    price: "₹110",
    image: dalFryButter,
    cuisine: "Punjabi",
  },
];

export const MENU_CATEGORIES = [
  "Tandoor",
  "Punjabi",
  "Chinese",
  "Kathiyawadi",
] as const;
