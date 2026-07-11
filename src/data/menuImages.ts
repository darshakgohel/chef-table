/**
 * These are Chef's Table's actual printed menu pages, as photographed by
 * the restaurant. To update a page in future, replace the matching file in
 * src/assets/menu/ and keep the same import name below.
 */
import menu1 from "../assets/menu/menu-1.jpg";
import menu2 from "../assets/menu/menu-2.jpg";
import menu3 from "../assets/menu/menu-3.jpg";
import menu4 from "../assets/menu/menu-4.jpg";
import menu5 from "../assets/menu/menu-5.jpg";
import menu6 from "../assets/menu/menu-6.jpg";
import menu7 from "../assets/menu/menu-7.jpg";

export type MenuPage = {
  id: number;
  src: string;
  label: string;
};

export const MENU_PAGES: MenuPage[] = [
  { id: 1, src: menu1, label: "Paneer — Punjabi" },
  { id: 2, src: menu2, label: "Veg Punjabi, Kofta & Sizzlers" },
  { id: 3, src: menu3, label: "Kaju Specials, Dal & Rice" },
  { id: 4, src: menu4, label: "Tandoor Breads & Tava Roti" },
  { id: 5, src: menu5, label: "Soups, Add-ons & Refreshments" },
  { id: 6, src: menu6, label: "Chinese Starters & Mains" },
  { id: 7, src: menu7, label: "Kathiyawadi Thali & Specials" },
];
