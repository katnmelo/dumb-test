"use client";
import { useState, useEffect, useCallback } from "react";
import { MapPin, Phone, Clock, ChevronDown, ChevronUp } from "lucide-react";

interface StoreInfoCardProps {
  location: string;
  hours: { [key: string]: string };
  phone: string;
}

export default function StoreInfoCard({ location, hours, phone }: StoreInfoCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<"open" | "closed">("closed");
  const [currentTime, setCurrentTime] = useState("");

  // Get current day name
  const getCurrentDay = useCallback(() => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days[new Date().getDay()];
  }, []);

  // Parse time string to 24-hour format
  const parseTime = useCallback((timeStr: string): number => {
    if (!timeStr) return 0;
    
    const [time, period] = timeStr.trim().split(/(am|pm)/i);
    if (!time || !period) return 0;
    
    let [hours, minutes] = time.split(':').map(Number);
    if (isNaN(hours)) hours = 0;
    if (isNaN(minutes)) minutes = 0;
    
    if (period.toLowerCase() === 'pm' && hours !== 12) {
      hours += 12;
    } else if (period.toLowerCase() === 'am' && hours === 12) {
      hours = 0;
    }
    
    return hours * 60 + minutes; // Convert to minutes for easier comparison
  }, []);

  // Check if store is currently open
  const checkStoreStatus = useCallback(() => {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const currentDay = getCurrentDay();
    const todayHours = hours[currentDay];
    
    if (!todayHours || todayHours.toLowerCase().includes('closed')) {
      setCurrentStatus("closed");
      setCurrentTime("Closed today");
      return;
    }

    // Parse opening and closing times
    const timeMatch = todayHours.match(/(\d{1,2}:\d{2}\s*(?:am|pm))\s*-\s*(\d{1,2}:\d{2}\s*(?:am|pm))/i);
    if (!timeMatch) {
      setCurrentStatus("closed");
      setCurrentTime("Hours unavailable");
      return;
    }

    const openTime = parseTime(timeMatch[1]);
    const closeTime = parseTime(timeMatch[2]);

    if (currentMinutes >= openTime && currentMinutes <= closeTime) {
      setCurrentStatus("open");
      setCurrentTime(`Closes at ${timeMatch[2]}`);
    } else {
      setCurrentStatus("closed");
      if (currentMinutes < openTime) {
        setCurrentTime(`Opens at ${timeMatch[1]}`);
      } else {
        setCurrentTime("Closed");
      }
    }
  }, [hours, getCurrentDay, parseTime]);

  // Update status every minute
  useEffect(() => {
    checkStoreStatus();
    const interval = setInterval(checkStoreStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [checkStoreStatus]);

  // Get day names for display
  const dayNames = {
    monday: "Monday",
    tuesday: "Tuesday", 
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday"
  };

  return (
    <div className="space-y-4">
      {/* Status Row */}
      <div className="flex items-center justify-between py-2 border-b border-stone-200">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${currentStatus === 'open' ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className="text-sm font-medium text-stone-900">
            {currentStatus === 'open' ? 'Open now' : 'Closed'}
          </span>
        </div>
        <span className="text-sm text-stone-600">{currentTime}</span>
      </div>

      {/* Location Row */}
      <div className="flex items-start gap-3 py-2 border-b border-stone-200">
        <MapPin className="h-5 w-5 text-stone-500 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm font-medium text-stone-900">Location</p>
          <p className="text-sm text-stone-600">{location}</p>
        </div>
      </div>

      {/* Phone Row */}
      <div className="flex items-center gap-3 py-2 border-b border-stone-200">
        <Phone className="h-5 w-5 text-stone-500 flex-shrink-0" />
        <div>
          <p className="text-sm font-medium text-stone-900">Phone</p>
          <a 
            href={`tel:${phone}`}
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            {phone}
          </a>
        </div>
      </div>

      {/* Hours Row */}
      <div className="py-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left"
        >
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-stone-500 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-stone-900">Hours</p>
              <p className="text-sm text-stone-600">
                {hours[getCurrentDay()] || "Hours unavailable"}
              </p>
            </div>
          </div>
          {isOpen ? (
            <ChevronUp className="h-4 w-4 text-stone-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-stone-500" />
          )}
        </button>
        
        {/* Collapsible Hours */}
        {isOpen && (
          <div className="mt-3 ml-8 space-y-2">
            {Object.entries(dayNames).map(([key, dayName]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-stone-600">{dayName}</span>
                <span className="text-stone-900">
                  {hours[key] || "Closed"}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
