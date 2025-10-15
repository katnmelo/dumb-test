"use client";

import { useState } from "react";
import { restaurants } from "../../../data/restaurants";
import DynamicHero from "../../components/DynamicHero";
import RestaurantNav from "../../components/RestaurantNav";
import StarDish from "../../components/StarDish";


export default function StoresPage() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

  return (
    <div className="relative">
      {/* Dynamic Hero Section */}
      <DynamicHero restaurant={selectedRestaurant} />
      
      {/* Floating Restaurant Navigation */}
      <RestaurantNav 
        selectedRestaurantId={selectedRestaurant.id}
        onRestaurantSelect={(restaurant) => setSelectedRestaurant(restaurant)}
      />
      
      {/* Main Content with top padding to account for floating nav */}
      <main className="max-w-6xl mx-auto p-8 space-y-8 pt-24">
        {/* Star Dish Section - only for selected restaurant */}
        {selectedRestaurant.starDish && (
          <StarDish
            emoji={selectedRestaurant.starDish.emoji}
            name={selectedRestaurant.starDish.name}
            review={selectedRestaurant.starDish.review}
          />
        )}
      </main>
    </div>
  );
}




