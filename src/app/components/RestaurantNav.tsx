'use client';

import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Restaurant, restaurants as allRestaurants } from '@/data/restaurants';

interface RestaurantNavProps {
  selectedRestaurantId?: string;
  onRestaurantSelect?: (restaurant: Restaurant) => void;
}

// Restaurant icon mapping
const getRestaurantIcon = (id: string): string => {
  const iconMap: Record<string, string> = {
    "bad-bird-mega": "🐔",
    "bad-bird-the-grid": "🐓", 
    "flowerboy-opus": "🌸",
    "flowerboy-the-grid": "🌺",
    "fowlbread": "🥖",
    "tender-beef-shop": "🥩",
    "thank-you-seafood": "🦐"
  };
  return iconMap[id] || "🍽️";
};

export default function RestaurantNav({ selectedRestaurantId, onRestaurantSelect }: RestaurantNavProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
    <div className="absolute top-16 left-0 right-0 z-10 bg-white/90 backdrop-blur-sm border-b border-stone-200/50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollLeft}
            className="flex-shrink-0 h-8 w-8 p-0 hover:bg-stone-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Scrollable Restaurant List */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide flex-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {allRestaurants.map((restaurant) => {
              const isSelected = selectedRestaurantId === restaurant.id;
              const handleClick = () => {
                if (onRestaurantSelect) {
                  onRestaurantSelect(restaurant);
                }
              };

              return (
                <button
                  key={restaurant.id}
                  onClick={handleClick}
                  className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-colors group flex-shrink-0 min-w-[80px] ${
                    isSelected 
                      ? 'bg-stone-100 text-stone-800' 
                      : 'hover:bg-stone-50 text-stone-600 hover:text-stone-800'
                  }`}
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform">
                    {getRestaurantIcon(restaurant.id)}
                  </div>
                  <span className="text-xs text-center leading-tight">
                    {restaurant.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Arrow */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollRight}
            className="flex-shrink-0 h-8 w-8 p-0 hover:bg-stone-100"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
