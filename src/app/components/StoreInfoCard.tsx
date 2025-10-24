import { useState, useEffect, useCallback } from "react";

interface StoreInfoCardProps {
  location: string;
  hours: {
    [key: string]: string;
  };
  phone: string;
  className?: string;
}

export default function StoreInfoCard({ 
  location, 
  hours, 
  phone, 
  className = "" 
}: StoreInfoCardProps) {
  const [isHoursOpen, setIsHoursOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Function to check if restaurant is currently open
  const checkIfOpen = useCallback(() => {
    try {
      // Check if hours object is valid
      if (!hours || Object.keys(hours).length === 0) {
        setIsOpen(false);
        return;
      }

      const now = new Date();
      const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const currentDay = dayNames[now.getDay()]; // Get full day name
      const currentTime = now.getHours() * 100 + now.getMinutes(); // Convert to HHMM format
      
      // Get today's hours
      const todayHours = hours[currentDay];
      if (!todayHours) {
        setIsOpen(false);
        return;
      }

      // Parse hours like "11am-10pm" or "11 AM–10 PM"
      const timeMatch = todayHours.match(/(\d{1,2})(?::\d{2})?\s*(am|pm)?\s*[-–]\s*(\d{1,2})(?::\d{2})?\s*(am|pm)/i);
      if (!timeMatch) {
        setIsOpen(false);
        return;
      }

      const [, openHour, openPeriod, closeHour, closePeriod] = timeMatch;
      
      // Convert to 24-hour format
      let openTime = parseInt(openHour);
      let closeTime = parseInt(closeHour);
      
      // Handle AM/PM
      if (openPeriod && openPeriod.toLowerCase() === 'pm' && openTime !== 12) {
        openTime += 12;
      } else if (openPeriod && openPeriod.toLowerCase() === 'am' && openTime === 12) {
        openTime = 0;
      }
      
      if (closePeriod && closePeriod.toLowerCase() === 'pm' && closeTime !== 12) {
        closeTime += 12;
      } else if (closePeriod && closePeriod.toLowerCase() === 'am' && closeTime === 12) {
        closeTime = 0;
      }
      
      // Convert to HHMM format
      openTime = openTime * 100;
      closeTime = closeTime * 100;
      
      // Check if current time is within business hours
      const isCurrentlyOpen = currentTime >= openTime && currentTime < closeTime;
      setIsOpen(isCurrentlyOpen);
    } catch (error) {
      console.error('Error checking if restaurant is open:', error);
      setIsOpen(false);
    }
  }, [hours]);

  // Check if open on component mount and every minute
  useEffect(() => {
    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [checkIfOpen]);

  return (
    <div className={`max-w-md ${className}`}>
      {/* Hours Section - Single row with status and dropdown */}
      <div className="py-4 border-b border-gray-200">
        <button 
          onClick={() => setIsHoursOpen(!isHoursOpen)}
          className="flex items-center justify-between w-full text-left"
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className={`font-medium ${isOpen ? 'text-green-600' : 'text-red-600'}`}>
              {isOpen ? 'Open now' : 'Closed'}
            </span>
          </div>
          <svg className={`w-4 h-4 transition-transform ${isHoursOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        {isHoursOpen && (
          <div className="mt-3 space-y-1 text-sm">
            {hours && Object.keys(hours).length > 0 ? (
              Object.entries(hours).map(([day, time]) => (
                <div key={day} className="flex justify-between">
                  <span className="capitalize">{day}</span>
                  <span>{time}</span>
                </div>
              ))
            ) : (
              <div className="text-gray-500">Hours not available</div>
            )}
          </div>
        )}
      </div>

      {/* Location Section */}
      <div className="py-4 border-b border-gray-200">
        <div className="flex items-start gap-2">
          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-sm">{location}</p>
          </div>
        </div>
      </div>

      {/* Phone Section */}
      <div className="py-4">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="text-sm">{phone}</span>
        </div>
      </div>
    </div>
  );
}
