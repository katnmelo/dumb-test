// TypeScript interface that defines the structure of restaurant data
export interface Restaurant {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  menuUrl: string;
  reserveUrl: string;
  description: string;
  heroImage: string;
  awards?: string[];
  quote?: {
    text: string;
    author: string;
    publication?: string;
  };
  cuisine: string;
  priceRange: string;
  starDish?: {
    emoji: string;
    name: string;
    review: string;
  };
}

// Array of restaurant data with all 7 locations
export const restaurants: Restaurant[] = [
  {
    id: "bad-bird-mega",
    name: "Bad Bird Mega",
    address: "Rockwell",
    phone: "(555) 123-4567",
    hours: "Mon-Thu: 11am-10pm, Fri-Sat: 11am-11pm, Sun: 12pm-9pm",
    menuUrl: "/images/placeholders/placeholder-menu.pdf",
    reserveUrl: "https://forms.gle/badbirdmega-reservations",
    description: "Our flagship location serving premium fried chicken with bold, innovative flavors. A celebration of comfort food elevated to new heights.",
    heroImage: "/images/stores/bad-bird-mega-hero.jpg",
    cuisine: "American Comfort Food",
    priceRange: "$$",
    awards: ["Best Fried Chicken 2023 - Local Food Awards", "Top 10 New Restaurants - Downtown Magazine"],
    quote: {
      text: "Bad Bird Mega has redefined what fried chicken can be. Every bite is a revelation.",
      author: "Sarah Chen",
      publication: "Food & Wine Magazine"
    },
    starDish: {
      emoji: "🍗",
      name: "Deluxe Chicken Sandwich",
      review: "Extra-large wings with our signature Nashville hot sauce and house-made ranch. A perfect balance of heat and flavor that keeps customers coming back."
    },
  },
  {
    id: "bad-bird-the-grid", 
    name: "Bad Bird The Grid",
    address: "The Grid, Rockwell",
    phone: "(555) 234-5678",
    hours: "Mon-Fri: 10am-10pm, Sat-Sun: 9am-11pm",
    menuUrl: "/images/placeholders/placeholder-menu.pdf",
    reserveUrl: "https://forms.gle/badbirdgrid-reservations",
    description: "Modern tech district location featuring our signature fried chicken with a contemporary twist. Perfect for business lunches and casual dinners.",
    heroImage: "/images/stores/bad-bird-grid-hero.jpg",
    cuisine: "American Comfort Food",
    priceRange: "$$",
    starDish: {
      emoji: "🌶️",
      name: "Spicy Honey Tenders",
      review: "Crispy chicken tenders with sriracha honey glaze and pickled jalapeños. The perfect combination of sweet, spicy, and tangy flavors."
    },
  },
  {
    id: "flowerboy-opus",
    name: "Flowerboy Opus",
    address: "Opus Mall",
    phone: "(555) 987-6543",
    hours: "Tue-Sun: 5pm-10pm, Closed Mondays",
    menuUrl: "/images/placeholders/placeholder-menu.pdf",
    reserveUrl: "https://forms.gle/flowerboyopus-reservations",
    description: "An elegant fine dining experience showcasing botanical-inspired cuisine with locally sourced ingredients and innovative presentation.",
    heroImage: "/images/stores/flowerboy-opus-hero.jpg",
    cuisine: "Contemporary American",
    priceRange: "$$$",
    awards: ["Michelin Guide Recommended 2023", "Best Fine Dining - Uptown Magazine"],
    quote: {
      text: "Flowerboy Opus is where artistry meets gastronomy. Every dish is a masterpiece.",
      author: "Marcus Rodriguez",
      publication: "Eater LA"
    },
    starDish: {
      emoji: "🌸",
      name: "Garden Salad Bowl",
      review: "Seasonal vegetables arranged like a garden with edible flowers and herb-infused oils. A true work of art that tastes as beautiful as it looks."
    },
  },
  {
    id: "flowerboy-the-grid",
    name: "Flowerboy The Grid",
    address: "BGC",
    phone: "(555) 345-6789",
    hours: "Wed-Sun: 4pm-11pm, Closed Mon-Tue",
    menuUrl: "/images/placeholders/placeholder-menu.pdf",
    reserveUrl: "https://forms.gle/flowerboygrid-reservations",
    description: "Creative fusion restaurant in the arts quarter, combining botanical elements with international flavors in a vibrant, artistic setting.",
    heroImage: "/images/stores/flowerboy-grid-hero.jpg",
    cuisine: "Fusion",
    priceRange: "$$",
    starDish: {
      emoji: "🍕",
      name: "Thai Basil Pizza",
      review: "Wood-fired pizza with Thai basil, cherry tomatoes, and fresh mozzarella. A perfect fusion of Italian tradition and Thai flavors."
    },
  },
  {
    id: "fowlbread",
    name: "Fowlbread",
    address: "Megamall",
    phone: "(555) 456-7890",
    hours: "Daily: 7am-3pm (Breakfast & Lunch)",
    menuUrl: "/images/placeholders/placeholder-menu.pdf",
    reserveUrl: "https://forms.gle/fowlbread-reservations",
    description: "Artisanal bakery and café specializing in fresh-baked breads, pastries, and creative breakfast dishes. A neighborhood favorite for morning gatherings.",
    heroImage: "/images/stores/fowlbread-hero.jpg",
    cuisine: "Bakery & Café",
    priceRange: "$",
    quote: {
      text: "The best croissants in the city. Fowlbread has perfected the art of baking.",
      author: "Jennifer Kim",
      publication: "Local Food Guide"
    },
    starDish: {
      emoji: "🥐",
      name: "Artisan Croissant",
      review: "Traditional French croissant made with sourdough starter and European butter. Flaky, buttery perfection that melts in your mouth."
    },
  },
  {
    id: "tender-beef-shop",
    name: "Tender Beef Shop",
    address: "BGC",
    phone: "(555) 567-8901",
    hours: "Mon-Sat: 11am-9pm, Sun: 12pm-8pm",
    menuUrl: "/images/placeholders/placeholder-menu.pdf",
    reserveUrl: "https://forms.gle/tenderbeef-reservations",
    description: "Premium steakhouse featuring locally sourced, grass-fed beef with traditional cooking methods and exceptional service.",
    heroImage: "/images/stores/tender-beef-hero.jpg",
    cuisine: "Steakhouse",
    priceRange: "$$$",
    awards: ["Best Steakhouse 2023 - Meat Market Awards"],
    starDish: {
      emoji: "🥩",
      name: "Premium Ribeye Steak",
      review: "28-day dry-aged ribeye with compound butter and roasted garlic. The ultimate steak experience with incredible depth of flavor."
    },
  },
  {
    id: "thank-you-seafood",
    name: "Thank You Seafood",
    address: "The Grid, Rockwell",
    phone: "(555) 678-9012",
    hours: "Tue-Sun: 11:30am-10pm, Closed Mondays",
    menuUrl: "/images/placeholders/placeholder-menu.pdf",
    reserveUrl: "https://forms.gle/thankyouseafood-reservations",
    description: "Fresh seafood restaurant on the waterfront, featuring daily catches and sustainable fishing practices with stunning harbor views.",
    heroImage: "/images/stores/thank-you-seafood-hero.jpg",
    cuisine: "Seafood",
    priceRange: "$$$",
    awards: ["Sustainable Seafood Award 2023", "Best Waterfront Dining - Harbor Guide"],
    quote: {
      text: "Thank You Seafood brings the ocean to your plate with unmatched freshness and flavor.",
      author: "David Park",
      publication: "Seafood Weekly"
    },
    starDish: {
      emoji: "🐟",
      name: "Fresh Branzino Fish",
      review: "Mediterranean sea bass with lemon, herbs, and olive oil. Fresh, delicate, and perfectly cooked with the ocean's finest flavors."
    },
  }
];
