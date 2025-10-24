"use client";
import { Restaurant } from "@/data/restaurants";
import Image from "next/image";
import StoreInfoCard from "../app/components/StoreInfoCard";
import { useState, useEffect } from "react";

interface DynamicHeroProps {
  restaurant: Restaurant;
}

export default function DynamicHero({ restaurant }: DynamicHeroProps) {
  // Array of unique placeholder images for the carousel
  const images = [
    '/images/placeholders/placeholder.jpg',
    '/images/placeholders/placeholder-cutout.png',
    '/images/placeholders/placeholder-spot.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Parse hours string into object format for StoreInfo component
  const parseHours = (hoursString: string) => {
    try {
      const hoursObj: { [key: string]: string } = {};
      
      // Split by comma and process each day range
      const dayRanges = hoursString.split(', ');
      
      dayRanges.forEach(range => {
        // Skip closed days entirely - don't add them to the hours object
        if (range.includes('Closed')) {
          return;
        }
        
        const timePart = range.split(': ')[1];
        if (!timePart) return;
        
        if (range.includes('Mon-Thu')) {
          hoursObj.monday = timePart;
          hoursObj.tuesday = timePart;
          hoursObj.wednesday = timePart;
          hoursObj.thursday = timePart;
        } else if (range.includes('Fri-Sat')) {
          hoursObj.friday = timePart;
          hoursObj.saturday = timePart;
        } else if (range.includes('Sun')) {
          hoursObj.sunday = timePart;
        } else if (range.includes('Mon-Fri')) {
          hoursObj.monday = timePart;
          hoursObj.tuesday = timePart;
          hoursObj.wednesday = timePart;
          hoursObj.thursday = timePart;
          hoursObj.friday = timePart;
        } else if (range.includes('Sat-Sun')) {
          hoursObj.saturday = timePart;
          hoursObj.sunday = timePart;
        } else if (range.includes('Tue-Sun')) {
          hoursObj.tuesday = timePart;
          hoursObj.wednesday = timePart;
          hoursObj.thursday = timePart;
          hoursObj.friday = timePart;
          hoursObj.saturday = timePart;
          hoursObj.sunday = timePart;
        } else if (range.includes('Wed-Sun')) {
          hoursObj.wednesday = timePart;
          hoursObj.thursday = timePart;
          hoursObj.friday = timePart;
          hoursObj.saturday = timePart;
          hoursObj.sunday = timePart;
        } else if (range.includes('Daily')) {
          hoursObj.monday = timePart;
          hoursObj.tuesday = timePart;
          hoursObj.wednesday = timePart;
          hoursObj.thursday = timePart;
          hoursObj.friday = timePart;
          hoursObj.saturday = timePart;
          hoursObj.sunday = timePart;
        }
      });
      
      return hoursObj;
    } catch (error) {
      console.error('Error parsing hours:', error);
      return {};
    }
  };

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
      <div className="relative h-[70vh]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
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

                 {/* Floating Cards Overlapping Hero */}
                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 w-full max-w-5xl px-8">
                   <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6">
            {/* StoreInfoCard - Floating */}
            <div className="bg-gray-50 rounded-lg shadow-lg border border-gray-300 p-4">
              <StoreInfoCard
                location={restaurant.address}
                hours={parseHours(restaurant.hours)}
                phone={restaurant.phone}
                className="shadow-none border-0"
              />
            </div>
            
            {/* store-info__buttons - Floating */}
            <div className="bg-gray-50 rounded-lg shadow-lg border border-gray-300 p-6 flex flex-col gap-4 justify-start">
              {/* See Menu Button */}
              <a
                href={restaurant.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-stone-800 text-stone-800 font-medium rounded-lg hover:bg-stone-800 hover:text-white transition-colors"
              >
                See Menu
              </a>
              
              {/* Reserve Button */}
              <a
                href={restaurant.reserveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                Reserve
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spacer to account for floating cards */}
      <div className="h-40 bg-white"></div>
      
      {/* Removed description and quote section as requested */}

    </div>
  );
}