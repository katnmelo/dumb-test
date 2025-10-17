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

      {/* 3D GIF Section */}
      <div className="max-w-6xl mx-auto p-8 text-center">
        <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8 border border-orange-200">
          <h3 className="text-2xl font-semibold text-orange-800 mb-4">Experience Our Food</h3>
          <p className="text-orange-600 mb-6">See our delicious dishes come to life</p>
          <div className="flex justify-center space-x-4">
            {/* Test with placeholder image first */}
            <img 
              src="/images/placeholders/placeholder.jpg" 
              alt="Placeholder Image" 
              className="max-w-md rounded-lg shadow-lg"
            />
            {/* 3D GIF */}
            <img 
              src="/3d/placeholder-3d.gif" 
              alt="3D Food Animation" 
              className="max-w-md rounded-lg shadow-lg"
              onError={(e) => {
                console.log("GIF failed to load:", e);
                e.target.style.display = 'none';
              }}
              onLoad={() => console.log("GIF loaded successfully")}
            />
          </div>
        </div>
      </div>

      {/* Reviews Section - Google Maps Reviews */}
      <Reviews />
    </div>
  );
}