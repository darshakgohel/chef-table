import g1 from "../assets/gallery/real-butter-naan.jpg";
import g2 from "../assets/gallery/gallery-2.svg";
import g3 from "../assets/gallery/gallery-3.svg";
import g4 from "../assets/gallery/gallery-4.svg";
import g5 from "../assets/gallery/gallery-5.svg";
import g6 from "../assets/gallery/gallery-6.svg";
import g7 from "../assets/gallery/gallery-7.svg";
import g8 from "../assets/gallery/gallery-8.svg";

export type GalleryImage = {
  id: number;
  src: string;
  caption: string;
  tall?: boolean;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: g1, caption: "Fresh Off the Tandoor", tall: false },
  { id: 2, src: g2, caption: "Private Dining", tall: false },
  { id: 3, src: g3, caption: "Live Kitchen", tall: true },
  { id: 4, src: g4, caption: "Family Seating", tall: false },
  { id: 5, src: g5, caption: "Evening Ambience", tall: false },
  { id: 6, src: g6, caption: "Chef at Work", tall: true },
  { id: 7, src: g7, caption: "Festive Thali", tall: false },
  { id: 8, src: g8, caption: "Rooftop Lounge", tall: false },
];
