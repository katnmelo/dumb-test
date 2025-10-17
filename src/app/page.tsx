"use client";

import { useState } from "react";
import { restaurants } from "@/data/restaurants";
import DynamicHero from "@/components/DynamicHero";
import RestaurantNav from "@/components/RestaurantNav";
import StarDish from "@/components/StarDish";
import TrackingSection from "@/components/TrackingSection";
import Reviews from "@/components/Reviews";

export default function Home() {
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

      {/* Tracking Section - Animated marquee */}
      <TrackingSection />

      {/* Order Section - Grab */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
          <h3 className="text-2xl font-semibold text-stone-800 mb-4">Ready to Order?</h3>
          <p className="text-stone-600 mb-6">Skip the wait and order directly through Grab for quick delivery or pickup.</p>
          <a 
            href="grab://food" 
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Order on Grab
          </a>
        </div>
      </div>


      {/* Reviews Section - Google Maps Reviews */}
      <Reviews />
    </div>
  );
}