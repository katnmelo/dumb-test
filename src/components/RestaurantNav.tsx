import Link from "next/link";
import { restaurants, Restaurant } from "@/data/restaurants";

interface RestaurantNavProps {
  selectedRestaurantId?: string;
  onRestaurantSelect?: (restaurant: Restaurant) => void;
}

// 3D Character icon component
const CharacterIcon = () => (
  <img 
    src="/3d/placeholder-character-3d.png" 
    alt="Restaurant character" 
    className="w-10 h-10 object-contain"
  />
);

export default function RestaurantNav({ selectedRestaurantId, onRestaurantSelect }: RestaurantNavProps) {
  return (
    <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-40 bg-white/95 backdrop-blur-sm border border-stone-200 rounded-2xl shadow-lg px-4 py-2">
      <ul className="inline-flex items-stretch overflow-x-auto overflow-y-hidden transition-colors text-black py-1 scrollbar-hide">
        {restaurants.map((restaurant) => {
          return (
            <li
              key={restaurant.id}
              className="flex flex-col items-center min-w-[60px] max-w-[70px]"
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
                  <CharacterIcon />
                </figure>
                <p className="text-[10px] font-normal text-center z-10 flex flex-col justify-center grow text-nowrap transition-colors text-inherit leading-[1.1]">
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