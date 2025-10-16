"use client";
import { Restaurant } from "@/data/restaurants";
import CustomImage from "./Image";
import { MapPin, Phone, Clock } from "lucide-react";
import { PhotoDialog } from "./menu-photo-dialog";

interface DynamicHeroProps {
  restaurant: Restaurant;
}

export default function DynamicHero({ restaurant }: DynamicHeroProps) {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <CustomImage
          src={restaurant.heroImage || '/images/placeholders/placeholder.jpg'}
          alt={`${restaurant.name} restaurant`}
          width={1200}
          height={500}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Centered Restaurant Name */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg text-center">
              {restaurant.name}
            </h1>
            {/* Menu Dialog on Hero */}
            <div className="mt-6 flex justify-center">
              <PhotoDialog menuUrl={restaurant.menuUrl} restaurantName={restaurant.name} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Restaurant Details Below Hero */}
      <div className="bg-white py-8">
        <div className="max-w-5xl mx-auto px-8">
          {/* Location chip, Phone, Hours stacked and left-aligned */}
          <div className="flex flex-col gap-4 mb-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-stone-100 text-stone-800 border border-stone-200">
                {restaurant.address}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-stone-500 flex-shrink-0" />
              <a
                href={`tel:${restaurant.phone}`}
                className="text-sm md:text-base text-stone-700 hover:text-stone-900 transition-colors"
              >
                {restaurant.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-stone-500 flex-shrink-0" />
              <p className="text-sm md:text-base text-stone-700 leading-relaxed">
                {restaurant.hours}
              </p>
            </div>
          </div>
          
          {/* Buttons moved to hero overlay */}
        </div>
      </div>
      
      {/* Removed description and quote section as requested */}

    </div>
  );
}
