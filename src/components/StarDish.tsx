interface StarDishProps {
  emoji: string;
  name: string;
  review: string;
  className?: string;
}

export default function StarDish({ emoji, name, review, className = '' }: StarDishProps) {
  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-2 gap-12 items-center">
        {/* Left side - Placeholder Cutout */}
        <div className="flex justify-center items-center">
          <img 
            src="/images/placeholders/placeholder-cutout.png" 
            alt="Placeholder cutout"
            className="w-80 h-80 object-contain"
          />
        </div>
        
        {/* Right side - Quote with smaller attribution */}
        <div className="space-y-4">
          <p className="text-3xl md:text-4xl font-semibold text-stone-900 leading-snug">
            &ldquo;The best fried chicken sandwich in manila.&rdquo;
          </p>
          <p className="text-base md:text-lg text-stone-600">
            — Sarah Chen, Some Kinda Magazine
          </p>
        </div>
      </div>
    </div>
  );
}
