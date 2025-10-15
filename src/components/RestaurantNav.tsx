import Link from "next/link";
import { restaurants, Restaurant } from "@/data/restaurants";

interface RestaurantNavProps {
  selectedRestaurantId?: string;
  onRestaurantSelect?: (restaurant: Restaurant) => void;
}

// Emoji icon components
const EmojiIcon = ({ emoji }: { emoji: string }) => (
  <span className="text-2xl">{emoji}</span>
);

// Map restaurant types to emoji icons
const getRestaurantEmoji = (restaurantId: string) => {
  switch (restaurantId) {
    case "bad-bird-mega":
    case "bad-bird-the-grid":
      return "🍗"; // Fried chicken
    case "flowerboy-opus":
      return "🌸"; // Flower for elegant dining
    case "flowerboy-the-grid":
      return "🌺"; // Hibiscus for modern fusion
    case "fowlbread":
      return "🥐"; // Croissant for bakery
    case "tender-beef-shop":
      return "🥩"; // Steak for steakhouse
    case "thank-you-seafood":
      return "🦐"; // Shrimp for seafood
    default:
      return "🏪"; // Generic store
  }
};

export default function RestaurantNav({ selectedRestaurantId, onRestaurantSelect }: RestaurantNavProps) {
  return (
    <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-40 bg-white/95 backdrop-blur-sm border border-stone-200 rounded-2xl shadow-lg px-4 py-2">
      <ul className="inline-flex items-stretch overflow-x-auto overflow-y-hidden transition-colors text-black py-1 scrollbar-hide">
        {restaurants.map((restaurant) => {
          const emoji = getRestaurantEmoji(restaurant.id);
          return (
            <li
              key={restaurant.id}
              className="flex flex-col items-center min-w-[65px] max-w-[75px]"
            >
              <button
                onClick={() => onRestaurantSelect?.(restaurant)}
                className={`opacity-100 w-full flex flex-col h-full items-center px-1 rounded-lg relative transition-colors py-1 border-transparent hover:bg-stone-100 ${
                  selectedRestaurantId === restaurant.id 
                    ? 'bg-stone-200 border-2 border-stone-400' 
                    : 'bg-transparent'
                }`}
              >
                <figure className="block relative overflow-hidden transform duration-200 overflow-y-hidden z-10 h-8 mb-1 flex items-center justify-center">
                  <EmojiIcon emoji={emoji} />
                </figure>
                <p className="text-[10px] font-normal text-center z-10 flex flex-col justify-center grow transition-colors text-inherit leading-[1.1]">
                  <span className="whitespace-nowrap overflow-hidden text-ellipsis">{restaurant.name.split(' ')[0]}</span>
                  <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                    {restaurant.name.split(' ').slice(1).join(' ')}
                  </span>
                </p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
