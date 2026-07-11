export type Review = {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  visit: string;
};

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Nirav Solanki",
    location: "Bhavnagar",
    rating: 5,
    text: "The Kathiyawadi thali tastes exactly like home, just with better service and ambience. Our whole family's Sunday spot now.",
    visit: "Family Dinner",
  },
  {
    id: 2,
    name: "Priya Mehta",
    location: "Rajkot",
    rating: 5,
    text: "Drove in from Rajkot for a friend's birthday. The tandoori platter and the paneer butter masala were worth every kilometre.",
    visit: "Birthday Celebration",
  },
  {
    id: 3,
    name: "Kunal Joshi",
    location: "Bhavnagar",
    rating: 4,
    text: "Loved the chilli garlic noodles — proper wok flavour, not the sweet version most places serve. Staff is warm and quick.",
    visit: "Weeknight Dinner",
  },
  {
    id: 4,
    name: "Aarti & Devesh",
    location: "Bhavnagar",
    rating: 5,
    text: "Booked the private dining area for our anniversary. Candles, quiet corner, and a chef who came out to say hello. Felt genuinely premium.",
    visit: "Anniversary",
  },
  {
    id: 5,
    name: "Rushil Vaghela",
    location: "Ahmedabad",
    rating: 5,
    text: "This is the rare place that does Punjabi, Chinese and Kathiyawadi equally well. Usually one cuisine suffers — not here.",
    visit: "Business Dinner",
  },
];
