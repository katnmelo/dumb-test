import { restaurants, Restaurant } from "@/data/restaurants";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const [showArrows, setShowArrows] = useState(false);

  // Check if scrolling is needed
  useEffect(() => {
    const checkScrollNeeded = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowArrows(scrollWidth > clientWidth);
      }
    };

    // Check on mount and resize
    checkScrollNeeded();
    window.addEventListener('resize', checkScrollNeeded);
    
    return () => window.removeEventListener('resize', checkScrollNeeded);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 bg-white/95 backdrop-blur-sm border border-stone-200 rounded-2xl shadow-lg px-4 py-4 mx-auto max-w-fit">
      <div className="flex items-center gap-3">
        {/* Left Arrow - only show if scrolling is needed */}
        {showArrows && (
          <button
            onClick={scrollLeft}
            className="flex-shrink-0 h-6 w-6 p-0 hover:bg-stone-100 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="h-3 w-3 text-stone-600" />
          </button>
        )}

        {/* Scrollable Restaurant List */}
        <ul 
          ref={scrollContainerRef}
          className="flex items-stretch overflow-x-auto overflow-y-hidden transition-colors text-black py-1 scrollbar-hide flex-1 gap-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
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

        {/* Right Arrow - only show if scrolling is needed */}
        {showArrows && (
          <button
            onClick={scrollRight}
            className="flex-shrink-0 h-6 w-6 p-0 hover:bg-stone-100 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight className="h-3 w-3 text-stone-600" />
          </button>
        )}
      </div>
    </div>
  );
}
