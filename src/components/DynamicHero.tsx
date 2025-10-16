"use client";
import { Restaurant } from "@/data/restaurants";
import CustomImage from "../app/components/Image";
import { MapPin, Phone, Clock } from "lucide-react";
import { useState, useEffect } from "react";

interface DynamicHeroProps {
  restaurant: Restaurant;
}

export default function DynamicHero({ restaurant }: DynamicHeroProps) {
  // Array of 5 placeholder images (using available ones and duplicating to reach 5)
  const images = [
    '/images/placeholders/placeholder.jpg',
    '/images/placeholders/placeholder-cutout.png',
    '/images/placeholders/placeholder-spot.png',
    '/images/placeholders/placeholder.jpg', // Duplicate to make 5
    '/images/placeholders/placeholder-cutout.png' // Another duplicate
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      {/* Hero Image Carousel */}
      <div className="relative h-screen overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <CustomImage
              src={image}
              alt={`${restaurant.name} restaurant`}
              width={1200}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Centered Restaurant Name */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl text-center leading-tight px-2">
              {restaurant.name}
            </h1>
            {/* Menu Button on Hero */}
            <div className="mt-4 sm:mt-6 flex justify-center">
              <a
                href={restaurant.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white/90 text-stone-800 font-medium rounded-lg hover:bg-white transition-colors"
              >
                View Menu
              </a>
            </div>
          </div>
        </div>

        {/* Image indicators (non-interactive) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Image ${index + 1} of ${images.length}`}
            />
          ))}
        </div>
      </div>
      
      {/* Restaurant Details Below Hero */}
      <div className="bg-white py-8">
        <div className="max-w-5xl mx-auto px-8">
          {/* Restaurant Information Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Location */}
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-stone-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-1">Location</h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {restaurant.address}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-stone-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-1">Hours</h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {restaurant.hours}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-stone-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-1">Phone</h3>
                <a
                  href={`tel:${restaurant.phone}`}
                  className="text-stone-700 text-sm hover:text-stone-900 transition-colors"
                >
                  {restaurant.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Reservation Dropdown */}
          <div className="text-center">
            <details className="group">
              <summary className="inline-flex items-center px-6 py-3 bg-stone-800 text-white font-medium rounded-lg hover:bg-stone-700 transition-colors cursor-pointer list-none">
                Make a Reservation
                <svg className="w-4 h-4 ml-2 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 p-6 bg-stone-50 rounded-lg border border-stone-200">
                <div className="max-w-md mx-auto">
                  <h4 className="font-semibold text-stone-900 mb-4">Reservation Form Preview</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                      <input 
                        type="text" 
                        placeholder="Your full name" 
                        className="w-full px-3 py-2 border border-stone-300 rounded-md text-sm"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="w-full px-3 py-2 border border-stone-300 rounded-md text-sm"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Phone</label>
                      <input 
                        type="tel" 
                        placeholder="(555) 123-4567" 
                        className="w-full px-3 py-2 border border-stone-300 rounded-md text-sm"
                        disabled
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Date</label>
                        <input 
                          type="date" 
                          className="w-full px-3 py-2 border border-stone-300 rounded-md text-sm"
                          disabled
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">Time</label>
                        <select className="w-full px-3 py-2 border border-stone-300 rounded-md text-sm" disabled>
                          <option>7:00 PM</option>
                          <option>7:30 PM</option>
                          <option>8:00 PM</option>
                          <option>8:30 PM</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Party Size</label>
                      <select className="w-full px-3 py-2 border border-stone-300 rounded-md text-sm" disabled>
                        <option>2 people</option>
                        <option>3 people</option>
                        <option>4 people</option>
                        <option>5+ people</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Special Requests</label>
                      <textarea 
                        placeholder="Any dietary restrictions or special requests..."
                        className="w-full px-3 py-2 border border-stone-300 rounded-md text-sm h-20 resize-none"
                        disabled
                      />
                    </div>
                    <div className="pt-4 border-t border-stone-200">
                      <p className="text-xs text-stone-500 text-center mb-3">
                        This is a preview. Click below to access the full form.
                      </p>
                      <a
                        href="https://forms.google.com/placeholder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full px-4 py-2 bg-stone-800 text-white text-center rounded-md hover:bg-stone-700 transition-colors text-sm"
                      >
                        Open Full Form
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
      
      {/* Removed description and quote section as requested */}

    </div>
  );
}
