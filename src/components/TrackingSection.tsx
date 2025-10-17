"use client";

export default function TrackingSection() {
  const trackingItems = [
    { emoji: "🍕", text: "Fresh Pizza Daily" },
    { emoji: "🚀", text: "Fast Delivery" },
    { emoji: "⭐", text: "5-Star Reviews" },
    { emoji: "🔥", text: "Hot & Fresh" },
    { emoji: "💚", text: "Local Ingredients" },
    { emoji: "🎉", text: "Family Fun" },
    { emoji: "🍝", text: "Fresh Pasta" },
    { emoji: "🥤", text: "Local Drinks" },
    { emoji: "🏠", text: "Neighborhood Favorite" },
    { emoji: "👨‍🍳", text: "Expert Chefs" },
    { emoji: "🌱", text: "Seasonal Specials" },
    { emoji: "💝", text: "Made with Love" }
  ];

  // Create seamless loop by duplicating array once
  const duplicatedItems = [...trackingItems, ...trackingItems];

  return (
    <div className="bg-stone-100 py-4 overflow-hidden">
      <div className="marquee__wrapper track">
        <div className="marquee__content">
          {duplicatedItems.map((item, index) => (
            <div key={index} className="marquee__item">
              <span className="text-2xl mr-2">{item.emoji}</span>
              <span className="text-stone-700 font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
